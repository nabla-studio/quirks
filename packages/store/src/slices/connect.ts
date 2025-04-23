import {
  type SuggestChain,
  createInvalidWalletName,
  type WCWallet,
  openWCDeeplink,
  createInvalidWallet,
} from '@quirks/core';
import {
  ConnectionStates,
  type AppState,
  type ConnectSlice,
  type AddressWithChain,
  type ConnectState,
  SetupStates,
} from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const connectInitialState: ConnectState = {
  walletName: undefined,
  wallet: undefined,
  status: ConnectionStates.DISCONNECTED,
  setupStatus: SetupStates.DEINITIALIZED,
  connectionError: undefined,
  connectedChains: undefined,
  connecting: false,
  options: {
    autoSuggestions: true,
    autoAccountChange: true,
  },
};

export const createConnectSlice: StateCreator<
  AppState,
  [],
  [],
  ConnectSlice
> = (set, get) => ({
  ...connectInitialState,
  setConnectedChains: (chainIds) => {
    set(() => ({ connectedChains: chainIds }));
  },
  enable: async (props) => {
    const wallet = props?.wallet ?? get().wallet;
    const chainIds = props?.chainIds;

    if (!wallet) {
      throw createInvalidWallet();
    }

    if (get().options.autoSuggestions) {
      await get().suggestChains(wallet?.options.wallet_name);
    }

    const chains = chainIds
      ? get().chains
      : (get().enabledChains ?? get().chains);

    const ids = chains.map((el) => el.chain_id);

    await wallet.enable(ids);

    get().setConnectedChains(ids);

    await get().setWallet(wallet);
  },
  setWallet: async (wallet) => {
    set(() => ({ wallet, setupStatus: SetupStates.DEINITIALIZED }));

    if (wallet) {
      get().wallet?.addListeners();

      if (get().options.autoAccountChange) {
        get().wallet?.events.on('keystorechange', () => {
          get().getWalletData();
        });
      }

      get().wallet?.events.on('session_delete', () => {
        get().disconnect();
      });

      get().wallet?.events.on('session_expire', () => {
        get().disconnect();
      });

      set(() => ({ setupStatus: SetupStates.INITIALIZED }));

      await get().getWalletData();
    }
  },
  getWalletData: async () => {
    const wallet = get().wallet;

    if (wallet) {
      const connectedChains = get().connectedChains;
      const chains = !connectedChains
        ? get().chains
        : get().chains.filter((chain) =>
            connectedChains.includes(chain.chain_id),
          );

      const accounts: AddressWithChain[] = [];
      let accountName = '';

      for (const chain of chains) {
        const account = await wallet.getAccount(chain.chain_id);

        if (account) {
          accountName = account.name;

          accounts.push({
            ...account,
            chainId: chain.chain_id,
            chainName: chain.chain_name,
          });
        }
      }

      set({
        accountName,
        accounts,
      });
    }
  },
  suggestChains: async (walletName) => {
    const wallet = get().wallets.find(
      (el) => el.options.wallet_name === walletName,
    );

    if (wallet) {
      const enabledChains = get().enabledChains ?? get().chains;

      const chains: SuggestChain[] = enabledChains.map((chain) => ({
        chain,
        name: chain.chain_name,
        assetList: get().assetsLists.find(
          (list) => list.chain_name === chain.chain_name,
        )!,
      }));

      return wallet.suggestChains(chains);
    }
  },
  connect: async (walletName) => {
    try {
      const wallet = get().wallets.find(
        (el) => el.options.wallet_name === walletName,
      );

      if (!wallet) {
        throw createInvalidWalletName(walletName);
      }

      set(() => ({
        walletName,
        status: ConnectionStates.DISCONNECTED,
        connecting: true,
      }));

      if (wallet.options.connection_type === 'wallet_connect') {
        set({
          pairingURI: undefined,
        });

        await wallet.init(get().providerOpts);

        const wcWallet = wallet as WCWallet;

        wcWallet.events.on('display_uri', (uri) => {
          set({
            pairingURI: uri,
          });

          openWCDeeplink(
            wcWallet,
            get().openDeeplink,
            wcWallet.pairingDeeplinks,
          );
        });

        await wcWallet.generateURI({
          namespaces: get().namespaces,
        });
      }

      await get().enable({ wallet });
      set(() => ({ status: ConnectionStates.CONNECTED }));
    } catch (error) {
      const connectionError =
        error instanceof Error
          ? error
          : new Error(error === 'string' ? error : JSON.stringify(error));

      set(() => ({
        connectionError,
        status: ConnectionStates.REJECTED,
      }));

      throw connectionError;
    } finally {
      set(() => ({ connecting: false }));
    }
  },
  reconnect: async (walletName) => {
    try {
      const wallet = get().wallets.find(
        (el) => el.options.wallet_name === walletName,
      );

      if (!wallet) {
        throw createInvalidWalletName(walletName);
      }

      const metadata =
        wallet.options.connection_type === 'wallet_connect'
          ? get().providerOpts
          : undefined;

      await wallet.init(metadata);

      set(() => ({ connecting: true }));

      await get().enable({ wallet });
    } catch (error) {
      console.error(error);

      get().disconnect();

      throw error;
    } finally {
      set(() => ({ connecting: false }));
    }
  },
  disconnect: () => {
    get().wallet?.disable(get().chains.map((el) => el.chain_id));

    get().wallet?.removeListeners();

    get().reset();
  },
});

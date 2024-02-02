import {
  type SuggestChain,
  assertIsDefined,
  createInvalidWalletName,
  WalletConnectionTypes,
  type WCWallet,
  openWCDeeplink,
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
      try {
        const accounts: AddressWithChain[] = [];
        let accountName = '';

        for (const chain of get().chains) {
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
      } catch (error) {
        console.error(error);
      }
    }
  },
  suggestChains: async (walletName) => {
    const wallet = get().wallets.find(
      (el) => el.options.wallet_name === walletName,
    );

    if (wallet) {
      const chains: SuggestChain[] = get().chains.map((chain) => ({
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

      set(() => ({ walletName, connecting: true }));

      if (
        wallet.options.connectionType === WalletConnectionTypes.WALLET_CONNECT
      ) {
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

      if (get().options.autoSuggestions) {
        await get().suggestChains(walletName);
      }

      await wallet.enable(get().chains.map((el) => el.chain_id));

      await get().setWallet(wallet);
      set(() => ({ status: ConnectionStates.CONNECTED }));
    } catch (error) {
      console.error(error);

      set(() => ({
        walletName: undefined,
        status: ConnectionStates.REJECTED,
      }));
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
        wallet.options.connectionType === WalletConnectionTypes.WALLET_CONNECT
          ? get().providerOpts
          : undefined;

      await wallet.init(metadata);

      set(() => ({ connecting: true }));

      if (get().options.autoSuggestions) {
        await get().suggestChains(walletName);
      }

      await wallet.enable(get().chains.map((el) => el.chain_id));

      await get().setWallet(wallet);
    } catch (error) {
      console.error(error);

      get().disconnect();
    } finally {
      set(() => ({ connecting: false }));
    }
  },
  disconnect: () => {
    assertIsDefined(
      get().wallet,
      'You must first connect a wallet to disconnect it',
    );

    get().wallet?.disable(get().chains.map((el) => el.chain_id));

    get().wallet?.removeListeners();

    get().reset();
  },
});

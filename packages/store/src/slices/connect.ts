import { assertIsDefined, createInvalidWalletName } from '@quirks/core';
import {
  ConnectionStates,
  type AppState,
  type ConnectState,
  AddressWithChain,
} from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const createConnectSlice: StateCreator<
  AppState,
  [],
  [],
  ConnectState
> = (set, get) => ({
  walletName: undefined,
  wallet: undefined,
  status: 'DISCONNECTED',
  setWallet: async (wallet) => {
    set(() => ({ wallet }));

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
  connect: async (walletName) => {
    try {
      const wallet = get().wallets.find((el) => el.options.name === walletName);

      if (!wallet) {
        throw createInvalidWalletName(walletName);
      }

      set(() => ({ walletName, status: ConnectionStates.WAITING }));

      await wallet.enable(get().chains.map((el) => el.chain_id));

      set(() => ({ status: ConnectionStates.CONNECTED }));

      get().setWallet(wallet);
    } catch (error) {
      console.error(error);

      set(() => ({
        walletName: undefined,
        status: ConnectionStates.REJECTED,
      }));
    }
  },
  disconnect: () => {
    assertIsDefined(
      get().wallet,
      'You must first connect a wallet to disconnect it',
    );

    get().wallet?.disable(get().chains.map((el) => el.chain_id));

    set(() => ({
      walletName: undefined,
      status: ConnectionStates.DISCONNECTED,
    }));
  },
});

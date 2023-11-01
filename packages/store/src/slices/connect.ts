import { assertIsDefined, createInvalidWalletName } from '@quirks/core';
import { ConnectionStates, type AppState, type ConnectState } from '../types';
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
  setWallet: (wallet) => set(() => ({ wallet })),
  connect: async (walletName) => {
    try {
      const wallet = get().wallets.find((el) => el.options.name === walletName);

      if (!wallet) {
        throw createInvalidWalletName(walletName);
      }

      set(() => ({ walletName, wallet, status: ConnectionStates.WAITING }));

      await wallet.enable(get().chains.map((el) => el.chain_id));

      set(() => ({ status: ConnectionStates.CONNECTED }));
    } catch (error) {
      console.error(error);
      set(() => ({
        walletName: undefined,
        wallet: undefined,
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

    set(() => ({ wallet: undefined, status: ConnectionStates.DISCONNECTED }));
  },
});

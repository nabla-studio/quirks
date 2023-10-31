import { createInvalidWalletName } from '@quirks/core';
import { ConnectionStates, type AppState, type ConnectState } from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const createConnectSlice: StateCreator<
  AppState,
  [],
  [],
  ConnectState
> = (set, get) => ({
  wallet: undefined,
  status: 'DISCONNECTED',
  setWallet: (wallet) => set(() => ({ wallet })),
  connect: async (walletName) => {
    try {
      const wallet = get().wallets.find((el) => el.options.name === walletName);

      if (!wallet) {
        throw createInvalidWalletName(walletName);
      }

      set(() => ({ wallet, status: ConnectionStates.WAITING }));

      await wallet.enable(get().chains.map((el) => el.chain_id));

      set(() => ({ status: ConnectionStates.CONNECTED }));
    } catch {
      set(() => ({ wallet: undefined, status: ConnectionStates.REJECTED }));
    }
  },
});

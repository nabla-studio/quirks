import type { AppState, AccountState } from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const createAccountSlice: StateCreator<
  AppState,
  [],
  [],
  AccountState
> = (set) => ({
  accountName: undefined,
  address: undefined,
  chainId: undefined,
  getAccount: (chainId) => set({ chainId }),
});

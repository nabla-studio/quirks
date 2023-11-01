import type { AppState, AccountState } from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const createAccountSlice: StateCreator<
  AppState,
  [],
  [],
  AccountState
> = (_, get) => ({
  accountName: undefined,
  accounts: [],
  getAddress: (chainId) =>
    get().accounts.find((account) => account.chainId === chainId)
      ?.bech32Address,
  getAddresses: (chainIds) =>
    get()
      .accounts.filter((account) => chainIds.includes(account.chainId))
      .map((account) => account.bech32Address),
});

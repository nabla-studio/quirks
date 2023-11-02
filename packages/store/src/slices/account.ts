import type { AppState, AccountSlice, AccountState } from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const accountInitialState: AccountState = {
  accountName: undefined,
  accounts: [],
};

export const createAccountSlice: StateCreator<
  AppState,
  [],
  [],
  AccountSlice
> = (_, get) => ({
  ...accountInitialState,
  getAddress: (chainId) =>
    get().accounts.find((account) => account.chainId === chainId)
      ?.bech32Address,
  getAddresses: (chainIds) =>
    get()
      .accounts.filter((account) => chainIds.includes(account.chainId))
      .map((account) => account.bech32Address),
});

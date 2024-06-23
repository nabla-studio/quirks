import { type AppState, ConnectionStates } from '@quirks/store';
import { parse } from 'superjson';
import { getCrossCookie } from './utils';
import type { StorageValue } from 'zustand/middleware';
import type { OptionsType } from 'cookies-next/lib/types';
import { defaultCookiesOptions } from './options';

export interface StateOptions {
  name: string;
  cookiesOptions: OptionsType;
}

export const defaultStateOptions: StateOptions = {
  name: 'quirks',
  cookiesOptions: defaultCookiesOptions,
};

export const getState = (options = defaultStateOptions) => {
  const { name, cookiesOptions } = options;
  const state = getCrossCookie(name, cookiesOptions);

  if (state) {
    return parse(state) as StorageValue<AppState>;
  }

  return undefined;
};

export const getConnect = (options = defaultStateOptions) => {
  const state = getState(options)?.state;

  return {
    status: state?.status,
    setupStatus: state?.setupStatus,
    connected: state?.status === ConnectionStates.CONNECTED,
    connecting: state?.connecting,
    connectionError: state?.connectionError,
    disconnected: state?.status === ConnectionStates.DISCONNECTED,
    rejected: state?.status === ConnectionStates.REJECTED,
    walletName: state?.walletName,
  };
};

export const getChains = (options = defaultStateOptions) => {
  const state = getState(options)?.state;

  const accounts = state?.accounts ?? [];

  return {
    accounts,
    accountName: state?.accountName,
    getAddress: (chainId: string) =>
      accounts.find((account) => account.chainId === chainId)?.bech32Address,
    getAddresses: (chainIds: string[]) =>
      accounts
        .filter((account) => chainIds.includes(account.chainId))
        .map((account) => account.bech32Address),
  };
};

export const getChain = (chainName: string, options = defaultStateOptions) => {
  const state = getState(options)?.state;

  const accounts = state?.accounts ?? [];

  return {
    address: accounts.find((account) => account.chainName === chainName)
      ?.bech32Address,
    accountName: state?.accountName,
  };
};

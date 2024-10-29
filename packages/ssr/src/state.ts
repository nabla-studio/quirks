import { type AppState, ConnectionStates } from '@quirks/store';
import { parse } from 'superjson';
import type { StorageValue } from 'zustand/middleware';
import { defaultCookiesOptions } from './options';
import { type CookieAttributes } from 'js-cookie';

export interface StateOptions {
  name: string;
  cookiesOptions: CookieAttributes;
}

export const defaultStateOptions: StateOptions = {
  name: 'quirks',
  cookiesOptions: defaultCookiesOptions,
};

export const getState = (rawState: string) => {
  return parse(rawState) as StorageValue<AppState>;
};

export const getConnect = (rawState: string) => {
  const state = getState(rawState)?.state;

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

export const getChains = (rawState: string) => {
  const state = getState(rawState)?.state;

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

export const getChain = (rawState: string, chainName: string) => {
  const state = getState(rawState)?.state;

  const accounts = state?.accounts ?? [];

  return {
    address: accounts.find((account) => account.chainName === chainName)
      ?.bech32Address,
    accountName: state?.accountName,
  };
};

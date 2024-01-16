import { openDeeplink } from '@quirks/core';
import type {
  AppState,
  WalletConnectSlice,
  WalletConnectState,
} from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const walletConnectInitialState: WalletConnectState = {
  openDeeplink,
  pairingURI: undefined,
  providerOpts: undefined,
  namespaces: {
    cosmos: {
      methods: ['cosmos_getAccounts', 'cosmos_signDirect', 'cosmos_signAmino'],
      chains: [],
      events: ['chainChanged', 'accountsChanged'],
    },
  },
};

export const createWalletConnectSlice: StateCreator<
  AppState,
  [],
  [],
  WalletConnectSlice
> = () => ({
  ...walletConnectInitialState,
});

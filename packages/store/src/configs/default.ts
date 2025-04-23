import type { AppState, PersistOptions } from '../types';
import { createJSONStorage } from 'zustand/middleware';

export const excludedKeys: (keyof AppState)[] = [
  'wallet',
  'wallets',
  'chains',
  'enabledChains',
  'assetsLists',
  'setupStatus',
  'providerOpts',
  'chains',
  'assetsLists',
  'pairingURI',
  'namespaces',
  'signOptions',
  'signerOptions',
  'openDeeplink',
  'connecting',
  'connectionError',
];

export const defaultPersistOptions: PersistOptions<AppState> = {
  version: 1,
  name: 'quirks',
  storage: createJSONStorage(() => window.localStorage),
  partialize: (state) =>
    Object.fromEntries(
      Object.entries(state).filter(
        ([key]) => !excludedKeys.includes(key as keyof AppState),
      ),
    ) as AppState,
};

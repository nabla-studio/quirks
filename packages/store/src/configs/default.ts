import type { AppState } from '../types';
import { createJSONStorage, type PersistOptions } from 'zustand/middleware';

export const excludedKeys: (keyof AppState)[] = [
  'wallet',
  'wallets',
  'chains',
  'assetsLists',
  'setupStatus',
  'providerOpts',
  'chains',
  'assetsLists',
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

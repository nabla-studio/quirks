import type { AppState } from '../types';
import { createJSONStorage, type PersistOptions } from 'zustand/middleware';
import { defaultPersistOptions } from './default';
import { createSSRStorage, noopStorage } from '../utils';

export const ssrPersistOptions: PersistOptions<AppState> = {
  ...defaultPersistOptions,
  storage: createJSONStorage(() => createSSRStorage('localStorage')),
  skipHydration: true,
};

export const emptyPersistOptions: PersistOptions<AppState> = {
  ...defaultPersistOptions,
  storage: createJSONStorage(() => noopStorage),
};

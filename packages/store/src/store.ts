import { type PersistOptions, createJSONStorage } from 'zustand/middleware';
import { type ConfigState } from './slices';
import { createSSRStorage } from './utils';

export type AppState = ConfigState;

/* const excludedKeys = []; */

export interface Config {
  /**
   * State manager persister
   */
  persist?: PersistOptions<AppState>;
}

export const createConfig = (config: Config) => {
  const {
    persist = {
      version: 1,
      name: 'quirks',
      storage: createJSONStorage(() => createSSRStorage('localStorage')),
    },
  } = config;

  return persist;
};

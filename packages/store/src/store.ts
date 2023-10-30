import {
  type PersistOptions,
  createJSONStorage,
  subscribeWithSelector,
  persist as persistMiddleware,
} from 'zustand/middleware';
import { type ConfigState, createConfigSlice } from './slices';
import { createSSRStorage } from './utils';
import { createStore } from 'zustand/vanilla';

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

  const store = createStore(
    subscribeWithSelector(
      persistMiddleware(
        (...props) => ({
          ...createConfigSlice(...props),
        }),
        persist,
      ),
    ),
  );

  return {
    store,
  };
};

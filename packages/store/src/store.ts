import {
  type PersistOptions,
  createJSONStorage,
  subscribeWithSelector,
  persist as persistMiddleware,
} from 'zustand/middleware';
import { type ConfigState, createConfigSlice } from './slices';
import { createSSRStorage } from './utils';
import { createStore } from 'zustand/vanilla';
import { Wallet } from '@quirks/core';
import { AssetLists, Chain } from '@nabla-studio/chain-registry';

export type AppState = ConfigState;

export interface Config {
  wallets: Wallet[];
  chains: Chain[];
  assetsLists: AssetLists[];
  /**
   * State manager persister
   */
  persist?: PersistOptions<AppState>;
}

export const createConfig = (config: Config) => {
  const {
    wallets,
    chains,
    assetsLists,
    persist = {
      version: 1,
      name: 'quirks',
      storage: createJSONStorage(() => createSSRStorage('localStorage')),
    },
  } = config;

  const configState = {
    wallets,
    chains,
    assetsLists,
  };

  console.log(configState);

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

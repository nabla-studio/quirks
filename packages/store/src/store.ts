import {
  type PersistOptions,
  createJSONStorage,
  subscribeWithSelector,
  persist,
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
  persistOptions?: PersistOptions<AppState>;
  /**
   * Reinit connection on mount
   */
  autoConnect?: boolean;
}

export const defaultPersistOptions: PersistOptions<AppState> = {
  version: 1,
  name: 'quirks',
  storage: createJSONStorage(() => createSSRStorage('localStorage')),
};

export const createConfig = (config: Config) => {
  const {
    wallets,
    chains,
    assetsLists,
    persistOptions = defaultPersistOptions,
  } = config;

  const configState = {
    wallets,
    chains,
    assetsLists,
  };

  const store = createStore(
    subscribeWithSelector(
      persist(
        (...props) => ({
          ...createConfigSlice(...props),
          ...configState,
        }),
        persistOptions,
      ),
    ),
  );

  return store;
};

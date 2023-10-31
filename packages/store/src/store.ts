import {
  type PersistOptions,
  createJSONStorage,
  subscribeWithSelector,
  persist,
} from 'zustand/middleware';
import { createConfigSlice, createConnectSlice } from './slices';
import { createSSRStorage } from './utils';
import { createStore } from 'zustand/vanilla';
import type { Wallet } from '@quirks/core';
import type { AssetLists, Chain } from '@nabla-studio/chain-registry';
import type { AppState } from './types';

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

const excludedKeys: (keyof AppState)[] = ['wallet', 'wallets'];

export const defaultPersistOptions: PersistOptions<AppState> = {
  version: 1,
  name: 'quirks',
  storage: createJSONStorage(() => createSSRStorage('localStorage')),
  partialize: (state) =>
    Object.fromEntries(
      Object.entries(state).filter(
        ([key]) => !excludedKeys.includes(key as keyof AppState),
      ),
    ) as AppState,
};

export const createConfig = (config: Config) => {
  const {
    wallets,
    chains,
    assetsLists,
    persistOptions = defaultPersistOptions,
  } = config;

  const store = createStore(
    subscribeWithSelector(
      persist(
        (...props) => ({
          ...createConfigSlice(...props),
          wallets,
          chains,
          assetsLists,
          ...createConnectSlice(...props),
        }),
        persistOptions,
      ),
    ),
  );

  /**
   * We should inject wallet when walletName, is necessary because 'Wallet' is a class,
   * when it is serialized it loses methods, so we could not call wallet functionality.
   */
  store.subscribe(
    (state) => state.walletName,
    (walletName) => {
      if (walletName) {
        const wallet = store
          .getState()
          .wallets.find((el) => el.options.name === walletName);

        store.setState({
          wallet,
        });
      }
    },
    {
      fireImmediately: true,
    },
  );

  return store;
};

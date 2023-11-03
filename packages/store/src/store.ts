import {
  type PersistOptions,
  createJSONStorage,
  subscribeWithSelector,
  persist,
} from 'zustand/middleware';
import {
  configInitialState,
  createConfigSlice,
  connectInitialState,
  createConnectSlice,
  accountInitialState,
  createAccountSlice,
  signInitialState,
  createSignSlice,
} from './slices';
import { createSSRStorage } from './utils';
import { createStore } from 'zustand/vanilla';
import type { SignOptions, Wallet } from '@quirks/core';
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
   *
   * @default true
   */
  autoConnect?: boolean;
  /**
   * Specify custom sign option
   *
   * @default
   *
   * {
   *  preferNoSetFee: false,
   *  preferNoSetMemo: true,
   *  disableBalanceCheck: true,
   * }
   */
  signOptions?: SignOptions;
}

const excludedKeys: (keyof AppState)[] = [
  'wallet',
  'wallets',
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

export const ssrPersistOptions: PersistOptions<AppState> = {
  ...defaultPersistOptions,
  storage: createJSONStorage(() => createSSRStorage('localStorage')),
  skipHydration: true,
};

export const createConfig = (config: Config) => {
  const {
    wallets,
    chains,
    assetsLists,
    autoConnect = true,
    persistOptions = defaultPersistOptions,
    signOptions,
  } = config;

  const signOverrideOptions = signOptions
    ? signOptions
    : signInitialState.signOptions;

  const signOverrideInitialState = {
    ...signInitialState,
    signOptions: signOverrideOptions,
  };

  const store = createStore(
    subscribeWithSelector(
      persist(
        (...props) => ({
          ...createConfigSlice(...props),
          wallets,
          chains,
          assetsLists,
          ...createConnectSlice(...props),
          ...createAccountSlice(...props),
          ...createSignSlice(...props),
          signOverrideOptions,
          reset: () => {
            props[0]({
              ...configInitialState,
              ...connectInitialState,
              ...accountInitialState,
              ...signOverrideInitialState,
              wallets,
              chains,
              assetsLists,
            });
          },
        }),
        persistOptions,
      ),
    ),
  );

  /**
   * We should inject wallet when walletName, is necessary because 'Wallet' is a class,
   * when it is serialized it loses methods, so we could not call wallet functionality.
   */
  const unsub = store.persist.onFinishHydration((state) => {
    if (state.walletName && !state.wallet && autoConnect) {
      store.getState().reconnect(state.walletName);

      /**
       * Do once, cleanup onFinishHydration to avoid useless event subscription.
       */
      unsub();
    }
  });

  return store;
};

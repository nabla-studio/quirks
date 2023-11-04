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
import { createSSRStorage, noopStorage } from './utils';
import { createStore } from 'zustand/vanilla';
import type { AppState, Config } from './types';

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

const emptyPersistOptions: PersistOptions<AppState> = {
  ...defaultPersistOptions,
  storage: createJSONStorage(() => noopStorage),
};

export let store = createStore(
  subscribeWithSelector(
    persist(
      (...props) => ({
        ...createConfigSlice(...props),
        ...createConnectSlice(...props),
        ...createAccountSlice(...props),
        ...createSignSlice(...props),
        reset: () => {
          props[0]({
            ...configInitialState,
            ...connectInitialState,
            ...accountInitialState,
          });
        },
      }),
      emptyPersistOptions,
    ),
  ),
);

export const createConfig = (config: Config) => {
  const {
    wallets,
    chains,
    assetsLists,
    autoConnect = true,
    persistOptions = defaultPersistOptions,
    signOptions,
    signerOptions,
  } = config;

  const signOverrideOptions = signOptions
    ? signOptions
    : signInitialState.signOptions;

  const signOverrideInitialState = {
    ...signInitialState,
    signOptions: signOverrideOptions,
    signerOptions,
  };

  store = createStore(
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
          ...signOverrideInitialState,
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

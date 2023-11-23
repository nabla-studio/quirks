import { subscribeWithSelector, persist } from 'zustand/middleware';
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
import { createStore } from 'zustand/vanilla';
import type { Config } from './types';
import { defaultPersistOptions, emptyPersistOptions } from './configs';

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
    autoSuggestions = true,
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

  const connectOverrideInitialState = {
    ...connectInitialState,
    options: {
      ...connectInitialState.options,
      autoSuggestions,
    },
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
          ...connectOverrideInitialState,
          ...createSignSlice(...props),
          ...signOverrideInitialState,
          reset: () => {
            props[0]({
              ...configInitialState,
              ...connectOverrideInitialState,
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
  const unsub = store.persist?.onFinishHydration((state) => {
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

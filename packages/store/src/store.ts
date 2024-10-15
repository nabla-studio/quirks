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
  walletConnectInitialState,
  createWalletConnectSlice,
} from './slices';
import { createStore } from 'zustand/vanilla';
import type { Config, WalletConnectState } from './types';
import { defaultPersistOptions, emptyPersistOptions } from './configs';
import { shared, defaultSharedOptions } from './middlewares';

export let store = createStore(
  subscribeWithSelector(
    persist(
      shared((...props) => ({
        ...createConfigSlice(...props),
        ...createConnectSlice(...props),
        ...createAccountSlice(...props),
        ...createSignSlice(...props),
        ...createWalletConnectSlice(...props),
        reset: () => {
          props[0]({
            ...configInitialState,
            ...connectInitialState,
            ...accountInitialState,
            ...walletConnectInitialState,
          });
        },
      })),
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
    autoAccountChange = true,
    persistOptions = defaultPersistOptions,
    sharedOptions = defaultSharedOptions,
    walletConnectOptions,
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
      autoAccountChange,
    },
  };

  const overridedNamespaces = walletConnectInitialState.namespaces;

  const cosmosChainIds = chains.map((chain) => `cosmos:${chain.chain_id}`);

  if (walletConnectOptions?.namespaces) {
    overridedNamespaces.cosmos = {
      ...walletConnectOptions.namespaces.cosmos,
      chains: cosmosChainIds,
      events: [
        ...overridedNamespaces.cosmos.events,
        ...walletConnectOptions.namespaces.cosmos.events,
      ],
      methods: [
        ...overridedNamespaces.cosmos.methods,
        ...walletConnectOptions.namespaces.cosmos.methods,
      ],
    };
  } else {
    overridedNamespaces.cosmos = {
      ...overridedNamespaces.cosmos,
      chains: cosmosChainIds,
    };
  }

  const walletConnectOverrideInitialState: WalletConnectState = {
    ...walletConnectInitialState,
    ...walletConnectOptions,
    namespaces: overridedNamespaces,
  };

  const persistInitialState = persistOptions.getInitialState?.();

  store = createStore(
    subscribeWithSelector(
      persist(
        shared(
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
            ...createWalletConnectSlice(...props),
            ...walletConnectOverrideInitialState,
            reset: () => {
              props[0]({
                ...configInitialState,
                ...connectOverrideInitialState,
                ...accountInitialState,
                ...signOverrideInitialState,
                ...walletConnectOverrideInitialState,
                wallets,
                chains,
                assetsLists,
              });
            },
            ...persistInitialState,
          }),
          {
            ...defaultSharedOptions,
            ...sharedOptions,
          },
        ),
        persistOptions,
      ),
    ),
  );

  /**
   * We should inject wallet when walletName, is necessary because 'Wallet' is a class,
   * when it is serialized it loses methods, so we could not call wallet functionality.
   */
  if (!store.persist.getOptions().skipHydration) {
    const state = store.getState();

    if (
      state.walletName &&
      state.status === 'CONNECTED' &&
      !state.wallet &&
      autoConnect
    ) {
      store.getState().reconnect(state.walletName);
    }
  } else {
    const unsub = store.persist?.onFinishHydration((state) => {
      if (
        state.walletName &&
        state.status === 'CONNECTED' &&
        !state.wallet &&
        autoConnect
      ) {
        store.getState().reconnect(state.walletName);

        /**
         * Do once, cleanup onFinishHydration to avoid useless event subscription.
         */
        unsub();
      }
    });
  }

  return store;
};

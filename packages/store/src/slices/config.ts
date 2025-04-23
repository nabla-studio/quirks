import type { ConfigSlice, AppState, ConfigState } from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const configInitialState: ConfigState = {
  wallets: [],
  chains: [],
  assetsLists: [],
  enabledChains: undefined,
};

export const createConfigSlice: StateCreator<AppState, [], [], ConfigSlice> = (
  set,
  get,
) => ({
  ...configInitialState,
  setChains: (chains) => set(() => ({ chains })),
  setEnabledChains: (enabledChains) => set(() => ({ enabledChains })),
  setAssetsLists: (assetsLists) => set(() => ({ assetsLists })),
  setWallets: (wallets) => set(() => ({ wallets })),
  getChain: (chainName) =>
    get().chains.find((chain) => chain.chain_name === chainName),
});

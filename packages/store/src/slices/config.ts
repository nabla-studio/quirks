import type { ConfigState, AppState } from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const createConfigSlice: StateCreator<AppState, [], [], ConfigState> = (
  set,
  get,
) => ({
  wallets: [],
  chains: [],
  assetsLists: [],
  setChains: (chains) => set(() => ({ chains })),
  setAssetsLists: (assetsLists) => set(() => ({ assetsLists })),
  setWallets: (wallets) => set(() => ({ wallets })),
  getChain: (chainName) =>
    get().chains.find((chain) => chain.chain_name === chainName),
});

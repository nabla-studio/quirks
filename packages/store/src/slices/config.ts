import { AssetLists, Chain } from '@nabla-studio/chain-registry';
import { StateCreator } from 'zustand/vanilla';

export interface ConfigState {
  chains: Chain[];
  assetsLists: AssetLists[];
  setChains: (chains: Chain[]) => void;
  setAssetsLists: (assetsLists: AssetLists[]) => void;
}

export const createConfigSlice: StateCreator<
  ConfigState,
  [],
  [],
  ConfigState
> = (set) => ({
  chains: [],
  assetsLists: [],
  setChains: (chains) => set(() => ({ chains })),
  setAssetsLists: (assetsLists) => set(() => ({ assetsLists })),
});

import { AssetLists, Chain } from '@nabla-studio/chain-registry';
import { Wallet } from '@quirks/core';
import { StateCreator } from 'zustand/vanilla';

export interface ConfigState {
  wallets: Wallet[];
  chains: Chain[];
  assetsLists: AssetLists[];
  setChains: (chains: Chain[]) => void;
  setAssetsLists: (assetsLists: AssetLists[]) => void;
  setWallets: (wallets: Wallet[]) => void;
}

export const createConfigSlice: StateCreator<
  ConfigState,
  [],
  [],
  ConfigState
> = (set) => ({
  wallets: [],
  chains: [],
  assetsLists: [],
  setChains: (chains) => set(() => ({ chains })),
  setAssetsLists: (assetsLists) => set(() => ({ assetsLists })),
  setWallets: (wallets) => set(() => ({ wallets })),
});

import type { AssetList, Chain } from '@nabla-studio/chain-registry';
import type { Wallet } from '@quirks/core';

export interface ConfigState {
  wallets: Wallet[];
  chains: Chain[];
  assetsLists: AssetList[];
}

export interface ConfigActions {
  getChain: (chainName: string) => Chain | undefined;
  setChains: (chains: Chain[]) => void;
  setAssetsLists: (assetsLists: AssetList[]) => void;
  setWallets: (wallets: Wallet[]) => void;
}

export type ConfigSlice = ConfigState & ConfigActions;

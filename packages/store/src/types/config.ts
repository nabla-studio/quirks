import type { AssetList, Chain } from '@chain-registry/types';
import type { Wallet } from '@quirks/core';

export interface ConfigState {
  wallets: Wallet[];
  chains: Chain[];
  assetsLists: AssetList[];
  enabledChains: Chain[] | undefined;
}

export interface ConfigActions {
  getChain: (chainName: string) => Chain | undefined;
  setChains: (chains: Chain[]) => void;
  setEnabledChains: (enabledChains: Chain[]) => void;
  setAssetsLists: (assetsLists: AssetList[]) => void;
  setWallets: (wallets: Wallet[]) => void;
}

export type ConfigSlice = ConfigState & ConfigActions;

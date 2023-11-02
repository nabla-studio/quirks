import type { AssetLists, Chain } from '@nabla-studio/chain-registry';
import type { Wallet } from '@quirks/core';

export interface ConfigState {
  wallets: Wallet[];
  chains: Chain[];
  assetsLists: AssetLists[];
  getChain: (chainName: string) => Chain | undefined;
  setChains: (chains: Chain[]) => void;
  setAssetsLists: (assetsLists: AssetLists[]) => void;
  setWallets: (wallets: Wallet[]) => void;
}

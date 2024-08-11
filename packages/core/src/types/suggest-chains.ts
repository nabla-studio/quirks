import type { AssetList, Chain } from '@chain-registry/types';

export interface SuggestChain {
  name: string;
  chain: Chain;
  assetList: AssetList;
}

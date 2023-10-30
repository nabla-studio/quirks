import { AssetLists, Chain } from '@nabla-studio/chain-registry';

export interface SuggestChain {
  name: string;
  chain: Chain;
  assetList?: AssetLists;
}

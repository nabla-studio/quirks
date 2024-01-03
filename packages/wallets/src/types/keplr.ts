import type { Chain } from '@nabla-studio/chain-registry';

export interface ChainInfoOptions {
  getRpcEndpoint: (chain: Chain) => string;
  getRestEndpoint: (chain: Chain) => string;
  getExplorer: (chain: Chain) => string;
}

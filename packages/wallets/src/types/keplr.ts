import type { Chain } from '@chain-registry/types';

export interface ChainInfoOptions {
  getRpcEndpoint?: (chain: Chain) => string;
  getRestEndpoint?: (chain: Chain) => string;
  getExplorer?: (chain: Chain) => string;
}

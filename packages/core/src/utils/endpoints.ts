import type { Chain } from '@chain-registry/types';
import { assertIsDefined } from './asserts';

export function getEndpoint(
  chainName: string,
  chains: Chain[],
): {
  rpc: {
    address: string;
    provider?: string;
    archive?: boolean;
  };
  rest: {
    address: string;
    provider?: string;
    archive?: boolean;
  };
};

export function getEndpoint(chain: Chain): {
  rpc: {
    address: string;
    provider?: string;
    archive?: boolean;
  };
  rest: {
    address: string;
    provider?: string;
    archive?: boolean;
  };
};

export function getEndpoint(chainOrName: string | Chain, chains: Chain[] = []) {
  let chain: Chain | undefined;

  if (typeof chainOrName === 'string') {
    chain = chains.find((el) => el.chain_name === chainOrName);
  } else {
    chain = chainOrName;
  }

  assertIsDefined(chain);
  assertIsDefined(chain.apis?.rpc);
  assertIsDefined(chain.apis?.rest);

  const rpc = chain.apis.rpc[0];
  const rest = chain.apis.rest[0];

  return {
    rpc,
    rest,
  };
}

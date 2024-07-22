import type { Chain, Endpoint } from '@nabla-studio/chain-registry';
import { assertIsDefined } from './asserts';

export function getEndpoint(
  chainName: string,
  chains: Chain[],
): {
  rpc: Endpoint;
  rest: Endpoint;
};

export function getEndpoint(chain: Chain): {
  rpc: Endpoint;
  rest: Endpoint;
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

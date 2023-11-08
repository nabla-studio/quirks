import type { Chain } from '@nabla-studio/chain-registry';
import { assertIsDefined } from './asserts';

export const getEndpoint = (chainName: string, chains: Chain[]) => {
  const chain = chains.find((el) => el.chain_name === chainName);

  assertIsDefined(chain);
  assertIsDefined(chain.apis?.rpc);
  assertIsDefined(chain.apis?.rest);

  const rpc = chain.apis.rpc[0];
  const rest = chain.apis.rest[0];

  return {
    rpc,
    rest,
  };
};

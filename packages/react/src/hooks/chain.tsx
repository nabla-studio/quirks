import { assertIsDefined } from '@quirks/core';
import { useQuirks } from '../providers';

export const useChains = () => {
  const store = useQuirks();

  return {
    accounts: store.use.accounts(),
    accountName: store.use.accountName ? store.use.accountName() : undefined,
    getAddresses: store.use.getAddresses(),
    getAddress: store.use.getAddress(),
    getChain: store.use.getChain(),
  };
};

export const useChain = (chainName: string) => {
  const { getChain, getAddress, accountName } = useChains();

  const chain = getChain(chainName);

  assertIsDefined(chain, `there is no chain named "${chainName}"`);

  return {
    chain,
    address: getAddress(chain.chain_id),
    accountName,
  };
};

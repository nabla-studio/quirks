import { assertIsDefined } from '@quirks/core';
import { useQuirks } from '../providers';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type { StdSignDoc } from '@cosmjs/amino';

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
  const store = useQuirks();

  const chain = store.use.getChain()(chainName);

  assertIsDefined(chain, `there is no chain named "${chainName}"`);

  return {
    chain,
    assetsList: store.use
      .assetsLists()
      .find((assetsList) => assetsList.chain_name === chainName),
    address: store.use
      .accounts()
      .find((account) => account.chainId === chain.chain_id)?.bech32Address,
    accountName: store.use.accountName ? store.use.accountName() : undefined,
    getOfflineSigner: () => store.use.getOfflineSigner()(chain.chain_id),
    getOfflineSignerOnlyAmino: () =>
      store.use.getOfflineSignerOnlyAmino()(chain.chain_id),
    getOfflineSignerAuto: () =>
      store.use.getOfflineSignerAuto()(chain.chain_id),
    signAmino: (signDoc: StdSignDoc) =>
      store.use.signAmino()(chain.chain_id, signDoc),
    signDirect: (signDoc: SignDoc) =>
      store.use.signDirect()(chain.chain_id, signDoc),
  };
};

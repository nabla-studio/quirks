import { assertIsDefined } from '@quirks/core';
import { useQuirks } from './quirks';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type { StdSignDoc } from '@cosmjs/amino';

export const useChains = () => {
  const accounts = useQuirks()((state) => state.accounts);
  const accountName = useQuirks()((state) => state.accountName);
  const getAddresses = useQuirks()((state) => state.getAddresses);
  const getAddress = useQuirks()((state) => state.getAddress);
  const getChain = useQuirks()((state) => state.getChain);

  return {
    accounts,
    accountName,
    getAddresses,
    getAddress,
    getChain,
  };
};

export const useChain = (chainName: string) => {
  const getChain = useQuirks()((state) => state.getChain);
  const getAddress = useQuirks()((state) => state.getChain);
  const accountName = useQuirks()((state) => state.accountName);
  const getOfflineSigner = useQuirks()((state) => state.getOfflineSigner);
  const getOfflineSignerOnlyAmino = useQuirks()(
    (state) => state.getOfflineSignerOnlyAmino,
  );
  const getOfflineSignerAuto = useQuirks()(
    (state) => state.getOfflineSignerAuto,
  );
  const signAmino = useQuirks()((state) => state.signAmino);
  const signDirect = useQuirks()((state) => state.signDirect);

  const chain = getChain(chainName);

  assertIsDefined(chain, `there is no chain named "${chainName}"`);

  return {
    chain,
    address: getAddress(chain.chain_id),
    accountName,
    getOfflineSigner: () => getOfflineSigner(chain.chain_id),
    getOfflineSignerOnlyAmino: () => getOfflineSignerOnlyAmino(chain.chain_id),
    getOfflineSignerAuto: () => getOfflineSignerAuto(chain.chain_id),
    signAmino: (signDoc: StdSignDoc) => signAmino(chain.chain_id, signDoc),
    signDirect: (signDoc: SignDoc) => signDirect(chain.chain_id, signDoc),
  };
};

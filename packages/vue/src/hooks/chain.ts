import { useQuirks } from './quirks';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type { StdSignDoc } from '@cosmjs/amino';
import { computed } from 'vue';

export const useChains = () => {
  const state = useQuirks()((state) => state);
  const accounts = computed(() => state.accounts.value);
  const accountName = computed(() => state.accountName);
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
  const state = useQuirks()((state) => state);
  const chains = computed(() => state.chains.value);
  const assetsList = computed(() =>
    state.assetsLists.value.find(
      (assetList) => assetList.chain_name === chainName,
    ),
  );
  const accounts = computed(() => state.accounts.value);
  const accountName = computed(() => state.accountName);
  const getOfflineSigner = useQuirks()((state) => state.getOfflineSigner);
  const getOfflineSignerOnlyAmino = useQuirks()(
    (state) => state.getOfflineSignerOnlyAmino,
  );
  const getOfflineSignerAuto = useQuirks()(
    (state) => state.getOfflineSignerAuto,
  );
  const signAmino = useQuirks()((state) => state.signAmino);
  const signDirect = useQuirks()((state) => state.signDirect);

  const chain = computed(() =>
    chains.value.find((c) => c.chain_name === chainName),
  );

  const account = computed(() =>
    accounts.value.find((account) => account.chainId === chain.value?.chain_id),
  );

  const address = computed(() => account.value?.bech32Address);

  return {
    chain,
    assetsList,
    account,
    address,
    accountName,
    getOfflineSigner: () => getOfflineSigner(chain.value!.chain_id),
    getOfflineSignerOnlyAmino: () =>
      getOfflineSignerOnlyAmino(chain.value!.chain_id),
    getOfflineSignerAuto: () => getOfflineSignerAuto(chain.value!.chain_id),
    signAmino: (signDoc: StdSignDoc) =>
      signAmino(chain.value!.chain_id, signDoc),
    signDirect: (signDoc: SignDoc) =>
      signDirect(chain.value!.chain_id, signDoc),
  };
};

import { computed } from 'vue';
import { useQuirks } from './quirks';

export const useWalletConnect = () => {
  const state = useQuirks()((state) => state);
  const pairingURI = computed(() => state.pairingURI?.value);
  const namespaces = computed(() => state.namespaces.value);
  const providerOpts = computed(() => state.providerOpts?.value);

  return {
    pairingURI,
    namespaces,
    providerOpts,
  };
};

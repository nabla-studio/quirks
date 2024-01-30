import { computed } from 'vue';
import { useQuirks } from './quirks';

export const useConfig = () => {
  const state = useQuirks()((state) => state);
  const wallets = computed(() => state.wallets.value);
  const chains = computed(() => state.chains.value);
  const assetsLists = computed(() => state.assetsLists.value);

  return {
    wallets,
    chains,
    assetsLists,
  };
};

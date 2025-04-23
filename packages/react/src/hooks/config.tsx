import { useQuirks } from '../providers';

export const useConfig = () => {
  const store = useQuirks();

  return {
    wallets: store.use.wallets(),
    chains: store.use.chains(),
    enabledChains: store.use.enabledChains(),
    assetsLists: store.use.assetsLists(),
  };
};

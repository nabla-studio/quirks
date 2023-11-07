import { useQuirks } from './quirks';

export const useConfig = () => {
  const wallets = useQuirks()((state) => state.wallets);
  const chains = useQuirks()((state) => state.chains);
  const assetsLists = useQuirks()((state) => state.assetsLists);

  return {
    wallets,
    chains,
    assetsLists,
  };
};

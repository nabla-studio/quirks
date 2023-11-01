import { useQuirks } from '../providers';

export const useChains = () => {
  const store = useQuirks();

  return {
    accounts: store.use.accounts(),
  };
};

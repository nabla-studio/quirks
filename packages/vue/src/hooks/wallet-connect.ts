import { useQuirks } from './quirks';

export const useWalletConnect = () => {
  const pairingURI = useQuirks()((state) => state.pairingURI);
  const namespaces = useQuirks()((state) => state.namespaces);
  const providerOpts = useQuirks()((state) => state.providerOpts);

  return {
    pairingURI,
    namespaces,
    providerOpts,
  };
};

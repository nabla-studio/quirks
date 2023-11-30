import { useQuirks } from '../providers';

export const useWalletConnect = () => {
  const store = useQuirks();

  return {
    pairingURI: store.use.pairingURI ? store.use.pairingURI() : undefined,
    namespaces: store.use.namespaces(),
    providerOpts: store.use.providerOpts ? store.use.providerOpts() : undefined,
  };
};

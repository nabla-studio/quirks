import { ConnectionStates } from '@quirks/store';
import { useQuirks } from '../providers';

export const useConnect = () => {
  const store = useQuirks();

  return {
    connect: store.use.connect(),
    disconnect: store.use.disconnect(),
    status: store.use.status(),
    setupStatus: store.use.setupStatus(),
    connected: store.use.status() === ConnectionStates.CONNECTED,
    connecting: store.use.connecting(),
    connectionError: store.use.connectionError
      ? store.use.connectionError()
      : undefined,
    disconnected: store.use.status() === ConnectionStates.DISCONNECTED,
    rejected: store.use.status() === ConnectionStates.REJECTED,
    wallet: store.use.wallet ? store.use.wallet() : undefined,
    walletName: store.use.walletName ? store.use.walletName() : undefined,
  };
};

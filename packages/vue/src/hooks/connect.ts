import { ConnectionStates } from '@quirks/store';
import { useQuirks } from './quirks';

export const useConnect = () => {
  const connect = useQuirks()((state) => state.connect);
  const disconnect = useQuirks()((state) => state.disconnect);
  const status = useQuirks()((state) => state.status);
  const connected = useQuirks()(
    (state) => state.status === ConnectionStates.CONNECTED,
  );
  const waiting = useQuirks()(
    (state) => state.status === ConnectionStates.CONNECTED,
  );
  const disconnected = useQuirks()(
    (state) => state.status === ConnectionStates.DISCONNECTED,
  );
  const rejected = useQuirks()(
    (state) => state.status === ConnectionStates.REJECTED,
  );

  return {
    connect,
    disconnect,
    status,
    connected,
    waiting,
    disconnected,
    rejected,
  };
};

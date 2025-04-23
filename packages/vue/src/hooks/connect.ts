import { ConnectionStates } from '@quirks/store';
import { useQuirks } from './quirks';
import { computed } from 'vue';

export const useConnect = () => {
  const state = useQuirks()((state) => state);
  const connect = useQuirks()((state) => state.connect);
  const disconnect = useQuirks()((state) => state.disconnect);
  const enable = useQuirks()((state) => state.enable);
  const suggestChains = useQuirks()((state) => state.suggestChains);
  const status = computed(() => state.status.value);
  const setupStatus = computed(() => state.setupStatus.value);
  const wallet = computed(() => state.wallet?.value);
  const walletName = computed(() => state.walletName?.value);
  const connectedChains = computed(() => state.connectedChains?.value);
  const connected = computed(() => status.value === ConnectionStates.CONNECTED);
  const connecting = computed(() => state.connecting.value);
  const connectionError = computed(() => state.connectionError?.value?.value);
  const disconnected = computed(
    () => status.value === ConnectionStates.DISCONNECTED,
  );
  const rejected = computed(() => status.value === ConnectionStates.REJECTED);

  return {
    connect,
    disconnect,
    enable,
    suggestChains,
    status,
    connectionError,
    connected,
    connecting,
    disconnected,
    rejected,
    wallet,
    walletName,
    setupStatus,
    connectedChains,
  };
};

import { ConnectionStates } from '@quirks/store';
import { useQuirks } from './quirks';
import { computed } from 'vue';

export const useConnect = () => {
  const state = useQuirks()((state) => state);
  const connect = useQuirks()((state) => state.connect);
  const disconnect = useQuirks()((state) => state.disconnect);
  const status = computed(() => state.status.value);
  const setupStatus = computed(() => state.setupStatus.value);
  const reconnectionStatus = computed(() => state.reconnectionStatus.value);
  const wallet = computed(() => state.wallet?.value);
  const walletName = computed(() => state.walletName?.value);
  const connected = computed(() => status.value === ConnectionStates.CONNECTED);
  const waiting = computed(() => state.isConnecting.value);
  const isConnecting = computed(() => state.isConnecting.value);
  const disconnected = computed(
    () => status.value === ConnectionStates.DISCONNECTED,
  );
  const rejected = computed(() => status.value === ConnectionStates.REJECTED);

  return {
    connect,
    disconnect,
    status,
    connected,
    waiting,
    isConnecting,
    disconnected,
    rejected,
    wallet,
    walletName,
    setupStatus,
    reconnectionStatus,
  };
};

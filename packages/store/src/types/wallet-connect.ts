import type { OpenDeeplinkCallback } from '@quirks/core';
import type {
  Namespace,
  UniversalProviderOpts,
} from '@walletconnect/universal-provider';

export interface WalletConnectState {
  openDeeplink?: OpenDeeplinkCallback;
  pairingURI?: string;
  providerOpts?: UniversalProviderOpts;
  namespaces: { cosmos: Namespace };
}

export type WalletConnectSlice = WalletConnectState;

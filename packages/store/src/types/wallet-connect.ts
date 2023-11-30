import type {
  Namespace,
  UniversalProviderOpts,
} from '@walletconnect/universal-provider';

export interface WalletConnectState {
  pairingURI?: string;
  providerOpts?: UniversalProviderOpts;
  namespaces: { cosmos: Namespace };
}

export type WalletConnectSlice = WalletConnectState;

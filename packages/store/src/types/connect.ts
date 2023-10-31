import type { Wallet } from '@quirks/core';

export const ConnectionStates = {
  DISCONNECTED: 'DISCONNECTED',
  WAITING: 'WAITING',
  CONNECTED: 'CONNECTED',
  REJECTED: 'REJECTED',
} as const;

export type ConnectionState =
  (typeof ConnectionStates)[keyof typeof ConnectionStates];

export interface ConnectState {
  walletName?: string;
  wallet?: Wallet;
  status: ConnectionState;
  setWallet: (wallet?: Wallet) => void;
  connect: (walletName: string) => void;
  disconnect: () => void;
}

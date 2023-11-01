import type { Wallet } from '@quirks/core';

export const ConnectionStates = {
  DISCONNECTED: 'DISCONNECTED',
  WAITING: 'WAITING',
  CONNECTED: 'CONNECTED',
  REJECTED: 'REJECTED',
} as const;

export type ConnectionState =
  (typeof ConnectionStates)[keyof typeof ConnectionStates];

export const ReconnectionStates = {
  IDLE: 'IDLE',
  WAITING: 'WAITING',
  RECONNECTED: 'RECONNECTED',
  REJECTED: 'REJECTED',
} as const;

export type ReconnectionState =
  (typeof ReconnectionStates)[keyof typeof ReconnectionStates];

export interface ConnectState {
  walletName?: string;
  wallet?: Wallet;
  status: ConnectionState;
  reconnectionStatus: ReconnectionState;
  setWallet: (wallet?: Wallet) => void;
  getWalletData: () => void;
  connect: (walletName: string) => void;
  reconnect: (walletName: string) => void;
  disconnect: () => void;
}

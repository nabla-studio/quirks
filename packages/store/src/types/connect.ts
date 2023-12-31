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

export const SetupStates = {
  DEINITIALIZED: 'DEINITIALIZED',
  INITIALIZED: 'INITIALIZED',
} as const;

export type SetupState = (typeof SetupStates)[keyof typeof SetupStates];

export interface ConnectOptions {
  autoSuggestions: boolean;
  autoAccountChange: boolean;
}

export interface ConnectState {
  walletName?: string;
  wallet?: Wallet;
  status: ConnectionState;
  setupStatus: SetupState;
  reconnectionStatus: ReconnectionState;
  options: ConnectOptions;
}

export interface ConnectActions {
  setWallet: (wallet?: Wallet) => void;
  getWalletData: () => void;
  connect: (walletName: string) => void;
  reconnect: (walletName: string) => void;
  disconnect: () => void;
  suggestChains: (walletName: string) => Promise<void>;
}

export type ConnectSlice = ConnectState & ConnectActions;

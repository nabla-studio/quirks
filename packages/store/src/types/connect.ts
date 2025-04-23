import type { Wallet } from '@quirks/core';

export const ConnectionStates = {
  DISCONNECTED: 'DISCONNECTED',
  CONNECTED: 'CONNECTED',
  REJECTED: 'REJECTED',
} as const;

export type ConnectionState =
  (typeof ConnectionStates)[keyof typeof ConnectionStates];

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
  connectedChains: string[] | undefined;
  status: ConnectionState;
  connecting: boolean;
  connectionError?: Error;
  setupStatus: SetupState;
  options: ConnectOptions;
}

export interface ConnectActions {
  setWallet: (wallet?: Wallet) => Promise<void>;
  setConnectedChains: (chainIds?: string[]) => void;
  getWalletData: () => Promise<void>;
  connect: (walletName: string) => Promise<void>;
  reconnect: (walletName: string) => Promise<void>;
  disconnect: () => void;
  suggestChains: (walletName: string) => Promise<void>;
}

export type ConnectSlice = ConnectState & ConnectActions;

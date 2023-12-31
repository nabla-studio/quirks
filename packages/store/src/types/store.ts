import type { SignSlice } from './sign';
import type { AccountSlice } from './account';
import type { ConfigSlice } from './config';
import type { ConnectSlice } from './connect';
import type { WalletConnectSlice } from './wallet-connect';

export interface AppActions {
  reset: () => void;
}

export type AppState = ConfigSlice &
  ConnectSlice &
  AccountSlice &
  SignSlice &
  AppActions &
  WalletConnectSlice;

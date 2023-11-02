import { AccountSlice } from './account';
import { ConfigSlice } from './config';
import { ConnectSlice } from './connect';

export interface AppActions {
  reset: () => void;
}

export type AppState = ConfigSlice & ConnectSlice & AccountSlice & AppActions;

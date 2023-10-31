import { AccountState } from './account';
import { ConfigState } from './config';
import { ConnectState } from './connect';

export type AppState = ConfigState & ConnectState & AccountState;

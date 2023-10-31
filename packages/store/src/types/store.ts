import { ConfigState } from './config';
import { ConnectState } from './connect';

export type AppState = ConfigState & ConnectState;

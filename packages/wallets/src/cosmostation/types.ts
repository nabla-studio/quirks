import type { Algo } from '@cosmjs/proto-signing';
import type { Keplr } from '@keplr-wallet/types';

export interface Request {
  method: string;
  params?: object;
}

export interface Cosmos {
  request(request: Request): Promise<unknown>;
  on(type: string, listener: EventListenerOrEventListenerObject): Event;
  off(event: Event): void;
}

export interface Cosmostation {
  cosmos: Cosmos;
  providers: {
    keplr: Keplr;
  };
}

export type RequestAccountResponse = {
  name: string;
  address: string;
  publicKey: Uint8Array;
  isLedger: boolean;
  isEthermint: boolean;
  algo: Algo;
};

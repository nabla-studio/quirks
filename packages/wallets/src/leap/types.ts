import type { Keplr } from '@keplr-wallet/types';

export interface Leap extends Omit<Keplr, 'disable'> {
  disconnect: (chainId: string) => Promise<boolean>;
}

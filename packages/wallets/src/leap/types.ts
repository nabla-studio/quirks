import type { Keplr } from '@keplr-wallet/types';

export interface Leap extends Keplr {
  disconnect: (chainId: string) => Promise<boolean>;
}

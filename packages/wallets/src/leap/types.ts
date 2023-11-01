import type { Keplr } from '@keplr-wallet/types';

export interface Leap extends Omit<Keplr, 'disable' | 'getKeysSettled'> {
  disconnect: (chainId: string) => Promise<boolean>;
}

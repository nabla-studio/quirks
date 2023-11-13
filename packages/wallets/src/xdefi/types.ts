import type { Keplr } from '@keplr-wallet/types';

export interface XDEFI extends Keplr {
  isXDEFI: boolean;
  disconnect: () => Promise<void>;
}

import type { Keplr } from '@keplr-wallet/types';

export interface OKX extends Keplr {
  disconnect: () => Promise<void>;
}

import type { WalletOptions } from '@quirks/core';
import { leapmetamasksnap } from '@nabla-studio/wallet-registry';

export const leapMetamaskSnapOptions: WalletOptions = {
  ...leapmetamasksnap,
  windowKey: 'ethereum',
};

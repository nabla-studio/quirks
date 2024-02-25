import type { WalletOptions } from '@quirks/core';
import { leapmobile } from '@nabla-studio/wallet-registry';

export const leapWalletMobileConnectOptions: WalletOptions = {
  ...leapmobile,
  events: {
    keystorechange: 'accountsChanged',
  },
};

import type { WalletOptions } from '@quirks/core';
import { keplrmobile } from '@nabla-studio/wallet-registry';

export const keplrWalletMobileConnectOptions: WalletOptions = {
  ...keplrmobile,
  events: {
    keystorechange: 'accountsChanged',
  },
};

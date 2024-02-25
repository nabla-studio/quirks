import type { WalletOptions } from '@quirks/core';
import { cosmostationmobile } from '@nabla-studio/wallet-registry';

export const cosmostationWalletMobileConnectOptions: WalletOptions = {
  ...cosmostationmobile,
  events: {
    keystorechange: 'accountsChanged',
  },
};

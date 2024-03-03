import type { WalletOptions } from '@quirks/core';
import { trustwalletmobile } from '@nabla-studio/wallet-registry';

export const trustWalletMobileConnectOptions: WalletOptions = {
  ...trustwalletmobile,
  events: {
    keystorechange: 'accountsChanged',
  },
};

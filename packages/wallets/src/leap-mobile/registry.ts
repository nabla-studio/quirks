import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';
import { leapmobile } from '@nabla-studio/wallet-registry';

export const leapWalletMobileConnectOptions: WalletOptions = {
  ...leapmobile,
  connectionType: WalletConnectionTypes.WALLET_CONNECT,
  events: {
    keystorechange: 'accountsChanged',
  },
};

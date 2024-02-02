import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';
import { cosmostationmobile } from '@nabla-studio/wallet-registry';

export const cosmostationWalletMobileConnectOptions: WalletOptions = {
  ...cosmostationmobile,
  connectionType: WalletConnectionTypes.WALLET_CONNECT,
  events: {
    keystorechange: 'accountsChanged',
  },
};

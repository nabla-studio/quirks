import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';
import { keplrmobile } from '@nabla-studio/wallet-registry';

export const keplrWalletMobileConnectOptions: WalletOptions = {
  ...keplrmobile,
  connectionType: WalletConnectionTypes.WALLET_CONNECT,
  events: {
    keystorechange: 'accountsChanged',
  },
};

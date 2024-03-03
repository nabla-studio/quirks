import type { WalletOptions } from '@quirks/core';
import { trustwalletextension } from '@nabla-studio/wallet-registry';

export const trustExtensionOptions: WalletOptions = {
  ...trustwalletextension,
  windowKey: 'trustwallet.cosmos',
  events: {
    keystorechange: 'trustwallet_keystorechange',
  },
};

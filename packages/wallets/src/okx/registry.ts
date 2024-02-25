import type { WalletOptions } from '@quirks/core';
import { okxextension } from '@nabla-studio/wallet-registry';

export const okxExtensionOptions: WalletOptions = {
  ...okxextension,
  windowKey: 'okxwallet.keplr',
  events: {
    keystorechange: 'okxwallet_keystorechange',
  },
};

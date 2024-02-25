import type { WalletOptions } from '@quirks/core';
import { xdefiextension } from '@nabla-studio/wallet-registry';

export const xdefiExtensionOptions: WalletOptions = {
  ...xdefiextension,
  windowKey: 'xfi.keplr',
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

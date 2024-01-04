import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';
import { xdefiextension } from '@nabla-studio/wallet-registry';

export const xdefiExtensionOptions: WalletOptions = {
  ...xdefiextension,
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'xfi.keplr',
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

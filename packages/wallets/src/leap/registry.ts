import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';
import { leapextension } from '@nabla-studio/wallet-registry';

export const leapExtensionOptions: WalletOptions = {
  ...leapextension,
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'leap',
  events: {
    keystorechange: 'leap_keystorechange',
  },
};

import type { WalletOptions } from '@quirks/core';
import { leapextension } from '@nabla-studio/wallet-registry';

export const leapExtensionOptions: WalletOptions = {
  ...leapextension,
  windowKey: 'leap',
  events: {
    keystorechange: 'leap_keystorechange',
  },
};

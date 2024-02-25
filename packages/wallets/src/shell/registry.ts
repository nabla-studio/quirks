import type { WalletOptions } from '@quirks/core';
import { shellextension } from '@nabla-studio/wallet-registry';

export const shellExtensionOptions: WalletOptions = {
  ...shellextension,
  windowKey: 'shellwallet',
  events: {
    keystorechange: 'shell_keystorechange',
  },
};

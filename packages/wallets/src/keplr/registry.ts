import type { WalletOptions } from '@quirks/core';
import { keplrextension } from '@nabla-studio/wallet-registry';

export const keplrExtensionOptions: WalletOptions = {
  ...keplrextension,
  windowKey: 'keplr',
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

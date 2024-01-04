import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';
import { keplrextension } from '@nabla-studio/wallet-registry';

export const keplrExtensionOptions: WalletOptions = {
  ...keplrextension,
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'keplr',
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

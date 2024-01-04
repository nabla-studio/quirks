import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';
import { cosmostationextension } from '@nabla-studio/wallet-registry';

export const cosmostationExtensionOptions: WalletOptions = {
  ...cosmostationextension,
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'cosmostation',
  events: {
    keystorechange: 'cosmostation_keystorechange',
  },
};

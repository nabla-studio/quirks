import type { WalletOptions } from '@quirks/core';
import { keplrextension } from '@nabla-studio/wallet-registry';

export const cosmiframeExtensionOptions: WalletOptions = {
  ...keplrextension,
  wallet_name: 'cosmiframe',
  pretty_name: 'Cosmiframe',
  connection_type: 'browser_extension',
  website: 'https://github.com/DA0-DA0/cosmiframe',
  git_repo: 'https://github.com/DA0-DA0/cosmiframe',
  platforms: [],
  images: [],
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

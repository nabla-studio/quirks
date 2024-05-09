import type { WalletOptions } from '@quirks/core';
import { keplrextension } from '@nabla-studio/wallet-registry';

export const daodaoCosmiframeOptions: WalletOptions = {
  ...keplrextension,
  wallet_name: 'dao-dao-cosmiframe',
  pretty_name: 'DAO DAO',
  connection_type: 'cosmiframe',
  website: 'https://github.com/DA0-DA0/cosmiframe',
  git_repo: 'https://github.com/DA0-DA0/cosmiframe',
  platforms: [],
  images: [],
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

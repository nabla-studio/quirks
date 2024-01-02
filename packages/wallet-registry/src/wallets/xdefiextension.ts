import type { CosmosWallet } from '../types';

export const xdefiextension: CosmosWallet = {
  $schema: '../../wallet.schema.json',
  wallet_name: 'xdefiextension',
  pretty_name: 'xDefi',
  website: 'https://www.xdefi.io/',
  git_repo: '',
  supported_chains: [
    'cosmoshub',
    'axelar',
    'osmosis',
    'stride',
    'mars',
    'stargaze',
    'crescent',
    'sei',
    'kujira',
    'cryptoorgchain',
    'kava',
    'akash',
    'juno',
    'terra2',
  ],
  features: ['suggest_chain'],
  platforms: [
    {
      device: 'desktop',
      type: 'extension',
      platform: 'chrome',
      install_link:
        'https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/xdefiextension/images/logo.png',
      theme: {
        primary_color_hex: '#4476f2',
        circle: false,
        dark_mode: false,
      },
      layout: 'logomark',
    },
  ],
};

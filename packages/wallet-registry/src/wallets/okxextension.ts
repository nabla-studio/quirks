import type { CosmosWallet } from '../types';

export const okxextension: CosmosWallet = {
  $schema: '../../wallet.schema.json',
  wallet_name: 'okxextension',
  pretty_name: 'OKX',
  connection_type: 'browser_extension',
  website: 'https://www.okx.com/',
  git_repo: 'https://github.com/okx',
  supported_chains: ['cosmoshub', 'osmosis'],
  features: [],
  platforms: [
    {
      device: 'desktop',
      type: 'extension',
      platform: 'chrome',
      install_link:
        'https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge',
    },
    {
      device: 'desktop',
      type: 'extension',
      platform: 'firefox',
      install_link:
        'https://addons.mozilla.org/zh-CN/firefox/addon/okexwallet/',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/okxextension/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/okxextension/images/logo.svg',
      theme: {
        primary_color_hex: '#000000',
        circle: false,
        dark_mode: false,
      },
      layout: 'logomark',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/okxextension/images/logo-dark.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/okxextension/images/logo-dark.svg',
      theme: {
        primary_color_hex: '#FFFFFF',
        circle: false,
        dark_mode: true,
      },
      layout: 'logomark',
    },
  ],
};

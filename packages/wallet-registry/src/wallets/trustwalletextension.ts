import type { CosmosWallet } from '../types';

export const trustwalletextension: CosmosWallet = {
  $schema: '../../wallet.schema.json',
  wallet_name: 'trustwalletextension',
  pretty_name: 'Trust Wallet',
  connection_type: 'browser_extension',
  website: 'https://www.trustwallet.com',
  git_repo: 'https://github.com/trustwallet',
  supported_chains: [
    'cosmoshub',
    'osmosis',
    'cryptoorgchain',
    'terra',
    'evmos',
    'kava',
    'thorchain',
  ],
  platforms: [
    {
      device: 'desktop',
      type: 'extension',
      platform: 'chrome',
      install_link:
        'https://chromewebstore.google.com/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletextension/images/logo-text.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletextension/images/logo-text.svg',
      theme: {
        primary_color_hex: '#0500ff',
        circle: false,
        dark_mode: false,
      },
      layout: 'logo',
      text_position: 'right',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletextension/images/logo-text-top.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletextension/images/logo-text-top.svg',
      theme: {
        primary_color_hex: '#0500ff',
        circle: false,
        dark_mode: false,
      },
      layout: 'logo',
      text_position: 'top',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletextension/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletextension/images/logo.svg',
      theme: {
        primary_color_hex: '#0500ff',
        circle: false,
        dark_mode: false,
      },
      layout: 'logomark',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletextension/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletextension/images/logo.svg',
      theme: {
        primary_color_hex: '#0500ff',
        circle: false,
        dark_mode: true,
      },
      layout: 'logomark',
    },
  ],
};

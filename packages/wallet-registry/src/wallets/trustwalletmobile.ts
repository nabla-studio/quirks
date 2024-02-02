import type { CosmosWallet } from '../types';

export const trustwalletmobile: CosmosWallet = {
  $schema: '../../wallet.schema.json',
  wallet_name: 'trustwalletmobile',
  pretty_name: 'Trust Wallet',
  connection_type: 'wallet_connect',
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
      device: 'mobile',
      type: 'application',
      platform: 'ios',
      install_link: 'https://apps.apple.com/app/apple-store/id1288339409',
    },
    {
      device: 'mobile',
      type: 'application',
      platform: 'android',
      install_link:
        'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletmobile/images/logo-text.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletmobile/images/logo-text.svg',
      theme: {
        primary_color_hex: '#0500ff',
        circle: false,
        dark_mode: false,
      },
      layout: 'logo',
      text_position: 'right',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletmobile/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/trustwalletmobile/images/logo.svg',
      theme: {
        primary_color_hex: '#0500ff',
        circle: false,
        dark_mode: false,
      },
      layout: 'logo',
      text_position: 'top',
    },
  ],
  mobile: {
    ios: {
      bundle_identifier: 'com.sixdays.trust',
    },
    android: {
      package_name: 'com.wallet.crypto.trustapp',
    },
  },
};

import type { CosmosWallet } from '../types';

export const leapmobile: CosmosWallet = {
  $schema: '../../wallet.schema.json',
  wallet_name: 'leapmobile',
  pretty_name: 'Leap Mobile',
  connection_type: 'wallet_connect',
  website: 'https://leapwallet.io',
  git_repo: '',
  supported_chains: [
    'cosmoshub',
    'juno',
    'osmosis',
    'akash',
    'assetmantle',
    'axelar',
    'cheqd',
    'chihuahua',
    'desmos',
    'emoney',
    'fetchhub',
    'gravitybridge',
    'injective',
    'irisnet',
    'jackal',
    'kujira',
    'likecoin',
    'persistence',
    'atlantic',
    'sifchain',
    'sommelier',
    'stargaze',
    'starname',
    'stride',
    'teritori',
    'umee',
  ],
  platforms: [
    {
      device: 'mobile',
      type: 'application',
      platform: 'ios',
      install_link: 'https://apps.apple.com/in/app/leap-cosmos/id1642465549',
    },
    {
      device: 'mobile',
      type: 'application',
      platform: 'android',
      install_link:
        'https://play.google.com/store/apps/details?id=io.leapwallet.cosmos',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmobile/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmobile/images/logo.svg',
      theme: {
        primary_color_hex: '#32DA6D',
        circle: false,
        dark_mode: false,
      },
      layout: 'logomark',
    },
  ],
  wallet_connect: {
    deeplink: {
      path: {
        android: 'wcV2',
        ios: 'wcV2',
      },
    },
  },
  mobile: {
    ios: {
      bundle_identifier: 'com.LeapCosmosWallet',
      schema: 'leapcosmos',
    },
    android: {
      package_name: 'io.leapwallet.cosmos',
      schema: 'leapcosmos',
    },
  },
};

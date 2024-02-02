import type { CosmosWallet } from '../types';

export const leapextension: CosmosWallet = {
  $schema: '../../wallet.schema.json',
  wallet_name: 'leapextension',
  pretty_name: 'Leap',
  connection_type: 'browser_extension',
  website: 'https://www.leapwallet.io/',
  git_repo: '',
  supported_chains: [
    'cosmoshub',
    'juno',
    'osmosis',
    'secretnetwork',
    'agoric',
    'akash',
    'assetmantle',
    'axelar',
    'bitsong',
    'cheqd',
    'chihuahua',
    'comdex',
    'desmos',
    'emoney',
    'evmos',
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
  features: ['suggest_chain'],
  platforms: [
    {
      device: 'desktop',
      type: 'extension',
      platform: 'chrome',
      install_link:
        'https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapextension/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapextension/images/logo.svg',
      theme: {
        primary_color_hex: '#32DA6D',
        circle: false,
        dark_mode: false,
      },
      layout: 'logomark',
    },
  ],
};

import type { CosmosWallet } from '../types';

export const leapmetamasksnap: CosmosWallet = {
  $schema: '../../wallet.schema.json',
  wallet_name: 'leapmetamasksnap',
  pretty_name: 'Leap Metamask Snap',
  connection_type: 'browser_extension',
  website: 'https://www.leapwallet.io/snaps',
  git_repo: '',
  supported_chains: [
    'cosmoshub',
    'osmosis',
    'secretnetwork',
    'regen',
    'akash',
    'sifchain',
    'stargaze',
    'sentinel',
    'persistence',
    'kava',
    'cryptoorgchain',
    'irisnet',
    'agoric',
    'axelar',
    'certik',
    'ixo',
    'emoney',
    'juno',
    'sommelier',
    'umee',
    'evmos',
    'bostrom',
    'starname',
    'gravitybridge',
    'stride',
    'tgrade',
  ],
  features: ['suggest_chain', 'icns'],
  platforms: [
    {
      device: 'desktop',
      type: 'extension',
      platform: 'chrome',
      install_link:
        'https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
    },
    {
      device: 'desktop',
      type: 'extension',
      platform: 'firefox',
      install_link:
        'https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/',
    },
    {
      device: 'desktop',
      type: 'extension',
      platform: 'edge',
      install_link:
        'https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US',
    },
    {
      device: 'desktop',
      type: 'extension',
      platform: 'opera',
      install_link:
        'https://addons.opera.com/en-gb/extensions/details/metamask-10/',
    },
    {
      device: 'desktop',
      type: 'extension',
      platform: 'brave',
      install_link:
        'https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo.svg',
      theme: {
        primary_color_hex: '#F5841F',
        circle: false,
        dark_mode: false,
      },
      layout: 'logomark',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo.svg',
      theme: {
        primary_color_hex: '#F5841F',
        circle: false,
        dark_mode: true,
      },
      layout: 'logomark',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo-text.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo-text.svg',
      theme: {
        primary_color_hex: '#F5841F',
        circle: false,
        dark_mode: false,
      },
      layout: 'logo',
      text_position: 'right',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo-text-dark.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo-text-dark.svg',
      theme: {
        primary_color_hex: '#F5841F',
        circle: false,
        dark_mode: true,
      },
      layout: 'logo',
      text_position: 'right',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo-text-bottom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo-text-bottom.svg',
      theme: {
        primary_color_hex: '#F5841F',
        circle: false,
        dark_mode: false,
      },
      layout: 'logo',
      text_position: 'bottom',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo-text-dark-bottom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/leapmetamasksnap/images/logo-text-dark-bottom.svg',
      theme: {
        primary_color_hex: '#F5841F',
        circle: false,
        dark_mode: true,
      },
      layout: 'logo',
      text_position: 'bottom',
    },
  ],
};

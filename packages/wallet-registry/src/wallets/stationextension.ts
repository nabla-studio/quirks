import type { CosmosWallet } from '../types';

export const stationextension: CosmosWallet = {
  $schema: '../../wallet.schema.json',
  wallet_name: 'stationextension',
  pretty_name: 'Station',
  connection_type: 'browser_extension',
  website: 'https://station.terra.money/',
  git_repo: 'https://github.com/terra-money/station',
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
  features: ['suggest_chain'],
  platforms: [
    {
      device: 'desktop',
      type: 'extension',
      platform: 'chrome',
      install_link:
        'https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp',
    },
    {
      device: 'desktop',
      type: 'extension',
      platform: 'firefox',
      install_link:
        'https://addons.mozilla.org/en-US/firefox/addon/terra-station-wallet/',
    },
    {
      device: 'desktop',
      type: 'extension',
      platform: 'otherBrowser',
      install_link:
        'https://microsoftedge.microsoft.com/addons/detail/station-wallet/ajkhoeiiokighlmdnlakpjfoobnjinie',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/stationextension/images/logo-text.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/stationextension/images/logo-text.svg',
      theme: {
        primary_color_hex: '#459CF4',
        circle: false,
        dark_mode: false,
      },
      layout: 'logo',
      text_position: 'right',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/stationextension/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/stationextension/images/logo.svg',
      theme: {
        primary_color_hex: '#234CD1',
        circle: false,
        dark_mode: false,
      },
      layout: 'logomark',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/stationextension/images/logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/wallet-registry/main/wallets/stationextension/images/logo.svg',
      theme: {
        primary_color_hex: '#234CD1',
        circle: false,
        dark_mode: true,
      },
      layout: 'logomark',
    },
  ],
};

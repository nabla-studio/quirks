import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';
import { keplrextension } from '@nabla-studio/wallet-registry';

export const stationExtensionOptions: WalletOptions = {
  ...keplrextension,
  wallet_name: 'station-extension',
  pretty_name: 'Station',
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'station.keplr',
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
      png: 'https://assets.website-files.com/611153e7af981472d8da199c/62d8b6af5e23fd010628b529_01_Tarra_icon.png',
      svg: 'https://assets.website-files.com/611153e7af981472d8da199c/62d8d4463816d7f427a7600b_01_Tarra_icon.svg',
      theme: {
        primary_color_hex: '#163CA3',
        circle: false,
        dark_mode: false,
      },
      layout: 'logomark',
    },
  ],
  events: {
    keystorechange: 'station_wallet_change',
  },
};

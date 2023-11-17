import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';

export const stationExtensionOptions: WalletOptions = {
  name: 'station-extension',
  prettyName: 'Station',
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'station.keplr',
  downloads: [
    {
      device: 'desktop',
      browser: 'chrome',
      link: 'https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp',
    },
    {
      device: 'desktop',
      browser: 'firefox',
      link: 'https://addons.mozilla.org/en-US/firefox/addon/terra-station-wallet/',
    },
    {
      device: 'desktop',
      browser: 'edge',
      link: 'https://microsoftedge.microsoft.com/addons/detail/station-wallet/ajkhoeiiokighlmdnlakpjfoobnjinie',
    },
  ],
  logoUrls: {
    light: {
      svg: 'https://assets.website-files.com/611153e7af981472d8da199c/62d8d4463816d7f427a7600b_01_Tarra_icon.svg',
      png: 'https://assets.website-files.com/611153e7af981472d8da199c/62d8b6af5e23fd010628b529_01_Tarra_icon.png',
    },
    dark: {
      svg: 'https://assets.website-files.com/611153e7af981472d8da199c/62d8d4463816d7f427a7600b_01_Tarra_icon.svg',
      png: 'https://assets.website-files.com/611153e7af981472d8da199c/62d8b6af5e23fd010628b529_01_Tarra_icon.png',
    },
  },
  events: {
    keystorechange: 'station_wallet_change',
  },
};

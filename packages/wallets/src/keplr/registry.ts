import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';

export const keplrExtensionOptions: WalletOptions = {
  name: 'keplr-extension',
  prettyName: 'Keplr',
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'keplr',
  downloads: [
    {
      device: 'desktop',
      browser: 'chrome',
      link: 'https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en',
    },
    {
      device: 'desktop',
      browser: 'firefox',
      link: 'https://addons.mozilla.org/en-US/firefox/addon/keplr/',
    },
    {
      link: 'https://www.keplr.app/download',
    },
  ],
  logoUrls: {
    light: {
      svg: 'https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63fc1c71300f0c3e3aad38f1_Keplr_logo_ver.1.3_2%20White.svg',
    },
    dark: {
      svg: 'https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63fc1c71f8657194dc1f6f00_Keplr_logo_ver.1.3_2%20Dark.svg',
    },
  },
};

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
      svg: 'https://drive.google.com/u/1/uc?id=1m79yCFaupIAYAjQfFMW-3G_Jk71r3ww5&export=download',
    },
    dark: {
      svg: 'https://drive.google.com/u/1/uc?id=1m79yCFaupIAYAjQfFMW-3G_Jk71r3ww5&export=download',
    },
  },
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

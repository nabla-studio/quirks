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
      svg: 'https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb',
    },
    dark: {
      svg: 'https://explorer-api.walletconnect.com/v3/logo/lg/527324b0-3849-462b-9a1a-72b53bdfea00?projectId=2f05ae7f1116030fde2d36508f472bfb',
    },
  },
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

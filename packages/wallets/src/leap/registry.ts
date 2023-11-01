import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';

export const leapExtensionOptions: WalletOptions = {
  name: 'leap-extension',
  prettyName: 'Leap',
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'leap',
  downloads: [
    {
      link: 'https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg',
    },
  ],
  logoUrls: {
    light: {
      svg: 'https://assets.leapwallet.io/logos/leap-cosmos-logo.svg',
      png: 'https://assets.leapwallet.io/logos/leap-cosmos-logo.png',
    },
    dark: {
      svg: 'https://assets.leapwallet.io/logos/leap-cosmos-logo.svg',
      png: 'https://assets.leapwallet.io/logos/leap-cosmos-logo.png',
    },
  },
};

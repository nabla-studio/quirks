import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';

export const xdefiExtensionOptions: WalletOptions = {
  name: 'xdefi-extension',
  prettyName: 'XDEFI',
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'xfi.keplr',
  downloads: [
    {
      link: 'https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf',
    },
  ],
  logoUrls: {
    light: {
      jpg: 'https://lh3.googleusercontent.com/6TkuRn_tZ2v5Bw4MZ2nTwJLEWU-76bAQFJhXunA7cbroI0izn7Mwi46Wvu3q5WfNUbQiPucQTCSTrb0FD_BCXuo3=w128-h128-e365-rj-sc0x00ffffff',
    },
    dark: {
      jpg: 'https://lh3.googleusercontent.com/6TkuRn_tZ2v5Bw4MZ2nTwJLEWU-76bAQFJhXunA7cbroI0izn7Mwi46Wvu3q5WfNUbQiPucQTCSTrb0FD_BCXuo3=w128-h128-e365-rj-sc0x00ffffff',
    },
  },
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

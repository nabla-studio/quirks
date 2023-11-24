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
      jpg: 'https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb',
    },
    dark: {
      jpg: 'https://explorer-api.walletconnect.com/v3/logo/lg/efec6318-7f96-4b30-9287-6c287660cd00?projectId=2f05ae7f1116030fde2d36508f472bfb',
    },
  },
  events: {
    keystorechange: 'keplr_keystorechange',
  },
};

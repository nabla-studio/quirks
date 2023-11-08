import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';

export const cosmostationExtensionOptions: WalletOptions = {
  name: 'cosmostation-extension',
  prettyName: 'Cosmostation',
  connectionType: WalletConnectionTypes.EXTENSION,
  windowKey: 'cosmostation',
  downloads: [
    {
      link: 'https://chrome.google.com/webstore/detail/cosmostation/fpkhgmpbidmiogeglndfbkegfdlnajnf?hl=en',
    },
  ],
  logoUrls: {
    light: {
      png: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F1476676810-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqNqI3nwsUxI5EVOGitqy%252Ficon%252FV6rPtjNcL05EL9ytiiVy%252Ficon-384x384.png%3Falt%3Dmedia%26token%3D2482af7e-c22e-42a6-9801-971ae4994b4e',
    },
    dark: {
      png: 'https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F1476676810-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqNqI3nwsUxI5EVOGitqy%252Ficon%252FV6rPtjNcL05EL9ytiiVy%252Ficon-384x384.png%3Falt%3Dmedia%26token%3D2482af7e-c22e-42a6-9801-971ae4994b4e',
    },
  },
  events: {
    keystorechange: 'cosmostation_keystorechange',
  },
};

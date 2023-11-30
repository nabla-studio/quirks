import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';

export const universalWalletConnectOptions: WalletOptions = {
  name: 'universal-wallet-connect',
  prettyName: 'Wallet Connect',
  connectionType: WalletConnectionTypes.WALLET_CONNECT,
  downloads: [],
  logoUrls: {
    light: {
      svg: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg',
      png: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.png',
    },
    dark: {
      svg: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/White/Logo.svg',
      png: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/White/Logo.png',
    },
  },
  events: {
    keystorechange: 'accountsChanged',
  },
};

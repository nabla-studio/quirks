import { WalletConnectionTypes, type WalletOptions } from '@quirks/core';
import { keplrextension } from '@nabla-studio/wallet-registry';

export const universalWalletConnectOptions: WalletOptions = {
  ...keplrextension,
  wallet_name: 'universal-wallet-connect',
  pretty_name: 'Wallet Connect',
  connectionType: WalletConnectionTypes.WALLET_CONNECT,
  platforms: [],
  images: [
    {
      svg: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg',
      png: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.png',
      theme: {
        primary_color_hex: '#3396ff',
        circle: false,
        dark_mode: false,
      },
      layout: 'logomark',
    },
    {
      svg: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/White/Logo.svg',
      png: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/White/Logo.png',
      theme: {
        primary_color_hex: '#FFFFFF',
        circle: false,
        dark_mode: true,
      },
      layout: 'logomark',
    },
  ],
  events: {
    keystorechange: 'accountsChanged',
  },
};

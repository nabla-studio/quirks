'use client';

import {
  cosmoshub,
  cosmoshubAssetList,
  osmosis,
  osmosisAssetList,
} from '@nabla-studio/chain-registry';
import { generateConfig } from '@quirks/next';
import {
  xdefiExtension,
  keplrExtension,
  leapExtension,
  cosmostationExtension,
  universalWalletConnect,
  keplrMobile,
  leapMobile,
  shellExtension,
  leapMetamaskSnapExtension,
  trustExtension,
  trustMobile,
  daodaoCosmiframe,
} from '@quirks/wallets';

const config = generateConfig({
  wallets: [
    keplrExtension,
    leapExtension,
    cosmostationExtension,
    xdefiExtension,
    shellExtension,
    trustExtension,
    leapMetamaskSnapExtension,
    universalWalletConnect,
    keplrMobile,
    leapMobile,
    trustMobile,
    daodaoCosmiframe,
  ],
  chains: [osmosis, cosmoshub],
  assetsLists: [osmosisAssetList, cosmoshubAssetList],
  walletConnectOptions: {
    providerOpts: {
      logger: 'info',
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      metadata: {
        name: 'React App',
        description: 'React App for WalletConnect',
        url: 'https://walletconnect.com/',
        icons: ['https://avatars.githubusercontent.com/u/37784886'],
      },
    },
  },
});

export { config };

'use client';

import {
  chain as osmosis,
  assets as osmosisAssetList,
} from 'chain-registry/mainnet/osmosis';
import {
  chain as cosmoshub,
  assets as cosmoshubAssetList,
} from 'chain-registry/mainnet/cosmoshub';
import { generateConfig } from '@quirks/ssr';
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

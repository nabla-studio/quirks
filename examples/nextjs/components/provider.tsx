'use client';

import {
  cosmoshub,
  cosmoshubAssetList,
  osmosis,
  osmosisAssetList,
} from '@nabla-studio/chain-registry';
import { QuirksConfig, QuirksNextProvider } from '@quirks/react';
import { type Config } from '@quirks/store';
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
} from '@quirks/wallets';
import { PropsWithChildren } from 'react';

const config: Config = {
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
};

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QuirksNextProvider>
      <QuirksConfig config={config}>{children}</QuirksConfig>
    </QuirksNextProvider>
  );
};

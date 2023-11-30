'use client';

import { osmosis, osmosisAssetList } from '@nabla-studio/chain-registry';
import { QuirksConfig, QuirksNextProvider } from '@quirks/react';
import { type Config, ssrPersistOptions } from '@quirks/store';
import {
  xdefiExtension,
  keplrExtension,
  leapExtension,
  cosmostationExtension,
  universalWalletConnect,
} from '@quirks/wallets';
import { PropsWithChildren } from 'react';

const config: Config = {
  wallets: [
    keplrExtension,
    leapExtension,
    cosmostationExtension,
    xdefiExtension,
    universalWalletConnect,
  ],
  chains: [osmosis /* bitsong */],
  assetsLists: [osmosisAssetList /* bitsongAssetList */],
  persistOptions: ssrPersistOptions,
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
    <QuirksConfig config={config}>
      <QuirksNextProvider>{children}</QuirksNextProvider>
    </QuirksConfig>
  );
};

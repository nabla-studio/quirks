'use client';

import { osmosis, osmosisAssetList } from '@nabla-studio/chain-registry';
import { QuirksConfig, QuirksNextProvider } from '@quirks/react';
import { Config } from '@quirks/store';
import { KeplrWalletExtension } from '@quirks/wallets';
import { PropsWithChildren } from 'react';

const config: Config = {
  wallets: [new KeplrWalletExtension()],
  chains: [osmosis],
  assetsLists: [osmosisAssetList],
};

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QuirksConfig config={config}>
      <QuirksNextProvider>{children}</QuirksNextProvider>
    </QuirksConfig>
  );
};

'use client';

import { osmosis, osmosisAssetList } from '@nabla-studio/chain-registry';
import { QuirksConfig, QuirksNextProvider } from '@quirks/react';
import { type Config, ssrPersistOptions } from '@quirks/store';
import {
  xdefiExtension,
  keplrExtension,
  leapExtension,
  cosmostationExtension,
} from '@quirks/wallets';
import { PropsWithChildren } from 'react';

const config: Config = {
  wallets: [
    keplrExtension,
    leapExtension,
    cosmostationExtension,
    xdefiExtension,
  ],
  chains: [osmosis /* bitsong */],
  assetsLists: [osmosisAssetList /* bitsongAssetList */],
  persistOptions: ssrPersistOptions,
  sharedOptions: {
    enabled: true,
  },
};

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QuirksConfig config={config}>
      <QuirksNextProvider>{children}</QuirksNextProvider>
    </QuirksConfig>
  );
};

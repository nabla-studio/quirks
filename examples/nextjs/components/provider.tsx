'use client';

import {
  bitsong,
  bitsongAssetList,
  osmosis,
  osmosisAssetList,
} from '@nabla-studio/chain-registry';
import { QuirksConfig, QuirksNextProvider } from '@quirks/react';
import { type Config, ssrPersistOptions } from '@quirks/store';
import { keplrExtension, leapExtension } from '@quirks/wallets';
import { PropsWithChildren } from 'react';

const config: Config = {
  wallets: [keplrExtension, leapExtension],
  chains: [osmosis, bitsong],
  assetsLists: [osmosisAssetList, bitsongAssetList],
  persistOptions: ssrPersistOptions,
};

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QuirksConfig config={config}>
      <QuirksNextProvider>{children}</QuirksNextProvider>
    </QuirksConfig>
  );
};

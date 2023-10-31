'use client';

import { osmosis, osmosisAssetList } from '@nabla-studio/chain-registry';
import { createConfig } from '@quirks/store';
import { KeplrWalletExtension } from '@quirks/wallets';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useStore } from 'zustand';

const { store } = createConfig({
  wallets: [new KeplrWalletExtension()],
  chains: [osmosis],
  assetsLists: [osmosisAssetList],
});

export const useQuirks = () => useStore(store);

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    store.persist.rehydrate();
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return <>{children}</>;
};

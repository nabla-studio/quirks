'use client';

import { useChain, useConnect } from '@quirks/react';

export const TestChain = () => {
  const { connected } = useConnect();
  const { address, chain, assetsList } = useChain('osmosis');

  if (!connected) {
    return false;
  }

  return (
    <div>
      <div>Chain ID: {chain.chain_id}</div>
      <div>Assets List: {assetsList?.assets.length}</div>

      <div>Chain Name: Osmosis</div>

      <div>Address: {address}</div>
    </div>
  );
};

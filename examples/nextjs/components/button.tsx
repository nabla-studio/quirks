'use client';

import { useConfig } from '@quirks/react';

export const Button = () => {
  const store = useConfig();

  return <div onClick={() => store.setChains([])}>{store.chains.length}</div>;
};

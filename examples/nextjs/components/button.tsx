'use client';

import { useQuirks } from './provider';

export const Button = () => {
  const store = useQuirks();

  return <div>{store.wallets.length}</div>;
};

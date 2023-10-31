'use client';

import { useQuirks } from '@quirks/react';

export const Test = () => {
  const store = useQuirks();

  return <div>{store.use.chains().length}</div>;
};

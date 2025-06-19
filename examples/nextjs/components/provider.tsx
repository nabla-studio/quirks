'use client';

import { QuirksConfig } from '@quirks/react';
import { store } from '../config';
import { PropsWithChildren } from 'react';
import { initialStateWithCookie } from '@quirks/ssr';

export const Provider = ({
  children,
  cookie,
}: PropsWithChildren<{ cookie: string | undefined }>) => {
  const storeWithCookie = initialStateWithCookie(store, cookie);

  return <QuirksConfig state={storeWithCookie}>{children}</QuirksConfig>;
};

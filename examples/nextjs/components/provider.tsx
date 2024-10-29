'use client';

import { QuirksConfig } from '@quirks/react';
import { config } from '../config';
import { PropsWithChildren } from 'react';
import { initialStateWithCookie } from '@quirks/ssr';

export const Provider = ({
  children,
  cookie,
}: PropsWithChildren<{ cookie: string | undefined }>) => {
  const configWithCookie = initialStateWithCookie(config, cookie);

  return <QuirksConfig config={configWithCookie}>{children}</QuirksConfig>;
};

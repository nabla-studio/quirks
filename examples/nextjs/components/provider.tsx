'use client';

import { QuirksConfig } from '@quirks/react';
import { getConfig } from '../config';
import { PropsWithChildren } from 'react';

export const Provider = ({
  children,
  cookie,
}: PropsWithChildren<{ cookie: string | undefined }>) => {
  return <QuirksConfig store={getConfig(cookie)}>{children}</QuirksConfig>;
};

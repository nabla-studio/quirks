'use client';

import { QuirksConfig } from '@quirks/react';
import { config } from '../config';
import { PropsWithChildren } from 'react';

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return <QuirksConfig config={config}>{children}</QuirksConfig>;
};

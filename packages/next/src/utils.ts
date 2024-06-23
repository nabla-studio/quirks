import { getCookie } from 'cookies-next';
import type { OptionsType } from 'cookies-next/lib/types';
import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

/**
 * If we're running the code on server side we need to import next headers,
 * so in this way we can have the persistent values so this way we can have persistent values,
 * but we have to make sure that this code is only executed server-side,
 * client-side you cannot call the `cookies` function
 */
export const getCrossCookie = (name: string, options: OptionsType) => {
  let cookies: (() => ReadonlyRequestCookies) | undefined = undefined;

  if (typeof window === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const headers = require('next/headers');

    cookies = headers.cookies;
  }

  const cookieState = getCookie(name, { cookies, ...options });

  return cookieState;
};

import type { CookieAttributes } from 'js-cookie';

export const defaultCookiesOptions: CookieAttributes = {
  expires: 604800, // 7 days
  secure: true,
  sameSite: 'Strict',
};

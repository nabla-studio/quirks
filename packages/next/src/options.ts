import type { OptionsType } from 'cookies-next/lib/types';

export const defaultCookiesOptions: OptionsType = {
  maxAge: 604800, // 7 days
  secure: true,
  sameSite: true,
};

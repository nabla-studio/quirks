import {
  type Config,
  defaultPersistOptions,
  type AppState,
} from '@quirks/store';
import { parse, stringify } from 'superjson';
import { getCrossCookie } from './utils';
import { deleteCookie, setCookie } from 'cookies-next';
import type { StorageValue } from 'zustand/middleware';
import type { OptionsType } from 'cookies-next/lib/types';

export const defaultCookiesOptions: OptionsType = {
  maxAge: 604800, // 7 days
};

export const generateConfig = (
  config: Config,
  options: OptionsType = defaultCookiesOptions,
): Config => ({
  persistOptions: {
    ...defaultPersistOptions,
    getInitialState: () => {
      const cookieState = getCrossCookie(defaultPersistOptions.name, options);

      if (cookieState) {
        return (parse(cookieState) as StorageValue<AppState>).state;
      }

      return undefined;
    },
    storage: {
      getItem(name) {
        const cookieState = getCrossCookie(name, options);

        return cookieState ? parse(cookieState) : null;
      },
      setItem(name, value) {
        /**
         * Write operations are not permitted on the server side.
         *
         * https://github.com/andreizanik/cookies-next?tab=readme-ov-file#ssr---app-router-example
         */
        return setCookie(name, stringify(value), options);
      },
      removeItem(name) {
        /**
         * Delete operations are not permitted on the server side.
         *
         * https://github.com/andreizanik/cookies-next?tab=readme-ov-file#ssr---app-router-example
         */
        return deleteCookie(name, options);
      },
    },
    skipHydration: typeof window === 'undefined',
  },
  ...config,
});

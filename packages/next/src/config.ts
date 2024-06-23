import {
  type Config,
  defaultPersistOptions,
  type AppState,
} from '@quirks/store';
import { parse, stringify } from 'superjson';
import { getCrossCookie } from './utils';
import { deleteCookie, setCookie } from 'cookies-next';
import type { StorageValue } from 'zustand/middleware';

export const generateConfig = (config: Config): Config => ({
  persistOptions: {
    ...defaultPersistOptions,
    getInitialState: () => {
      const cookieState = getCrossCookie(defaultPersistOptions.name);

      if (cookieState) {
        return (parse(cookieState) as StorageValue<AppState>).state;
      }

      return undefined;
    },
    storage: {
      getItem(name) {
        const cookieState = getCrossCookie(name);

        return cookieState ? parse(cookieState) : null;
      },
      setItem(name, value) {
        /**
         * Write operations are not permitted on the server side.
         *
         * https://github.com/andreizanik/cookies-next?tab=readme-ov-file#ssr---app-router-example
         */
        if (typeof window !== 'undefined') {
          return setCookie(name, stringify(value));
        }
      },
      removeItem(name) {
        /**
         * Delete operations are not permitted on the server side.
         *
         * https://github.com/andreizanik/cookies-next?tab=readme-ov-file#ssr---app-router-example
         */
        if (typeof window !== 'undefined') {
          return deleteCookie(name);
        }
      },
    },
  },
  ...config,
});

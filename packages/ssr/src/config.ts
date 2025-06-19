import {
  type AppState,
  type Config,
  createConfig,
  defaultPersistOptions,
} from '@quirks/store';
import { parse, stringify } from 'superjson';
import { defaultCookiesOptions } from './options';
import Cookies from 'js-cookie';
import { StorageValue } from 'zustand/middleware';
import { getState } from './state';

export const generateConfig = (
  config: Config,
  cookiesOptions = defaultCookiesOptions,
  cookie?: string | undefined | null,
) => {
  const cookies = Cookies.withAttributes(cookiesOptions);

  const ssrConfig: Config = {
    persistOptions: {
      ...defaultPersistOptions,
      getInitialState() {
        return cookie ? getState(cookie).state : undefined;
      },
      storage: {
        getItem: (name) => {
          const state = cookies.get(name);

          return state ? (parse(state) as StorageValue<AppState>) : null;
        },
        setItem(name, value) {
          /**
           * Write operations are not permitted on the server side.
           *
           * https://github.com/andreizanik/cookies-next?tab=readme-ov-file#ssr---app-router-example
           */
          return cookies.set(name, stringify(value));
        },
        removeItem(name) {
          /**
           * Delete operations are not permitted on the server side.
           *
           * https://github.com/andreizanik/cookies-next?tab=readme-ov-file#ssr---app-router-example
           */
          return cookies.remove(name);
        },
      },
      skipHydration: typeof window === 'undefined',
      ...config.persistOptions,
    },
    ...config,
  };

  return createConfig(ssrConfig);
};

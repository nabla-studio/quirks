import { type Config, defaultPersistOptions } from '@quirks/store';
import { stringify } from 'superjson';
import { deleteCookie, setCookie } from 'cookies-next';
import { defaultCookiesOptions } from './options';
import { getState } from './state';

export const generateConfig = (
  config: Config,
  cookiesOptions = defaultCookiesOptions,
) => {
  const nextConfig: Config = {
    persistOptions: {
      ...defaultPersistOptions,
      getInitialState: () => getState()?.state,
      storage: {
        getItem: (name) =>
          getState({
            name,
            cookiesOptions,
          }) ?? null,
        setItem(name, value) {
          /**
           * Write operations are not permitted on the server side.
           *
           * https://github.com/andreizanik/cookies-next?tab=readme-ov-file#ssr---app-router-example
           */
          return setCookie(name, stringify(value), cookiesOptions);
        },
        removeItem(name) {
          /**
           * Delete operations are not permitted on the server side.
           *
           * https://github.com/andreizanik/cookies-next?tab=readme-ov-file#ssr---app-router-example
           */
          return deleteCookie(name, cookiesOptions);
        },
      },
      skipHydration: typeof window === 'undefined',
      ...config.persistOptions,
    },
    ...config,
  };

  return nextConfig;
};

import {
  type Config,
  createConfig,
  defaultPersistOptions,
} from '@quirks/store';
import { openDeeplink } from './utils';
import { MMKV } from 'react-native-mmkv';
import { createJSONStorage } from 'zustand/middleware';

export const storage = new MMKV({
  id: 'quirks',
});

export const generateConfig = (config: Config) => {
  const nativeConfig: Config = {
    ...config,
    persistOptions: {
      ...defaultPersistOptions,
      storage: createJSONStorage(() => ({
        getItem: (name) => storage.getString(name) ?? null,
        setItem: (name, value) => storage.set(name, value),
        removeItem: (name) => storage.delete(name),
      })),
      ...config.persistOptions,
    },
    walletConnectOptions: {
      openDeeplink,
      ...config.walletConnectOptions,
      providerOpts: {
        ...config.walletConnectOptions?.providerOpts,
      },
    },
  };

  return createConfig(nativeConfig);
};

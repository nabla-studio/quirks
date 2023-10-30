import type { StateStorage } from 'zustand/middleware';

export const noopStorage: StateStorage = {
  getItem: () => '',
  setItem: () => {},
  removeItem: () => {},
};

export type storageKeys = 'localStorage' | 'sessionStorage';

export const createSSRStorage = (key: storageKeys): StateStorage => {
  return typeof window !== 'undefined' && window[key]
    ? window[key]
    : noopStorage;
};

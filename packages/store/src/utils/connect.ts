import { type Wallet } from '@quirks/core';
import { store } from '../store';

export const enable = (props?: { wallet?: Wallet; chainIds?: string[] }) => {
  const state = store.getState();

  return state.enable(props);
};

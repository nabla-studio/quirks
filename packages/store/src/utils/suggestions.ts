import { SuggestChain, SuggestToken, assertIsDefined } from '@quirks/core';
import { store } from '../store';

export const suggestChains = (walletName: string, chains: SuggestChain[]) => {
  const state = store.getState();

  const wallet = state.wallets.find((el) => el.options.name === walletName);

  assertIsDefined(wallet);

  return wallet.suggestChains(chains);
};

export const suggestTokens = (walletName: string, tokens: SuggestToken[]) => {
  const state = store.getState();

  const wallet = state.wallets.find((el) => el.options.name === walletName);

  assertIsDefined(wallet);

  return wallet.suggestTokens(tokens);
};

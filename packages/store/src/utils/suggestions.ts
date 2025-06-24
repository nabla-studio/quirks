import {
  type SuggestChain,
  type SuggestToken,
  assertIsDefined,
} from '@quirks/core';
import type { QuirksConfigStore } from '../store';

export const suggestChains = (
  store: QuirksConfigStore,
  walletName: string,
  chains: SuggestChain[],
) => {
  const state = store.getState();

  const wallet = state.wallets.find(
    (el) => el.options.wallet_name === walletName,
  );

  assertIsDefined(wallet);

  return wallet.suggestChains(chains);
};

export const suggestTokens = (
  store: QuirksConfigStore,
  walletName: string,
  tokens: SuggestToken[],
) => {
  const state = store.getState();

  const wallet = state.wallets.find(
    (el) => el.options.wallet_name === walletName,
  );

  assertIsDefined(wallet);

  return wallet.suggestTokens(tokens);
};

import {
  type SuggestChain,
  type SuggestToken,
  assertIsDefined,
} from '@quirks/core';
import type { QuirksConfigState } from '../store';

export const suggestChains = (
  store: QuirksConfigState,
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
  store: QuirksConfigState,
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

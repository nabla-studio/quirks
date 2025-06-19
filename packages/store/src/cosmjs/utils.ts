import { assertIsDefined } from '@quirks/core';
import type { QuirksConfigState } from '../store';

/**
 * Return the current wallet instance
 *
 * @returns Wallet<unknown, unknown>
 */
export function getWallet(store: QuirksConfigState) {
  const state = store.getState();

  return state.wallet;
}

/**
 * Get current account address by chainName
 *
 * @param chainName
 * @returns string
 */
export function getAddress(store: QuirksConfigState, chainName: string) {
  const state = store.getState();

  const chain = state.chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const sender = state.getAddress(chain.chain_id);
  assertIsDefined(sender);

  return sender;
}

export function getChain(store: QuirksConfigState, chainName: string) {
  const chain = store
    .getState()
    .chains.find((el) => el.chain_name === chainName);

  return chain;
}

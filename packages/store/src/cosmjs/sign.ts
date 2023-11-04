import type { StdFee } from '@cosmjs/amino';
import type { EncodeObject } from '@cosmjs/proto-signing';
import { store } from '../store';
import { assertIsDefined, estimateFee, getEndpoint } from '@quirks/core';
import { SigningStargateClient } from '@cosmjs/stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import type { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

/**
 * Why is this part outside the store?
 *
 * It is useful for it to be external since it depends on the store,
 * but it doesn't have to be reactive, it also allows us to pass these functions outside of a react component,
 * for example if I want to create a promise that signs a message and then I want to give this promise to a library like tanstack-query
 */

export const getAddress = (chainName: string) => {
  const chain = store
    .getState()
    .chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const sender = store.getState().getAddress(chain.chain_id);
  assertIsDefined(sender);

  return sender;
};

/**
 * Sign a TX using CosmJS Stargate Client
 *
 * @param chainName
 * @param messages
 * @param fee
 * @param memo
 * @returns TxRaw
 */
export const sign = async (
  chainName: string,
  messages: EncodeObject[],
  fee: StdFee | 'auto' = 'auto',
  memo?: string,
): Promise<TxRaw> => {
  const state = store.getState();
  assertIsDefined(state.wallet);

  const chain = store
    .getState()
    .chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const endpoint = getEndpoint(chainName, store.getState().chains);

  const sender = getAddress(chainName);

  const offlineSigner = await state.wallet.getOfflineSignerAuto(
    chain.chain_id,
    store.getState().signOptions,
  );

  const client = await SigningStargateClient.connectWithSigner(
    endpoint.rpc.address,
    offlineSigner,
  );

  if (fee === 'auto') {
    // TODO: Add dynamic gasPrice
    fee = await estimateFee(client, sender, messages, '1uosmo', memo);
  }

  return client.sign(sender, messages, fee, memo ?? '');
};

/**
 * Sign a TX using CosmJS Stargate Client
 *
 * @param chainName
 * @param messages
 * @param fee
 * @param memo
 * @returns TxRaw
 */
export const signCW = async (
  chainName: string,
  messages: EncodeObject[],
  fee: StdFee | 'auto' = 'auto',
  memo?: string,
): Promise<TxRaw> => {
  const state = store.getState();
  assertIsDefined(state.wallet);

  const chain = store
    .getState()
    .chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const endpoint = getEndpoint(chainName, store.getState().chains);

  const sender = getAddress(chainName);

  const offlineSigner = await state.wallet.getOfflineSignerAuto(
    chain.chain_id,
    store.getState().signOptions,
  );

  const client = await SigningCosmWasmClient.connectWithSigner(
    endpoint.rpc.address,
    offlineSigner,
  );

  if (fee === 'auto') {
    // TODO: Add dynamic gasPrice
    fee = await estimateFee(client, sender, messages, '1uosmo', memo);
  }

  return client.sign(sender, messages, fee, memo ?? '');
};
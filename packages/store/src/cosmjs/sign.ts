import type { StdFee } from '@cosmjs/amino';
import type { EncodeObject } from '@cosmjs/proto-signing';
import { store } from '../store';
import {
  assertIsDefined,
  estimateFee,
  getEndpoint,
  getGasPrice,
} from '@quirks/core';
import type { SigningStargateClientOptions } from '@cosmjs/stargate';
import type { SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import type { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

/**
 * Why is this part outside the store?
 *
 * It is useful for it to be external since it depends on the store,
 * but it doesn't have to be reactive, it also allows us to pass these functions outside of a react component,
 * for example if I want to create a promise that signs a message and then I want to give this promise to a library like tanstack-query
 */

/**
 * Get current account address by chainName
 *
 * @param chainName
 * @returns string
 */
export const getAddress = (chainName: string) => {
  const state = store.getState();

  const chain = state.chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const sender = state.getAddress(chain.chain_id);
  assertIsDefined(sender);

  return sender;
};

export const getChain = (chainName: string) => {
  const chain = store
    .getState()
    .chains.find((el) => el.chain_name === chainName);

  return chain;
};

/**
 * Allows you to broadcast a txraw
 *
 * @param chainName
 * @param txRaw
 * @param timeoutMs
 * @param pollIntervalMs
 * @returns Promise<DeliverTxResponse>
 */
export const broadcast = async (
  chainName: string,
  txRaw: TxRaw,
  timeoutMs = 60_000,
  pollIntervalMs = 3_000,
) => {
  const state = store.getState();

  const chain = store
    .getState()
    .chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const endpoint = getEndpoint(chainName, state.chains);

  let clientOptions: SigningStargateClientOptions | undefined = undefined;

  const stargate = state.signerOptions?.stargate;

  if (stargate) {
    clientOptions = await stargate(chain);
  }

  const StargateClient = (await import('@cosmjs/stargate')).StargateClient;

  const client = await StargateClient.connect(
    endpoint.rpc.address,
    clientOptions,
  );

  const TxRaw = (await import('cosmjs-types/cosmos/tx/v1beta1/tx')).TxRaw;

  const txBytes = TxRaw.encode(txRaw).finish();

  return client.broadcastTx(txBytes, timeoutMs, pollIntervalMs);
};

/**
 * allows you to broadcast a txraw, but in synchronous mode,
 * it does not stay polled but directly returns the hash of the transaction.
 *
 * @param chainName
 * @param txRaw
 * @param timeoutMs
 * @param pollIntervalMs
 * @returns string
 */
export const broadcastSync = async (chainName: string, txRaw: TxRaw) => {
  const state = store.getState();

  const chain = state.chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const endpoint = getEndpoint(chainName, state.chains);

  let clientOptions: SigningStargateClientOptions | undefined = undefined;

  const stargate = state.signerOptions?.stargate;

  if (stargate) {
    clientOptions = await stargate(chain);
  }

  const StargateClient = (await import('@cosmjs/stargate')).StargateClient;

  const client = await StargateClient.connect(
    endpoint.rpc.address,
    clientOptions,
  );

  const TxRaw = (await import('cosmjs-types/cosmos/tx/v1beta1/tx')).TxRaw;

  const txBytes = TxRaw.encode(txRaw).finish();

  return client.broadcastTxSync(txBytes);
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

  const chain = state.chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const endpoint = getEndpoint(chainName, state.chains);

  const sender = getAddress(chainName);

  const offlineSigner = await state.wallet.getOfflineSignerAuto(
    chain.chain_id,
    state.signOptions,
  );

  let clientOptions: SigningStargateClientOptions | undefined = undefined;

  const signingStargate = state.signerOptions?.signingStargate;

  if (signingStargate) {
    clientOptions = await signingStargate(chain);
  }

  const SigningStargateClient = (await import('@cosmjs/stargate'))
    .SigningStargateClient;

  const client = await SigningStargateClient.connectWithSigner(
    endpoint.rpc.address,
    offlineSigner,
    clientOptions,
  );

  if (fee === 'auto') {
    let gasPrice = clientOptions?.gasPrice;

    if (!gasPrice) {
      gasPrice = await getGasPrice(chain);
    }

    fee = await estimateFee(client, sender, messages, gasPrice, memo);
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

  const endpoint = getEndpoint(chainName, state.chains);

  const sender = getAddress(chainName);

  const offlineSigner = await state.wallet.getOfflineSignerAuto(
    chain.chain_id,
    state.signOptions,
  );

  let clientOptions: SigningCosmWasmClientOptions | undefined = undefined;

  const signingCosmwasm = state.signerOptions?.signingCosmwasm;

  if (signingCosmwasm) {
    clientOptions = await signingCosmwasm(chain);
  }

  const SigningCosmWasmClient = (await import('@cosmjs/cosmwasm-stargate'))
    .SigningCosmWasmClient;

  const client = await SigningCosmWasmClient.connectWithSigner(
    endpoint.rpc.address,
    offlineSigner,
    clientOptions,
  );

  if (fee === 'auto') {
    let gasPrice = clientOptions?.gasPrice;

    if (!gasPrice) {
      gasPrice = await getGasPrice(chain);
    }

    fee = await estimateFee(client, sender, messages, gasPrice, memo);
  }

  return client.sign(sender, messages, fee, memo ?? '');
};

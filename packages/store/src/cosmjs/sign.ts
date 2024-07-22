import type { StdFee } from '@cosmjs/amino';
import type { EncodeObject } from '@cosmjs/proto-signing';
import { store } from '../store';
import {
  assertIsDefined,
  estimateFee,
  getEndpoint,
  getGasPrice,
  openWCDeeplink,
} from '@quirks/core';
import type {
  SigningStargateClientOptions,
  SigningStargateClient,
  SignerData,
} from '@cosmjs/stargate';
import type {
  SigningCosmWasmClientOptions,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';
import type { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type { SignerType } from '../types';

/**
 * Why is this part outside the store?
 *
 * It is useful for it to be external since it depends on the store,
 * but it doesn't have to be reactive, it also allows us to pass these functions outside of a react component,
 * for example if I want to create a promise that signs a message and then I want to give this promise to a library like tanstack-query
 */

/**
 * Return the current wallet instance
 *
 * @returns Wallet<unknown, unknown>
 */
export const getWallet = () => {
  const state = store.getState();

  return state.wallet;
};

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

  const stargateOptions = state.signerOptions?.stargate;

  if (stargateOptions) {
    clientOptions = await stargateOptions(chain);
  }

  const stargate = await import('@cosmjs/stargate');
  const StargateClient =
    stargate.StargateClient ?? stargate.default.StargateClient;

  const client = await StargateClient.connect(
    endpoint.rpc.address,
    clientOptions,
  );

  const cosmjsTX = await import('cosmjs-types/cosmos/tx/v1beta1/tx');
  const TxRaw = cosmjsTX.TxRaw ?? cosmjsTX.default.TxRaw;

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

  const stargateOptions = state.signerOptions?.stargate;

  if (stargateOptions) {
    clientOptions = await stargateOptions(chain);
  }

  const stargate = await import('@cosmjs/stargate');
  const StargateClient =
    stargate.StargateClient ?? stargate.default.StargateClient;

  const client = await StargateClient.connect(
    endpoint.rpc.address,
    clientOptions,
  );

  const cosmjsTX = await import('cosmjs-types/cosmos/tx/v1beta1/tx');
  const TxRaw = cosmjsTX.TxRaw ?? cosmjsTX.default.TxRaw;

  const txBytes = TxRaw.encode(txRaw).finish();

  return client.broadcastTxSync(txBytes);
};

export const getOfflineSigner = (
  chainId: string,
  signerType: SignerType = 'auto',
) => {
  const state = store.getState();
  assertIsDefined(state.wallet, 'wallet is undefined');

  switch (signerType) {
    case 'auto':
      return state.wallet.getOfflineSignerAuto(chainId, state.signOptions);
    case 'amino':
      return state.wallet.getOfflineSignerOnlyAmino(chainId, state.signOptions);
    case 'direct':
      return state.wallet.getOfflineSigner(chainId, state.signOptions);
  }
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
  signerType: SignerType = 'auto',
  memo?: string,
  explicitSignerData?: SignerData,
  timeoutHeight?: bigint,
  feeMultiplier: number = 1.4,
): Promise<TxRaw> => {
  const state = store.getState();
  assertIsDefined(state.wallet, 'wallet is undefined');

  const chain = state.chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const endpoint = getEndpoint(chainName, state.chains);

  const sender = getAddress(chainName);

  const offlineSigner = await getOfflineSigner(chain.chain_id, signerType);

  let clientOptions: SigningStargateClientOptions | undefined = undefined;

  const signingStargate = state.signerOptions?.signingStargate;

  if (signingStargate) {
    clientOptions = await signingStargate(chain);
  }

  const stargate = await import('@cosmjs/stargate');
  const SigningStargateClient =
    stargate.SigningStargateClient ?? stargate.default.SigningStargateClient;

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

    fee = await estimateFee(
      client,
      sender,
      messages,
      gasPrice,
      memo,
      feeMultiplier,
    );
  }

  openWCDeeplink(state.wallet, state.openDeeplink);

  return client.sign(
    sender,
    messages,
    fee,
    memo ?? '',
    explicitSignerData,
    timeoutHeight,
  );
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
  signerType: SignerType = 'auto',
  memo?: string,
  explicitSignerData?: SignerData,
  timeoutHeight?: bigint,
  feeMultiplier: number = 1.4,
): Promise<TxRaw> => {
  const state = store.getState();
  assertIsDefined(state.wallet);

  const chain = store
    .getState()
    .chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const endpoint = getEndpoint(chainName, state.chains);

  const sender = getAddress(chainName);

  const offlineSigner = await getOfflineSigner(chain.chain_id, signerType);

  let clientOptions: SigningCosmWasmClientOptions | undefined = undefined;

  const signingCosmwasm = state.signerOptions?.signingCosmwasm;

  if (signingCosmwasm) {
    clientOptions = await signingCosmwasm(chain);
  }

  const stargate = await import('@cosmjs/cosmwasm-stargate');
  const SigningCosmWasmClient =
    stargate.SigningCosmWasmClient ?? stargate.default.SigningCosmWasmClient;

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

    fee = await estimateFee(
      client,
      sender,
      messages,
      gasPrice,
      memo,
      feeMultiplier,
    );
  }

  openWCDeeplink(state.wallet, state.openDeeplink);

  return client.sign(
    sender,
    messages,
    fee,
    memo ?? '',
    explicitSignerData,
    timeoutHeight,
  );
};

export const signArbitrary = (
  chainId: string,
  signer: string,
  data: string | Uint8Array,
) => {
  const state = store.getState();

  assertIsDefined(state.wallet);

  openWCDeeplink(state.wallet, state.openDeeplink);

  return state.wallet.signArbitrary(chainId, signer, data);
};

/**
 * Return an instance of CosmJS Signing Stargate Client
 *
 * @param chainName
 * @param signerType
 * @returns SigningStargateClient
 */
export const getSigningStargateClient = async (
  chainName: string,
  signerType: SignerType = 'auto',
): Promise<SigningStargateClient> => {
  const state = store.getState();
  assertIsDefined(state.wallet, 'wallet is undefined');

  const chain = state.chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const endpoint = getEndpoint(chainName, state.chains);

  const offlineSigner = await getOfflineSigner(chain.chain_id, signerType);

  let clientOptions: SigningStargateClientOptions | undefined = undefined;

  const signingStargate = state.signerOptions?.signingStargate;

  if (signingStargate) {
    clientOptions = await signingStargate(chain);
  }

  const stargate = await import('@cosmjs/stargate');
  const SigningStargateClient =
    stargate.SigningStargateClient ?? stargate.default.SigningStargateClient;

  const client = await SigningStargateClient.connectWithSigner(
    endpoint.rpc.address,
    offlineSigner,
    clientOptions,
  );

  return client;
};

/**
 * Return an instance of CosmJS Signing CosmWasm Stargate Client
 *
 * @param chainName
 * @param signerType
 * @returns SigningStargateClient
 */
export const getSigningCosmWasmClient = async (
  chainName: string,
  signerType: SignerType = 'auto',
): Promise<SigningCosmWasmClient> => {
  const state = store.getState();
  assertIsDefined(state.wallet);

  const chain = store
    .getState()
    .chains.find((el) => el.chain_name === chainName);
  assertIsDefined(chain);

  const endpoint = getEndpoint(chainName, state.chains);

  const offlineSigner = await getOfflineSigner(chain.chain_id, signerType);

  let clientOptions: SigningCosmWasmClientOptions | undefined = undefined;

  const signingCosmwasm = state.signerOptions?.signingCosmwasm;

  if (signingCosmwasm) {
    clientOptions = await signingCosmwasm(chain);
  }

  const stargate = await import('@cosmjs/cosmwasm-stargate');
  const SigningCosmWasmClient =
    stargate.SigningCosmWasmClient ?? stargate.default.SigningCosmWasmClient;

  const client = await SigningCosmWasmClient.connectWithSigner(
    endpoint.rpc.address,
    offlineSigner,
    clientOptions,
  );

  return client;
};

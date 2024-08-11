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
import { getAddress, getChain } from './utils';
import type { Chain } from '@chain-registry/types';

export function getOfflineSigner(
  chainId: string,
  signerType: SignerType = 'auto',
) {
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
}

export async function sign(
  chainOrName: string,
  messages: EncodeObject[],
  fee?: StdFee | 'auto',
  signerType?: SignerType,
  memo?: string,
  explicitSignerData?: SignerData,
  timeoutHeight?: bigint,
  feeMultiplier?: number,
): Promise<TxRaw>;

/**
 * Allow sign using external chain object data, useful for use cases
 * where you don't have all the chains array from the beginning.
 */
export async function sign(
  chainOrName: Chain,
  messages: EncodeObject[],
  fee?: StdFee | 'auto',
  signerType?: SignerType,
  memo?: string,
  explicitSignerData?: SignerData,
  timeoutHeight?: bigint,
  feeMultiplier?: number,
  signSender?: string,
): Promise<TxRaw>;

/**
 * Sign a TX using CosmJS Stargate Client
 *
 * @param chainName
 * @param messages
 * @param fee
 * @param memo
 * @returns TxRaw
 */
export async function sign(
  chainOrName: string | Chain,
  messages: EncodeObject[],
  fee: StdFee | 'auto' = 'auto',
  signerType: SignerType = 'auto',
  memo?: string,
  explicitSignerData?: SignerData,
  timeoutHeight?: bigint,
  feeMultiplier: number = 1.4,
  signSender?: string,
): Promise<TxRaw> {
  const state = store.getState();
  assertIsDefined(state.wallet, 'wallet is undefined');

  const chain =
    typeof chainOrName === 'string' ? getChain(chainOrName) : chainOrName;
  assertIsDefined(chain);

  const endpoint =
    typeof chainOrName === 'string'
      ? getEndpoint(chainOrName, state.chains)
      : getEndpoint(chainOrName);

  const sender =
    typeof chainOrName === 'string' ? getAddress(chainOrName) : signSender;
  assertIsDefined(sender);

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
}

export async function signCW(
  chainOrName: string,
  messages: EncodeObject[],
  fee?: StdFee | 'auto',
  signerType?: SignerType,
  memo?: string,
  explicitSignerData?: SignerData,
  timeoutHeight?: bigint,
  feeMultiplier?: number,
): Promise<TxRaw>;

export async function signCW(
  chainOrName: Chain,
  messages: EncodeObject[],
  fee?: StdFee | 'auto',
  signerType?: SignerType,
  memo?: string,
  explicitSignerData?: SignerData,
  timeoutHeight?: bigint,
  feeMultiplier?: number,
  signSender?: string,
): Promise<TxRaw>;

/**
 * Sign a TX using CosmJS Stargate Client
 *
 * @param chainName
 * @param messages
 * @param fee
 * @param memo
 * @returns TxRaw
 */
export async function signCW(
  chainOrName: string | Chain,
  messages: EncodeObject[],
  fee: StdFee | 'auto' = 'auto',
  signerType: SignerType = 'auto',
  memo?: string,
  explicitSignerData?: SignerData,
  timeoutHeight?: bigint,
  feeMultiplier: number = 1.4,
  signSender?: string,
): Promise<TxRaw> {
  const state = store.getState();
  assertIsDefined(state.wallet);

  const chain =
    typeof chainOrName === 'string' ? getChain(chainOrName) : chainOrName;
  assertIsDefined(chain);

  const endpoint =
    typeof chainOrName === 'string'
      ? getEndpoint(chainOrName, state.chains)
      : getEndpoint(chainOrName);

  const sender =
    typeof chainOrName === 'string' ? getAddress(chainOrName) : signSender;
  assertIsDefined(sender);

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
}

export function signArbitrary(
  chainId: string,
  signer: string,
  data: string | Uint8Array,
) {
  const state = store.getState();

  assertIsDefined(state.wallet);

  openWCDeeplink(state.wallet, state.openDeeplink);

  return state.wallet.signArbitrary(chainId, signer, data);
}

export async function getSigningStargateClient(
  chainOrName: string,
  signerType: SignerType,
): Promise<SigningStargateClient>;

export async function getSigningStargateClient(
  chainOrName: Chain,
  signerType: SignerType,
): Promise<SigningStargateClient>;

/**
 * Return an instance of CosmJS Signing Stargate Client
 *
 * @param chainName
 * @param signerType
 * @returns SigningStargateClient
 */
export async function getSigningStargateClient(
  chainOrName: string | Chain,
  signerType: SignerType = 'auto',
): Promise<SigningStargateClient> {
  const state = store.getState();
  assertIsDefined(state.wallet, 'wallet is undefined');

  const chain =
    typeof chainOrName === 'string' ? getChain(chainOrName) : chainOrName;
  assertIsDefined(chain);

  const endpoint =
    typeof chainOrName === 'string'
      ? getEndpoint(chainOrName, state.chains)
      : getEndpoint(chainOrName);

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
}

export async function getSigningCosmWasmClient(
  chainOrName: string,
  signerType: SignerType,
): Promise<SigningCosmWasmClient>;

export async function getSigningCosmWasmClient(
  chainOrName: Chain,
  signerType: SignerType,
): Promise<SigningCosmWasmClient>;

/**
 * Return an instance of CosmJS Signing CosmWasm Stargate Client
 *
 * @param chainName
 * @param signerType
 * @returns SigningStargateClient
 */
export async function getSigningCosmWasmClient(
  chainOrName: string | Chain,
  signerType: SignerType = 'auto',
): Promise<SigningCosmWasmClient> {
  const state = store.getState();
  assertIsDefined(state.wallet);

  const chain =
    typeof chainOrName === 'string' ? getChain(chainOrName) : chainOrName;
  assertIsDefined(chain);

  const endpoint =
    typeof chainOrName === 'string'
      ? getEndpoint(chainOrName, state.chains)
      : getEndpoint(chainOrName);

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
}

import { store } from '../store';
import { assertIsDefined, getEndpoint } from '@quirks/core';
import type {
  DeliverTxResponse,
  SigningStargateClientOptions,
} from '@cosmjs/stargate';
import type { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type { Chain } from '@nabla-studio/chain-registry';
import { getChain } from './utils';

export async function broadcast(
  chainOrName: string,
  txRaw: TxRaw,
  timeoutMs?: number,
  pollIntervalMs?: number,
): Promise<DeliverTxResponse>;

export async function broadcast(
  chainOrName: Chain,
  txRaw: TxRaw,
  timeoutMs?: number,
  pollIntervalMs?: number,
): Promise<DeliverTxResponse>;

/**
 * Allows you to broadcast a txraw
 *
 * @param chainName
 * @param txRaw
 * @param timeoutMs
 * @param pollIntervalMs
 * @returns Promise<DeliverTxResponse>
 */
export async function broadcast(
  chainOrName: string | Chain,
  txRaw: TxRaw,
  timeoutMs = 60_000,
  pollIntervalMs = 3_000,
) {
  const state = store.getState();

  const chain =
    typeof chainOrName === 'string' ? getChain(chainOrName) : chainOrName;
  assertIsDefined(chain);

  const endpoint =
    typeof chainOrName === 'string'
      ? getEndpoint(chainOrName, state.chains)
      : getEndpoint(chainOrName);

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
}

export async function broadcastSync(
  chainOrName: string,
  txRaw: TxRaw,
): Promise<string>;

export async function broadcastSync(
  chainOrName: Chain,
  txRaw: TxRaw,
): Promise<string>;

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
export async function broadcastSync(chainOrName: string | Chain, txRaw: TxRaw) {
  const state = store.getState();

  const chain =
    typeof chainOrName === 'string' ? getChain(chainOrName) : chainOrName;
  assertIsDefined(chain);

  const endpoint =
    typeof chainOrName === 'string'
      ? getEndpoint(chainOrName, state.chains)
      : getEndpoint(chainOrName);

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
}

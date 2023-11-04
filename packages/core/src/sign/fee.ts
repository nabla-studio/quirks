import type { EncodeObject } from '@cosmjs/proto-signing';
import {
  calculateFee,
  type GasPrice,
  SigningStargateClient,
} from '@cosmjs/stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { assertIsDefined } from '../utils';

export const estimateFee = async (
  client: SigningStargateClient | SigningCosmWasmClient,
  sender: string,
  messages: EncodeObject[],
  gasPrice?: string | GasPrice,
  memo?: string,
  multiplier = 1.3,
) => {
  assertIsDefined(
    gasPrice,
    'Gas price must be set in the client options when auto gas is used.',
  );

  const gasEstimation = await client.simulate(sender, messages, memo);

  return calculateFee(Math.round(gasEstimation * multiplier), gasPrice);
};

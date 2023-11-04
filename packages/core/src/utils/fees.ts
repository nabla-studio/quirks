import type { EncodeObject } from '@cosmjs/proto-signing';
import { calculateFee, type GasPrice } from '@cosmjs/stargate';
import { assertIsDefined } from './asserts';
import type { SigningSimulatorClient } from '../types';

export const estimateFee = async (
  client: SigningSimulatorClient,
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

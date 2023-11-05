import type { EncodeObject } from '@cosmjs/proto-signing';
import { calculateFee, GasPrice } from '@cosmjs/stargate';
import { assertIsDefined } from './asserts';
import type { SigningSimulatorClient } from '../types';
import type { Chain } from '@nabla-studio/chain-registry';

/**
 * Retrieve chain gas price so we can use fee auto.
 *
 * @param chain
 * @param feeDenom ex. uosmo
 * @returns
 */
export const getGasPrice = (chain: Chain, feeDenom?: string) => {
  let gasPrice: GasPrice | undefined = undefined;

  if (chain.fees && chain.fees.fee_tokens.length > 0) {
    let feeToken = undefined;

    if (feeToken) {
      feeToken = chain.fees.fee_tokens.find(
        (token) => token.denom === feeDenom,
      );
    } else {
      chain.fees.fee_tokens[0];
    }

    const averageGasPrice = feeToken?.average_gas_price;
    const denom = feeToken?.denom;

    if (averageGasPrice && denom && !denom.startsWith('ibc/')) {
      gasPrice = GasPrice.fromString(`${averageGasPrice}${denom}`);
    } else {
      gasPrice = GasPrice.fromString(`1${denom}`);
    }
  }

  return gasPrice;
};

export const estimateFee = async (
  client: SigningSimulatorClient,
  sender: string,
  messages: EncodeObject[],
  gasPrice?: string | GasPrice,
  memo?: string,
  multiplier = 1.4,
) => {
  assertIsDefined(
    gasPrice,
    'Gas price must be set in the client options when auto gas is used.',
  );

  const gasEstimation = await client.simulate(sender, messages, memo);

  return calculateFee(Math.round(gasEstimation * multiplier), gasPrice);
};

import type { Bech32Config } from '@keplr-wallet/types';

/**
 * Replace for @keplr-wallet/cosmos, we use this class insie @chain-registry/keplr,
 * but @keplr-wallet/cosmos depends on Buffer from node and this create problem on web enviroment
 */
export class Bech32Address {
  /**
   * Returns bech32 address format as required by Keplr and other wallets
   *
   * @param prefix Chain bech32 prefix
   * @returns a valid `Bech32Config`
   */
  static defaultBech32Config = (
    prefix: string,
    validatorPrefix: string = 'val',
    consensusPrefix: string = 'cons',
    publicPrefix: string = 'pub',
    operatorPrefix: string = 'oper',
  ): Bech32Config => ({
    bech32PrefixAccAddr: prefix,
    bech32PrefixAccPub: `${prefix}${publicPrefix}`,
    bech32PrefixValAddr: `${prefix}${validatorPrefix}${operatorPrefix}`,
    bech32PrefixValPub: `${prefix}${validatorPrefix}${operatorPrefix}${publicPrefix}`,
    bech32PrefixConsAddr: `${prefix}${validatorPrefix}${consensusPrefix}`,
    bech32PrefixConsPub: `${prefix}${validatorPrefix}${consensusPrefix}${publicPrefix}`,
  });
}

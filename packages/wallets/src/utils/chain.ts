import type { Bech32Config } from '@keplr-wallet/types';
import type { Chain } from '@nabla-studio/chain-registry';

export const getRpc = (chain: Chain): string =>
  chain.apis?.rpc?.[0]?.address ?? '';

export const getRest = (chain: Chain): string =>
  chain.apis?.rest?.[0]?.address ?? '';

export const getExplr = (chain: Chain): string =>
  chain.explorers?.[0]?.url ?? '';

/**
 * Returns bech32 address format as required by Keplr and other wallets
 *
 * @param prefix Chain bech32 prefix
 * @returns a valid `Bech32Config`
 */
export const getBech32Config = (
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

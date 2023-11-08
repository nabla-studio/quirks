import type { AddChainParams } from '@cosmostation/extension-client/types/message';
import type { Asset, AssetLists, Chain } from '@nabla-studio/chain-registry';

const getRest = (chain: Chain): string =>
  chain.apis?.rest ? chain.apis.rest[0].address : '';

export const chainRegistryChainToCosmostation = (
  chain: Chain,
  assets: AssetLists[],
  options: {
    getRestEndpoint: (chain: Chain) => string;
  } = {
    getRestEndpoint: getRest,
  },
): AddChainParams => {
  if (!options.getRestEndpoint) options.getRestEndpoint = getRest;

  const chainAssets =
    assets.find((asset) => asset.chain_name === chain.chain_name)?.assets || [];

  const stakingDenoms =
    chain.staking?.staking_tokens.map<string>(
      (stakingToken) => stakingToken.denom,
    ) || [];

  const currencies = chainAssets.map((currency: Asset) => {
    return {
      displayDenom: currency.symbol,
      baseDenom: currency.base,
      coinGeckoId: currency.coingecko_id,
      imageURL: currency.logo_URIs?.svg ?? currency.logo_URIs?.png,
    };
  });

  const stakeCurrency =
    currencies.find((currency) => stakingDenoms.includes(currency.baseDenom)) ??
    currencies[0];

  const gasPriceStep = {
    low: chain.fees?.fee_tokens?.[0]?.low_gas_price ?? 0.01,
    average: chain.fees?.fee_tokens?.[0]?.average_gas_price ?? 0.025,
    high: chain.fees?.fee_tokens?.[0]?.high_gas_price ?? 0.04,
  };

  const chainInfo: AddChainParams = {
    chainId: chain.chain_id,
    chainName: chain.pretty_name ?? '',
    restURL: options.getRestEndpoint(chain),
    imageURL: stakeCurrency.imageURL,
    baseDenom: stakeCurrency.baseDenom,
    displayDenom: stakeCurrency.displayDenom,
    coinType: chain.slip44 ? chain.slip44.toString() : '',
    addressPrefix: chain.bech32_prefix,
    coinGeckoId: currencies[0].coinGeckoId,
    gasRate: {
      // optional (default: { average: '0.025', low: '0.0025', tiny: '0.00025' })
      average: gasPriceStep.average.toString(),
      low: gasPriceStep.low.toString(),
      tiny: '0.00025',
    },
  };

  return chainInfo;
};

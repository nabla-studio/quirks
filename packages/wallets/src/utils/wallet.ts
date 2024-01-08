import type { Asset, AssetLists, Chain } from '@nabla-studio/chain-registry';
import type { ChainInfo, Currency, FeeCurrency } from '@keplr-wallet/types';
import type { ChainInfoOptions } from '../types';
import { getBech32Config, getExplr, getRest, getRpc } from './chain';
import { parseVer, satisfies } from './semver';

/**
 * Unless otherwise specified, the first elements of each array are retrieved by default
 */
export const defaultChainInfoOptions: ChainInfoOptions = {
  getRpcEndpoint: getRpc,
  getRestEndpoint: getRest,
  getExplorer: getExplr,
};

export const defaultGasPriceStep: NonNullable<FeeCurrency['gasPriceStep']> = {
  low: 0.01,
  average: 0.025,
  high: 0.04,
};

export const cosmosFeatures = {
  '>=0.40.0': 'stargate',
  '>=0.43.0': 'no-legacy-stdTx',
  '>=0.45.0': 'ibc-go',
};

export const cosmwasmFeatures = {
  '>=0.24.0': 'wasmd_0.24+',
};

/**
 * The first version of the following utility is derived by a code which lays under an [MIT license](./Cosmology-LICENSE).
 *
 * @param chain An object that contains the chain configuration, can be retrieved from the chain-registry (@nabla-studio/chain-registry)
 * @param assets An array containing objects represented the token information of the chain passed before can be retrieved from the chain-registry
 * @param options An object to configure and customize some setup behaviors, particularly how endpoints are derived
 * @returns Returns a `ChainInfo` object compatible with the data types exposed by keplr and other wallets
 */
export const getChainInfo = (
  chain: Chain,
  assetsLists: AssetLists,
  options: ChainInfoOptions = defaultChainInfoOptions,
): ChainInfo => {
  const features = ['ibc-transfer'];

  const sdkVer = parseVer(chain.codebase?.cosmos_sdk_version ?? '0.40');

  for (const [constraint, feature] of Object.entries(cosmosFeatures)) {
    if (satisfies(sdkVer, constraint)) {
      features.push(feature);
    }
  }

  if (chain.codebase?.cosmwasm_enabled) {
    features.push('cosmwasm');

    const wasmVer = parseVer(chain.codebase.cosmwasm_version ?? '0.24');

    for (const [constraint, feature] of Object.entries(cosmwasmFeatures)) {
      if (satisfies(wasmVer, constraint)) {
        features.push(feature);
      }
    }
  }

  const chainAssets = assetsLists.assets ?? [];

  const feeDenoms =
    chain.fees?.fee_tokens.map<string>((feeToken) => feeToken.denom) || [];

  /**
   * FROM KEPLR chain-info.d.ts:
   * This is used to set the fee of the transaction.
   * If this field is empty, it just use the default gas price step (low: 0.01, average: 0.025, high: 0.04).
   * And, set field's type as primitive number because it is hard to restore the prototype after deserialzing if field's type is `Dec`.
   */
  const gasPriceSteps: {
    [key: string]: FeeCurrency['gasPriceStep'];
  } = {};

  chain.fees?.fee_tokens?.map((feeToken) => {
    gasPriceSteps[feeToken.denom] = {
      ...defaultGasPriceStep,
      ...feeToken,
    };
  });

  const stakingDenoms =
    chain.staking?.staking_tokens.map((stakingToken) => stakingToken.denom) ??
    [];

  const currencies: Currency[] = chainAssets.map((currency: Asset) => {
    return {
      coinDenom: currency.symbol,
      coinMinimalDenom: currency.base,
      coinDecimals: currency.denom_units.filter(
        (denomUnit: { denom: string }) => denomUnit.denom === currency.display,
      )[0]?.exponent,
      coinGeckoId: currency.coingecko_id || undefined,
      coinImageUrl: currency.logo_URIs?.svg ?? currency.logo_URIs?.png,
    };
  });

  const stakeCurrency: Currency =
    currencies.find((currency) => stakingDenoms.includes(currency.coinDenom)) ??
    currencies[0];

  const feeCurrencies: FeeCurrency[] = currencies
    .filter((currency) => feeDenoms.includes(currency.coinMinimalDenom))
    .map((feeCurrency) => {
      if (!gasPriceSteps || !(feeCurrency.coinMinimalDenom in gasPriceSteps)) {
        return feeCurrency;
      }

      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];

      return {
        ...feeCurrency,
        gasPriceStep,
      };
    });

  const feeCurrenciesDefault: FeeCurrency[] = currencies
    .filter((currency) => stakeCurrency.coinDenom === currency.coinDenom)
    .map((feeCurrency) => {
      if (!gasPriceSteps || !(feeCurrency.coinMinimalDenom in gasPriceSteps)) {
        return feeCurrency;
      }

      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];

      return {
        ...feeCurrency,
        gasPriceStep,
      };
    });

  const chainInfo: ChainInfo = {
    rpc: options.getRpcEndpoint(chain),
    rest: options.getRestEndpoint(chain),
    chainId: chain.chain_id,
    chainName: chain.pretty_name ?? 'Uknown Chain Name',
    bip44: {
      coinType: chain.slip44 ?? 118,
    },
    bech32Config: getBech32Config(chain.bech32_prefix),
    currencies: currencies,
    stakeCurrency: stakeCurrency ?? currencies[0],
    feeCurrencies:
      feeCurrencies.length !== 0 ? feeCurrencies : feeCurrenciesDefault,
    features,
  };

  return chainInfo;
};

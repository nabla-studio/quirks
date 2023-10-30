import type { Asset, AssetLists, Chain } from '@nabla-studio/chain-registry';
import type {
  Bech32Config,
  ChainInfo,
  Currency,
  FeeCurrency,
} from '@keplr-wallet/types';
import { valid, satisfies } from 'semver';

const getRpc = (chain: Chain): string => chain.apis?.rpc?.[0]?.address ?? '';
const getRest = (chain: Chain): string => chain.apis?.rest?.[0]?.address ?? '';
const getExplr = (chain: Chain): string => chain.explorers?.[0]?.url ?? '';

const cleanVer = (rawVersion: string) => {
  if (!valid(rawVersion)) {
    // try to split by @ for repo@version
    const ver = rawVersion.split('@').pop();

    if (ver) {
      if (valid(ver)) return ver;

      const spaces = ver.split('.').length;

      switch (spaces) {
        case 1:
          return ver + '.0.0';
        case 2:
          return ver + '.0';
        case 3:
        default:
          throw new Error('contact maintainers: bad version');
      }
    }
  }

  return rawVersion;
};

const defaultBech32Config = (
  mainPrefix: string,
  validatorPrefix: string = 'val',
  consensusPrefix: string = 'cons',
  publicPrefix: string = 'pub',
  operatorPrefix: string = 'oper',
): Bech32Config => {
  return {
    bech32PrefixAccAddr: mainPrefix,
    bech32PrefixAccPub: mainPrefix + publicPrefix,
    bech32PrefixValAddr: mainPrefix + validatorPrefix + operatorPrefix,
    bech32PrefixValPub:
      mainPrefix + validatorPrefix + operatorPrefix + publicPrefix,
    bech32PrefixConsAddr: mainPrefix + validatorPrefix + consensusPrefix,
    bech32PrefixConsPub:
      mainPrefix + validatorPrefix + consensusPrefix + publicPrefix,
  };
};

export const chainRegistryChainToKeplr = (
  chain: Chain,
  assets: AssetLists[],
  options: {
    getRpcEndpoint: (chain: Chain) => string;
    getRestEndpoint: (chain: Chain) => string;
    getExplorer: (chain: Chain) => string;
  } = {
    getRpcEndpoint: getRpc,
    getRestEndpoint: getRest,
    getExplorer: getExplr,
  },
): ChainInfo => {
  if (!options.getRestEndpoint) options.getRestEndpoint = getRest;
  if (!options.getRpcEndpoint) options.getRpcEndpoint = getRpc;
  if (!options.getExplorer) options.getExplorer = getExplr;

  const features = [];
  // if NOT specified, we assume stargate, sorry not sorry
  const sdkVer = cleanVer(chain.codebase?.cosmos_sdk_version ?? '0.4');
  // stargate
  if (satisfies(sdkVer, '>=0.4')) features.push('stargate');
  // no-legacy-stdTx
  if (satisfies(sdkVer, '>=0.43')) features.push('no-legacy-stdTx');
  // until further notice, assume 'ibc-transfer'
  features.push('ibc-transfer');

  // ibc-go
  if (satisfies(sdkVer, '>=0.45')) features.push('ibc-go');

  if (chain.codebase?.cosmwasm_enabled) {
    features.push('cosmwasm');
    const wasmVer = cleanVer(chain.codebase.cosmwasm_version ?? '0.24');
    if (satisfies(wasmVer, '>=0.24')) features.push('wasmd_0.24+');
  }

  const chainAssets =
    assets.find((asset) => asset.chain_name === chain.chain_name)?.assets || [];

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
      low: feeToken.low_gas_price ?? 0.01,
      average: feeToken.average_gas_price ?? 0.025,
      high: feeToken.high_gas_price ?? 0.04,
    };
  });

  const stakingDenoms =
    chain.staking?.staking_tokens.map<string>(
      (stakingToken) => stakingToken.denom,
    ) || [];

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
    // USE THE FEE DENOMS
    .filter((currency) => feeDenoms.includes(currency.coinMinimalDenom))
    .map((feeCurrency) => {
      if (!gasPriceSteps || !(feeCurrency.coinMinimalDenom in gasPriceSteps)) {
        return feeCurrency;
      }

      // has gas
      const gasPriceStep = gasPriceSteps[feeCurrency.coinMinimalDenom];

      return {
        ...feeCurrency,
        gasPriceStep,
      };
    });

  const feeCurrenciesDefault: FeeCurrency[] = currencies
    // USE THE STAKE CURRENCY
    .filter((currency) => stakeCurrency.coinDenom === currency.coinDenom)
    .map((feeCurrency) => {
      if (!gasPriceSteps || !(feeCurrency.coinMinimalDenom in gasPriceSteps)) {
        return feeCurrency;
      }

      // has gas
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
    bech32Config: defaultBech32Config(chain.bech32_prefix),
    currencies: currencies,
    stakeCurrency: stakeCurrency || currencies[0],
    feeCurrencies:
      feeCurrencies.length !== 0 ? feeCurrencies : feeCurrenciesDefault,
    features,
  };

  return chainInfo;
};
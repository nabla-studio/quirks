import type { AddChainParams } from '@cosmostation/extension-client/types/message';
import type { AssetList, Chain } from '@chain-registry/types';
import { chainRegistryChainToKeplr } from '@chain-registry/keplr';
import { ChainInfoOptions } from '../types';

export const getChainInfoCosmostation = (
  chain: Chain,
  assets: AssetList,
  options?: ChainInfoOptions,
): AddChainParams => {
  const chainInfo = chainRegistryChainToKeplr(chain, [assets], options);
  const [feeCurrency] = chainInfo.feeCurrencies;

  const getRestEndpoint = options?.getRestEndpoint
    ? options.getRestEndpoint
    : // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      (chain: Chain) => chain.apis?.rest?.[0]?.address!;

  const gasPriceStep = {
    ...{
      low: 0.01,
      average: 0.025,
      high: 0.04,
    },
    ...feeCurrency.gasPriceStep,
  };

  return {
    chainId: chain.chain_id,
    chainName: chain.pretty_name ?? '',
    restURL: getRestEndpoint(chain),
    imageURL: chainInfo.stakeCurrency?.coinImageUrl,
    baseDenom: chainInfo.stakeCurrency!.coinMinimalDenom,
    displayDenom: chainInfo.stakeCurrency!.coinDenom,
    coinType: chain.slip44 ? chain.slip44.toString() : '',
    addressPrefix: chain.bech32_prefix!,
    coinGeckoId: chainInfo.currencies[0].coinGeckoId,
    gasRate: {
      average: gasPriceStep.average.toString(),
      low: gasPriceStep.low.toString(),
      tiny: (gasPriceStep.low / 10).toString(),
    },
  };
};

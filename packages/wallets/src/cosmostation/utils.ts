import type { AddChainParams } from '@cosmostation/extension-client/types/message';
import type { AssetList, Chain } from '@nabla-studio/chain-registry';
import {
  defaultChainInfoOptions,
  getChainInfo,
  defaultGasPriceStep,
} from '../utils';
import type { ChainInfoOptions } from '../types';

export const getChainInfoCosmostation = (
  chain: Chain,
  assets: AssetList,
  options: ChainInfoOptions = defaultChainInfoOptions,
): AddChainParams => {
  const chainInfo = getChainInfo(chain, assets);
  const [feeCurrency] = chainInfo.feeCurrencies;

  const gasPriceStep = {
    ...defaultGasPriceStep,
    ...feeCurrency.gasPriceStep,
  };

  return {
    chainId: chain.chain_id,
    chainName: chain.pretty_name ?? '',
    restURL: options.getRestEndpoint(chain),
    imageURL: chainInfo.stakeCurrency?.coinImageUrl,
    baseDenom: chainInfo.stakeCurrency!.coinMinimalDenom,
    displayDenom: chainInfo.stakeCurrency!.coinDenom,
    coinType: chain.slip44 ? chain.slip44.toString() : '',
    addressPrefix: chain.bech32_prefix,
    coinGeckoId: chainInfo.currencies[0].coinGeckoId,
    gasRate: {
      average: gasPriceStep.average.toString(),
      low: gasPriceStep.low.toString(),
      tiny: (gasPriceStep.low / 10).toString(),
    },
  };
};

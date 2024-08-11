import {
  chain as osmosis,
  assets as osmosisAssetList,
} from 'chain-registry/mainnet/osmosis';
import {
  chain as bitsong,
  assets as bitsongAssetList,
} from 'chain-registry/mainnet/bitsong';
import { getChainInfo } from './wallet';
import type { ChainInfo } from '@keplr-wallet/types';

test('osmosis valid chain info', () => {
  const chainInfo = getChainInfo(osmosis, osmosisAssetList);

  expectTypeOf(chainInfo).toEqualTypeOf<ChainInfo>();
});

test('bitsong valid chain info', () => {
  const chainInfo = getChainInfo(bitsong, bitsongAssetList);

  expectTypeOf(chainInfo).toEqualTypeOf<ChainInfo>();
});

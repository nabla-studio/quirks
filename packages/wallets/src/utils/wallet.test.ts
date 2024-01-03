import {
  osmosis,
  osmosisAssetList,
  bitsong,
  bitsongAssetList,
} from '@nabla-studio/chain-registry';
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

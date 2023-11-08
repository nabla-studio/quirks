import {
  bitsong,
  bitsongAssetList,
  osmosis,
  osmosisAssetList,
} from '@nabla-studio/chain-registry';
import type { Config } from '@quirks/store';
import { keplrExtension, leapExtension } from '@quirks/wallets';

const config: Config = {
  wallets: [keplrExtension, leapExtension],
  chains: [osmosis, bitsong],
  assetsLists: [osmosisAssetList, bitsongAssetList],
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(quirksPlugin, config);
});

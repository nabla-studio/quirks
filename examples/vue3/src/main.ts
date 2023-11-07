import router from './router';

import { createApp } from 'vue';
import App from './app/App.vue';
import { quirksPlugin } from '@quirks/vue';

const app = createApp(App);

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

app.use(router).use(quirksPlugin, config).mount('#root');

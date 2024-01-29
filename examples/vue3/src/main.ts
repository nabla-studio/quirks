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
import { keplrExtension, keplrMobile, leapExtension } from '@quirks/wallets';

const config: Config = {
  wallets: [keplrExtension, leapExtension, keplrMobile],
  chains: [osmosis, bitsong],
  assetsLists: [osmosisAssetList, bitsongAssetList],
  walletConnectOptions: {
    providerOpts: {
      logger: 'info',
      projectId: import.meta.env.VITE_PROJECT_ID,
      metadata: {
        name: 'Quirks App',
        description: 'Quirks App for WalletConnect',
        url: 'https://walletconnect.com/',
        icons: ['https://avatars.githubusercontent.com/u/37784886'],
      },
    },
  },
};

app.use(router).use(quirksPlugin, config).mount('#root');

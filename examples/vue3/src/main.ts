import router from './router';

import { createApp } from 'vue';
import App from './app/App.vue';
import { quirksPlugin } from '@quirks/vue';

const app = createApp(App);

import {
  chain as osmosis,
  assets as osmosisAssetList,
} from 'chain-registry/mainnet/osmosis';
import {
  chain as cosmoshub,
  assets as cosmoshubAssetList,
} from 'chain-registry/mainnet/cosmoshub';
import type { Config } from '@quirks/store';
import {
  cosmostationMobile,
  keplrExtension,
  keplrMobile,
  leapExtension,
  okxExtension,
  stationExtension,
  xdefiExtension,
} from '@quirks/wallets';

const config: Config = {
  wallets: [
    keplrExtension,
    leapExtension,
    keplrMobile,
    xdefiExtension,
    stationExtension,
    okxExtension,
    cosmostationMobile,
  ],
  chains: [osmosis, cosmoshub],
  assetsLists: [osmosisAssetList, cosmoshubAssetList],
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

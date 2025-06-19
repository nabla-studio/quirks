import {
  chain as osmosis,
  assets as osmosisAssetList,
} from 'chain-registry/mainnet/osmosis';
import {
  chain as cosmoshub,
  assets as cosmoshubAssetList,
} from 'chain-registry/mainnet/cosmoshub';
import { createConfig, type Config } from '@quirks/store';
import {
  cosmostationMobile,
  keplrExtension,
  keplrMobile,
  leapExtension,
  okxExtension,
  stationExtension,
  xdefiExtension,
} from '@quirks/wallets';

export const store = createConfig({
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
});

import type { WalletOptions } from '@quirks/core';
import { stationextension } from '@nabla-studio/wallet-registry';

export const stationExtensionOptions: WalletOptions = {
  ...stationextension,
  windowKey: 'station.keplr',
  events: {
    keystorechange: 'station_wallet_change',
  },
};

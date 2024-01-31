import { KeplrWalletExtension as StationWalletExtension } from '../keplr/extension';
import { stationExtensionOptions } from './registry';

const stationExtension = new StationWalletExtension(stationExtensionOptions);

export { stationExtension };

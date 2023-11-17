import { StationWalletExtension } from './extension';
import { stationExtensionOptions } from './registry';

const stationExtension = new StationWalletExtension(stationExtensionOptions);

export { stationExtension };

import { KeplrWalletExtension } from '../keplr/extension';
import { stationExtensionOptions } from './registry';

const stationExtension = new KeplrWalletExtension(stationExtensionOptions);

export { stationExtension };

import { KeplrWalletExtension } from '../keplr/extension';
import { shellExtensionOptions } from './registry';

const shellExtension = new KeplrWalletExtension(shellExtensionOptions);

export { shellExtension };

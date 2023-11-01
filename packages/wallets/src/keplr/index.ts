import { KeplrWalletExtension } from './extension';
import { keplrExtensionOptions } from './registry';

const keplrExtension = new KeplrWalletExtension(keplrExtensionOptions);

export { keplrExtension };

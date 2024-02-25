import { KeplrWalletExtension } from '../keplr/extension';
import { xdefiExtensionOptions } from './registry';

const xdefiExtension = new KeplrWalletExtension(xdefiExtensionOptions);

export { xdefiExtension };

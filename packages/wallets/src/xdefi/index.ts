import { KeplrWalletExtension as XDEFIWalletExtension } from '../keplr/extension';
import { xdefiExtensionOptions } from './registry';

const xdefiExtension = new XDEFIWalletExtension(xdefiExtensionOptions);

export { xdefiExtension };

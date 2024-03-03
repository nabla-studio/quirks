import { TrustWalletExtension } from './extension';
import { trustExtensionOptions } from './registry';

const trustExtension = new TrustWalletExtension(trustExtensionOptions);

export { trustExtension };

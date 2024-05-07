import { CosmiframeWalletExtension } from './extension';
import { cosmiframeExtensionOptions } from './registry';

const cosmiframeExtension = new CosmiframeWalletExtension(
  cosmiframeExtensionOptions,
);

export { cosmiframeExtension };

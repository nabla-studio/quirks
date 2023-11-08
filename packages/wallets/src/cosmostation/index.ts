import { CosmostationWalletExtension } from './extension';
import { cosmostationExtensionOptions } from './registry';

const cosmostationExtension = new CosmostationWalletExtension(
  cosmostationExtensionOptions,
);

export { cosmostationExtension };

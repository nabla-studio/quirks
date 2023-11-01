import { LeapWalletExtension } from './extension';
import { leapExtensionOptions } from './registry';

const leapExtension = new LeapWalletExtension(leapExtensionOptions);

export { leapExtension };

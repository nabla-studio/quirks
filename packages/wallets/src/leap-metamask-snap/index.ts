import { LeapMetamaskSnapWalletExtension } from './extension';
import { leapMetamaskSnapOptions } from './registry';

const leapMetamaskSnapExtension = new LeapMetamaskSnapWalletExtension(
  leapMetamaskSnapOptions,
);

export { leapMetamaskSnapExtension };

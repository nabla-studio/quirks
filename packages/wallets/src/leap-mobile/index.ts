import { WCWallet } from '@quirks/core';
import { leapWalletMobileConnectOptions } from './registry';

const leapMobile = new WCWallet(leapWalletMobileConnectOptions);

export { leapMobile };

import { WCWallet } from '@quirks/core';
import { trustWalletMobileConnectOptions } from './registry';

const trustMobile = new WCWallet(trustWalletMobileConnectOptions);

export { trustMobile };

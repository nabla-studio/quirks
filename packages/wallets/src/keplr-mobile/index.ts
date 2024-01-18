import { WCWallet } from '@quirks/core';
import { keplrWalletMobileConnectOptions } from './registry';

const keplrMobile = new WCWallet(keplrWalletMobileConnectOptions);

export { keplrMobile };

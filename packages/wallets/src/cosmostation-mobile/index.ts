import { WCWallet } from '@quirks/core';
import { cosmostationWalletMobileConnectOptions } from './registry';

const cosmostationMobile = new WCWallet(cosmostationWalletMobileConnectOptions);

export { cosmostationMobile };

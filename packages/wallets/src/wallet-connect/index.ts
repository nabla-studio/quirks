import { WCWallet } from '@quirks/core';
import { universalWalletConnectOptions } from './registry';

const universalWalletConnect = new WCWallet(universalWalletConnectOptions);

export { universalWalletConnect };

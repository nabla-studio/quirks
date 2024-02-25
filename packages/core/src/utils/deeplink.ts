import type { WCWallet } from '../wc-wallet';
import { OpenDeeplinkCallback, PlatformDeeplinks } from '../types';
import type { Wallet } from '../wallet';
import { isMobile, isiOS } from './platform';

/**
 * Utility to open a wallet connect deeplink on the web
 *
 * @param links platform based deeplinks
 * @param extras extra data that you can append to the uri
 */
export const openDeeplink: OpenDeeplinkCallback = (links, extras) => {
  if (typeof window !== 'undefined' && isMobile()) {
    let link = `${links.android}${extras ?? ''}`;

    if (isiOS()) {
      link = `${links.ios}${extras ?? ''}`;
    }

    window.location.href = link;
  }
};

/**
 * Opens a deeplink to a wallet that uses wallet connect
 *
 * @param wallet wallet instance, useful for retriving metadata ecc.
 * @param open function that enable us to invocate
 */
export const openWCDeeplink = (
  wallet: Wallet,
  open: OpenDeeplinkCallback = openDeeplink,
  links?: PlatformDeeplinks,
) => {
  const wcWallet = wallet as WCWallet;

  if (
    wcWallet.options.connection_type === 'wallet_connect' &&
    wcWallet.deeplinks
  ) {
    open(links ?? wcWallet.deeplinks);
  }
};

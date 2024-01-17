import { type OpenDeeplinkCallback, isiOS } from '@quirks/core';
import { Linking, Platform } from 'react-native';

/**
 * Utility to open a wallet connect deeplink on the react native
 *
 * @param links platform based deeplinks
 * @param extras extra data that you can append to the uri
 */
export const openDeeplink: OpenDeeplinkCallback = (links, extras) => {
  let link = `${links.android}${extras ?? ''}`;

  if (Platform.OS === 'ios' || (typeof navigator !== 'undefined' && isiOS())) {
    link = `${links.ios}${extras ?? ''}`;
  }

  if (Platform.OS === 'web') {
    window.location.href = link;
  } else {
    Linking.openURL(link);
  }
};

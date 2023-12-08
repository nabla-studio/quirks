import type { WalletEventTypes, WalletEventNames } from '@quirks/core';
import type { EventEmitter } from 'eventemitter3';
import { useEffect } from 'react';
import { useQuirks } from '../providers';

/**
 * It allow you to subscribe to quirks wallets events.
 *
 * @param event event name that you want to subscribe.
 * @param fn event callback function that you wanna trigger on event fire.
 */
export const useWalletEvents = <
  T extends EventEmitter.EventNames<WalletEventNames>,
>(
  event: T,
  fn: EventEmitter.EventListener<WalletEventTypes, T>,
) => {
  const store = useQuirks();
  const wallet = store.use.wallet ? store.use.wallet() : undefined;

  useEffect(() => {
    if (wallet) {
      wallet.events.addListener(event, fn);
    }

    return () => {
      if (wallet) {
        wallet.events.removeListener(event, fn);
      }
    };
  }, [event, fn, wallet]);
};

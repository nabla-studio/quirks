import type { WalletEventTypes, WalletEventNames } from '@quirks/core';
import type { EventEmitter } from 'eventemitter3';
import { useQuirks } from './quirks';
import { SetupStates } from '@quirks/store';

/**
 * It allow you to subscribe to quirks wallets events.
 *
 * @param event event name that you want to subscribe.
 * @param fn event callback function that you wanna trigger on event fire.
 *
 * @return an object with a flush callback, so you can manage unsubscribe on your own using your custom logic.
 */
export const useWalletEvents = <
  T extends EventEmitter.EventNames<WalletEventNames>,
>(
  event: T,
  fn: EventEmitter.EventListener<WalletEventTypes, T>,
) => {
  const store = useQuirks();

  const flush = store.subscribe(
    (state) => state.setupStatus,
    (setupStatus) => {
      const wallet = store.getState().wallet;

      if (wallet && setupStatus === SetupStates.INITIALIZED) {
        wallet.events.removeListener(event, fn);
        wallet.events.addListener(event, fn);
      }
    },
  );

  return {
    flush,
  };
};

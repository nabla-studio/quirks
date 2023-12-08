import type { WalletEventTypes, WalletEventNames } from '@quirks/core';
import type { EventEmitter } from 'eventemitter3';
import { useQuirks } from './quirks';
import { onUnmounted } from 'vue';
import { SetupStates } from '@quirks/store';

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

  onUnmounted(() => {
    const wallet = store.getState().wallet;

    if (wallet) {
      wallet.events.removeListener(event, fn);
    }

    flush();
  });
};

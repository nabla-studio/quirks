import type { StateCreator } from 'zustand/vanilla';

export interface SharedOptions {
  name: string;
  excluded: string[];
  enabled?: boolean;
}

export type SharedType = <T>(
  f: StateCreator<T, [], []>,
  options?: SharedOptions,
) => StateCreator<T, [], []>;

export const defaultSharedOptions: SharedOptions = {
  name: 'quirks-shared',
  excluded: ['wallet', 'wallets'],
  enabled: false,
};

export const shared: SharedType =
  (f, options = defaultSharedOptions) =>
  (set, get, store) => {
    if (!globalThis.BroadcastChannel) {
      console.warn('BroadcastChannel is not supported in this context!');
    }

    /**
     * avoid errors on server side or when BroadcastChannel is not supported,
     * also if shared functionatily is not available, we'll disabled it
     * */
    if (!globalThis.BroadcastChannel || !options.enabled) {
      return f(set, get, store);
    }

    const channel = new BroadcastChannel(options.name);

    const set_: typeof set = (...args) => {
      const prevState = get() as { [k: string]: unknown };
      set(...args);
      const currentState = get() as { [k: string]: unknown };
      const stateUpdates: { [k: string]: unknown } = {};

      /** sync only updated state to avoid un-necessary re-renders */
      Object.keys(currentState).forEach((k) => {
        if (!options.excluded.includes(k) && currentState[k] !== prevState[k]) {
          if (
            typeof currentState[k] === 'function' ||
            options.excluded.includes(k)
          ) {
            return;
          }

          stateUpdates[k] = currentState[k];
        }
      });

      if (Object.keys(stateUpdates).length) {
        channel?.postMessage(stateUpdates);
      }
    };

    if (channel) {
      channel.onmessage = (e) => {
        set(e.data);
      };
    }
    return f(set_, get, store);
  };

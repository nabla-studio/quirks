import type { QuirksConfigStore } from '@quirks/store';
import type { Plugin } from 'vue';

export const USE_QUIRKS_KEY = 'USE_QUIRKS' as const;

export const quirksPlugin: Plugin = {
  install: (app, store: QuirksConfigStore) => {
    app.provide(USE_QUIRKS_KEY, store);

    const mount = {
      mounted() {
        if (!store.persist.hasHydrated()) {
          setTimeout(() => store.persist.rehydrate(), 0);
        }
      },
    };

    app.mixin(mount);
  },
};

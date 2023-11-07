import { Config, createConfig } from '@quirks/store';
import { markRaw, shallowRef, triggerRef, Plugin, onMounted } from 'vue';

export const USE_QUIRKS_KEY = 'USE_QUIRKS' as const;

export const quirksPlugin: Plugin = {
  install: (app, config: Config) => {
    const store = shallowRef(markRaw(createConfig(config)));

    const unsubscribe = store.value.subscribe(() => {
      triggerRef(markRaw(store));
    });

    const originalUnmount = app.unmount;

    app.unmount = function vueQueryUnmount() {
      unsubscribe();
      originalUnmount();
    };

    app.provide(USE_QUIRKS_KEY, store);

    const mount = {
      mounted() {
        // Esegui il codice quando il componente è montato
        console.log(
          "L'app è stata montata.",
          store.value.persist.hasHydrated(),
        );
        if (!store.value.persist.hasHydrated()) {
          setTimeout(() => store.value.persist.rehydrate(), 0);
        }
      },
    };

    app.mixin(mount);
  },
};

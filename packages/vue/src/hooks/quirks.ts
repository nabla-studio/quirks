import { createConfig } from '@quirks/store';
import { type Ref, inject } from 'vue';
import create from 'zustand-vue';
import { USE_QUIRKS_KEY } from '../plugin';

export function useQuirks() {
  const store = inject<Ref<ReturnType<typeof createConfig>>>(USE_QUIRKS_KEY);

  if (!store?.value)
    throw new Error(
      ['[Quirks]: `useConfig` must be used within `quirksPlugin`'].join('\n'),
    );

  return create(store.value);
}

import { createConfig } from '@quirks/store';
import { inject } from 'vue';
import create from 'vue-zustand';
import { USE_QUIRKS_KEY } from '../plugin';

export function useQuirks() {
  const store = inject<ReturnType<typeof createConfig>>(USE_QUIRKS_KEY);

  if (!store)
    throw new Error(
      ['[Quirks]: `useQuirks` must be used within `quirksPlugin`'].join('\n'),
    );

  return create(store);
}

import { createSelectors } from '@quirks/store';
import { ConfigStateSymbol, QuirksConfigState } from '../providers';
import { inject } from 'vue';

export const useQuirks = () => {
  const injectState = inject<QuirksConfigState>(ConfigStateSymbol);

  if (!injectState?.store) {
    throw new Error(
      ['`useQuirks` must be used within `QuirksConfig`.'].join('\n'),
    );
  }

  return createSelectors(injectState.store);
};

import { ConfigStateSymbol, type QuirksConfigState } from '../providers';
import { inject, type ToRefs } from 'vue';
import create from 'zustand-vue';

export const useQuirks = () => {
  const injectState = inject<QuirksConfigState['store']>(ConfigStateSymbol);

  if (!injectState) {
    throw new Error(
      ['`useQuirks` must be used within `QuirksConfig`.'].join('\n'),
    );
  }

  return create(injectState);
};

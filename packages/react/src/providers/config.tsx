import type { QuirksConfigStore } from '@quirks/store';
import { createSelectors } from '../utils';
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from 'react';

export const QuirksConfigContext = createContext<QuirksConfigStore | undefined>(
  undefined,
);

export interface QuirksConfigProps {
  store: QuirksConfigStore;
}

export const QuirksConfig = (props: PropsWithChildren<QuirksConfigProps>) => {
  const { children, store } = props;
  const storeRef = useRef<QuirksConfigStore>();

  if (!store) {
    throw new Error(
      ['[Quirks]: `store` must be setup within `QuirksConfig`.'].join('\n'),
    );
  }

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return (
    <QuirksConfigContext.Provider value={storeRef.current}>
      {children}
    </QuirksConfigContext.Provider>
  );
};

export const useQuirks = () => {
  const store = useContext(QuirksConfigContext);

  if (!store) {
    throw new Error(
      ['[Quirks]: `useQuirks` must be used within `QuirksConfig`.'].join('\n'),
    );
  }

  return createSelectors(store);
};

import type { QuirksConfigState } from '@quirks/store';
import { createSelectors } from '../utils';
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from 'react';

export const QuirksConfigContext = createContext<QuirksConfigState | undefined>(
  undefined,
);

export interface QuirksConfigProps {
  state: QuirksConfigState;
}

export const QuirksConfig = (props: PropsWithChildren<QuirksConfigProps>) => {
  const { children, state } = props;
  const storeRef = useRef<QuirksConfigState>();

  if (!state) {
    throw new Error(
      ['[Quirks]: `state` must be setup within `QuirksConfig`.'].join('\n'),
    );
  }

  if (!storeRef.current) {
    storeRef.current = state;
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

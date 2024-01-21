import { createConfig, type Config, createSelectors } from '@quirks/store';
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from 'react';

export type QuirksConfigState = ReturnType<typeof createConfig>;

export const QuirksConfigContext = createContext<QuirksConfigState | undefined>(
  undefined,
);

export interface QuirksConfigProps {
  config: Config;
}

export const QuirksConfig = (props: PropsWithChildren<QuirksConfigProps>) => {
  const { children, config: configOptions } = props;
  const storeRef = useRef<QuirksConfigState>();

  if (!configOptions) {
    throw new Error(
      ['[Quirks]: `config` must be setup within `QuirksConfig`.'].join('\n'),
    );
  }

  if (!storeRef.current) {
    storeRef.current = createConfig(configOptions);
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

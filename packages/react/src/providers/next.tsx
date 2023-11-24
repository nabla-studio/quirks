import { QuirksConfigContext } from './config';
import { type PropsWithChildren, useContext, useEffect, useState } from 'react';

export const QuirksNextProvider = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  const store = useContext(QuirksConfigContext);
  const [hydrated, setHydrated] = useState(false);

  if (!store) {
    throw new Error(
      ['`QuirksNextProvider` must be used within `QuirksConfig`.'].join('\n'),
    );
  }

  useEffect(() => {
    store.persist.rehydrate();
    setHydrated(true);
  }, [store.persist]);

  if (!hydrated) {
    return null;
  }

  return children;
};

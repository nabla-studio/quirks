import { type PropsWithChildren, useSyncExternalStore } from 'react';

export const emptySubscribe = () => () => {};

export const QuirksNextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const isServer = useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true,
  );

  return isServer ? null : children;
};

/**
 * Utility to ensure that the code of a jsx component is only executed client-side, e.g. web extension
 * information is not data that may reside on the server (e.g. whether it has been injected into the browser window)
 */
export const ClientOnly = QuirksNextProvider;

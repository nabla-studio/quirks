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

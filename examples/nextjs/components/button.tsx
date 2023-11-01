'use client';

import { useConnect } from '@quirks/react';

export const Button = () => {
  const { connect, disconnect, disconnected } = useConnect();

  return (
    <>
      <button
        onClick={() => {
          if (disconnected) {
            connect('leap-extension');
          } else {
            disconnect();
          }
        }}
      >
        {disconnected ? 'Connect' : 'Disconnect'}
      </button>
    </>
  );
};

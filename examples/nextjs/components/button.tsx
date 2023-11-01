'use client';

import { useConfig, useConnect } from '@quirks/react';

export const Button = () => {
  const { wallets } = useConfig();
  const { connect, disconnect, connected } = useConnect();

  if (connected) {
    return <button onClick={disconnect}>Disconnect</button>;
  }

  return wallets.map((wallet) => (
    <button
      key={wallet.options.name}
      onClick={() => {
        connect(wallet.options.name);
      }}
    >
      <img
        src={wallet.options.logoUrls?.light?.svg}
        alt={wallet.options.prettyName}
        style={{
          maxWidth: 128,
        }}
      />
    </button>
  ));
};

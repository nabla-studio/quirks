'use client';

import { useConfig, useConnect } from '@quirks/react';

export const Button = () => {
  const { wallets } = useConfig();
  const { connect, disconnect, connected } = useConnect();

  if (connected) {
    return <button onClick={disconnect}>Disconnect</button>;
  }

  return wallets.map((wallet) => (
    <div key={wallet.options.name}>
      <button
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

      {!wallet.injected ? (
        <a
          href={
            wallet.options.downloads && wallet.options.downloads.length > 0
              ? wallet.options.downloads[0].link
              : '#'
          }
          target="_blank"
        >
          Install
        </a>
      ) : null}
    </div>
  ));
};

'use client';

import { useConfig, useConnect, useWalletConnect } from '@quirks/react';
import QRCode from 'react-qr-code';

export const Button = () => {
  const { wallets } = useConfig();
  const { connect, disconnect, connected } = useConnect();
  const { pairingURI } = useWalletConnect();

  if (connected) {
    return <button onClick={disconnect}>Disconnect</button>;
  }

  return (
    <div>
      {pairingURI ? (
        <div
          style={{
            height: 'auto',
            margin: '0 auto',
            maxWidth: 300,
            width: '100%',
          }}
        >
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={pairingURI}
            viewBox={`0 0 256 256`}
          />
        </div>
      ) : (
        false
      )}
      {wallets.map((wallet) => (
        <div key={wallet.options.wallet_name}>
          <button
            onClick={async () => {
              await connect(wallet.options.wallet_name);
            }}
          >
            <img
              src={wallet.logoLight}
              alt={wallet.options.pretty_name}
              height="48px"
              width="48px"
            />
          </button>

          {!wallet.injected ? (
            <a
              href={
                wallet.options.platforms && wallet.options.platforms.length > 0
                  ? wallet.options.platforms[0].install_link
                  : '#'
              }
              target="_blank"
            >
              Install
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
};

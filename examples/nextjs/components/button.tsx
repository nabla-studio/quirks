'use client';

import {
  ClientOnly,
  useConfig,
  useConnect,
  useWalletConnect,
} from '@quirks/react';
import { useRouter } from 'next/navigation';
import QRCode from 'react-qr-code';

export const Button = () => {
  const { wallets } = useConfig();
  const { connect, disconnect, connected } = useConnect();
  const { pairingURI } = useWalletConnect();
  const router = useRouter();

  if (connected) {
    return (
      <button
        onClick={() => {
          disconnect();
          router.refresh();
        }}
      >
        Disconnect
      </button>
    );
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
              router.refresh();
            }}
          >
            <img
              src={wallet.logoLight}
              alt={wallet.options.pretty_name}
              height="48px"
              width="48px"
            />
          </button>

          {/**
           * Inject state can't be determinated on server side, so this code must be
           * execute only on client side to avoid hydration errors.
           */}
          <ClientOnly>
            {!wallet.injected ? (
              <a
                href={
                  wallet.options.platforms &&
                  wallet.options.platforms.length > 0
                    ? wallet.options.platforms[0].install_link
                    : '#'
                }
                target="_blank"
              >
                Install
              </a>
            ) : null}
          </ClientOnly>
        </div>
      ))}
    </div>
  );
};

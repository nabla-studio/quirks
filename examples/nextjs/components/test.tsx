'use client';

import { useChains, useConnect } from '@quirks/react';

export const Test = () => {
  const { status, connected } = useConnect();
  const { accounts } = useChains();

  return (
    <div>
      STATUS: {status}
      {connected ? (
        <div>
          Addresses:
          {accounts.map((account) => (
            <div key={account.chainId}>
              <div>Chain ID: {account.chainId}</div>

              <div>Chain Name: {account.chainName}</div>

              <div>Address: {account.bech32Address}</div>
            </div>
          ))}
        </div>
      ) : (
        false
      )}
    </div>
  );
};

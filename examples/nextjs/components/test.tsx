'use client';

import { useConnect, useQuirks } from '@quirks/react';

export const Test = () => {
  const { status, connected } = useConnect();
  const store = useQuirks();

  return (
    <div>
      STATUS: {status}
      {connected ? (
        <div>
          Addresses:
          {store.getState().accounts.map((account) => (
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

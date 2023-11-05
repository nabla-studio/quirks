'use client';

import { useChains, useConnect } from '@quirks/react';

const send = async () => {
  const cosmos = (await import('osmojs')).cosmos;
  const sign = (await import('@quirks/store')).sign;
  const getAddress = (await import('@quirks/store')).getAddress;
  const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

  const address = getAddress('osmosis');

  const msg = send({
    amount: [
      {
        denom: 'uosmo',
        amount: '1',
      },
    ],
    toAddress: address,
    fromAddress: address,
  });

  console.log(msg);

  const txRaw = await sign('osmosis', [msg]);

  const broadcast = (await import('@quirks/store')).broadcast;

  const res = await broadcast('osmosis', txRaw);

  console.log(res);
};

export const Test = () => {
  const { status, connected } = useConnect();
  const { accounts } = useChains();

  return (
    <div>
      STATUS: {status}
      {connected ? (
        <div>
          Addresses:
          <button onClick={send}>SIGN</button>
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

'use client';

import {
  sign,
  getAddress,
  broadcast,
  signArbitrary,
  enable,
} from '@quirks/store';
import { useChains, useConnect, useWalletEvents } from '@quirks/react';

const send = async () => {
  const cosmos = (await import('osmojs')).cosmos;
  const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

  await enable({ chainIds: ['osmosis'] });

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

  const res = await broadcast('osmosis', txRaw);

  console.log(res);
};

const signJWT = async () => {
  await enable({ chainIds: ['bitsong-2b'] });
  const sender = getAddress('bitsong');

  const result = await signArbitrary(
    'bitsong-2b',
    sender,
    new TextEncoder().encode('Bearer TOKEN test '),
  );

  console.log(result);
};

export const Test = ({ iframe = false }: { iframe?: boolean }) => {
  const { status, connected } = useConnect();
  const { accounts } = useChains();

  useWalletEvents('keystorechange', () => {
    console.log('Changed');
  });

  return (
    <div>
      {iframe && <iframe src="http://localhost:4200/frame"></iframe>}
      STATUS: {status}
      {connected ? (
        <div>
          Addresses:
          <button onClick={send}>SIGN</button>
          <button onClick={signJWT}>SIGN ARBITRARY</button>
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

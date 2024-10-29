import { getChain, getConnect } from '@quirks/ssr';
import { cookies } from 'next/headers';

export const TestChain = () => {
  const quirks = cookies().get('quirks');

  if (!quirks) {
    return null;
  }

  const { connected } = getConnect(quirks.value);
  const { address } = getChain(quirks.value, 'osmosis');

  if (!connected) {
    return false;
  }

  return (
    <div>
      Server Component
      <div>Chain Name: Osmosis</div>
      <div>Address: {address}</div>
    </div>
  );
};

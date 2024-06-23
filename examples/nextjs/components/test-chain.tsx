import { getChain, getConnect } from '@quirks/next';

export const TestChain = () => {
  const { connected } = getConnect();
  const { address } = getChain('osmosis');

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

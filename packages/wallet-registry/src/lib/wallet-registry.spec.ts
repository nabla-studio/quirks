import { walletRegistry } from './wallet-registry';

describe('walletRegistry', () => {
  it('should work', () => {
    expect(walletRegistry()).toEqual('wallet-registry');
  });
});

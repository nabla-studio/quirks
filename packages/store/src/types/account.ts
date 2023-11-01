import type { Key } from '@quirks/core';

export interface AddressWithChain extends Key {
  chainName: string;
  chainId: string;
}

export interface AccountState {
  accountName?: string;
  accounts: AddressWithChain[];
  getAddress: (chainId: string) => string | undefined;
  getAddresses: (chainIds: string[]) => string[];
}

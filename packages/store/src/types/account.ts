export interface AccountState {
  accountName?: string;
  address?: string;
  chainId?: string;
  getAccount: (chainId: string) => void;
}

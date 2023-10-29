export const WalletConnectionTypes = {
  EXTENSION: 'extension',
  WALLET_CONNECT: 'wallet_connect',
} as const;

export type WalletConnectionType =
  (typeof WalletConnectionTypes)[keyof typeof WalletConnectionTypes];

export interface WalletOptions {
  name: string;
  connectionType: WalletConnectionType;
}

export interface SignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;

  readonly disableBalanceCheck?: boolean;
}

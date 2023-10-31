export const WalletConnectionTypes = {
  EXTENSION: 'extension',
  WALLET_CONNECT: 'wallet_connect',
} as const;

export type WalletConnectionType =
  (typeof WalletConnectionTypes)[keyof typeof WalletConnectionTypes];

export type WalletLogo =
  | {
      png?: string;
      svg?: string;
    }
  | { [key: string]: string };

export interface WalletOptions {
  /**
   * Unique name ID
   */
  name: string;
  /**
   * Display name
   */
  prettyName: string;
  connectionType: WalletConnectionType;
  /**
   * Window extension key
   */
  windowKey?: string;
  /**
   * Logo url
   */
  logoUrls?: WalletLogo;
  description?: string;
}

export interface SignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;

  readonly disableBalanceCheck?: boolean;
}

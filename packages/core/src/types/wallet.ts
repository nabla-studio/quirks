export const WalletConnectionTypes = {
  EXTENSION: 'extension',
  WALLET_CONNECT: 'wallet_connect',
} as const;

export type WalletConnectionType =
  (typeof WalletConnectionTypes)[keyof typeof WalletConnectionTypes];

export type Logo =
  | {
      png?: string;
      svg?: string;
    }
  | { [key: string]: string };

export interface WalletLogo {
  dark?: Logo;
  light?: Logo;
}

export interface DownloadInfo {
  browser?: string;
  device?: string;
  icon?: string;
  link: string;
}

export interface WalletEvents {
  keystorechange: string;
}

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
  downloads?: DownloadInfo[];
  events: WalletEvents;
}

export interface SignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;

  readonly disableBalanceCheck?: boolean;
}

export interface WalletEventTypes {
  keystorechange: () => void;
}

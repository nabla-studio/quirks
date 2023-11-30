/* eslint-disable @typescript-eslint/no-unused-vars */
import type { StdSignature } from '@cosmjs/amino';
import type { SignClientTypes } from '@walletconnect/types';

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
  windowKey?: string | string[];
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

export const WcProviderEventType = {
  chainChanged: (chainId: string) => {},
  accountsChanged: (accounts: string[]) => {},
};

export const WcEventTypes = {
  display_uri: (uri: string) => {},
  session_ping: (payload: SignClientTypes.EventArguments['session_ping']) => {},
  session_event: (
    payload: SignClientTypes.EventArguments['session_event'],
  ) => {},
  session_update: (
    payload: SignClientTypes.EventArguments['session_update'],
  ) => {},
  session_delete: (
    payload: SignClientTypes.EventArguments['session_delete'],
  ) => {},
  session_proposal: (
    payload: SignClientTypes.EventArguments['session_proposal'],
  ) => {},
  session_extend: (
    payload: SignClientTypes.EventArguments['session_extend'],
  ) => {},
  session_expire: (
    payload: SignClientTypes.EventArguments['session_expire'],
  ) => {},
  session_request: (
    payload: SignClientTypes.EventArguments['session_request'],
  ) => {},
  session_request_sent: (
    payload: SignClientTypes.EventArguments['session_request_sent'],
  ) => {},
  proposal_expire: (
    payload: SignClientTypes.EventArguments['proposal_expire'],
  ) => {},
} as const;

export const ExtensionWalletEventTypes = {
  keystorechange: () => {},
} as const;

export type WalletEventTypes = typeof ExtensionWalletEventTypes &
  typeof WcEventTypes &
  typeof WcProviderEventType;

export type WalletEventNames = keyof WalletEventTypes;

export interface WalletConnectAccountData {
  address: string;
  algo: string;
  pubkey: string;
}

export interface WalletConnectDirectSignDoc {
  chainId: string;
  accountNumber: string;
  authInfoBytes: string;
  bodyBytes: string;
}

export interface WalletConnectDirectSignDoc {
  chainId: string;
  accountNumber: string;
  authInfoBytes: string;
  bodyBytes: string;
}

export interface WalletConnectSignDirectRequest {
  signerAddress: string;
  signDoc: WalletConnectDirectSignDoc;
}

export interface WalletConnectSignDirectResponse {
  signature: StdSignature;
  signed: WalletConnectDirectSignDoc;
}

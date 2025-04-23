import type { OpenDeeplinkCallback, SignOptions, Wallet } from '@quirks/core';
import type { AssetList, Chain } from '@chain-registry/types';
import type {
  SigningStargateClientOptions,
  StargateClientOptions,
} from '@cosmjs/stargate';
import type { SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import type { PersistOptions as ZustandPersistOptions } from 'zustand/middleware';
import type { AppState } from './store';
import type { SharedOptions } from '../middlewares';
import type {
  Namespace,
  UniversalProviderOpts,
} from '@walletconnect/universal-provider';

export interface SignerOptions {
  stargate?: (chain: Chain) => Promise<StargateClientOptions | undefined>;
  signingStargate?: (
    chain: Chain,
  ) => Promise<SigningStargateClientOptions | undefined>;
  signingCosmwasm?: (
    chain: Chain,
  ) => Promise<SigningCosmWasmClientOptions | undefined>;
}

export type PersistOptions<S, PersistedState = S> = ZustandPersistOptions<
  S,
  PersistedState
> & {
  getInitialState?: () => Partial<S> | undefined;
};

export interface Config {
  wallets: Wallet[];
  chains: Chain[];
  /**
   * enable specific chains so you don't need to connect all of them from the beginning,
   * this is useful for example when you want to connect to a specific chain but not the others
   */
  enabledChains?: Chain[];
  assetsLists: AssetList[];
  /**
   * State manager persister
   */
  persistOptions?: PersistOptions<AppState>;
  /**
   * Experimental Shared (Broadcast API) options
   */
  sharedOptions?: Omit<Partial<SharedOptions>, 'excluded'>;
  /**
   * Reinit connection on mount
   *
   * @default true
   */
  autoConnect?: boolean;
  /**
   * Automatically suggest chains using the provided ones.
   *
   * @default true
   */
  autoSuggestions?: boolean;
  /**
   * Automatically refresh data when the user change their account.
   *
   * It's useful in specific use case where you wanna handle account switch on your own.
   *
   * @default true
   */
  autoAccountChange?: boolean;
  /**
   * Specify custom sign option
   *
   * @default
   *
   * {
   *  preferNoSetFee: false,
   *  preferNoSetMemo: true,
   *  disableBalanceCheck: true,
   * }
   */
  signOptions?: SignOptions;
  signerOptions?: SignerOptions;
  walletConnectOptions?: {
    /**
     * Is used to customize how a wallet connect deeplink is opened, useful for customizing behavior for example between browser and react native
     *
     * default: opens links with browser behavior
     */
    openDeeplink?: OpenDeeplinkCallback;
    providerOpts: UniversalProviderOpts;
    namespaces?: { cosmos: Omit<Namespace, 'chains'> };
  };
}

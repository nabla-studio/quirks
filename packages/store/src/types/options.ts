import type { SignOptions, Wallet } from '@quirks/core';
import type { AssetLists, Chain } from '@nabla-studio/chain-registry';
import type {
  SigningStargateClientOptions,
  StargateClientOptions,
} from '@cosmjs/stargate';
import type { SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import type { PersistOptions } from 'zustand/middleware';
import type { AppState } from './store';
import type { SharedOptions } from '../middlewares';

export interface SignerOptions {
  stargate?: (chain: Chain) => Promise<StargateClientOptions | undefined>;
  signingStargate?: (
    chain: Chain,
  ) => Promise<SigningStargateClientOptions | undefined>;
  signingCosmwasm?: (
    chain: Chain,
  ) => Promise<SigningCosmWasmClientOptions | undefined>;
}

export interface Config {
  wallets: Wallet[];
  chains: Chain[];
  assetsLists: AssetLists[];
  /**
   * State manager persister
   */
  persistOptions?: PersistOptions<AppState>;
  /**
   * Shared (Broadcast API) options
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
}

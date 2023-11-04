import type { SignOptions, Wallet } from '@quirks/core';
import type { AssetLists, Chain } from '@nabla-studio/chain-registry';
import type { SigningStargateClientOptions } from '@cosmjs/stargate';
import type { SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import type { PersistOptions } from 'zustand/middleware';
import type { AppState } from './store';

export interface SignerOptions {
  signingStargate?: (chain: Chain) => SigningStargateClientOptions | undefined;
  signingCosmwasm?: (chain: Chain) => SigningCosmWasmClientOptions | undefined;
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
   * Reinit connection on mount
   *
   * @default true
   */
  autoConnect?: boolean;
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

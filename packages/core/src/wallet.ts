import type {
  DirectSignResponse,
  OfflineDirectSigner,
} from '@cosmjs/proto-signing';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type {
  AminoSignResponse,
  OfflineAminoSigner,
  StdSignDoc,
} from '@cosmjs/amino';
import type { SuggestChain, SuggestToken } from './types';

export interface WalletOptions {
  name: string;
}

export interface SignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;

  readonly disableBalanceCheck?: boolean;
}

export abstract class Wallet {
  options: WalletOptions;

  constructor(options: WalletOptions) {
    this.options = options;
  }

  /**
   * This method will ask the user whether to allow access if they haven't visited this website.
   * Also, it will request that the user unlock the wallet if the wallet is locked.
   *
   * @param chainIds array of chain ids defined inside the chain registry
   */
  abstract enable(chainIds: string[]): Promise<void>;

  /**
   * Delete permissions granted to origin.
   * If chain ids are specified, only the permissions granted to each chain id are deleted.
   * Else, remove all permissions granted to origin.
   *
   * @param chainIds array of chain ids defined inside the chain registry
   */
  abstract disable(chainIds?: string[]): Promise<void>;

  abstract getOfflineSigner(
    chainId: string,
    options?: SignOptions,
  ): Promise<OfflineAminoSigner & OfflineDirectSigner>;

  abstract getOfflineSignerOnlyAmino(
    chainId: string,
    options?: SignOptions,
  ): Promise<OfflineAminoSigner>;

  abstract getOfflineSignerAuto(
    chainId: string,
    options?: SignOptions,
  ): Promise<OfflineAminoSigner | OfflineDirectSigner>;

  abstract signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: SignOptions,
  ): Promise<AminoSignResponse>;

  abstract signDirect(
    chainId: string,
    signer: string,
    signDoc: SignDoc,
    signOptions?: SignOptions,
  ): Promise<DirectSignResponse>;

  /**
   * Asks the user to add a tokens to the wallet
   */
  abstract suggestTokens: (tokens: SuggestToken[]) => Promise<void>;

  /**
   * Asks the user to add a chains to the wallet
   */
  abstract suggestChains: (chains: SuggestChain[]) => Promise<void>;
}

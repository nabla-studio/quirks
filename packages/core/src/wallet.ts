import type {
  DirectSignResponse,
  OfflineDirectSigner,
} from '@cosmjs/proto-signing';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type {
  AminoSignResponse,
  OfflineAminoSigner,
  StdSignDoc,
  StdSignature,
} from '@cosmjs/amino';
import type {
  SignOptions,
  SuggestChain,
  SuggestToken,
  WalletOptions,
  Key,
  WalletEventTypes,
} from './types';
import EventEmitter from 'eventemitter3';

/**
 * Where T is the client type of the wallet
 * Where K is the metadata type for init function
 */
export abstract class Wallet<T = unknown, K = unknown> {
  options: WalletOptions;
  client?: T;
  /**
   * if true, the wallet was found in the window and can be used
   */
  injected?: boolean;
  injectionError?: Error;
  events = new EventEmitter<WalletEventTypes>();

  constructor(options: WalletOptions) {
    this.options = options;
  }

  removeListeners() {
    this.events.removeAllListeners();
  }

  /**
   * Return dark mode logo mark
   */
  get logoDark() {
    const image = this.options.images.find(
      (img) => img.theme?.dark_mode === true && img.layout === 'logomark',
    );

    if (image) {
      return image.svg ? image.svg : image.png;
    }

    return undefined;
  }

  /**
   * Return light mode logo mark
   */
  get logoLight() {
    const image = this.options.images.find(
      (img) => !img.theme?.dark_mode && img.layout === 'logomark',
    );

    if (image) {
      return image.svg ? image.svg : image.png;
    }

    return undefined;
  }

  abstract addListeners(): void;

  abstract init(metadata: K): Promise<T | undefined>;

  abstract getAccount(chainId: string): Promise<Key>;

  abstract getAccounts(chainIds: string[]): Promise<Key[]>;

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
  abstract disable(chainIds: string[]): Promise<void>;

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

  abstract signArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
  ): Promise<StdSignature>;

  abstract verifyArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
    signature: StdSignature,
  ): Promise<boolean>;

  /**
   * Asks the user to add a tokens to the wallet
   */
  abstract suggestTokens(tokens: SuggestToken[]): Promise<void>;

  /**
   * Asks the user to add a chains to the wallet
   */
  abstract suggestChains(chains: SuggestChain[]): Promise<void>;
}

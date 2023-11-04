import type {
  AminoSignResponse,
  OfflineAminoSigner,
  StdSignDoc,
} from '@cosmjs/amino';
import type {
  DirectSignResponse,
  OfflineDirectSigner,
} from '@cosmjs/proto-signing';
import type { SignOptions } from '@quirks/core';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type { SignerOptions } from './options';

export interface SignState {
  signOptions: SignOptions;
  signerOptions?: SignerOptions;
}

export interface SignActions {
  getOfflineSigner: (
    chainId: string,
  ) => Promise<OfflineAminoSigner & OfflineDirectSigner>;
  getOfflineSignerOnlyAmino: (chainId: string) => Promise<OfflineAminoSigner>;
  getOfflineSignerAuto: (
    chainId: string,
  ) => Promise<OfflineAminoSigner | OfflineDirectSigner>;
  signAmino: (
    chainId: string,
    signDoc: StdSignDoc,
  ) => Promise<AminoSignResponse>;
  signDirect: (
    chainId: string,
    signDoc: SignDoc,
  ) => Promise<DirectSignResponse>;
}

export type SignSlice = SignState & SignActions;

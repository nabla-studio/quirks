import type {
  OfflineAminoSigner,
  StdSignDoc,
  AminoSignResponse,
} from '@cosmjs/amino';
import type {
  OfflineDirectSigner,
  DirectSignResponse,
} from '@cosmjs/proto-signing';
import type {
  SignOptions,
  SuggestChain,
  SuggestToken,
  WalletOptions,
} from '@quirks/core';
import { Wallet } from '@quirks/core';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type { Keplr } from '@keplr-wallet/types';
import { chainRegistryChainToKeplr } from './utils';

export class KeplrWalletExtension extends Wallet {
  client: Keplr;

  constructor(options: WalletOptions) {
    super(options);

    if (window.keplr === undefined) {
      throw new Error(`${options.name} is not injected into the window`);
    }

    this.client = window.keplr;
  }

  override enable(chainIds: string[]): Promise<void> {
    return this.client.enable(chainIds);
  }
  override disable(chainIds?: string[] | undefined): Promise<void> {
    return this.client.disable(chainIds);
  }
  override async getOfflineSigner(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner & OfflineDirectSigner> {
    return await this.client.getOfflineSigner(chainId, options);
  }

  override async getOfflineSignerOnlyAmino(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner> {
    return await this.client.getOfflineSignerOnlyAmino(chainId, options);
  }

  override getOfflineSignerAuto(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner | OfflineDirectSigner> {
    return this.client.getOfflineSignerAuto(chainId, options);
  }

  override signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: SignOptions | undefined,
  ): Promise<AminoSignResponse> {
    return this.client.signAmino(chainId, signer, signDoc, signOptions);
  }

  override signDirect(
    chainId: string,
    signer: string,
    signDoc: SignDoc,
    signOptions?: SignOptions | undefined,
  ): Promise<DirectSignResponse> {
    return this.client.signDirect(chainId, signer, signDoc, signOptions);
  }

  override async suggestTokens(suggestions: SuggestToken[]): Promise<void> {
    for (const suggestion of suggestions) {
      for (const token of suggestion.tokens) {
        await this.client.suggestToken(
          suggestion.chainId,
          token.contractAddress,
          token.viewingKey,
        );
      }
    }
  }

  override async suggestChains(suggestions: SuggestChain[]): Promise<void> {
    for (const suggestion of suggestions) {
      const suggestChain = chainRegistryChainToKeplr(
        suggestion.chain,
        suggestion.assetList ? [suggestion.assetList] : [],
      );

      await this.client.experimentalSuggestChain(suggestChain);
    }
  }
}

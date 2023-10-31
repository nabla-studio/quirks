import type {
  OfflineAminoSigner,
  StdSignDoc,
  AminoSignResponse,
} from '@cosmjs/amino';
import type {
  OfflineDirectSigner,
  DirectSignResponse,
} from '@cosmjs/proto-signing';
import type { SignOptions, SuggestChain, SuggestToken } from '@quirks/core';
import { ExtensionWallet, assertIsDefined } from '@quirks/core';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type { Keplr } from '@keplr-wallet/types';
import Long from 'long';
import { chainRegistryChainToKeplr } from './utils';

export class KeplrWalletExtension extends ExtensionWallet<Keplr> {
  constructor() {
    super({
      name: 'keplr-ext',
      prettyName: 'Keplr',
      connectionType: 'extension',
      windowKey: 'keplr',
    });
  }

  override enable(chainIds: string[]): Promise<void> {
    assertIsDefined(this.client);

    return this.client.enable(chainIds);
  }

  override disable(chainIds?: string[] | undefined): Promise<void> {
    assertIsDefined(this.client);

    return this.client.disable(chainIds);
  }

  override async getOfflineSigner(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner & OfflineDirectSigner> {
    assertIsDefined(this.client);

    return await this.client.getOfflineSigner(chainId, options);
  }

  override async getOfflineSignerOnlyAmino(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner> {
    assertIsDefined(this.client);

    return await this.client.getOfflineSignerOnlyAmino(chainId, options);
  }

  override getOfflineSignerAuto(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner | OfflineDirectSigner> {
    assertIsDefined(this.client);

    return this.client.getOfflineSignerAuto(chainId, options);
  }

  override signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: SignOptions | undefined,
  ): Promise<AminoSignResponse> {
    assertIsDefined(this.client);

    return this.client.signAmino(chainId, signer, signDoc, signOptions);
  }

  override signDirect(
    chainId: string,
    signer: string,
    signDoc: SignDoc,
    signOptions?: SignOptions | undefined,
  ): Promise<DirectSignResponse> {
    assertIsDefined(this.client);

    return this.client.signDirect(
      chainId,
      signer,
      {
        ...signDoc,
        accountNumber: Long.fromString(signDoc.accountNumber.toString(10)),
      },
      signOptions,
    );
  }

  override async suggestTokens(suggestions: SuggestToken[]): Promise<void> {
    assertIsDefined(this.client);

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
    assertIsDefined(this.client);

    for (const suggestion of suggestions) {
      const suggestChain = chainRegistryChainToKeplr(
        suggestion.chain,
        suggestion.assetList ? [suggestion.assetList] : [],
      );

      await this.client.experimentalSuggestChain(suggestChain);
    }
  }
}

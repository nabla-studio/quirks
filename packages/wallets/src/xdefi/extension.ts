import type {
  OfflineAminoSigner,
  StdSignDoc,
  AminoSignResponse,
  StdSignature,
} from '@cosmjs/amino';
import type {
  OfflineDirectSigner,
  DirectSignResponse,
} from '@cosmjs/proto-signing';
import type {
  Key,
  SignOptions,
  SuggestChain,
  SuggestToken,
  WalletOptions,
} from '@quirks/core';
import { ExtensionWallet, assertIsDefined } from '@quirks/core';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import Long from 'long';
import type { XDEFI } from './types';
import { getChainInfo } from '../utils';

export class XDEFIWalletExtension extends ExtensionWallet<XDEFI> {
  constructor(options: WalletOptions) {
    super(options);
  }

  override enable(chainIds: string[]): Promise<void> {
    assertIsDefined(this.client);

    return this.client.enable(chainIds);
  }

  override disable(chainIds: string[]): Promise<void> {
    assertIsDefined(this.client);

    return this.client.disable(chainIds);
  }

  override async getAccount(chainId: string) {
    assertIsDefined(this.client);

    return await this.client.getKey(chainId);
  }

  override async getAccounts(chainIds: string[]) {
    assertIsDefined(this.client);

    const keys = await this.client.getKeysSettled(chainIds);

    return keys
      .map((key) => {
        if (key.status === 'fulfilled') {
          return key.value;
        }

        return undefined;
      })
      .filter((key) => key !== undefined) as Key[];
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

  override signArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
  ): Promise<StdSignature> {
    assertIsDefined(this.client);

    return this.client.signArbitrary(chainId, signer, data);
  }

  override verifyArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
    signature: StdSignature,
  ): Promise<boolean> {
    assertIsDefined(this.client);

    return this.client.verifyArbitrary(chainId, signer, data, signature);
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
      const suggestChain = getChainInfo(suggestion.chain, suggestion.assetList);

      await this.client.experimentalSuggestChain(suggestChain);
    }
  }
}

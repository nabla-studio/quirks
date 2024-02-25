import type {
  OfflineAminoSigner,
  StdSignDoc,
  AminoSignResponse,
  StdSignature,
  AccountData,
  Algo,
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
import type { Cosmostation, RequestAccountResponse } from './types';
import { getChainInfoCosmostation } from './utils';

export class CosmostationWalletExtension extends ExtensionWallet<Cosmostation> {
  constructor(options: WalletOptions) {
    super(options);
  }

  get cosmos() {
    return this.client?.cosmos;
  }

  get ikeplr() {
    return this.client?.providers.keplr;
  }

  override async enable() {
    assertIsDefined(this.cosmos, 'cosmos provider is not defined');
  }

  override async disable(): Promise<void> {
    assertIsDefined(this.cosmos, 'cosmos provider is not defined');

    await this.cosmos.request({
      method: 'cos_disconnect',
    });
  }

  override async getAccount(chainId: string) {
    assertIsDefined(this.cosmos, 'cosmos provider is not defined');

    const key = (await this.cosmos.request({
      method: 'cos_requestAccount',
      params: { chainName: chainId },
    })) as RequestAccountResponse;

    return {
      name: key.name,
      algo: key.algo,
      pubKey: key.publicKey,
      address: new Uint8Array(),
      bech32Address: key.address,
      isNanoLedger: key.isLedger,
      isKeystone: false,
    };
  }

  async getSignerAccount(chainId: string): Promise<AccountData> {
    const key = await this.getAccount(chainId);

    return {
      address: key.bech32Address,
      algo: key.algo as Algo,
      pubkey: key.pubKey,
    };
  }

  override async getAccounts(chainIds: string[]) {
    assertIsDefined(this.cosmos, 'cosmos provider is not defined');

    const keys = await Promise.allSettled(
      chainIds.map((chainId) => this.getAccount(chainId)),
    );

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
    assertIsDefined(this.ikeplr, 'ikeplr is not defined');

    return {
      getAccounts: async () => [await this.getSignerAccount(chainId)],
      signAmino: (signerAddress, signDoc) =>
        this.signAmino(chainId, signerAddress, signDoc, options),
      signDirect: (signerAddress, signDoc) =>
        this.signDirect(chainId, signerAddress, signDoc, options),
    };
  }

  override async getOfflineSignerOnlyAmino(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner> {
    assertIsDefined(this.ikeplr, 'ikeplr is not defined');

    return this.ikeplr.getOfflineSignerOnlyAmino(chainId, options);
  }

  override async getOfflineSignerAuto(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner | OfflineDirectSigner> {
    assertIsDefined(this.ikeplr, 'ikeplr is not defined');

    return {
      getAccounts: async () => [await this.getSignerAccount(chainId)],
      signAmino: (signerAddress, signDoc) =>
        this.signAmino(chainId, signerAddress, signDoc, options),
      signDirect: (signerAddress, signDoc) =>
        this.signDirect(chainId, signerAddress, signDoc, options),
    };
  }

  override signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: SignOptions | undefined,
  ): Promise<AminoSignResponse> {
    assertIsDefined(this.ikeplr, 'ikeplr is not defined');

    return this.ikeplr.signAmino(chainId, signer, signDoc, signOptions);
  }

  override async signDirect(
    chainId: string,
    signer: string,
    signDoc: SignDoc,
    signOptions?: SignOptions | undefined,
  ): Promise<DirectSignResponse> {
    assertIsDefined(this.ikeplr, 'ikeplr is not defined');

    const signResponse = await this.ikeplr.signDirect(
      chainId,
      signer,
      {
        ...signDoc,
        accountNumber: Long.fromString(signDoc.accountNumber.toString(10)),
      },
      signOptions,
    );

    return {
      ...signResponse,
      signed: {
        ...signResponse.signed,
        accountNumber: BigInt(signResponse.signed.accountNumber.toString()),
      },
    };
  }

  override signArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
  ): Promise<StdSignature> {
    assertIsDefined(this.ikeplr, 'ikeplr is not defined');

    return this.ikeplr.signArbitrary(chainId, signer, data);
  }

  override verifyArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
    signature: StdSignature,
  ): Promise<boolean> {
    assertIsDefined(this.ikeplr, 'ikeplr is not defined');

    return this.ikeplr.verifyArbitrary(chainId, signer, data, signature);
  }

  override async suggestTokens(suggestions: SuggestToken[]): Promise<void> {
    assertIsDefined(this.cosmos);

    for (const suggestion of suggestions) {
      if (suggestion.type === 'cw20') {
        await this.cosmos.request({
          method: 'cos_addTokensCW20',
          params: {
            chainName: suggestion.chainName,
            tokens: suggestion.tokens,
          },
        });
      }
    }
  }

  override async suggestChains(suggestions: SuggestChain[]): Promise<void> {
    assertIsDefined(this.cosmos, 'cosmos provider is not defined');

    for (const suggestion of suggestions) {
      const suggestChain = getChainInfoCosmostation(
        suggestion.chain,
        suggestion.assetList,
      );

      const result = (await this.cosmos.request({
        method: 'cos_addChain',
        params: suggestChain,
      })) as boolean;

      if (!result) {
        throw new Error(`[Quirks]: Failed to add chain ${suggestion.name}.`);
      }
    }
  }
}

import {
  ExtensionWallet,
  type Key,
  type SignOptions,
  type SuggestChain,
  assertIsDefined,
  createClientNotExistError,
  getClientFromExtension,
} from '@quirks/core';
import type { Snap } from '@leapwallet/cosmos-snap-provider';
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
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import type { LeapMetamaskSnap } from './types';
import { chainRegistryChainToKeplr } from '@chain-registry/keplr';

export class LeapMetamaskSnapWalletExtension extends ExtensionWallet<LeapMetamaskSnap> {
  snap?: Snap;

  override async init(): Promise<LeapMetamaskSnap | undefined> {
    assertIsDefined(this.options.windowKey);

    try {
      this.client = await getClientFromExtension(this.options.windowKey);

      if (!this.client?.isMetamask && this.options.windowKey) {
        throw createClientNotExistError('ethereum');
      }

      this.injected = true;

      if (this.client) {
        this.addListeners();
      }

      return this.client;
    } catch (err) {
      this.injectionError = err as Error;
    }

    return undefined;
  }

  override async getAccount(chainId: string): Promise<Key> {
    const cosmosSnapProvider = await import('@leapwallet/cosmos-snap-provider');
    const getKey =
      cosmosSnapProvider.getKey ?? cosmosSnapProvider.default.getKey;

    const key = await getKey(chainId);

    return {
      name: key.address,
      address: new TextEncoder().encode(key.address),
      bech32Address: key.address,
      algo: key.algo,
      pubKey: key.pubkey,
      isKeystone: false,
      isNanoLedger: false,
    };
  }

  async getSignerAccount(chainId: string): Promise<AccountData> {
    const key = await this.getAccount(chainId);

    return {
      address: key.bech32Address,
      algo: key.algo as Algo,
      pubkey: key.pubKey!,
    };
  }

  override async getAccounts(chainIds: string[]): Promise<Key[]> {
    assertIsDefined(this.client);

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

  override async enable(): Promise<void> {
    const cosmosSnapProvider = await import('@leapwallet/cosmos-snap-provider');
    const getSnap =
      cosmosSnapProvider.getSnap ?? cosmosSnapProvider.default.getSnap;
    const connectSnap =
      cosmosSnapProvider.connectSnap ?? cosmosSnapProvider.default.connectSnap;
    const snap = await getSnap();

    this.snap = snap;

    await connectSnap(this.snap?.id);
  }

  override async disable(): Promise<void> {
    console.warn('disable method not implemented.');

    return;
  }

  override async getOfflineSigner(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner & OfflineDirectSigner> {
    assertIsDefined(this.client);

    return {
      getAccounts: async () => [await this.getSignerAccount(chainId)],
      signAmino: (signerAddress, signDoc) =>
        this.signAmino(chainId, signerAddress, signDoc, options),
      signDirect: (signerAddress, signDoc) =>
        this.signDirect(chainId, signerAddress, signDoc),
    };
  }

  override async getOfflineSignerOnlyAmino(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner> {
    assertIsDefined(this.client);

    return {
      getAccounts: async () => [await this.getSignerAccount(chainId)],
      signAmino: (signerAddress, signDoc) =>
        this.signAmino(chainId, signerAddress, signDoc, options),
    };
  }

  override async getOfflineSignerAuto(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner | OfflineDirectSigner> {
    assertIsDefined(this.client);

    return {
      getAccounts: async () => [await this.getSignerAccount(chainId)],
      signAmino: (signerAddress, signDoc) =>
        this.signAmino(chainId, signerAddress, signDoc, options),
      signDirect: (signerAddress, signDoc) =>
        this.signDirect(chainId, signerAddress, signDoc),
    };
  }

  override async signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: SignOptions | undefined,
  ): Promise<AminoSignResponse> {
    const cosmosSnapProvider = await import('@leapwallet/cosmos-snap-provider');
    const requestSignAmino =
      cosmosSnapProvider.requestSignAmino ??
      cosmosSnapProvider.default.requestSignAmino;

    return requestSignAmino(chainId, signer, signDoc, signOptions);
  }

  override async signDirect(
    chainId: string,
    signer: string,
    signDoc: SignDoc,
  ): Promise<DirectSignResponse> {
    const cosmosSnapProvider = await import('@leapwallet/cosmos-snap-provider');
    const requestSignature =
      cosmosSnapProvider.requestSignature ??
      cosmosSnapProvider.default.requestSignature;

    return requestSignature(chainId, signer, signDoc);
  }

  override async signArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
  ): Promise<StdSignature> {
    const cosmosSnapProvider = await import('@leapwallet/cosmos-snap-provider');
    const signArbitrary =
      cosmosSnapProvider.signArbitrary ??
      cosmosSnapProvider.default.signArbitrary;

    const base64js = await import('base64-js');
    const fromByteArray =
      base64js.fromByteArray ?? base64js.default.fromByteArray;

    const payload = typeof data === 'string' ? data : fromByteArray(data);

    return signArbitrary(chainId, signer, payload);
  }

  override verifyArbitrary(): Promise<boolean> {
    throw new Error('verifyArbitrary method not implemented.');
  }

  override async suggestTokens(): Promise<void> {
    console.warn('suggestTokens method not implemented.');
    return;
  }

  override async suggestChains(suggestions: SuggestChain[]): Promise<void> {
    await this.enable();
    const cosmosSnapProvider = await import('@leapwallet/cosmos-snap-provider');
    const suggestChain =
      cosmosSnapProvider.suggestChain ??
      cosmosSnapProvider.default.suggestChain;

    for (const suggestion of suggestions) {
      const chainInfo = chainRegistryChainToKeplr(suggestion.chain, [
        suggestion.assetList,
      ]);

      await suggestChain(chainInfo, {});
    }
  }
}

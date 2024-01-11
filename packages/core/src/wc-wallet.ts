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
import {
  WcEventTypes,
  type Key,
  type WalletOptions,
  WcProviderEventType,
  type WalletEventNames,
  type WalletConnectAccountData,
  type WalletConnectSignDirectRequest,
  type WalletConnectSignDirectResponse,
} from './types';
import { Wallet } from './wallet';
import type {
  UniversalProviderOpts,
  ConnectParams,
  UniversalProvider,
} from '@walletconnect/universal-provider';
import { assertIsDefined } from './utils';
import { fromByteArray, toByteArray } from 'base64-js';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import Long from 'long';

export class WCWallet extends Wallet<
  InstanceType<typeof UniversalProvider>,
  UniversalProviderOpts
> {
  constructor(options: WalletOptions) {
    super(options);

    this.injected = true;
  }

  override async init(metadata: UniversalProviderOpts) {
    const UniversalProvider = (
      await import('@walletconnect/universal-provider')
    ).UniversalProvider;

    try {
      this.client = await UniversalProvider.init(metadata);

      if (this.client) {
        this.addListeners();
      }

      return this.client;
    } catch (err) {
      this.injectionError = err as Error;
    }

    return undefined;
  }

  override removeListeners(): void {
    super.removeListeners();

    if (this.client) {
      for (const event of this.wcEventNames) {
        this.client.removeListener(event, () => {});
      }
    }
  }

  override addListeners(): void {
    this.removeListeners();

    if (this.client) {
      /**
       * Subscribe to all events from wallet connect provider, for session events
       * and also specific events such as "accountChanged"
       */
      for (const event of this.wcEventNames) {
        this.client.on(event, (data: never) => {
          console.log(event, data);

          this.events.emit(event, data);

          if (event === 'accountsChanged') {
            this.events.emit('keystorechange');
          }
        });
      }
    }
  }

  /**
   * This method connect the client with wallet connect server and retrieve
   * the topic (uri), to start a wc connection.
   */
  async generateURI(connectParams: ConnectParams) {
    assertIsDefined(this.client, 'client is undefined');

    return this.client.connect({
      ...connectParams,
    });
  }

  override async enable(): Promise<void> {
    console.warn('enable method not implemented');
  }

  override async disable(): Promise<void> {
    assertIsDefined(this.client, 'client is undefined');

    if (this.client.session) {
      await this.client.disconnect();
    }

    await this.client.cleanupPendingPairings();
  }

  override async getAccount(chainId: string): Promise<Key> {
    assertIsDefined(this.client, 'client is undefined');

    const namespace = this.client.session?.namespaces?.['cosmos'];

    const addressWithChain = namespace?.accounts
      .map((account) => account.split(':'))
      .find(([, chain]) => {
        return chain === chainId;
      });

    let address = '';

    if (addressWithChain) {
      address = addressWithChain.pop() ?? '';
    }

    return {
      name: '',
      pubKey: null,
      address: null,
      bech32Address: address ?? '',
      algo: 'unknown',
      isKeystone: null,
      isNanoLedger: null,
    };
  }

  override async getAccounts(chainIds: string[]): Promise<Key[]> {
    assertIsDefined(this.client, 'client is undefined');
    const accounts: Key[] = [];

    for (const chainId of chainIds) {
      const account = await this.getAccount(chainId);

      accounts.push(account);
    }

    return accounts;
  }

  async getSignerAccounts(): Promise<AccountData[]> {
    assertIsDefined(this.client, 'client is undefined');

    const accounts = await this.client.request<WalletConnectAccountData[]>({
      method: 'cosmos_getAccounts',
    });

    const signerAccounts: AccountData[] = accounts.map((account) => ({
      address: account.address,
      algo: account.algo as Algo,
      pubkey: toByteArray(account.pubkey),
    }));

    return signerAccounts;
  }

  override async getOfflineSigner(
    chainId: string,
  ): Promise<OfflineAminoSigner & OfflineDirectSigner> {
    assertIsDefined(this.client, 'client is undefined');

    return {
      getAccounts: async () => this.getSignerAccounts(),
      signAmino: (signer: string, signDoc: StdSignDoc) =>
        this.signAmino(chainId, signer, signDoc),
      signDirect: (signer: string, signDoc: SignDoc) =>
        this.signDirect(chainId, signer, signDoc),
    };
  }

  override async getOfflineSignerOnlyAmino(
    chainId: string,
  ): Promise<OfflineAminoSigner> {
    assertIsDefined(this.client, 'client is undefined');

    return {
      getAccounts: async () => this.getSignerAccounts(),
      signAmino: (signer: string, signDoc: StdSignDoc) =>
        this.signAmino(chainId, signer, signDoc),
    };
  }

  override async getOfflineSignerAuto(
    chainId: string,
  ): Promise<OfflineAminoSigner | OfflineDirectSigner> {
    assertIsDefined(this.client, 'client is undefined');

    return {
      getAccounts: async () => this.getSignerAccounts(),
      signAmino: (signer: string, signDoc: StdSignDoc) =>
        this.signAmino(chainId, signer, signDoc),
      signDirect: (signer: string, signDoc: SignDoc) =>
        this.signDirect(chainId, signer, signDoc),
    };
  }

  override async signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
  ): Promise<AminoSignResponse> {
    assertIsDefined(this.client, 'client is undefined');

    return this.client.request<AminoSignResponse>(
      {
        method: 'cosmos_signAmino',
        params: {
          signerAddress: signer,
          signDoc,
        },
      },
      `cosmos:${chainId}`,
    );
  }

  override async signDirect(
    chainId: string,
    signer: string,
    signDoc: SignDoc,
  ): Promise<DirectSignResponse> {
    assertIsDefined(this.client, 'client is undefined');

    const signDocValue: WalletConnectSignDirectRequest = {
      signerAddress: signer,
      signDoc: {
        chainId: signDoc.chainId,
        bodyBytes: fromByteArray(signDoc.bodyBytes),
        authInfoBytes: fromByteArray(signDoc.authInfoBytes),
        accountNumber: signDoc.accountNumber.toString(),
      },
    };

    const result = await this.client.request<WalletConnectSignDirectResponse>(
      {
        method: 'cosmos_signDirect',
        params: signDocValue,
      },
      `cosmos:${chainId}`,
    );

    return {
      ...result,
      signed: {
        chainId: result.signed.chainId,
        accountNumber: Long.fromString(result.signed.accountNumber, false),
        authInfoBytes: toByteArray(result.signed.authInfoBytes),
        bodyBytes: toByteArray(result.signed.bodyBytes),
      },
    };
  }

  /**
   * Maybe we can implement it later using signDirect
   */
  override signArbitrary(): Promise<StdSignature> {
    throw new Error('[Quirks]: Method not implemented.');
  }

  override async verifyArbitrary(): Promise<boolean> {
    throw new Error('[Quirks]: Method not implemented.');
  }

  override async suggestTokens() {
    console.warn('suggestTokens method not implemented.');
  }

  override async suggestChains() {
    console.warn('suggestChains method not implemented.');
  }

  get wcEventNames() {
    return [
      ...(Object.keys(WcEventTypes) as WalletEventNames[]),
      ...(Object.keys(WcProviderEventType) as WalletEventNames[]),
    ];
  }
}

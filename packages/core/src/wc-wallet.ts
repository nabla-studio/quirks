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
  type WalletConnectSignDirectRequest,
  type WalletConnectSignDirectResponse,
  type WalletConnectSessionKey,
  type WalletConnectAccountData,
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

export class WCWallet extends Wallet<
  InstanceType<typeof UniversalProvider>,
  UniversalProviderOpts
> {
  private pairingURI?: string;

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
          this.events.emit(event, data);

          if (event === 'accountsChanged') {
            this.events.emit('keystorechange');
          }
        });
      }

      /**
       * We storage pairing uri, so that one can be used for deeplink urls,
       * useful when we need to use them around the core logic
       */
      this.events.on('display_uri', (uri) => {
        this.pairingURI = uri;
      });
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
    console.debug('enable method not implemented');
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

    /**
     * some wallets, like keplr, insert by default a property to provide
     * the data directly when the user connects to the wallet,
     * if I can't find the data I try to request it with an explicit request
     */
    if (this.client.session?.sessionProperties?.['keys']) {
      const accounts = JSON.parse(
        this.client.session.sessionProperties['keys'],
      ) as WalletConnectSessionKey[];

      const signerAccounts: AccountData[] = accounts.map((account) => ({
        address: account.bech32Address,
        algo: account.algo as Algo,
        pubkey: toByteArray(account.pubKey),
      }));

      return signerAccounts;
    }

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
        accountNumber: BigInt(result.signed.accountNumber),
        authInfoBytes: toByteArray(result.signed.authInfoBytes),
        bodyBytes: toByteArray(result.signed.bodyBytes),
      },
    };
  }

  override async signArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
  ): Promise<StdSignature> {
    assertIsDefined(this.client, 'client is undefined');

    const result = await this.client.request<AminoSignResponse>(
      {
        method: 'cosmos_signAmino',
        params: {
          signerAddress: signer,
          signDoc: {
            chain_id: '',
            account_number: '0',
            sequence: '0',
            fee: {
              gas: '0',
              amount: [],
            },
            msgs: [
              {
                type: 'sign/MsgSignData',
                value: {
                  signer: signer,
                  data:
                    typeof data === 'string' ? btoa(data) : fromByteArray(data),
                },
              },
            ],
            memo: '',
          },
        },
      },
      `cosmos:${chainId}`,
    );

    return {
      ...result.signature,
    };
  }

  override async verifyArbitrary(): Promise<boolean> {
    throw new Error('[Quirks]: Method not implemented.');
  }

  override async suggestTokens() {
    console.debug('suggestTokens method not implemented.');
  }

  override async suggestChains() {
    console.debug('suggestChains method not implemented.');
  }

  get wcEventNames() {
    return [
      ...(Object.keys(WcEventTypes) as WalletEventNames[]),
      ...(Object.keys(WcProviderEventType) as WalletEventNames[]),
    ];
  }

  get deeplinks() {
    const { mobile, wallet_connect } = this.options;

    if (!mobile || !wallet_connect) {
      return undefined;
    }

    return {
      ios: `${mobile.ios?.schema}://${wallet_connect.deeplink?.path?.ios}`,
      android: `${mobile.android?.schema}://${wallet_connect.deeplink?.path?.android}`,
    };
  }

  get pairingDeeplinks() {
    if (!this.deeplinks) {
      return undefined;
    }

    return {
      ios: `${this.deeplinks.ios}?${this.pairingURI}`,
      android: `${this.deeplinks.android}?${this.pairingURI}`,
    };
  }
}

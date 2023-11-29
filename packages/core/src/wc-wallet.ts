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
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import {
  WcEventTypes,
  type Key,
  type SignOptions,
  type WalletOptions,
  WcProviderEventType,
  type WalletEventNames,
} from './types';
import { Wallet } from './wallet';
import type {
  UniversalProviderOpts,
  ConnectParams,
  UniversalProvider,
} from '@walletconnect/universal-provider';
import { assertIsDefined } from './utils';

export class WCWallet extends Wallet<InstanceType<typeof UniversalProvider>> {
  providerOpts!: UniversalProviderOpts;
  connectParams!: ConnectParams;

  constructor(
    options: WalletOptions,
    providerOpts?: UniversalProviderOpts,
    connectParams?: ConnectParams,
  ) {
    super(options);

    this.injected = true;
    this.setOptions(providerOpts, connectParams);
  }

  /**
   * Enable options change on fly even after class init,
   * so we can use this inside an external controller
   */
  setOptions(
    providerOpts?: UniversalProviderOpts,
    connectParams?: ConnectParams,
  ) {
    if (providerOpts) {
      this.providerOpts = providerOpts;
    }

    if (connectParams) {
      this.connectParams = connectParams;
    }
  }

  override async init() {
    const UniversalProvider = (
      await import('@walletconnect/universal-provider')
    ).UniversalProvider;

    try {
      this.client = await UniversalProvider.init(this.providerOpts);

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
  async generateTopic() {
    assertIsDefined(this.client);

    return this.client.connect(this.connectParams);
  }

  override async enable(): Promise<void> {
    console.warn('enable method not implemented');
  }

  override async disable(): Promise<void> {
    assertIsDefined(this.client);

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
    assertIsDefined(this.client);
    const accounts: Key[] = [];

    for (const chainId of chainIds) {
      const account = await this.getAccount(chainId);

      accounts.push(account);
    }

    return accounts;
  }

  override getOfflineSigner(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner & OfflineDirectSigner> {
    throw new Error('Method not implemented.');
  }

  override getOfflineSignerOnlyAmino(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner> {
    throw new Error('Method not implemented.');
  }

  override getOfflineSignerAuto(
    chainId: string,
    options?: SignOptions | undefined,
  ): Promise<OfflineAminoSigner | OfflineDirectSigner> {
    throw new Error('Method not implemented.');
  }

  override signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: SignOptions | undefined,
  ): Promise<AminoSignResponse> {
    throw new Error('Method not implemented.');
  }

  override signDirect(
    chainId: string,
    signer: string,
    signDoc: SignDoc,
    signOptions?: SignOptions | undefined,
  ): Promise<DirectSignResponse> {
    throw new Error('Method not implemented.');
  }

  override signArbitrary(): Promise<StdSignature> {
    throw new Error('Method not implemented.');
  }

  override async verifyArbitrary(): Promise<boolean> {
    throw new Error('Method not implemented.');
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

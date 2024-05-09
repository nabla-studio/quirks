import { type WalletOptions } from '@quirks/core';
import { Cosmiframe } from '@dao-dao/cosmiframe';
import { KeplrWalletExtension } from '../keplr/extension';
import type { Keplr } from '@keplr-wallet/types';
import type { AccountData, Algo } from '@cosmjs/amino';

export class DAODAOCosmiframe extends KeplrWalletExtension {
  cosmiframe!: Cosmiframe;

  constructor(options: WalletOptions) {
    super(options);
  }

  override async init(): Promise<Keplr | undefined> {
    if (typeof window === 'undefined') {
      return undefined;
    }

    try {
      if (window.parent === window.self) {
        throw new Error(
          `[Quirks]: Can'init ${this.options.pretty_name} because the dapp is not in an iframe`,
        );
      }

      this.cosmiframe = new Cosmiframe([
        'https://daodao.zone',
        'https://dao.daodao.zone',
      ]);

      const keplr = this.cosmiframe.getKeplrClient();

      this.client = {
        enable: keplr.enable.bind(keplr),
        getKey: keplr.getKey.bind(keplr),
        getOfflineSigner: keplr.getOfflineSigner.bind(keplr),
        getOfflineSignerAuto: keplr.getOfflineSignerAuto.bind(keplr),
        getOfflineSignerOnlyAmino: keplr.getOfflineSignerOnlyAmino.bind(keplr),
        experimentalSuggestChain: keplr.experimentalSuggestChain.bind(keplr),
        signDirect: keplr.signDirect.bind(keplr),
        signAmino: keplr.signAmino.bind(keplr),
      } as Keplr;

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

  override async getSignerAccount(chainId: string): Promise<AccountData> {
    const key = (await this.getAccount(chainId)) as Awaited<
      ReturnType<typeof this.getAccount>
    > & { pubkey: Uint8Array };

    return {
      address: key.bech32Address,
      algo: key.algo as Algo,
      /**
       * Seems like that cosmiframe use a lowercase pubkey instead of a camelCase
       */
      pubkey: key.pubkey,
    };
  }

  override async suggestChains(): Promise<void> {}

  override async disable(): Promise<void> {}
}

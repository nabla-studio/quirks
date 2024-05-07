import { type WalletOptions } from '@quirks/core';
import { Cosmiframe } from '@dao-dao/cosmiframe';
import { KeplrWalletExtension } from '../keplr/extension';
import type { Keplr } from '@keplr-wallet/types';

export class CosmiframeWalletExtension extends KeplrWalletExtension {
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
          "[Quirks]: Can'init Cosmiframe because the dapp is not in an iframe",
        );
      }

      this.cosmiframe = new Cosmiframe();

      this.client = this.cosmiframe.getKeplrClient() as Keplr;

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
}

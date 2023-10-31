import type { WalletOptions } from './types';
import { Wallet } from './wallet';
import { assertIsDefined, getClientFromExtension } from './utils';

export abstract class ExtensionWallet<T> extends Wallet<T> {
  constructor(options: WalletOptions) {
    super(options);

    this.init();
  }

  override async init(): Promise<T | undefined> {
    assertIsDefined(this.options.windowKey);

    try {
      this.client = await getClientFromExtension(this.options.windowKey);
      this.injected = true;

      return this.client;
    } catch (err) {
      this.injectionError = err as Error;
    }

    return undefined;
  }
}

import type { WalletOptions } from './types';
import { Wallet } from './wallet';
import { assertIsDefined, getClientFromExtension } from './utils';

export abstract class ExtensionWallet<T> extends Wallet<T> {
  constructor(options: WalletOptions) {
    super(options);

    this.init();
    this.keystoreChange = this.keystoreChange.bind(this);
  }

  keystoreChange() {
    this.events.emit('keystorechange');
  }

  override removeListeners(): void {
    super.removeListeners();

    if (typeof window !== 'undefined') {
      window.removeEventListener(
        this.options.events.keystorechange,
        this.keystoreChange,
      );
    }
  }

  override addListeners() {
    this.removeListeners();

    if (typeof window !== 'undefined') {
      window.addEventListener(
        this.options.events.keystorechange,
        this.keystoreChange,
      );
    }
  }

  override async init(): Promise<T | undefined> {
    assertIsDefined(this.options.windowKey);

    try {
      this.client = await getClientFromExtension(this.options.windowKey);
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

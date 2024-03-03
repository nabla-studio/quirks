import type { WalletOptions } from '@quirks/core';
import { KeplrWalletExtension } from '../keplr/extension';

export class TrustWalletExtension extends KeplrWalletExtension {
  constructor(options: WalletOptions) {
    super(options);
  }

  override async disable(): Promise<void> {}
}

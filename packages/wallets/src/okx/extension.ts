import { assertIsDefined } from '@quirks/core';
import { KeplrWalletExtension } from '../keplr/extension';
import { OKX } from './types';

export class OKXWalletExtension extends KeplrWalletExtension<OKX> {
  override async disable(): Promise<void> {
    assertIsDefined(this.client);

    return this.client.disconnect();
  }
}

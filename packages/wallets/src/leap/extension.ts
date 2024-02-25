import type { Key, WalletOptions } from '@quirks/core';
import { assertIsDefined } from '@quirks/core';
import type { Leap } from './types';
import { KeplrWalletExtension } from '../keplr/extension';

export class LeapWalletExtension extends KeplrWalletExtension<Leap> {
  constructor(options: WalletOptions) {
    super(options);
  }

  override async disable(chainIds: string[]): Promise<void> {
    assertIsDefined(this.client);

    for (const chainId of chainIds) {
      await this.client.disconnect(chainId);
    }
  }

  override async getAccounts(chainIds: string[]) {
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
}

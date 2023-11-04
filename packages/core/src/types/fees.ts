import type { EncodeObject } from '@cosmjs/proto-signing';

export interface SigningSimulatorClient {
  simulate(
    signerAddress: string,
    messages: readonly EncodeObject[],
    memo: string | undefined,
  ): Promise<number>;
}

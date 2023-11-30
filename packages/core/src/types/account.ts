export interface Key {
  readonly name: string;
  readonly algo: string;
  readonly pubKey: Uint8Array | null;
  readonly address: Uint8Array | null;
  readonly bech32Address: string;
  readonly isNanoLedger: boolean | null;
  readonly isKeystone: boolean | null;
}

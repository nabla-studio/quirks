import { compileFromFile } from 'json-schema-to-typescript';
import { writeFileSync } from 'fs';

compileFromFile('packages/wallet-registry/wallet-registry/wallet.schema.json', {
  additionalProperties: false,
  enableConstEnums: true,
  maxItems: 40,
}).then((ts) =>
  writeFileSync('packages/wallet-registry/src/types/wallet.ts', ts),
);

import { compileFromFile } from 'json-schema-to-typescript';
import { writeFileSync } from 'fs';

compileFromFile(
  'packages/chain-registry/chain-registry/assetlist.schema.json'
).then((ts) =>
  writeFileSync('packages/chain-registry/src/types/assetlist.ts', ts)
);

compileFromFile(
  'packages/chain-registry/chain-registry/chain.schema.json'
).then((ts) => writeFileSync('packages/chain-registry/src/types/chain.ts', ts));

compileFromFile(
  'packages/chain-registry/chain-registry/ibc_data.schema.json'
).then((ts) =>
  writeFileSync('packages/chain-registry/src/types/ibc-data.ts', ts)
);

compileFromFile(
  'packages/chain-registry/chain-registry/memo_keys.schema.json'
).then((ts) =>
  writeFileSync('packages/chain-registry/src/types/memo-keys.ts', ts)
);

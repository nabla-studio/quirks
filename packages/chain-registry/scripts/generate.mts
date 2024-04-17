import { mkdir, readFile, writeFile, rm } from 'fs/promises';
import { glob } from 'glob';
import { URL } from 'url';
import type { IbcData } from '../src';
import { processChains } from './utils.mjs';

const __dirname = new URL('../', import.meta.url).pathname;
const chainRegistryPath = `${__dirname}chain-registry/`;
const mainnetsPath = `${__dirname}src/mainnets`;
const testnetsPath = `${__dirname}src/testnets`;

const pathsToIgnore: string[] = [
  '*.schema.json',
  'package.json',
  '*-lock.json',
  '_IBC/**/*.json',
  '_memo_keys/**/*.json',
  '_non-cosmos/**/*.json',
  '_template/**/*.json',
  '.github/**/*.json',
  'testnets/**/*.json',
];

const testnetPathsToIgnore: string[] = [
  'testnets/_IBC/**/*.json',
  'testnets/_non-cosmos/**/*.json',
];

async function getFiles(path: string, ignore: string[] = []) {
  const files = await glob(path, {
    ignore: ignore.map((ignoredPath) => chainRegistryPath + ignoredPath),
    withFileTypes: true,
  });
  return files;
}

const [memoKeys, mainnetIBCData, mainnetChains, testnetChains, testnetIBCData] =
  await Promise.all([
    getFiles(`${chainRegistryPath}_memo_keys/**/*.json`),
    getFiles(`${chainRegistryPath}_IBC/**/*.json`),
    getFiles(`${chainRegistryPath}**/*.json`, pathsToIgnore),
    getFiles(`${chainRegistryPath}testnets/**/*.json`, testnetPathsToIgnore),
    getFiles(`${chainRegistryPath}testnets/_IBC/**/*.json`),
  ]);

await rm(mainnetsPath, { recursive: true, force: true });
await mkdir(mainnetsPath);

const mainnetChainFiles = await processChains(mainnetChains, mainnetsPath);

const ibcInfos: IbcData[] = [];

for (const ibcInfo of mainnetIBCData) {
  const data = await readFile(`${ibcInfo.path}/${ibcInfo.name}`, 'utf-8');

  ibcInfos.push(JSON.parse(data));
}

await writeFile(
  `${mainnetsPath}/ibc.ts`,
  `import type { IbcData } from '../types'

  export const mainnetIbc: IbcData[] = ${JSON.stringify(ibcInfos)};
`,
);

mainnetChainFiles.add('ibc');

const memoKeysPath = memoKeys[0];
const memoKeysData = await readFile(
  `${memoKeysPath.path}/${memoKeysPath.name}`,
  'utf-8',
);

await writeFile(
  `${mainnetsPath}/memo-keys.ts`,
  `import type { MemoKeys } from '../types'

  export const memoKeys: MemoKeys = ${memoKeysData};
`,
);

mainnetChainFiles.add('memo-keys');

await writeFile(
  `${mainnetsPath}/index.ts`,
  Array.from(mainnetChainFiles.keys())
    .map((chain) => `export * from './${chain}'`)
    .join('\n'),
);

await rm(testnetsPath, { recursive: true, force: true });
await mkdir(testnetsPath);

const testnetChainFiles = await processChains(testnetChains, testnetsPath);

const testnetIbcInfos: IbcData[] = [];

for (const ibcInfo of testnetIBCData) {
  const data = await readFile(`${ibcInfo.path}/${ibcInfo.name}`, 'utf-8');

  testnetIbcInfos.push(JSON.parse(data));
}

await writeFile(
  `${testnetsPath}/ibc.ts`,
  `import type { IbcData } from '../types'

  export const testnetIbc: IbcData[] = ${JSON.stringify(testnetIbcInfos)};
`,
);

testnetChainFiles.add('ibc');

await writeFile(
  `${testnetsPath}/index.ts`,
  Array.from(testnetChainFiles.keys())
    .map((chain) => `export * from './${chain}'`)
    .join('\n'),
);

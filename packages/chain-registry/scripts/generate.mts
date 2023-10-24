import { mkdir, appendFile, readFile, writeFile, rm } from 'fs/promises';
import { Path, glob } from 'glob';
import { URL } from 'url';
import camelCase from 'camelcase';
import { existsSync } from 'fs';

const __dirname = new URL('../', import.meta.url).pathname;
const chainRegistryPath = `${__dirname}chain-registry/`;
const mainnetsPath = `${__dirname}src/mainnets`;
const testnetsPath = `${__dirname}src/testnets`;

const pathsToIgnore: string[] = [
  '*.schema.json',
  'package.json',
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

async function processChains(chains: Path[], outputPath: string) {
  const chainDataMap = new Map();

  for (const chain of chains) {
    if (!chain.parent) {
      continue;
    }

    const originalChainName = chain.parent.name;
    const startNumberRegex = /^\d+/;
    const matches = startNumberRegex.exec(originalChainName);
    const chainNameSuffix = matches != null ? matches[0] : '';
    const chainName =
      originalChainName.replace(startNumberRegex, '') + chainNameSuffix;

    const data = await readFile(`${chain.path}/${chain.name}`, 'utf-8');
    const filename = `${outputPath}/${chainName}.ts`;

    if (!chainDataMap.has(chainName)) {
      await writeFile(
        filename,
        `import type { Chain, AssetLists } from '../types'\n\n`
      );
    }

    let suffix = ': Chain';

    if (chain.isNamed('assetlist.json') || chain.isNamed('assetslist.json')) {
      suffix = 'AssetList: AssetLists';
    }

    await appendFile(
      filename,
      `export const ${camelCase(chainName)}${suffix} = ${data}\n\n`
    );

    chainDataMap.set(chainName, filename);
  }

  await writeFile(
    `${outputPath}/index.ts`,
    Array.from(chainDataMap.keys())
      .map((chain) => `export * from './${chain}'`)
      .join('\n')
  );
}

await rm(mainnetsPath, { recursive: true, force: true });
await mkdir(mainnetsPath);
const mainnetChains = await getFiles(
  `${chainRegistryPath}**/*.json`,
  pathsToIgnore
);

await processChains(mainnetChains, mainnetsPath);

await rm(testnetsPath, { recursive: true, force: true });
await mkdir(testnetsPath);
const testnetChains = await getFiles(
  `${chainRegistryPath}testnets/**/*.json`,
  testnetPathsToIgnore
);

await processChains(testnetChains, testnetsPath);

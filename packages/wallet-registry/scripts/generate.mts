import { mkdir, readFile, writeFile, rm } from 'fs/promises';
import { glob } from 'glob';
import { URL } from 'url';
import { processWallets } from './utils.mts';

const __dirname = new URL('../', import.meta.url).pathname;
const walletRegistryPath = `${__dirname}wallet-registry/`;
const walletsPath = `${__dirname}src/wallets`;

async function getFiles(path: string, ignore: string[] = []) {
  const files = await glob(path, {
    ignore: ignore.map((ignoredPath) => walletRegistryPath + ignoredPath),
    withFileTypes: true,
  });
  return files;
}

const [wallets] = await Promise.all([
  getFiles(`${walletRegistryPath}wallets/**/*.json`),
]);

await rm(walletsPath, { recursive: true, force: true });
await mkdir(walletsPath);

const walletsFiles = await processWallets(wallets, walletsPath);

await writeFile(
  `${walletsPath}/index.ts`,
  Array.from(walletsFiles.keys())
    .map((chain) => `export * from './${chain}'`)
    .join('\n'),
);

import { mkdir, readFile, writeFile, rm } from 'fs/promises';
import { glob } from 'glob';
import { URL } from 'url';
import { processWallets } from './utils.mts';

const __dirname = new URL('../', import.meta.url).pathname;
const walletRegistryPath = `${__dirname}wallet-registry/`;
const walletsPath = `${__dirname}src/wallets`;
const typesPath = `${__dirname}src/types`;

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

const { walletDataMap, walletNames } = await processWallets(
  wallets,
  walletsPath,
);

await writeFile(
  `${typesPath}/name.ts`,
  `
export const WalletNames = [${walletNames.map(
    (walletName) => `'${walletName}'`,
  )}] as const;

export type WalletName =
  (typeof WalletNames)[keyof typeof WalletNames];
`,
);

await writeFile(
  `${walletsPath}/index.ts`,
  Array.from(walletDataMap.keys())
    .map((chain) => `export * from './${chain}'`)
    .join('\n'),
);

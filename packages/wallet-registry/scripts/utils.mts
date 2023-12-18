import { appendFile, readFile, writeFile } from 'fs/promises';
import { Path } from 'glob';
import camelCase from 'camelcase';

export function buildWalletName(originalChainName: string): string {
  const startNumberRegex = /^\d+/;
  const matches = startNumberRegex.exec(originalChainName);
  const chainNameSuffix = matches != null ? matches[0] : '';
  return originalChainName.replace(startNumberRegex, '') + chainNameSuffix;
}

export async function processWallets(wallets: Path[], outputPath: string) {
  const walletDataMap = new Set();

  for (const wallet of wallets) {
    if (!wallet.parent) {
      continue;
    }

    const chainName = buildWalletName(wallet.parent.name);

    const data = await readFile(`${wallet.path}/${wallet.name}`, 'utf-8');
    const filename = `${outputPath}/${chainName}.ts`;

    if (!walletDataMap.has(chainName)) {
      await writeFile(
        filename,
        `import type { CosmosWallet } from '../types'\n\n`,
      );
    }

    let suffix = ': CosmosWallet';

    await appendFile(
      filename,
      `export const ${camelCase(chainName)}${suffix} = ${data}\n\n`,
    );

    walletDataMap.add(chainName);
  }

  return walletDataMap;
}

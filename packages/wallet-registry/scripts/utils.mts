import { appendFile, readFile, writeFile } from 'fs/promises';
import { Path } from 'glob';
import camelCase from 'camelcase';
import type { CosmosWallet } from '../src/types/wallet';

export function buildWalletName(originalwalletName: string): string {
  const startNumberRegex = /^\d+/;
  const matches = startNumberRegex.exec(originalwalletName);
  const walletNameSuffix = matches != null ? matches[0] : '';
  return originalwalletName.replace(startNumberRegex, '') + walletNameSuffix;
}

export async function processWallets(wallets: Path[], outputPath: string) {
  const walletDataMap = new Set();
  const walletNames: string[] = [];

  for (const wallet of wallets) {
    if (!wallet.parent) {
      continue;
    }

    const walletName = buildWalletName(wallet.parent.name);

    const data = await readFile(`${wallet.path}/${wallet.name}`, 'utf-8');
    const parsedData = JSON.parse(data) as CosmosWallet;
    const filename = `${outputPath}/${walletName}.ts`;

    if (!walletDataMap.has(walletName)) {
      await writeFile(
        filename,
        `import type { CosmosWallet } from '../types'\n\n`,
      );
    }

    let suffix = ': CosmosWallet';

    await appendFile(
      filename,
      `export const ${camelCase(walletName)}${suffix} = ${data}\n\n`,
    );

    walletDataMap.add(walletName);
    walletNames.push(parsedData.wallet_name);
  }

  return { walletDataMap, walletNames };
}

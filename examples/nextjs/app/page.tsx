import { osmosis, osmosisAssetList } from '@nabla-studio/chain-registry'

export default async function Index() {
  return (
    <div>
      {osmosis.chain_name}
      {osmosisAssetList.chain_name}
    </div>
  );
}

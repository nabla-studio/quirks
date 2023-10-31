import { osmosis, osmosisAssetList } from '@nabla-studio/chain-registry';
import { Button } from '../components/button';

export default async function Index() {
  return (
    <div>
      {osmosis.chain_name}
      {osmosisAssetList.chain_name}

      <Button />
    </div>
  );
}

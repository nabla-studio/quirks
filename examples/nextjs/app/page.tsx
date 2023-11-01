import { osmosis, osmosisAssetList } from '@nabla-studio/chain-registry';
import { Button } from '../components/button';
import { Test } from '../components/test';

export default async function Index() {
  return (
    <div>
      {osmosis.chain_name}
      {osmosisAssetList.chain_name}

      <Test />
      <Button />
    </div>
  );
}

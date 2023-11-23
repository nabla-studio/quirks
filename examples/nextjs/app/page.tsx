import { TestChain } from '../components/test-chain';
import { Button } from '../components/button';
import { Test } from '../components/test';

export default async function Index() {
  return (
    <div>
      <Test iframe />
      <TestChain />
      <Button />
    </div>
  );
}

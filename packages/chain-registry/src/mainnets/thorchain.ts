import type { Chain, AssetLists } from '../types';

export const thorchain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'thorchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://thorchain.org/',
  pretty_name: 'THORChain',
  chain_id: 'thorchain-mainnet-v1',
  bech32_prefix: 'thor',
  daemon_name: 'thord',
  node_home: '$HOME/.thornode',
  slip44: 931,
  codebase: {
    git_repo: 'https://gitlab.com/thorchain/thornode',
    recommended_version: 'chaosnet-multichain',
    compatible_versions: ['chaosnet-multichain'],
    genesis: {
      genesis_url: 'https://rpc.thorchain.info/genesis',
    },
    versions: [
      {
        name: 'chaosnet-multichain',
        recommended_version: 'chaosnet-multichain',
        compatible_versions: ['chaosnet-multichain'],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '5e89caf0ca79e0fb3371d5892efd96d66042d0d6',
        address: '157.90.34.75:27146',
      },
      {
        id: '6c7d780bb7384142f6943543ed4c3ba537f4a411',
        address: '138.197.59.244:27146',
      },
      {
        id: '2d25606076036716a31611185d39880fe8237e97',
        address: '3.230.67.253:27146',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://btc.thorchain.info',
        provider: 'btc',
      },
      {
        address: 'https://bch.thorchain.info',
        provider: 'bch',
      },
      {
        address: 'https://ltc.thorchain.info',
        provider: 'ltc',
      },
      {
        address: 'https://bnb.thorchain.info',
        provider: 'bnb',
      },
      {
        address: 'https://eth.thorchain.info',
        provider: 'eth',
      },
    ],
    rest: [],
  },
  explorers: [
    {
      kind: 'THORChain explorer',
      url: 'https://thorchain.net',
      tx_page: 'https://thorchain.net/#/txs/${txHash}',
    },
    {
      kind: 'viewblock',
      url: 'https://viewblock.io/thorchain',
      tx_page: 'https://viewblock.io/thorchain/tx/${txHash}',
    },
  ],
};

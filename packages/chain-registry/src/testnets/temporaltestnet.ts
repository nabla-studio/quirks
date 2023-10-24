import type { Chain, AssetLists } from '../types';

export const temporaltestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'temporaltestnet',
  chain_id: 'temporal-test-2',
  pretty_name: 'Temporal Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'temporal',
  daemon_name: 'temporald',
  node_home: '$HOME/.temporal',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'utprl',
        fixed_min_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'utprl',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/temporal-zone/temporal',
    recommended_version: 'v0.4.0',
    compatible_versions: ['v0.4.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/temporal-zone/temporal-testnet/main/genesis/genesis.json',
    },
    versions: [
      {
        name: 'v0.4.0',
        recommended_version: 'v0.4.0',
        compatible_versions: ['v0.4.0'],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:24156',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.yieldmos.com/temporal-test-2',
        provider: 'Yieldmos',
      },
      {
        address: 'https://testnet-temporal-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five',
      },
    ],
    rest: [
      {
        address: 'https://lcd.yieldmos.com/temporal-test-2',
        provider: 'Yieldmos',
      },
      {
        address: 'https://testnet-temporal-api.lavenderfive.com:443',
        provider: 'Lavender.Five',
      },
    ],
    grpc: [
      {
        address: '142.132.157.153:24190',
        provider: 'Yieldmos',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://testnet.explorer.thesilverfox.pro/temporal',
      tx_page:
        'https://testnet.explorer.thesilverfox.pro/temporal/tx/${txHash}',
    },
    {
      kind: 'Nodes.Guru',
      url: 'https://testnet.temporal.explorers.guru',
      tx_page: 'https://testnet.temporal.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/temporal',
      tx_page: 'https://testnet.ping.pub/temporal/tx/${txHash}',
    },
  ],
};

export const temporaltestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'temporaltestnet',
  assets: [
    {
      description:
        'The native staking and governance token of the testnet version of Temporal.',
      denom_units: [
        {
          denom: 'utprl',
          exponent: 0,
        },
        {
          denom: 'tprl',
          exponent: 6,
        },
      ],
      base: 'utprl',
      name: 'TPRL',
      display: 'tprl',
      symbol: 'TPRL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/temporaltestnet/images/temporal.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/temporaltestnet/images/temporal.png',
        },
      ],
    },
  ],
};

import type { Chain, AssetLists } from '../types';

export const xpla: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'xpla',
  status: 'live',
  website: 'https://xpla.io',
  network_type: 'mainnet',
  pretty_name: 'XPLA',
  chain_id: 'dimension_37-1',
  bech32_prefix: 'xpla',
  daemon_name: 'xplad',
  node_home: '$HOME/.xpla',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'axpla',
        fixed_min_gas_price: 850000000000,
        low_gas_price: 850000000000,
        average_gas_price: 1147500000000,
        high_gas_price: 1487500000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'axpla',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/xpladev/xpla',
    recommended_version: 'v1.2.1',
    compatible_versions: ['v1.2.1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/xpladev/mainnet/main/dimension_37-1/genesis.json',
    },
    versions: [
      {
        name: 'evm',
        recommended_version: 'v1.2.1',
        compatible_versions: ['v1.2.1'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
  },
  peers: {
    seeds: [
      {
        id: 'e7b6016ce5663a69ba71a982072315545eb0d5f6',
        address: 'seed.xpla.delightlabs.io:26656',
        provider: 'DELIGHT',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:20157',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
    persistent_peers: [
      {
        id: '7364858f416c1890c85a83afedf1afecccb9a9de',
        address: '34.86.128.71:26656',
        provider: 'Holdings',
      },
      {
        id: 'd5c5908a5390b2278180ce975d94d4a43da4952b',
        address: '34.89.191.254:26656',
        provider: 'Com2verse',
      },
      {
        id: 'fa9585ef51316cda0125bb9bed1d35f59d7448b9',
        address: '104.196.250.63:26656',
        provider: 'Com2us',
      },
      {
        id: 'e6d30a1d191c64ff301c44f9ddd9d0b3d1f9ee7a',
        address: '35.230.121.77:26656',
        provider: 'Com2us',
      },
      {
        id: '88c62eea9c6229c26cd45d1f58cf48bfc1463b31',
        address: '130.211.121.170:26656',
        provider: 'Hive Platform Lab',
      },
      {
        id: '6592da1bfd8bea853b89946d4c502586e2712b4e',
        address: '34.87.100.83:26656',
        provider: 'Crossnode Labs',
      },
      {
        id: '15efa0a83dff372752369cc984492d9ee72f332b',
        address: 'cdif46gvol8ecmg7jpqg.bdnodes.net:26656',
        provider: 'DELIGHT',
      },
      {
        id: '15d365ce8bfaff27ad4260e5db3fba480d334c39',
        address: '52.28.248.241:26656',
        provider: 'Blockdaemon',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://dimension-rpc.xpla.dev',
        provider: 'Holdings',
      },
      {
        address: 'https://xpla-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
    rest: [
      {
        address: 'https://dimension-lcd.xpla.io',
        provider: 'ZenaAD',
      },
      {
        address: 'https://dimension-lcd.xpla.dev',
        provider: 'Holdings',
      },
      {
        address: 'https://xpla-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'http://xpla.api.staking-explorer.com',
        provider: 'staking-explorer.com',
      },
    ],
    grpc: [],
    'evm-http-jsonrpc': [
      {
        address: 'https://dimension-evm-rpc.xpla.dev',
        provider: 'Holdings',
      },
    ],
  },
  explorers: [
    {
      kind: 'explorer.xpla',
      url: 'https://explorer.xpla.io',
      tx_page: 'https://explorer.xpla.io/mainnet/tx/${txHash}',
    },
    {
      kind: 'finder',
      url: 'https://finder.xpla.io',
      tx_page: 'https://finder.xpla.io/mainnet/tx/${txHash}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/xpla',
      tx_page: 'https://www.mintscan.io/xpla/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/xpla/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
    },
  ],
};

export const xplaAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'xpla',
  assets: [
    {
      description: 'The native staking token of XPLA.',
      denom_units: [
        {
          denom: 'axpla',
          exponent: 0,
        },
        {
          denom: 'xpla',
          exponent: 18,
        },
      ],
      base: 'axpla',
      name: 'Xpla',
      display: 'xpla',
      symbol: 'XPLA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      },
      coingecko_id: 'xpla',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
        },
      ],
    },
  ],
};

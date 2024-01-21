import type { Chain, AssetLists, ChainVersions } from '../types';

export const lumenx: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lumenx',
  status: 'killed',
  network_type: 'mainnet',
  pretty_name: 'LumenX',
  chain_id: 'LumenX',
  bech32_prefix: 'lumen',
  daemon_name: 'lumenxd',
  node_home: '$HOME/.lumenx',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ulumen',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ulumen',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/cryptonetD/lumenx',
    recommended_version: 'v1.4.0',
    compatible_versions: ['v1.4.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/cryptonetD/lumenx/main/config/genesis.json',
    },
    versions: [
      {
        name: 'v1.4.0',
        tag: 'v1.4.0',
        recommended_version: 'v1.4.0',
        compatible_versions: ['v1.4.0'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg',
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '43c4eb952a35df720f2cb4b86a73b43f682d6cb1',
        address: '37.187.149.93:26696',
      },
      {
        id: '81913c271aad8b26c10e3175a8f1ecf813921bab',
        address: '144.24.149.118:26656',
      },
      {
        id: '9a49635f0ecb7ba93fc9eba952cbe58767557010',
        address: '185.215.180.70:26656',
      },
      {
        id: '64c01c609297f010790a67fbb9e339a9072aa890',
        address: '144.24.134.26:26656',
      },
      {
        id: '2c341d570e537683d23102e64e7b73f4bbaef829',
        address: 'rpc.lumenx.chaintools.tech:26766',
      },
      {
        id: 'e3989262b8dff3596f3b1d5e44372e9326362552',
        address: '192.99.4.66:26666',
      },
      {
        id: 'e29d17459030df3ade1c7232a570abf942d5dc3c',
        address: '65.109.28.226:11656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-lumenx.cryptonet.pl/',
        provider: 'CryptoNet',
      },
      {
        address: 'https://lumenx-rpc.kynraze.com/',
        provider: 'Kynraze',
      },
    ],
    rest: [
      {
        address: 'https://api-lumenx.cryptonet.pl/',
        provider: 'CryptoNet',
      },
      {
        address: 'https://api-lumenx.nodine.id/',
        provider: 'Nodine.ID',
      },
      {
        address: 'https://lcd.lumenx.hexnodes.co/',
        provider: 'Hexnodes',
      },
    ],
    grpc: [
      {
        address: 'https://lumenx-grpc.kynraze.com',
        provider: 'Kynraze',
      },
      {
        address: 'https://grpc-lumenx.nodine.id',
        provider: 'Nodine.ID',
      },
      {
        address: 'https://grpc.lumenx.hexnodes.co',
        provider: 'Hexnodes',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.chaintools.tech/lumenx',
      tx_page: 'https://explorer.chaintools.tech/lumenx/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.cryptonet.pl/lumenx',
      tx_page: 'https://explorer.cryptonet.pl/lumenx/tx/${txHash}',
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/lumenx',
      tx_page: 'https://explorer.kynraze.com/lumenx/tx/${txHash}',
    },
    {
      kind: 'ComunityNode',
      url: 'https://explorer.comunitynode.my.id/lumenx',
      tx_page: 'https://explorer.comunitynode.my.id/lumenx/tx/${txHash}',
    },
    {
      kind: 'Nodine.ID',
      url: 'https://explorer.co.id/lumenx',
      tx_page: 'https://explorer.co.id/lumenx/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/lumenx',
      tx_page: 'https://atomscan.com/lumenx/transactions/${txHash}',
      account_page: 'https://atomscan.com/lumenx/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg',
    },
  ],
};

export const lumenxAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'lumenx',
  assets: [
    {
      description: 'The native token of LumenX Network',
      denom_units: [
        {
          denom: 'ulumen',
          exponent: 0,
        },
        {
          denom: 'lumen',
          exponent: 6,
        },
      ],
      base: 'ulumen',
      name: 'LUMEN',
      display: 'lumen',
      symbol: 'LUMEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg',
        },
      ],
    },
  ],
};

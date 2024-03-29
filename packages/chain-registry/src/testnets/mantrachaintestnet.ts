import type { Chain, AssetLists, ChainVersions } from '../types';

export const mantrachaintestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mantrachaintestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'MANTRA Chain',
  chain_id: 'mantrachain-testnet-1',
  bech32_prefix: 'uaum',
  daemon_name: 'mantrachaind',
  node_home: '$HOME/.mantrachain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uaum',
        fixed_min_gas_price: 0,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.003,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uaum',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/MANTRA-Finance',
    recommended_version: '1.0.0',
    compatible_versions: ['1.0.0'],
    cosmos_sdk_version: '0.47.3',
    consensus: {
      type: 'cometbft',
      version: '0.37',
    },
    cosmwasm_version: '0.41',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url: '',
    },
    versions: [
      {
        name: '1.0.0',
        recommended_version: '1.0.0',
        compatible_versions: ['1.0.0'],
        cosmos_sdk_version: '0.47.3',
        consensus: {
          type: 'cometbft',
          version: '0.37',
        },
        cosmwasm_version: '0.41',
        cosmwasm_enabled: true,
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '69fa5f7927f2b013f152b6dfc56324156feb1973',
        address: '34.172.80.207:26656',
        provider: 'MANTRACHAIN',
      },
    ],
    persistent_peers: [
      {
        id: '182a37a556ff0b6733fe58020e7746de3292492d',
        address: '5.222.198.102:26656',
        provider: 'MANTRACHAIN',
      },
      {
        id: '64691a4202c1ad29a416b21ce21bfc9659783406',
        address: '34.136.169.18:26656',
        provider: 'MANTRACHAIN',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.mantrachain.io',
        provider: 'MANTRACHAIN',
      },
    ],
    rest: [
      {
        address: 'https://api.testnet.mantrachain.io',
        provider: 'MANTRACHAIN',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.testnet.mantrachain.io',
        provider: 'MANTRACHAIN',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg',
  },
  keywords: ['dex', 'testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg',
    },
  ],
};

export const mantrachaintestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mantrachaintestnet',
  assets: [
    {
      description: 'The native token of MANTRA Chain',
      denom_units: [
        {
          denom: 'uaum',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'aum',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'uaum',
      name: 'MANTRA Chain',
      display: 'aum',
      symbol: 'AUM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg',
      },
      coingecko_id: '',
      keywords: [
        'mantra',
        'staking',
        'delegating',
        'governance',
        'regulation',
        'defi',
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg',
        },
      ],
    },
  ],
};

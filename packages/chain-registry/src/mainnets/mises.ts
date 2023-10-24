import type { Chain, AssetLists } from '../types';

export const mises: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mises',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://mises.site',
  pretty_name: 'Mises',
  chain_id: 'mainnet',
  bech32_prefix: 'mises',
  node_home: '$HOME/.misestm',
  daemon_name: 'misestmd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'umis',
        fixed_min_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'umis',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/mises-id/mises-tm',
    recommended_version: 'v1.0.4',
    compatible_versions: ['v1.0.4'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/mises-id/mainnet/master/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.4',
        recommended_version: 'v1.0.4',
        compatible_versions: ['v1.0.4'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png',
  },
  peers: {
    seeds: [
      {
        id: '40a8318fa18fa9d900f4b0d967df7b1020689fa0',
        address: 'e1.mises.site:26656',
        provider: 'Mises-2',
      },
      {
        id: '0d25c5db4cbdc4171c8272278040db774011c268',
        address: 'e2.mises.site:26656',
        provider: 'Mises-3',
      },
      {
        id: '1adcfe9b030125b9caa72f3eae3b1274cbaca2cd',
        address: 'w1.mises.site:26656',
        provider: 'Mises-4',
      },
      {
        id: '1a96557a74cb8448249b9d15c3cc38cd3aff553d',
        address: 'w2.mises.site:26656',
        provider: 'Mises-5',
      },
    ],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.gw.mises.site:443',
        provider: 'Mises-1',
      },
      {
        address: 'https://e1.mises.site:443',
        provider: 'Mises-2',
      },
      {
        address: 'https://e2.mises.site:443',
        provider: 'Mises-3',
      },
      {
        address: 'https://w1.mises.site:443',
        provider: 'Mises-4',
      },
      {
        address: 'https://w2.mises.site:443',
        provider: 'Mises-5',
      },
    ],
    rest: [],
    grpc: [],
  },
  explorers: [
    {
      kind: 'Mises-GW Explorer',
      url: 'https://gw.mises.site',
      tx_page: 'https://gw.mises.site/tx/${txHash}',
    },
    {
      kind: 'Jambulmerah ping.pub based',
      url: 'https://explorer.jambulmerah.dev/mises',
      tx_page: 'https://explorer.jambulmerah.dev/mises/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png',
    },
  ],
};

export const misesAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mises',
  assets: [
    {
      description: 'The native staking and gov token of the Mises Network.',
      denom_units: [
        {
          denom: 'umis',
          exponent: 0,
          aliases: ['micromis'],
        },
        {
          denom: 'mmis',
          exponent: 3,
          aliases: ['millimis'],
        },
        {
          denom: 'mis',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'umis',
      display: 'mis',
      name: 'mises network MIS',
      symbol: 'MIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mises/images/mises.png',
        },
      ],
    },
  ],
};

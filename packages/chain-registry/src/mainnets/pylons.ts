import type { Chain, AssetLists, ChainVersions } from '../types';

export const pylons: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'pylons',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://pylons.tech',
  pretty_name: 'Pylons',
  chain_id: 'pylons-mainnet-1',
  bech32_prefix: 'pylo',
  node_home: '$HOME/.pylons',
  daemon_name: 'pylonsd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ubedrock',
        fixed_min_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ubedrock',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/Pylons-tech/pylons.git',
    recommended_version: 'v1.1.4',
    compatible_versions: ['v1.1.4'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/Pylons-tech/pylons/main/networks/pylons-mainnet-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.1.4',
        recommended_version: 'v1.1.4',
        compatible_versions: ['v1.1.4'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png',
  },
  peers: {
    seeds: [
      {
        id: '0d25c5db4cbdc4171c8272278040db774011c268',
        address: '5.161.229.9:26656',
      },
      {
        id: 'e9e64412c3d43de4f2e5f7a3e9289b4190e4ed78',
        address: '88.198.32.17:33656',
      },
      {
        id: '030e6a01aef8913bcee33b957e9204986203bc81',
        address: '135.125.4.73:46656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.nodejumper.io:443/pylons',
        provider: 'Nodejumper.io',
      },
    ],
    rest: [
      {
        address: 'https://rest.nodejumper.io/pylons',
        provider: 'Nodejumper.io',
      },
    ],
  },
  explorers: [
    {
      kind: 'Nodes.guru',
      url: 'https://pylons.explorers.guru/',
      tx_page: 'https://pylons.explorers.guru/transaction/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png',
    },
  ],
};

export const pylonsAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'pylons',
  assets: [
    {
      description: 'The revenue token for Pylons',
      denom_units: [
        {
          denom: 'ubedrock',
          exponent: 0,
        },
        {
          denom: 'rock',
          exponent: 6,
        },
      ],
      base: 'ubedrock',
      name: 'Pylons',
      display: 'rock',
      symbol: 'ROCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png',
        },
      ],
    },
  ],
};
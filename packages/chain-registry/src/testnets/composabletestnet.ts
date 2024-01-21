import type { Chain, AssetLists, ChainVersions } from '../types';

export const composabletestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'composabletestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Composable Testnet',
  chain_id: 'banksy-testnet-3',
  bech32_prefix: 'centauri',
  daemon_name: 'centaurid',
  node_home: '$HOME/.banksy',
  key_algos: ['secp256k1'],
  slip44: 118,
  staking: {
    staking_tokens: [
      {
        denom: 'ppica',
      },
    ],
  },
  fees: {
    fee_tokens: [
      {
        denom: 'ppica',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/notional-labs/composable-centauri',
    recommended_version: 'v3.0.0',
    compatible_versions: ['v3.0.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/notional-labs/composable-networks/main/banksy-testnet-3/genesis.json',
    },
    versions: [
      {
        name: 'v3.0.0',
        recommended_version: 'v3.0.0',
        compatible_versions: ['v3.0.0'],
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '488f98949ba03931c433aaf12d799bb1cd6f3942',
        address: '65.21.225.10:47656',
        provider: 'Indonode',
      },
      {
        id: '667703b3bdf291ec7774c0c46a54eddd2ccb6d36',
        address: '46.17.250.108:61456',
        provider: 'Sr20de',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.composable-t.indonode.net:443',
        provider: 'Indonode',
      },
      {
        address: 'https://rpc-composable-testnet.sr20de.xyz:443',
        provider: 'Sr20de',
      },
    ],
    rest: [
      {
        address: 'https://api.composable-t.indonode.net',
        provider: 'Indonode',
      },
      {
        address: 'https://composable.api.t4.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api-composable-testnet.sr20de.xyz',
        provider: 'Sr20de',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.composable-t.indonode.net:47090',
        provider: 'Indonode',
      },
      {
        address: 'https://grpc-composable-testnet.sr20de.xyz',
        provider: 'Sr20de',
      },
    ],
  },
  explorers: [
    {
      url: 'https://explorer.nodexcapital.com/composable-3',
      tx_page: 'https://explorer.nodexcapital.com/composable-3/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Composable-Testnet4',
      tx_page: 'https://explorer.stavr.tech/Composable-Testnet4/tx/${txHash}',
    },
    {
      url: 'https://explorer.indonode.net/composable-testnet-3',
      tx_page:
        'https://explorer.indonode.net/composable-testnet-3/tx/${txHash}',
    },
    {
      url: 'https://explorer.sr20de.xyz/Composible-3',
      tx_page: 'https://explorer.sr20de.xyz/Composible-3/tx/${txHash}',
    },
  ],
};

export const composabletestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'composabletestnet',
  assets: [
    {
      description:
        'The native staking and governance token of the Composable testnet.',
      denom_units: [
        {
          denom: 'ppica',
          exponent: 0,
        },
        {
          denom: 'pica',
          exponent: 12,
        },
      ],
      base: 'ppica',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg',
        },
      ],
    },
  ],
};

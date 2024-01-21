import type { Chain, AssetLists, ChainVersions } from '../types';

export const konstellation: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'konstellation',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://konstellation.tech/',
  pretty_name: 'Konstellation',
  chain_id: 'darchub',
  bech32_prefix: 'darc',
  daemon_name: 'knstld',
  node_home: '$HOME/.knstld',
  slip44: 118,
  codebase: {
    git_repo: 'https://github.com/knstl/konstellation',
    recommended_version: 'v0.6.2',
    compatible_versions: ['v0.6.2'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/Konstellation/konstellation/master/config/genesis.json',
    },
    versions: [
      {
        name: 'v0.6.2',
        recommended_version: 'v0.6.2',
        compatible_versions: ['v0.6.2'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png',
  },
  fees: {
    fee_tokens: [
      {
        denom: 'udarc',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0001,
        average_gas_price: 0.001,
        high_gas_price: 0.01,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'udarc',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '1bd4b89e05e5d7ea5d2dba89c799c2e624cb35d7',
        address: 'node1.konstellation.tech:26656',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13356',
        provider: 'Polkachu',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'konstellation-mainnet-seed.autostake.com:26826',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'df949a46ae6529ae1e09b034b49716468d5cc7e9',
        address: 'seeds.stakerhouse.com:10856',
        provider: 'StakerHouse',
      },
    ],
    persistent_peers: [
      {
        id: '1bd4b89e05e5d7ea5d2dba89c799c2e624cb35d7',
        address: 'node1.konstellation.tech:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'konstellation-mainnet-peer.autostake.com:26826',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '5a10c5f0a2d981037a0a3e5ecc825901ae0d416c',
        address: '65.109.0.135:26656',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://konstellation-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-konstellation-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://konstellation-rpc.stakerhouse.com',
        provider: 'StakerHouse',
      },
    ],
    rest: [
      {
        address: 'https://api-konstellation-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://konstellation-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://konstellation-rest.stakerhouse.com',
        provider: 'StakerHouse',
      },
    ],
    grpc: [
      {
        address: 'grpc-konstellation-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'konstellation-grpc.polkachu.com:13390',
        provider: 'Polkachu',
      },
      {
        address: 'konstellation-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'konstellation-grpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
    ],
  },
  explorers: [
    {
      kind: 'konstellation',
      url: 'https://explorer.konstellation.tech/',
      tx_page: 'https://explorer.konstellation.tech/tx/${txHash}',
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/konstellation',
      tx_page: 'https://cosmotracker.com/konstellation/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png',
    },
  ],
};

export const konstellationAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'konstellation',
  assets: [
    {
      description: 'The native token of Konstellation Network',
      denom_units: [
        {
          denom: 'udarc',
          exponent: 0,
        },
        {
          denom: 'darc',
          exponent: 6,
        },
      ],
      base: 'udarc',
      name: 'DARC',
      display: 'darc',
      symbol: 'DARC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg',
      },
      coingecko_id: 'darcmatter-coin',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg',
        },
      ],
    },
  ],
};

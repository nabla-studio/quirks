import type { Chain, AssetLists } from '../types';

export const cudostestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cudostestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Cudos Testnet',
  chain_id: 'cudos-testnet-public-3',
  bech32_prefix: 'cudos',
  key_algos: ['secp256k1'],
  slip44: 118,
  codebase: {
    git_repo: 'https://github.com/CudoVentures/cudos-node',
    recommended_version: 'v1.1.0',
    compatible_versions: ['v1.1.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/CudoVentures/cudos-builders/cudos-master/docker/config/genesis.testnet.public.json',
    },
    versions: [
      {
        name: 'v1.1.0',
        recommended_version: 'v1.1.0',
        compatible_versions: ['v1.1.0'],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'ee9f57fa3d29a7b88df01dd69f1537c5687b8fd6',
        address: 'seed-01.hosts.testnet.cudos.org:26656',
        provider: 'cudo',
      },
      {
        id: '8c9f61d1783b4ab9707ef4dc99d07c9cd0ae5155',
        address: 'seed-02.hosts.testnet.cudos.org:26656',
        provider: 'cudo',
      },
      {
        id: '56543c24150a939095558c16dee031bf2fb2feb5',
        address: 'seed-03.hosts.testnet.cudos.org:26656',
        provider: 'cudo',
      },
    ],
    persistent_peers: [
      {
        id: '0ccf54158f9c340f1fdacf6b4884ca8c8372a923',
        address: 'sentry-01.hosts.testnet.cudos.org:26656',
        provider: 'cudo',
      },
      {
        id: '7c48114327bfd3ff3b396cda8b33a24c5d0ad172',
        address: 'sentry-02.hosts.testnet.cudos.org:26656',
        provider: 'cudo',
      },
      {
        id: 'd2693512dc45cc856300bcc1b8fd518ab5b2d343',
        address: 'sentry-03.hosts.testnet.cudos.org:26656',
        provider: 'cudo',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.cudos.org:443/',
        provider: 'cudo',
      },
      {
        address: 'http://sentry-01.hosts.testnet.cudos.org:26657',
        provider: 'cudo',
      },
      {
        address: 'http://sentry-02.hosts.testnet.cudos.org:26657',
        provider: 'cudo',
      },
      {
        address: 'http://sentry-03.hosts.testnet.cudos.org:26657',
        provider: 'cudo',
      },
    ],
    rest: [
      {
        address: 'https://rest.testnet.cudos.org:443',
        provider: 'cudo',
      },
      {
        address: 'http://sentry-01.hosts.testnet.cudos.org:1317/',
        provider: 'cudo',
      },
      {
        address: 'http://sentry-02.hosts.testnet.cudos.org:1317/',
        provider: 'cudo',
      },
      {
        address: 'http://sentry-03.hosts.testnet.cudos.org:1317/',
        provider: 'cudo',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.testnet.cudos.org:433',
        provider: 'cudo',
      },
      {
        address: 'http://sentry-01.hosts.testnet.cudos.org:9090',
        provider: 'cudo',
      },
      {
        address: 'http://sentry-02.hosts.testnet.cudos.org:9090',
        provider: 'cudo',
      },
      {
        address: 'http://sentry-03.hosts.testnet.cudos.org:9090',
        provider: 'cudo',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper-testnet',
      url: 'https://explorer.testnet.cudos.org/',
      tx_page: 'https://explorer.testnet.cudos.org/transactions/${txHash}',
      account_page:
        'https://explorer.testnet.cudos.org/accounts/${accountAddress}',
    },
  ],
};

export const cudostestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'cudostestnet',
  assets: [
    {
      description: 'The native token of the Cudos blockchain',
      denom_units: [
        {
          denom: 'acudos',
          exponent: 0,
          aliases: ['attocudos'],
        },
        {
          denom: 'cudos',
          exponent: 18,
          aliases: [],
        },
      ],
      base: 'acudos',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cudostestnet/images/cudos.svg',
        },
      ],
    },
  ],
};

import type { Chain, AssetLists } from '../types';

export const cronos: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cronos',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://cronos.org',
  pretty_name: 'Cronos',
  chain_id: 'cronosmainnet_25-1',
  bech32_prefix: 'crc',
  daemon_name: 'cronosd',
  node_home: '$HOME/.cronos',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'basecro',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/crypto-org-chain/cronos',
    recommended_version: 'v1.0.4',
    compatible_versions: ['v1.0.2', 'v1.0.3', 'v1.0.4'],
    binaries: {
      'linux/amd64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Linux_x86_64.tar.gz',
      'linux/arm64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Darwin_x86_64.tar.gz',
      'darwin/arm64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Windows_x86_64.zip',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/crypto-org-chain/cronos-mainnet/master/cronosmainnet_25-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.4',
        recommended_version: 'v1.0.4',
        compatible_versions: ['v1.0.2', 'v1.0.3', 'v1.0.4'],
        binaries: {
          'linux/amd64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/crypto-org-chain/cronos/releases/download/v1.0.4/cronos_1.0.4_Windows_x86_64.zip',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
  },
  peers: {
    seeds: [
      {
        id: '0d5cf1394a1cfde28dc8f023567222abc0f47534',
        address: 'cronos-seed-0.crypto.org:26656',
        provider: 'crypto-org',
      },
      {
        id: '3032073adc06d710dd512240281637c1bd0c8a7b',
        address: 'cronos-seed-1.crypto.org:26656',
        provider: 'crypto-org',
      },
      {
        id: '04f43116b4c6c70054d9c2b7485383df5b1ed1da',
        address: 'cronos-seed-2.crypto.org:26656',
        provider: 'crypto-org',
      },
      {
        id: '337377dcda43d79c537d2c4d93ad3b698ce9452e',
        address: 'bd-cronos-mainnet-seed-node-01.bdnodes.net:26656',
        provider: 'Blockdaemon.com',
      },
      {
        id: 'abedfe94dd5731e9750e045ca8d8e40aa6d3c60b',
        address: 'seed.cronos.jerrychong.com:26656',
        provider: "Jerry's Pool",
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'cronos-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'cronos-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '0d5cf1394a1cfde28dc8f023567222abc0f47534',
        address: 'cronos-seed-0.crypto.org:26656',
        provider: 'crypto-org',
      },
      {
        id: '3032073adc06d710dd512240281637c1bd0c8a7b',
        address: 'cronos-seed-1.crypto.org:26656',
        provider: 'crypto-org',
      },
      {
        id: '04f43116b4c6c70054d9c2b7485383df5b1ed1da',
        address: 'cronos-seed-2.crypto.org:26656',
        provider: 'crypto-org',
      },
      {
        id: '337377dcda43d79c537d2c4d93ad3b698ce9452e',
        address: 'bd-cronos-mainnet-seed-node-01.bdnodes.net:26656',
        provider: 'Blockdaemon.com',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cronos.org/',
        provider: 'crypto.org',
      },
      {
        address: 'https://rpc-cronos.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://cronos-rpc.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://rest.cronos.org/',
        provider: 'crypto.org',
      },
      {
        address: 'https://api-cronos.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://cronos-rest.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'cronos-grpc.publicnode.com:443',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc-cronos.cosmos-spaces.cloud:1170',
        provider: 'Cosmos Spaces',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://evm.cronos.org/',
        provider: 'crypto.org',
      },
      {
        address: 'https://cronos-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'cronoscan',
      url: 'https://cronoscan.com',
      tx_page: 'https://cronoscan.com/tx/${txHash}',
    },
    {
      kind: 'crypto.org',
      url: 'https://cronos.org/explorer',
      tx_page: 'https://cronos.org/explorer/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
    },
  ],
};

export const cronosAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cronos',
  assets: [
    {
      description:
        'Cronos Chain - Get Instant DApp Portability with EVM Support',
      denom_units: [
        {
          denom: 'basecro',
          exponent: 0,
        },
        {
          denom: 'cro',
          exponent: 18,
        },
      ],
      base: 'basecro',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      },
      coingecko_id: 'crypto-com-chain',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
        },
      ],
    },
    {
      description: 'Tether USDt on Cronos',
      denom_units: [
        {
          denom:
            'ibc/9106F2626880DF7FAD30621F355423B2A7523D8E2274475F009644D708A90682',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/9106F2626880DF7FAD30621F355423B2A7523D8E2274475F009644D708A90682',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-125',
          },
          chain: {
            channel_id: 'channel-11',
            path: 'transfer/channel-11',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
          },
        },
      ],
    },
  ],
};

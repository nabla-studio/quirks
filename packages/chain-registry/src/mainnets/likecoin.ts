import type { Chain, AssetLists, ChainVersions } from '../types';

export const likecoin: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'likecoin',
  status: 'live',
  website: 'https://like.co/',
  network_type: 'mainnet',
  pretty_name: 'LikeCoin',
  chain_id: 'likecoin-mainnet-2',
  bech32_prefix: 'like',
  daemon_name: 'liked',
  node_home: '$HOME/.liked',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'nanolike',
        fixed_min_gas_price: 1000,
        low_gas_price: 1000,
        average_gas_price: 10000,
        high_gas_price: 1000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'nanolike',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/likecoin/likecoin-chain',
    recommended_version: 'v4.1.1',
    compatible_versions: ['v4.1.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_x86_64.tar.gz',
      'linux/arm64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_x86_64.tar.gz',
      'darwin/arm64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Windows_x86_64.zip',
    },
    cosmos_sdk_version: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_enabled: false,
    ibc_go_version: '6.2.1',
    ics_enabled: ['ics20-1'],
    genesis: {
      name: 'fotan-1.0',
      genesis_url:
        'https://raw.githubusercontent.com/likecoin/mainnet/982c14399089950a59d3ebbedcbbc7ead6040457/genesis.json',
    },
    versions: [
      {
        name: 'fotan-1.0',
        tag: 'v1.2.0',
        height: 0,
        recommended_version: 'v1.2.0',
        compatible_versions: ['v1.2.0', 'fotan-1.2'],
        cosmos_sdk_version: '0.42',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v1.2.0/likecoin-chain_1.2.0_Windows_x86_64.zip',
        },
        next_version_name: 'v2.0.0',
      },
      {
        name: 'v2.0.0',
        tag: 'v2.0.2',
        height: 3692800,
        recommended_version: 'v2.0.2',
        compatible_versions: ['v2.0.0', 'v2.0.1', 'v2.0.2'],
        cosmos_sdk_version: '0.44',
        ibc_go_version: '2.1.0',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v2.0.2/likecoin-chain_2.0.2_Windows_x86_64.zip',
        },
        next_version_name: 'v3.0.0',
      },
      {
        name: 'v3.0.0',
        tag: 'v3.1.0',
        height: 4810000,
        recommended_version: 'v3.1.0',
        compatible_versions: ['v3.1.0'],
        cosmos_sdk_version: '0.45',
        ibc_go_version: '2.3.0',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Windows_x86_64.zip',
        },
        next_version_name: 'v4.0.0',
      },
      {
        name: 'v4.0.0',
        tag: 'v4.0.1',
        height: 9419200,
        recommended_version: 'v4.0.1',
        compatible_versions: ['v4.0.0', 'v4.0.1', 'v4.0.2'],
        cosmos_sdk_version: '0.46',
        ibc_go_version: '5.3.1',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.0.1/likecoin-chain_4.0.1_Windows_x86_64.zip',
        },
        next_version_name: 'v4.1.1',
      },
      {
        name: 'v4.1.1',
        tag: 'v4.1.1',
        height: 12102100,
        recommended_version: 'v4.1.1',
        compatible_versions: ['v4.1.1'],
        cosmos_sdk_version: '0.46',
        ibc_go_version: '6.2.1',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/likecoin/likecoin-chain/releases/download/v4.1.1/likecoin-chain_4.1.1_Windows_x86_64.zip',
        },
        next_version_name: '',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '913bd0f4bea4ef512ffba39ab90eae84c1420862',
        address: '34.82.131.35:26656',
        provider: 'like.co',
      },
      {
        id: 'e44a2165ac573f84151671b092aa4936ac305e2a',
        address: 'nnkken.dev:26656',
        provider: 'nnkken',
      },
      {
        id: 'd354a96014507ea480d04f8fe009dd5a4f7fe7fb',
        address: 'likecoin-seed.oldcat.io.oldcat.io:26656',
        provider: 'Oldcat',
      },
    ],
    persistent_peers: [
      {
        id: 'f087d600cf3d34d3bac04a9723a53180619e8445',
        address: '35.247.83.138:26656',
        provider: 'like.co',
      },
      {
        id: '20afcd5637b2278efc78c54fd523bd331d1820f2',
        address: '78.47.110.110:26656',
        provider: 'moonbeam',
      },
      {
        id: '5940f55e0e7e2f1a2c9507bf62fbfd7c6d2f3874',
        address: 'likechain.oursky.com:26656',
        provider: 'Oursky',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet-node.like.co/rpc/',
        provider: 'like.co',
      },
      {
        address: 'https://likecoin-node.oldcat.io:443/rpc/',
        provider: 'Oldcat',
      },
      {
        address: 'https://rpc-likecoin-mainnet.pikaser.net',
        provider: 'PikaSer',
      },
      {
        address: 'http://51.159.223.25:28657',
        provider: 'Citizen Web3',
      },
    ],
    rest: [
      {
        address: 'https://mainnet-node.like.co',
        provider: 'like.co',
      },
      {
        address: 'https://likecoin-node.oldcat.io:443/api/',
        provider: 'Oldcat',
      },
      {
        address: 'https://rest-likecoin-mainnet.pikaser.net',
        provider: 'PikaSer',
      },
    ],
    grpc: [
      {
        address: 'mainnet-node-grpc.like.co:80',
        provider: 'like.co',
      },
      {
        address: 'https://likecoin-node.oldcat.io:443/grpc/',
        provider: 'Oldcat',
      },
      {
        address: 'grpc-likecoin-mainnet.pikaser.net:443',
        provider: 'PikaSer',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/likecoin',
      tx_page: 'https://www.mintscan.io/likecoin/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/likecoin/accounts/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/likecoin',
      tx_page: 'https://bigdipper.live/likecoin/transactions/${txHash}',
      account_page:
        'https://bigdipper.live/likecoin/accounts/${accountAddress}',
    },
    {
      kind: 'lunie-ng',
      url: 'https://stake.like.co/',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/likecoin',
      tx_page: 'https://ping.pub/likecoin/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/likecoin',
      tx_page: 'https://atomscan.com/likecoin/transactions/${txHash}',
      account_page: 'https://atomscan.com/likecoin/accounts/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg',
  },
  keywords: ['depub', 'publishing', 'like', 'book', 'writing', 'nft'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg',
    },
  ],
};

export const likecoinAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'likecoin',
  assets: [
    {
      description:
        'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [
        {
          denom: 'nanolike',
          exponent: 0,
        },
        {
          denom: 'like',
          exponent: 9,
        },
      ],
      base: 'nanolike',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg',
      },
      coingecko_id: 'likecoin',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg',
        },
      ],
    },
  ],
};

import type { Chain, AssetLists } from '../types';

export const realio: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'realio',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://realio.network/',
  pretty_name: 'Realio Network',
  chain_id: 'realionetwork_3301-1',
  bech32_prefix: 'realio',
  node_home: '$HOME/.realio-network',
  daemon_name: 'realio-networkd',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'ario',
        fixed_min_gas_price: 1000000000,
        low_gas_price: 4000000000,
        average_gas_price: 5000000000,
        high_gas_price: 8000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ario',
      },
      {
        denom: 'arst',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/realiotech/realio-network',
    recommended_version: 'v0.8.3',
    compatible_versions: ['v0.8.2', 'v0.8.3'],
    binaries: {
      'linux/amd64':
        'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Linux_x86_64.tar.gz',
      'linux/arm64':
        'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Darwin_x86_64.tar.gz',
      'darwin/arm64':
        'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Windows_x86_64.zip',
    },
    cosmos_sdk_version: '0.46',
    consensus: {
      type: 'cometbft',
      version: '0.34.27',
    },
    ibc_go_version: '6.1.1',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/realiotech/mainnet/main/realionetwork_3301-1/genesis.json',
    },
    versions: [
      {
        name: 'v0.8.0-rc4',
        recommended_version: 'v0.8.0-rc4',
        compatible_versions: ['v0.8.0-rc4'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '6.1.0',
        next_version_name: 'v0.8.1',
      },
      {
        name: 'v0.8.1',
        recommended_version: 'v0.8.1',
        compatible_versions: ['v0.8.1'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '6.1.1',
        next_version_name: 'v0.8.3',
      },
      {
        name: 'v0.8.3',
        recommended_version: 'v0.8.3',
        compatible_versions: ['v0.8.2', 'v0.8.3'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'cometbft',
          version: '0.34.27',
        },
        ibc_go_version: '6.1.1',
        binaries: {
          'linux/amd64':
            'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/realiotech/realio-network/releases/download/v0.8.3/realio-network_Windows_x86_64.zip',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
  },
  peers: {
    seeds: [
      {
        id: '09ba537d6563018b97c502979c3478df4decf426',
        address: 'realio-seed.genznodes.dev:21656',
        provider: 'genznodes',
      },
    ],
    persistent_peers: [
      {
        id: '96ab7d2dafe2039cbb55e59cb99bcb7e1369c9a0',
        address: '95.214.55.138:30656',
        provider: 'genznodes',
      },
      {
        id: 'b09d477f5b59e5e99632ad3a8a11806381efa46f',
        address: 'realio.peers.stavr.tech:21096',
        provider: '🔥STAVR🔥',
      },
      {
        id: '9fe6d3bd18bb5367396b6602a65e20b302d36b33',
        address: 'rpc.realio.indonode.net:18656',
        provider: 'Indonode',
      },
      {
        id: '042ecfc55f2ca63a850d17921d55f241c8de7ce0',
        address: '65.108.206.74:22656',
        provider: 'vinjan',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://realio-rpc.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://rpc-realio-network.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'http://realio.rpc.m.stavr.tech:21097',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc.realio.indonode.net',
        provider: 'Indonode',
      },
      {
        address: 'https://rpc.realio.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://rpc-realio.vinjan.xyz',
        provider: 'vinjan',
      },
    ],
    rest: [
      {
        address: 'https://realio-api.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://api-realio-network.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://realio.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api.realio.indonode.net',
        provider: 'Indonode',
      },
      {
        address: 'https://api.realio.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://api-realio.vinjan.xyz',
        provider: 'vinjan',
      },
    ],
    grpc: [
      {
        address: 'realio-grpc.genznodes.dev:30090',
        provider: 'genznodes',
      },
      {
        address: 'http://realio.grpc.m.stavr.tech:9062',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://grpc-realio.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://grpc.realio.nodestake.top:443',
        provider: 'NodeStake',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://realio-rpc-evm.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://jsonrpc.realio.nodestake.top',
        provider: 'NodeStake',
      },
    ],
  },
  explorers: [
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/realio-mainnet',
      tx_page: 'https://explorer.stavr.tech/realio-mainnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/realio-mainnet/account/{$accountAddress}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/realio',
      tx_page: 'https://explorer.nodestake.top/realio/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.top/realio/account/{$accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
    },
  ],
};

export const realioAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'realio',
  assets: [
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [
        {
          denom: 'ario',
          exponent: 0,
        },
        {
          denom: 'rio',
          exponent: 18,
        },
      ],
      base: 'ario',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg',
      },
      coingecko_id: 'realio-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg',
        },
      ],
    },
    {
      description:
        'A hybrid equity token that represent ownership of the Realio Ecosystem and provides utility functions on the Network.',
      denom_units: [
        {
          denom: 'arst',
          exponent: 0,
        },
        {
          denom: 'rst',
          exponent: 18,
        },
      ],
      base: 'arst',
      name: 'Realio Security Token',
      display: 'rst',
      symbol: 'RST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rst.png',
        },
      ],
    },
  ],
};

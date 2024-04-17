import type { Chain, AssetLists, ChainVersions } from '../types';

export const lavatestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'lavatestnet',
  status: 'live',
  pre_fork_chain_name: 'lavatestnet1',
  network_type: 'testnet',
  website: 'https://www.lavanet.xyz/',
  pretty_name: 'Lava Testnet',
  chain_id: 'lava-testnet-2',
  bech32_prefix: 'lava@',
  daemon_name: 'lavad',
  node_home: '$HOME/.lava',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ulava',
        fixed_min_gas_price: 0.000001,
        low_gas_price: 0.000001,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ulava',
      },
    ],
    lock_duration: {
      time: '1209600s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/lavanet/lava',
    recommended_version: 'v1.0.1',
    compatible_versions: ['v1.0.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/lavanet/lava/releases/download/v1.0.1/lavad-v1.0.1-linux-amd64',
    },
    cosmos_sdk_version: '0.47.7',
    consensus: {
      type: 'tendermint',
      version: '0.37',
    },
    cosmwasm_version: '0.30',
    cosmwasm_enabled: false,
    ibc_go_version: '7.2.0',
    ics_enabled: ['ics20-1'],
    genesis: {
      name: 'v0.21.1.2',
      genesis_url:
        'https://raw.githubusercontent.com/lavanet/lava-config/main/testnet-2/genesis_json/genesis.json',
    },
    versions: [
      {
        name: 'v0.21.1.2',
        tag: 'v0.21.1.2',
        height: 345000,
        next_version_name: 'v0.22.0',
      },
      {
        name: 'v0.22.0',
        tag: 'v0.22.0',
        height: 396595,
        next_version_name: 'v0.23.5',
      },
      {
        name: 'v0.23.5',
        tag: 'v0.23.5',
        height: 435889,
        next_version_name: 'v0.24.0',
      },
      {
        name: 'v0.24.0',
        tag: 'v0.24.0',
        height: 472310,
        next_version_name: 'v0.25.2',
      },
      {
        name: 'v0.25.2',
        tag: 'v0.25.2',
        height: 514533,
        next_version_name: 'v0.26.1',
      },
      {
        name: 'v0.26.1',
        tag: 'v0.26.1',
        height: 554249,
        next_version_name: 'v0.27.0',
      },
      {
        name: 'v0.27.0',
        tag: 'v0.27.0',
        height: 590764,
        next_version_name: 'v0.30.1',
      },
      {
        name: 'v0.30.1',
        tag: 'v0.30.1',
        height: 633177,
        next_version_name: 'v0.30.2',
      },
      {
        name: 'v0.30.2',
        tag: 'v0.30.2',
        height: 636006,
        next_version_name: 'v0.31.1',
      },
      {
        name: 'v0.31.1',
        tag: 'v0.31.1',
        height: 675100,
        next_version_name: 'v0.32.0',
      },
      {
        name: 'v0.32.0',
        tag: 'v0.32.0',
        height: 711251,
        next_version_name: 'v0.33.0',
      },
      {
        name: 'v0.33.0',
        tag: 'v0.33.0',
        height: 764400,
        next_version_name: 'v0.34.0',
      },
      {
        name: 'v0.34.0',
        tag: 'v0.34.0',
        height: 809250,
        next_version_name: 'v0.35.0',
      },
      {
        name: 'v0.35.0',
        tag: 'v0.35.0',
        height: 845700,
        next_version_name: 'v1.0.1',
      },
      {
        name: 'v1.0.1',
        tag: 'v1.0.1',
        height: 927794,
        recommended_version: 'v1.0.1',
        compatible_versions: ['v1.0.1'],
        cosmos_sdk_version: '0.47.7',
        consensus: {
          type: 'tendermint',
          version: '0.37',
        },
        cosmwasm_enabled: false,
        ibc_go_version: '3.0.1',
        ics_enabled: ['ics20-1'],
        binaries: {
          'linux/amd64':
            'https://github.com/lavanet/lava/releases/download/v1.0.1/lavad-v1.0.1-linux-amd64',
        },
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      theme: {
        primary_color_hex: '#D7001F',
      },
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
  },
  peers: {
    seeds: [
      {
        id: '3a445bfdbe2d0c8ee82461633aa3af31bc2b4dc0',
        address: 'prod-pnet-seed-node.lavanet.xyz:26656',
        provider: 'Lava',
      },
      {
        id: 'e593c7a9ca61f5616119d6beb5bd8ef5dd28d62d',
        address: 'prod-pnet-seed-node2.lavanet.xyz:26656',
        provider: 'Lava',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'testnet-seeds.polkachu.com:19956',
        provider: 'Polkachu',
      },
      {
        id: 'eb7832932626c1c636d16e0beb49e0e4498fbd5e',
        address: 'lava-testnet-seed.itrocket.net:20656',
        provider: '🚀ITRocket🚀',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://public-rpc-testnet2.lavanet.xyz:443/rpc/',
        provider: 'Lava',
      },
      {
        address: 'http://lava.rpc.t.stavr.tech:198',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://lava-testnet-rpc.itrocket.net:443',
        provider: '🚀ITRocket🚀',
      },
      {
        address: 'https://lava-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
    rest: [
      {
        address: 'https://public-rpc-testnet2.lavanet.xyz:443/rest/',
        provider: 'Lava',
      },
      {
        address: 'https://lava.api.t.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://lava-testnet-api.itrocket.net',
        provider: '🚀ITRocket🚀',
      },
      {
        address: 'https://lava-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://lava.explorers.guru/',
      tx_page: 'https://lava.explorers.guru//transaction/${txHash}',
      account_page: 'https://lava.explorers.guru//account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Lava-Testnet',
      tx_page: 'https://explorer.stavr.tech/Lava-Testnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Lava-Testnet/account/${accountAddress}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/lava-testnet',
      tx_page: 'https://explorer.nodestake.org/lava-testnet/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.org/lava-testnet/account/${accountAddress}',
    },
    {
      kind: '🚀ITRocket🚀',
      url: 'https://testnet.itrocket.net/lava',
      tx_page: 'https://testnet.itrocket.net/lava/tx/${txHash}',
      account_page:
        'https://testnet.itrocket.net/lava/account/${accountAddress}',
    },
  ],
  keywords: ['rpc', 'api', 'modular', 'data'],
};

export const lavatestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'lavatestnet',
  assets: [
    {
      description: 'The native token of Lava',
      denom_units: [
        {
          denom: 'ulava',
          exponent: 0,
        },
        {
          denom: 'lava',
          exponent: 6,
        },
      ],
      base: 'ulava',
      name: 'LAVA',
      display: 'lava',
      symbol: 'LAVA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg',
      },
      keywords: ['rpc', 'api'],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg',
        },
      ],
    },
  ],
};

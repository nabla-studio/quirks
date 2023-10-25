import type { Chain, AssetLists } from '../types';

export const coreum: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'coreum',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.coreum.com',
  pretty_name: 'Coreum',
  chain_id: 'coreum-mainnet-1',
  bech32_prefix: 'core',
  daemon_name: 'cored',
  node_home: '$HOME/.core/coreum-mainnet-1',
  key_algos: ['secp256k1'],
  slip44: 990,
  fees: {
    fee_tokens: [
      {
        denom: 'ucore',
        fixed_min_gas_price: 0.03125,
        low_gas_price: 0.0625,
        average_gas_price: 0.0625,
        high_gas_price: 62.5,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ucore',
      },
    ],
    lock_duration: {
      time: '168h',
    },
  },
  codebase: {
    git_repo: 'https://github.com/CoreumFoundation/coreum',
    recommended_version: 'v2.0.2',
    compatible_versions: ['v2.0.2'],
    binaries: {
      'linux/amd64':
        'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.2/cored-linux-amd64?checksum=sha256:3facf55f7ff795719f68b9bcf76ea08262bc7c9e9cd735c660257ba73678250e',
      'linux/arm64':
        'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.2/cored-linux-arm64?checksum=sha256:35e261eb3b87c833c30174e6b8667a6155f5962441275d443157e209bbb0bf0d',
    },
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.30',
    cosmwasm_enabled: true,
    genesis: {
      name: 'v1',
      genesis_url:
        'https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-mainnet-1.json',
    },
    versions: [
      {
        name: 'v1',
        tag: 'v1.0.0',
        height: 0,
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-amd64?checksum=sha256:34098ad7586bda364b1b2e7c4569cbcefb630cd4ed7c8f68eb5bced834082c57',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-arm64?checksum=sha256:3ced97f06607f0cdaf77e7ff0b36b2011d101c660684e4f3e54c2ac6bf344dd6',
        },
        next_version_name: 'v2',
      },
      {
        name: 'v2',
        tag: 'v2.0.2',
        height: 0,
        recommended_version: 'v2.0.2',
        compatible_versions: ['v2.0.2'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.2/cored-linux-amd64?checksum=sha256:3facf55f7ff795719f68b9bcf76ea08262bc7c9e9cd735c660257ba73678250e',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.2/cored-linux-arm64?checksum=sha256:35e261eb3b87c833c30174e6b8667a6155f5962441275d443157e209bbb0bf0d',
        },
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      theme: {
        primary_color_hex: '#25d695',
      },
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
  },
  peers: {
    seeds: [
      {
        id: '0df493af80fbaad41b9b26d6f4520b39ceb1d210',
        address: 'seed-iron.mainnet-1.coreum.dev:26656',
        provider: 'Coreum Foundation',
      },
      {
        id: 'cba16f4f32707d70a2a2d10861fac897f1e9aaa1',
        address: 'seed-nickle.mainnet-1.coreum.dev:26656',
        provider: 'Coreum Foundation',
      },
      {
        id: '67ecf3e890b2f77b13fc872c8f11f868c283be6e',
        address: 'rpc.coreum.nodexcapital.com:14156',
        provider: 'NodeX Validator',
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'coreum-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'coreum-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://full-node.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-californium.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-curium.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-uranium.mainnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://rpc-coreum.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://rpc.coreum.nodexcapital.com',
        provider: 'NodeX Validator',
      },
      {
        address: 'https://coreum.rpc.silknodes.io',
        provider: 'Silk Nodes',
      },
      {
        address: 'https://coreum-rpc.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'https://full-node.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-californium.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-curium.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-uranium.mainnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://grpc.coreum.nodexcapital.com:444',
        provider: 'NodeX Validator',
      },
      {
        address: 'coreum-grpc.publicnode.com:443',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://rest-coreum.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://rest.coreum.nodexcapital.com',
        provider: 'NodeX Validator',
      },
      {
        address: 'https://coreum.api.silknodes.io',
        provider: 'Silk Nodes',
      },
      {
        address: 'https://full-node.mainnet-1.coreum.dev:1317',
        provider: 'Coreum',
      },
      {
        address: 'https://coreum-rest.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'Coreum',
      url: 'https://explorer.coreum.com/coreum',
      tx_page: 'https://explorer.coreum.com/coreum/transactions/${txHash}',
      account_page:
        'https://explorer.coreum.com/coreum/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/coreum',
      tx_page: 'https://www.mintscan.io/coreum/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/coreum/accounts/${accountAddress}',
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/coreum',
      tx_page: 'https://explorer.nodexcapital.com/coreum/txs/${txHash}',
      account_page:
        'https://explorer.nodexcapital.com/coreum/account/${accountAddress}',
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/coreum',
      tx_page: 'https://explorer.silknodes.io/coreum/tx/${txHash}',
      account_page:
        'https://explorer.silknodes.io/coreum/account/${accountAddress}',
    },
  ],
  keywords: ['dex', 'staking', 'wasm', 'assets', 'nft'],
};

export const coreumAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'coreum',
  assets: [
    {
      description: 'The native token of Coreum',
      denom_units: [
        {
          denom: 'ucore',
          exponent: 0,
        },
        {
          denom: 'core',
          exponent: 6,
        },
      ],
      base: 'ucore',
      name: 'Coreum',
      display: 'core',
      symbol: 'CORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
      },
      coingecko_id: 'coreum',
      keywords: ['dex', 'staking', 'wasm', 'assets', 'nft'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
        },
      ],
    },
  ],
};
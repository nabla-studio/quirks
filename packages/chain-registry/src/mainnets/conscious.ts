import type { Chain, AssetList, Versions } from '../types';

export const conscious: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'conscious',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://cvn.io/',
  pretty_name: 'ConsciousDAO',
  chain_id: 'cvn_2032-1',
  bech32_prefix: 'cvn',
  node_home: '$HOME/.cvnd',
  daemon_name: 'cvnd',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'acvnt',
        fixed_min_gas_price: 100000000,
        low_gas_price: 100000000,
        average_gas_price: 200000000,
        high_gas_price: 300000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'acvnt',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/cvn-network/cvn',
    recommended_version: 'v2.1.1',
    compatible_versions: ['v2.1.1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/cvn-network/cvn/release/v2.1.x/networks/mainnet/config/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.3',
        recommended_version: 'v1.0.4',
        compatible_versions: ['v1.0.3'],
        next_version_name: 'v2.1.1',
      },
      {
        name: 'v2.1.1',
        recommended_version: 'v2.1.1',
        compatible_versions: ['v2.1.1'],
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
  },
  peers: {
    seeds: [],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cvn.io/',
        provider: 'cvn.io',
      },
      {
        address: 'https://conscious_mainnet_rpc.chain.whenmoonwhenlambo.money/',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
    ],
    rest: [
      {
        address: 'https://api.cvn.io',
        provider: 'cvn.io',
      },
      {
        address: 'https://conscious_mainnet_api.chain.whenmoonwhenlambo.money/',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.cvn.io',
        provider: 'cvn.io',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://node.cvn.io/',
        provider: 'cvn',
      },
      {
        address: 'https://node.consciousdao.io/',
        provider: 'consciousdao',
      },
      {
        address: 'https://conscious_mainnet_evm.chain.whenmoonwhenlambo.money/',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
    ],
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://explore.consciousdao.com/',
      tx_page: 'https://explore.consciousdao.com/tx/${txHash}',
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/conscious',
      tx_page:
        'https://explorer.whenmoonwhenlambo.money/conscious/tx/${txHash}',
      account_page:
        'https://explorer.whenmoonwhenlambo.money/conscious/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
    },
  ],
};

export const consciousAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'conscious',
  assets: [
    {
      description:
        'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      extended_description:
        'Conscious Network is a public chain infrastructure that deeply integrates AI. It is based on a multi-layer blockchain network architecture consisting of Layer 1 and L2 Rollup, and introduces decentralized storage protocols to build a scalable Web3 AI infrastructure.',
      denom_units: [
        {
          denom: 'acvnt',
          exponent: 0,
        },
        {
          denom: 'cvnt',
          exponent: 18,
        },
      ],
      base: 'acvnt',
      name: 'Cvn',
      display: 'cvnt',
      symbol: 'CVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
      },
      coingecko_id: 'consciousdao',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg',
        },
      ],
      socials: {
        website: 'https://cvn.io',
        twitter: 'https://twitter.com/conscious_chain',
      },
    },
  ],
};

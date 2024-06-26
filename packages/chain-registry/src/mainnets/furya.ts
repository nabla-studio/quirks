import type { Chain, AssetList, Versions } from '../types';

export const furya: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'furya',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://furya.xyz/',
  pretty_name: 'furya',
  chain_id: 'furya-1',
  daemon_name: 'furyad',
  node_home: '$HOME/.furyad',
  bech32_prefix: 'furya',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ufury',
        low_gas_price: 0,
        average_gas_price: 0.25,
        high_gas_price: 0.5,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ufury',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/furysport/furya-chain',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url:
        'https://github.com/furysport/furya-chain/blob/main/network/mainnet/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg',
  },
  peers: {
    seeds: [
      {
        id: '38f40db17cdae23ba3c2b0f7d5738b9d31d077aa',
        address: '34.32.247.201:26656',
        provider: 'Furya',
      },
    ],
    persistent_peers: [
      {
        id: '38f40db17cdae23ba3c2b0f7d5738b9d31d077aa',
        address: '34.32.247.201:26656',
        provider: 'Furya',
      },
      {
        id: '906ba6fd7cc9349d63c26608736ac91fe09437fb',
        address: '85.215.65.44:26656',
        provider: 'Starsquid',
      },
      {
        id: '637077d431f618181597706810a65c826524fd74',
        address: 'furya.rpc.nodeshub.online:26956',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.furya.xyz',
        provider: 'Furya Genesis Validator',
      },
      {
        address: 'https://furya-rpc.synergynodes.com',
        provider: 'synergynodes',
      },
      {
        address: 'https://furya.rpc.nodeshub.online:443',
        provider: 'nodeshub',
      },
    ],
    rest: [
      {
        address: 'https://api.furya.xyz',
        provider: 'Furya Genesis Validator',
      },
      {
        address: 'https://furya.api.nodeshub.online',
        provider: 'synergynodes',
      },
      {
        address: 'https://furya.api.nodeshub.online',
        provider: 'Furya Genesis Validator',
      },
      {
        address: 'https://furya.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    grpc: [
      {
        address: 'grpc.furya.xyz:443',
        provider: 'Furya Genesis Validator',
      },
      {
        address: 'https://furya.grpc.nodeshub.online',
        provider: 'Nodes Hub',
      },
    ],
  },
  explorers: [
    {
      kind: 'Furya Explorer',
      url: 'https://explorer.furya.xyz/',
      tx_page: 'https://explorer.furya.xyz/furya/tx/${txHash}',
      account_page:
        'https://explorer.furya.xyz/furya/account/${accountAddress}',
    },
    {
      kind: 'Nodeshub Explorer',
      url: 'https://explorer.nodeshub.online/furya',
      tx_page: 'https://explorer.nodeshub.online/furya/txs/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/furya/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg',
    },
  ],
};

export const furyaAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'furya',
  assets: [
    {
      description: 'The native token of Furya',
      denom_units: [
        {
          denom: 'ufury',
          exponent: 0,
        },
        {
          denom: 'fury',
          exponent: 6,
        },
      ],
      base: 'ufury',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg',
          theme: {
            primary_color_hex: '#eaf143',
          },
        },
      ],
      coingecko_id: 'fanfury',
      keywords: ['gaming', 'staking'],
      socials: {
        twitter: 'https://twitter.com/furyachain',
      },
    },
  ],
};

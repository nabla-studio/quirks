import type { Chain, AssetLists } from '../types';

export const loyal: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'loyal',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.joinloyal.com/',
  pretty_name: 'Loyal',
  chain_id: 'loyal-main-02',
  bech32_prefix: 'loyal',
  daemon_name: 'loyald',
  node_home: '$HOME/.loyal',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ulyl',
        fixed_min_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ulyl',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/LoyalLabs/loyal',
    recommended_version: 'v0.25.3',
    compatible_versions: ['v0.25.3'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/LoyalLabs/net/main/mainnet/genesis.json',
    },
    versions: [
      {
        name: 'v0.25.3',
        recommended_version: 'v0.25.3',
        compatible_versions: ['v0.25.3'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg',
  },
  peers: {
    seeds: [
      {
        id: '7490c272d1c9db40b7b9b61b0df3bb4365cb63a6',
        address: 'loyal-seed.netdots.net:27656',
      },
      {
        id: 'f8f5d04e17c998478c29ba6ab74b2e995a2b6dcd',
        address: 'tenderseed.ccvalidators.com:29002',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:17856',
        provider: 'Polkachu',
      },
    ],
    persistent_peers: [
      {
        id: '7490c272d1c9db40b7b9b61b0df3bb4365cb63a6',
        address: '54.80.32.192:26656',
      },
      {
        id: '607dbee191f06d9479d7ae8f9fc5de75ca840d6f',
        address: '185.215.167.227:31656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-main.joinloyal.io/',
      },
      {
        address: 'https://loyal-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc.loyal.nodestake.top',
        provider: 'NodeStake',
      },
    ],
    rest: [
      {
        address: 'https://lcd-main.joinloyal.io/',
      },
      {
        address: 'https://loyal-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://api.loyal.nodestake.top',
        provider: 'NodeStake',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.loyal.nodestake.top',
        provider: 'NodeStake',
      },
    ],
  },
  explorers: [
    {
      kind: 'Loyal explorer',
      url: 'https://pingpub.joinloyal.io/loyal',
      tx_page: 'https://pingpub.joinloyal.io/loyal/tx/${txHash}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/loyal',
      tx_page: 'https://explorer.tcnetwork.io/loyal/transaction/${txHash}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/loyal',
      tx_page: 'https://explorer.nodestake.top/loyal/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg',
    },
  ],
};

export const loyalAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'loyal',
  assets: [
    {
      description: 'The native token of Loyal',
      denom_units: [
        {
          denom: 'ulyl',
          exponent: 0,
        },
        {
          denom: 'lyl',
          exponent: 6,
        },
      ],
      base: 'ulyl',
      name: 'Loyal',
      display: 'lyl',
      symbol: 'LYL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/loyal/images/lyl.svg',
        },
      ],
    },
  ],
};

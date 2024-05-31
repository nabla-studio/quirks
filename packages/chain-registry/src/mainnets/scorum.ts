import type { Chain, AssetList, Versions } from '../types';

export const scorum: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'scorum',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://scorum.com/',
  pretty_name: 'Scorum Network',
  chain_id: 'scorum-1',
  bech32_prefix: 'scorum',
  daemon_name: 'scorumd',
  node_home: '$HOME/.scorum',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'gas',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'nsp',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/scorum/cosmos-network',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/scorum/cosmos-network/main/genesis/mainnet/genesis.json',
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
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.svg',
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '7c0008a9d13cbfc2672bc241547b3219b9fa6cca',
        address: 'scorum-blockchain-mainnet-p2p-1.scorum.com:26656',
        provider: 'scorum',
      },
      {
        id: '68e34a95b67f28d4b9c25a1fe3d2bdde4b921187',
        address: 'scorum-blockchain-mainnet-p2p-2.scorum.com:26656',
        provider: 'scorum',
      },
      {
        id: '0f97a484fcd027cf57243b21c3ebe21d02605657',
        address: 'scorum-blockchain-mainnet-p2p-3.scorum.com:26656',
        provider: 'scorum',
      },
      {
        id: 'a75acca4c04f05b62a323c6492870cb988b1505f',
        address: 'scorum-blockchain-mainnet-p2p-4.scorum.com:26656',
        provider: 'scorum',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://scorum-blockchain-mainnet-rpc.scorum.com',
        provider: 'scorum',
      },
    ],
    rest: [
      {
        address: 'https://scorum-blockchain-mainnet-api.scorum.com',
        provider: 'scorum',
      },
    ],
    grpc: [
      {
        address: 'https://scorum-blockchain-mainnet-grpc.scorum.com',
        provider: 'scorum',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/scorum',
      tx_page: 'https://ezstaking.app/scorum/txs/${txHash}',
      account_page: 'https://ezstaking.app/scorum/account/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://cosmos.scorum.com/scorum',
      tx_page: 'https://cosmos.scorum.com/scorum/transactions/${txHash}',
      account_page:
        'https://cosmos.scorum.com/scorum/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.svg',
    },
  ],
};

export const scorumAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'scorum',
  assets: [
    {
      description: 'The native token of Scorum',
      extended_description:
        'Scorum is a dynamic Layer-1 blockchain powered by Cosmos, designed to redefine the gaming and entertainment industries. Currently, it supports Aviatrix, a compelling crash game that not only leverages blockchain technology for secure and transparent gaming outcomes but also utilizes it for the integration of Non-Fungible Tokens (NFTs). Central to Scorum’s ecosystem is the SCR token, which supports both Aviatrix and future applications set to expand the platform’s offerings. The adoption of the Inter-Blockchain Communication protocol significantly enhances Scorum’s interoperability and scalability, paving the way for its ongoing expansion and the development of innovative, blockchain-powered entertainment solutions.',
      denom_units: [
        {
          denom: 'nscr',
          exponent: 0,
        },
        {
          denom: 'scr',
          exponent: 9,
        },
      ],
      base: 'nscr',
      name: 'Scorum',
      display: 'scr',
      symbol: 'SCR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg',
        },
      ],
      socials: {
        website: 'https://scorum.network',
        twitter: 'https://twitter.com/scorum_en',
      },
    },
    {
      description: 'Scorum Power used for internal mechanics and staking',
      denom_units: [
        {
          denom: 'nsp',
          exponent: 0,
        },
        {
          denom: 'sp',
          exponent: 9,
        },
      ],
      base: 'nsp',
      name: 'Scorum Power',
      display: 'sp',
      symbol: 'SP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.svg',
        },
      ],
    },
    {
      description: 'Virtual(non-transferable) coin used to pay gas',
      denom_units: [
        {
          denom: 'gas',
          exponent: 0,
        },
      ],
      base: 'gas',
      name: 'GAS',
      display: 'gas',
      symbol: 'GAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.svg',
        },
      ],
    },
  ],
};

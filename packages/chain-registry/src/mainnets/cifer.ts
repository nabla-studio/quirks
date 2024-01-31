import type { Chain, AssetLists, ChainVersions } from '../types';

export const cifer: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cifer',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://cifer.ai/',
  pretty_name: 'Cifer',
  chain_id: 'cifer',
  bech32_prefix: 'cife',
  daemon_name: 'ciferd',
  node_home: '$HOME/.ciferd',
  fees: {
    fee_tokens: [
      {
        denom: 'ucif',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 1,
        average_gas_price: 5,
        high_gas_price: 10,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ucif',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/cifer-ai/cifer',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url: 'https://rpc.mainnet.cifer.ai/genesis',
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
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
  },
  peers: {
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.cifer.ai',
        provider: 'cifer',
      },
    ],
    rest: [
      {
        address: 'https://mainnet.cifer.ai',
        provider: 'cifer',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.cifer.ai/',
      tx_page: 'https://explorer.cifer.ai/transactions/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
    },
  ],
};

export const ciferAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cifer',
  assets: [
    {
      description: 'Decentralized Federated Learning',
      denom_units: [
        {
          denom: 'ucif',
          exponent: 0,
        },
        {
          denom: 'cif',
          exponent: 6,
        },
      ],
      base: 'ucif',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg',
        },
      ],
    },
  ],
};
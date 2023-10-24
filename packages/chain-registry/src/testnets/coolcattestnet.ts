import type { Chain, AssetLists } from '../types';

export const coolcattestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'coolcattestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://app.coolcat.space/',
  pretty_name: 'CoolCat',
  chain_id: 'kitten-04',
  bech32_prefix: 'ccat',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [
      {
        denom: 'uccat',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 1,
        high_gas_price: 2,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uccat',
      },
    ],
  },
  daemon_name: 'coolcat',
  node_home: '$HOME/.coolcat',
  slip44: 118,
  codebase: {
    git_repo: 'https://github.com/DigitalKitchenLabs/coolcat',
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/DigitalKitchenLabs/testnets/main/kitten-04/genesis.json',
    },
    versions: [
      {
        name: 'v2.0.0',
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0'],
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.coolcat.space',
        provider: 'Digital Kitchen',
      },
    ],
    rest: [
      {
        address: 'https://lcd.coolcat.space',
        provider: 'Digital Kitchen',
      },
    ],
    grpc: [],
  },
  explorers: [],
};

export const coolcattestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'coolcattestnet',
  assets: [
    {
      description:
        'CoolCat - The Interchain Gaming Hub. $CCAT is the native token for use in the CoolCat Network.',
      denom_units: [
        {
          denom: 'uccat',
          exponent: 0,
        },
        {
          denom: 'ccat',
          exponent: 6,
        },
      ],
      base: 'uccat',
      name: 'CoolCat',
      display: 'ccat',
      symbol: 'CCAT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png',
      },
      keywords: ['nft', 'staking', 'games'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg',
        },
      ],
    },
  ],
};

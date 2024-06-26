import type { Chain, AssetList, Versions } from '../types';

export const logos: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'logos',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Logos',
  chain_id: 'logos_7002-1',
  bech32_prefix: 'logos',
  daemon_name: 'logosd',
  node_home: '$HOME/.logos',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'aLYT',
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
        address: 'https://logos-rpc.provable.dev:443/',
        provider: 'laurel.provable',
      },
    ],
    rest: [
      {
        address: 'https://logos.provable.dev/rest/',
        provider: 'laurel.provable',
      },
    ],
    grpc: [
      {
        address: 'logos-grpc.provable.dev:443',
        provider: 'laurel.provable',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://logos-evm.provable.dev/',
        provider: 'laurel.provable',
      },
    ],
  },
  explorers: [],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg',
  },
  codebase: {},
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg',
    },
  ],
};

export const logosAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'logos',
  assets: [
    {
      description: 'The native token of Logos',
      denom_units: [
        {
          denom: 'aLYT',
          exponent: 0,
        },
        {
          denom: 'LYT',
          exponent: 18,
        },
      ],
      base: 'aLYT',
      name: 'LYT',
      display: 'LYT',
      symbol: 'LYT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg',
        },
      ],
    },
  ],
};

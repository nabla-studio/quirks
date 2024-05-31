import type { Chain, AssetList, Versions } from '../types';

export const sunrise: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sunrise',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://sunriselayer.io/',
  pretty_name: 'Sunrise',
  chain_id: 'sunrise-1',
  bech32_prefix: 'sunrise',
  daemon_name: 'sunrised',
  node_home: '$HOME/.sunrise',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usr',
        fixed_min_gas_price: 0.002,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'usr',
      },
    ],
    lock_duration: {
      time: '1209600s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/sunriselayer/sunrise',
    recommended_version: 'v0.0.7',
    compatible_versions: ['v0.0.7'],
    binaries: {
      'linux/amd64':
        'https://github.com/sunriselayer/sunrise/releases/download/v0.0.7/sunrised',
    },
    cosmos_sdk_version: '0.50.2',
    consensus: {
      type: 'cometbft',
      version: 'sunriselayer/sunrise-core v0.0.5-cmt-v0.38.2',
    },
    ibc_go_version: '8.0.0',
    versions: [
      {
        name: 'v0.0.7',
        recommended_version: 'v0.0.7',
        compatible_versions: ['v0.0.7'],
        binaries: {
          'linux/amd64':
            'https://github.com/sunriselayer/sunrise/releases/download/v0.0.7/sunrised',
        },
        cosmos_sdk_version: '0.50.2',
        consensus: {
          type: 'cometbft',
          version: 'sunriselayer/sunrise-core v0.0.5-cmt-v0.38.2',
        },
        ibc_go_version: '8.0.0',
        ics_enabled: ['ics20-1'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
  },
  peers: {
    seeds: [],
    persistent_peers: [],
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: [],
  },
  explorers: [],
  images: [
    {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
    },
  ],
};

export const sunriseAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sunrise',
  assets: [
    {
      description: 'The native token of the Sunrise blockchain.',
      denom_units: [
        {
          denom: 'usr',
          exponent: 0,
          aliases: ['microsr'],
        },
        {
          denom: 'sr',
          exponent: 6,
        },
      ],
      base: 'usr',
      name: 'Sunrise',
      display: 'sr',
      symbol: 'SR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
        },
      ],
      socials: {
        website: 'https://sunriselayer.io/',
        twitter: 'https://twitter.com/SunriseLayer',
      },
    },
  ],
};

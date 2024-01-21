import type { Chain, AssetLists, ChainVersions } from '../types';

export const injectivetestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'injectivetestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://injective.com',
  pretty_name: 'Injective',
  chain_id: 'injective-888',
  bech32_prefix: 'inj',
  extra_codecs: ['injective'],
  slip44: 60,
  daemon_name: 'injectived',
  node_home: '$HOME/.injectived',
  fees: {
    fee_tokens: [
      {
        denom: 'inj',
        fixed_min_gas_price: 500000000,
        low_gas_price: 500000000,
        average_gas_price: 700000000,
        high_gas_price: 900000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'inj',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/InjectiveLabs/testnet',
    recommended_version: 'v1.11.1',
    compatible_versions: ['v1.11.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/InjectiveLabs/testnet/releases/download/v1.11.1-1685205489/linux-amd64.zip',
      'darwin/amd64':
        'https://github.com/InjectiveLabs/testnet/releases/download/v1.11.1-1685205489/darwin-amd64.zip',
    },
    genesis: {
      genesis_url:
        'https://injective-snapshots.s3.amazonaws.com/testnet/genesis.json',
    },
    versions: [
      {
        name: 'v1.10.2',
        recommended_version: 'v1.10.2',
        compatible_versions: ['v1.10.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/InjectiveLabs/testnet/releases/download/v1.10.2-1678712142/linux-amd64.zip',
          'darwin/amd64':
            'https://github.com/InjectiveLabs/testnet/releases/download/v1.10.2-1678712142/darwin-amd64.zip',
        },
        next_version_name: 'v1.11.1',
      },
      {
        name: 'v1.11.1',
        recommended_version: 'v1.11.1',
        compatible_versions: ['v1.11.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/InjectiveLabs/testnet/releases/download/v1.11.1-1685205489/linux-amd64.zip',
          'darwin/amd64':
            'https://github.com/InjectiveLabs/testnet/releases/download/v1.11.1-1685205489/darwin-amd64.zip',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'testnet-seeds.polkachu.com:14356',
        provider: 'polkachu',
      },
    ],
    persistent_peers: [
      {
        id: 'e5cc63a9117e6f372169f15774ea4f7c5177da25',
        address: '34.23.245.175:26656',
        provider: 'injectivelabs.org',
      },
      {
        id: '5bf72750f7e015ccfd65246c9f16185144867aff',
        address: '35.231.107.231:26656',
        provider: 'injectivelabs.org',
      },
      {
        id: '588dd6d1e1a338d1524efcfbd1c2a9bfc5df33d2',
        address: '104.196.43.6:26656',
        provider: 'injectivelabs.org',
      },
      {
        id: '8a05cc5bc466169a7332287ddce4cd8995684d1a',
        address: '34.73.247.128:26656',
        provider: 'injectivelabs.org',
      },
      {
        id: '0a2af0f999b08ccaf8825198d9aafb8b947c003f',
        address: '34.73.57.164:26656',
        provider: 'injectivelabs.org',
      },
      {
        id: 'd0c2407f4b1cef137d9d3ada69478234ad2a28f4',
        address: '34.73.57.164:26656',
        provider: 'injectivelabs.org',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://injective-testnet-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://k8s.testnet.tm.injective.network:443',
        provider: 'injectiveLabs',
      },
      {
        address: 'https://testnet.tm.injective.network',
        provider: 'injectiveLabs',
      },
    ],
    rest: [
      {
        address: 'https://injective-testnet-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://k8s.testnet.lcd.injective.network',
        provider: 'injectiveLabs',
      },
      {
        address: 'https://testnet.grpc.injective.network',
        provider: 'injectiveLabs',
      },
    ],
    grpc: [
      {
        address: 'injective-testnet-grpc.polkachu.com:14390',
        provider: 'Polkachu',
      },
      {
        address: 'k8s.testnet.chain.grpc.injective.network:443',
        provider: 'injectiveLabs',
      },
      {
        address: 'https://testnet.grpc.injective.network',
        provider: 'injectiveLabs',
      },
    ],
  },
  explorers: [
    {
      kind: 'injectiveprotocol',
      url: 'https://testnet.explorer.injective.network/',
      tx_page:
        'https://testnet.explorer.injective.network/transaction/${txHash}',
    },
  ],
};

export const injectivetestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'injectivetestnet',
  assets: [
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom: 'inj',
          exponent: 0,
        },
        {
          denom: 'INJ',
          exponent: 18,
        },
      ],
      base: 'inj',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
      },
      coingecko_id: 'injective-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
        },
      ],
    },
  ],
};

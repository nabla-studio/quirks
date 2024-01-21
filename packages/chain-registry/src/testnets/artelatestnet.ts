import type { Chain, AssetLists, ChainVersions } from '../types';

export const artelatestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'artelatestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Artela Testnet',
  chain_id: 'artela_11820-1',
  bech32_prefix: 'art',
  daemon_name: 'artelad',
  node_home: '$HOME/.artelad',
  key_algos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'uart',
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uart',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/artela-network/artela',
    recommended_version: 'v0.4.2-beta',
    compatible_versions: ['v0.4.2-beta'],
    cosmos_sdk_version: '0.47',
    consensus: {
      type: 'cometbft',
      version: '0.37',
    },
    ibc_go_version: 'v7.1.0',
    genesis: {
      genesis_url:
        'https://docs.artela.network/assets/files/genesis-697a2db4ef7e20dbdb8bdc1cd9d1633a.json',
    },
    versions: [
      {
        name: 'v0.4.2-beta',
        recommended_version: 'v0.4.2-beta',
        compatible_versions: ['v0.4.2-beta'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37',
        },
        ibc_go_version: 'v7.1.0',
      },
      {
        name: 'v0.4.1-beta',
        recommended_version: 'v0.4.1-beta',
        compatible_versions: ['v0.4.1-beta'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37',
        },
        ibc_go_version: 'v7.1.0',
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '211536ab1414b5b9a2a759694902ea619b29c8b1',
        address: '47.251.14.47:26656',
        provider: 'Artela Foundation',
      },
      {
        id: 'd89e10d917f6f7472125aa4c060c05afa78a9d65',
        address: '47.251.32.165:26656',
        provider: 'Artela Foundation',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation',
      },
      {
        address: 'https://testnet-rpc2.artela.network',
        provider: 'Artela Foundation',
      },
    ],
    rest: [
      {
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation',
      },
      {
        address: 'https://testnet-rpc2.artela.network',
        provider: 'Artela Foundation',
      },
    ],
    grpc: [
      {
        address: 'https://testnet-rpc1.artela.network',
        provider: 'Artela Foundation',
      },
    ],
  },
  explorers: [
    {
      kind: 'Artela Network',
      url: 'https://testnet-scan.artela.network',
      tx_page: 'https://testnet-scan.artela.network/tx/${txHash}',
    },
  ],
};

export const artelatestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'artelatestnet',
  assets: [
    {
      description:
        'The native EVM, governance and staking token of the Artela Network',
      denom_units: [
        {
          denom: 'uart',
          exponent: 0,
        },
        {
          denom: 'art',
          exponent: 18,
        },
      ],
      base: 'uart',
      name: 'Artela Testnet',
      display: 'art',
      symbol: 'ART',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/artelatestnet/images/artela.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/artelatestnet/images/artela.png',
        },
      ],
    },
  ],
};

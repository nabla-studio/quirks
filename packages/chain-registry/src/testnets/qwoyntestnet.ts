import type { Chain, AssetLists } from '../types';

export const qwoyntestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'qwoyntestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://qwoyn.studio/',
  pretty_name: 'Qwoyn',
  chain_id: 'higgs-boson-1',
  bech32_prefix: 'qwoyn',
  daemon_name: 'qwoynd',
  node_home: '$HOME/.qwoynd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uqwoyn',
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uqwoyn',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/cosmic-horizon/QWOYN',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/cosmic-horizon/QWOYN/releases/download/v1.0.0/qwoynd_1.0.0_linux_amd64.zip',
    },
    cosmos_sdk_version: '0.42.10',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    ibc_go_version: '3.0.0',
    ics_enabled: ['ics20-1', 'ics27-1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/cosmic-horizon/testnets/main/higgs-boson-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        cosmos_sdk_version: '0.42.10',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '3.0.0',
        ics_enabled: ['ics20-1', 'ics27-1'],
        binaries: {
          'linux/amd64':
            'https://github.com/cosmic-horizon/QWOYN/releases/download/v1.0.0/qwoynd_1.0.0_linux_amd64.zip',
        },
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '520d904daa98ff2fe88baee1c3701a30beb0208b',
        address: '137.220.37.9:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'http://137.220.37.9:26657',
        provider: 'Qwoyn Studios',
      },
    ],
    grpc: [
      {
        address: 'http://137.220.37.9:9090',
        provider: 'Qwoyn Studios',
      },
    ],
    rest: [
      {
        address: 'http://137.220.37.9:1317',
        provider: 'Qwoyn Studios',
      },
    ],
  },
  explorers: [
    {
      kind: 'skynetexplorers',
      url: 'https://www.skynetexplorers.com/qwoyn-studios',
      tx_page: 'https://www.skynetexplorers.com/qwoyn-studios/txs/${txHash}',
      account_page:
        'https://www.skynetexplorers.com/qwoyn-studios/account/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png',
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png',
    },
  ],
};

export const qwoyntestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'qwoyntestnet',
  assets: [
    {
      description:
        'QWOYN is the native governance token for the Qwoyn Studios Platform',
      denom_units: [
        {
          denom: 'uqwoyn',
          exponent: 0,
        },
        {
          denom: 'qwoyn',
          exponent: 6,
        },
      ],
      base: 'uqwoyn',
      name: 'Qwoyn Blockchain',
      display: 'qwoyn',
      symbol: 'QWOYN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/qwoyntestnet/images/qwoyn.png',
        },
      ],
    },
  ],
};

import type { Chain, AssetList, Versions } from '../types';

export const sixtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'sixtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'SIX Fivenet',
  chain_id: 'fivenet',
  bech32_prefix: '6x',
  daemon_name: 'sixd',
  node_home: '$HOME/.six',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usix',
        fixed_min_gas_price: 1.25,
        low_gas_price: 1.25,
        average_gas_price: 1.5,
        high_gas_price: 1.75,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'usix',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/thesixnetwork/six-protocol',
    recommended_version: 'v3.1.1-fn',
    compatible_versions: ['v3.1.1-fn'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    genesis: {
      genesis_url: 'https://github.com/thesixnetwork/chain-info/genesis.json',
    },
    versions: [
      {
        name: 'v3.1.1-fn',
        recommended_version: 'v3.1.1-fn',
        compatible_versions: ['v3.1.1-fn'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '323776367baa815d7bb1212186f06a25cc26d10a',
        address: '43.225.142.224:26656',
        provider: '',
      },
    ],
    persistent_peers: [
      {
        id: '85c7e81f3880c3029dec49fdb74b1ae3135922c9',
        address: '34.142.247.36:26656',
        provider: '',
      },
      {
        id: 'e4cee9bc76c66fa0ddf640c614ebc1f3e7f261cd',
        address: '34.124.174.160:26656',
        provider: '',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc1.fivenet.sixprotocol.net:443',
        provider: '',
      },
    ],
    rest: [
      {
        address: 'https://api1.fivenet.sixprotocol.net:443',
        provider: '',
      },
    ],
  },
  explorers: [
    {
      kind: 'sixscan',
      url: 'https://sixscan.io/fivenet',
      tx_page: 'https://sixscan.io/fivenet/tx/${txHash}',
    },
  ],
  keywords: ['sixprotocol', 'testnet'],
};

export const sixtestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'sixtestnet',
  assets: [
    {
      description: 'The native staking token of the SIX Protocol.',
      denom_units: [
        {
          denom: 'usix',
          exponent: 0,
        },
        {
          denom: 'six',
          exponent: 6,
        },
      ],
      base: 'usix',
      name: 'Six token',
      display: 'six',
      symbol: 'six',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sixtestnet/images/six.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/sixtestnet/images/six.png',
        },
      ],
    },
  ],
};

import type { Chain, AssetList, Versions } from '../types';

export const wavehashtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'wavehashtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'wavehash Testnet',
  chain_id: 'INVALID-ID-wavehashtestnet-testnet-1',
  bech32_prefix: 'wavehash',
  daemon_name: 'wavehashd',
  node_home: '$HOME/.wavehash',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uwahax',
        low_gas_price: 0.0025,
        average_gas_price: 0.0025,
        high_gas_price: 0.0024,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uwahax',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/WaveHashProtocol/wavehash',
    recommended_version: 'v6.0.0',
    compatible_versions: ['v6.0.0'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.30',
    cosmwasm_enabled: true,
    ibc_go_version: '4.3.0',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/WaveHashProtocol/testnet/main/testnet-1/genesis.json',
    },
    versions: [
      {
        name: 'v6.0.0',
        recommended_version: 'v6.0.0',
        compatible_versions: ['v6.0.0'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
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
        address: 'https://rpc.wavehash.online/',
        provider: 'WaveHash Network',
      },
    ],
    rest: [
      {
        address: 'https://lcd.wavehash.online/',
        provider: 'WaveHash Network',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.wavehash.online/',
        provider: 'WaveHash Network',
      },
    ],
  },
  explorers: [
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/directory/testnet/wavehashtestnet',
      tx_page:
        'https://atomscan.com/directory/testnet/wavehashtestnet/transactions/${txHash}',
    },
  ],
};

export const wavehashtestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'wavehashtestnet',
  assets: [
    {
      description: 'WaveHash A Permissioned Blockchain',
      denom_units: [
        {
          denom: 'uwahax',
          exponent: 0,
        },
        {
          denom: 'wahax',
          exponent: 6,
        },
      ],
      base: 'uwahax',
      name: 'WaveHash',
      display: 'wahax',
      symbol: 'WAHAX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/wavehashtestnet/images/WaveHash.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/wavehashtestnet/images/WaveHash.png',
        },
      ],
    },
  ],
};

import type { Chain, AssetList, Versions } from '../types';

export const titan: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'titan',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://titanlab.io/',
  pretty_name: 'Titan',
  chain_id: 'titan_18888-1',
  bech32_prefix: 'titan',
  node_home: '$HOME/.titand',
  daemon_name: 'titand',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'atkx',
        fixed_min_gas_price: 100000000000,
        low_gas_price: 100000000000,
        average_gas_price: 110000000000,
        high_gas_price: 200000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'atkx',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/titantkx/titan',
    recommended_version: 'v2.0.1',
    compatible_versions: ['v2.0.1'],
    cosmos_sdk_version: '0.47.6-titan.4',
    consensus: {
      type: 'cometbft',
      version: '0.37.4',
    },
    ibc_go_version: '7.3.0',
    cosmwasm_version: '0.45.0',
    cosmwasm_enabled: true,
    ics_enabled: ['ics20-1', 'ics27-1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/titantkx/titan-mainnet/main/public/genesis.json',
    },
    versions: [
      {
        name: 'v2.0.1',
        tag: 'v2.0.1',
        height: 0,
        recommended_version: 'v2.0.1',
        compatible_versions: ['v2.0.1'],
        cosmos_sdk_version: '0.47.6-titan.4',
        consensus: {
          type: 'cometbft',
          version: '0.37.4',
        },
        ibc_go_version: '7.3.0',
        cosmwasm_version: '0.45.0',
        cosmwasm_enabled: true,
        ics_enabled: ['ics20-1', 'ics27-1'],
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.svg',
    },
  ],
  peers: {
    seeds: [
      {
        id: 'cf2f46da018e9b61c2db74012bd930d292478bb6',
        address: 'titan-p2p-1.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
      {
        id: '0538c914eccc67a335eb64d99406c71ba7b110ca',
        address: 'titan-p2p-2.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
      {
        id: 'bee5ef5680cf90fe40d6cde872cdc52e53c8338d',
        address: 'titan-p2p-seed-1.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
      {
        id: 'a7e03c50f9b85ac2c9488d20913a37c2d1a9361c',
        address: 'titan-p2p-seed-1-seoul.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
    ],
    persistent_peers: [
      {
        id: 'cf2f46da018e9b61c2db74012bd930d292478bb6',
        address: 'titan-p2p-1.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
      {
        id: '0538c914eccc67a335eb64d99406c71ba7b110ca',
        address: 'titan-p2p-2.titanlab.io:26656',
        provider: 'Titanlab.io',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://titan-rpc.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-rpc-tokyo.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-rpc-seoul.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-rpc-hongkong.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-rpc-1.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-rpc-2.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-rpc-full-1.titanlab.io:443',
        provider: 'Titanlab.io',
      },
    ],
    rest: [
      {
        address: 'https://titan-lcd.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-lcd-tokyo.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-lcd-seoul.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-lcd-hongkong.titanlab.io:443',
        provider: 'Titanlab.io',
      },
    ],
    grpc: [
      {
        address: 'titan-grpc.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'titan-grpc-hongkong.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'titan-grpc-tokyo.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'titan-grpc-seoul.titanlab.io:443',
        provider: 'Titanlab.io',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://titan-json-rpc.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-json-rpc-tokyo.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-json-rpc-seoul.titanlab.io:443',
        provider: 'Titanlab.io',
      },
      {
        address: 'https://titan-json-rpc-hongkong.titanlab.io:443',
        provider: 'Titanlab.io',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://tkxscan.io',
      tx_page: 'https://tkxscan.io/Titan/tx/${txHash}',
      account_page: 'https://tkxscan.io/Titan/account/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.svg',
  },
};

export const titanAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'titan',
  assets: [
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'atkx',
          exponent: 0,
          aliases: ['attotkx'],
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx'],
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx'],
        },
        {
          denom: 'tkx',
          exponent: 18,
          aliases: [],
        },
      ],
      base: 'atkx',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      coingecko_id: 'tokenize-xchange',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png',
        },
      ],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png',
      },
    },
  ],
};

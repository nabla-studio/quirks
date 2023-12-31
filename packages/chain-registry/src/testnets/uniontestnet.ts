import type { Chain, AssetLists } from '../types';

export const uniontestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'uniontestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'union Testnet',
  chain_id: 'union-testnet-4',
  bech32_prefix: 'union',
  daemon_name: 'uniond',
  node_home: '$HOME/.uniond',
  key_algos: ['bn254'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'muno',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'muno',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'a069a341154484298156a56ace42b6e6a71e7b9d',
        address: 'blazingbit.io:27656',
        provider: '',
      },
      {
        id: '8a07752a234bb16471dbb577180de7805ba6b5d9',
        address: 'union.testnet.4.seed.poisonphang.com:26656',
        provider: '',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cryptware.io',
        provider: 'cryptware',
      },
      {
        address: 'https://union-testnet-rpc.polkachu.com',
        provider: 'Polkachu',
      },
    ],
    rest: [
      {
        address: 'https://api.cryptware.io',
        provider: 'cryptware',
      },
      {
        address: 'https://union-testnet-api.polkachu.com',
        provider: 'Polkachu',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.cryptware.io',
        provider: 'cryptware',
      },
      {
        address: 'http://union-testnet-grpc.polkachu.com:24690',
        provider: 'Polkachu',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png',
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.cryptware.io/union',
      tx_page: 'https://explorer.cryptware.io/union/tx/${txHash}',
      account_page:
        'https://explorer.cryptware.io/union/account/${accountAddress}',
    },
  ],
  keywords: ['testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png',
    },
  ],
};

export const uniontestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'uniontestnet',
  assets: [
    {
      description: 'The native token of union',
      denom_units: [
        {
          denom: 'muno',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'uno',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'muno',
      name: 'union',
      display: 'union',
      symbol: 'UNION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png',
      },
      coingecko_id: 'unionlabs',
      keywords: ['staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/union/images/union.png',
        },
      ],
    },
  ],
};

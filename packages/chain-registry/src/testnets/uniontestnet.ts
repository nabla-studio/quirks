import type { Chain, AssetList, Versions } from '../types';

export const uniontestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'uniontestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Union Testnet',
  chain_id: 'union-testnet-8',
  bech32_prefix: 'union',
  daemon_name: 'uniond',
  node_home: '$HOME/.uniond',
  key_algos: ['secp256k1'],
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
        id: 'c2bf0d5b2ad3a1df0f4e9cc32debffa239c0af90',
        address: 'testnet.seed.poisonphang.com:26656',
        provider: 'poisonphang',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.bonlulu.uno',
        provider: 'bonlulu',
      },
      {
        address: 'https://union-testnet-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-testnet-union.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://union-testnet-rpc.itrocket.net',
        provider: 'ITRocket',
      },
    ],
    rest: [
      {
        address: 'https://api.testnet.bonlulu.uno',
        provider: 'bonlulu',
      },
      {
        address: 'https://union-testnet-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://api-testnet-union.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://union-testnet-api.itrocket.net',
        provider: 'ITRocket',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.testnet.bonlulu.uno',
        provider: 'bonlulu',
      },
      {
        address: 'http://union-testnet-grpc.polkachu.com:24690',
        provider: 'Polkachu',
      },
      {
        address: 'https://grpc-testnet-union.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'http://union-testnet-grpc.itrocket.net:23090',
        provider: 'ITRocket',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png',
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://testnet.bonlulu.uno/union',
      tx_page: 'https://testnet.bonlulu.uno/union/tx/${txHash}',
      account_page:
        'https://testnet.bonlulu.uno/union/account/${accountAddress}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://testnet.union.explorers.guru',
      tx_page: 'https://testnet.union.explorers.guru/transaction/${txHash}',
      account_page:
        'https://testnet.union.explorers.guru/account/${accountAddress}',
    },
  ],
  keywords: ['testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png',
    },
  ],
};

export const uniontestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'uniontestnet',
  assets: [
    {
      description: 'Union native token',
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
      name: 'Union',
      display: 'uno',
      symbol: 'UNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png',
      },
      coingecko_id: '',
      keywords: ['staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/uniontestnet/images/union.png',
        },
      ],
    },
  ],
};

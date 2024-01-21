import type { Chain, AssetLists, ChainVersions } from '../types';

export const quicksilvertestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'quicksilvertestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Quicksilver Testnet',
  chain_id: 'rhye-2',
  bech32_prefix: 'quick',
  daemon_name: 'quicksilverd',
  node_home: '$HOME/.quicksilverd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uqck',
        low_gas_price: 0.0001,
        average_gas_price: 0.0001,
        high_gas_price: 0.00025,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uqck',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/ingenuity-build/quicksilver',
    recommended_version: 'v1.4.5-rc2',
    compatible_versions: ['v1.4.5-rc2'],
    cosmos_sdk_version: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.29',
    cosmwasm_enabled: true,
    ibc_go_version: '5.3.2',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ingenuity-build/testnets/main/rhye-2/genesis.json',
    },
    versions: [
      {
        name: 'v1.4.5-rc2',
        recommended_version: 'v1.4.5-rc2',
        compatible_versions: ['v1.4.5-rc2'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.29',
        cosmwasm_enabled: true,
        ibc_go_version: '5.3.2',
      },
    ],
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'testnet-seeds.polkachu.com:11156',
        provider: 'Polkachu',
      },
    ],
    persistent_peers: [
      {
        id: '8e14e58b054248a04be96e4a40d6359e93b636ac',
        address: '65.108.65.94:26656',
      },
      {
        id: '5a3c424c19d9ab694190a7805a2b1a146460d752',
        address: '65.108.2.27:26656',
      },
      {
        id: '17574de80eeda21ae1ed94e162ad55b58914c6fa',
        address: 'quickt.peers.stavr.tech:20026',
      },
      {
        id: 'e6bf55bc9f08958b7518bea455423375db78d1ef',
        address: '65.108.13.176:26657',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'http://quick.rpc.t.stavr.tech:20027',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://quicksilver-testnet-rpc.polkachu.com/',
        provider: 'polkachu',
      },
    ],
    rest: [
      {
        address: 'https://quick.api.t.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://quicksilver-testnet-api.polkachu.com/',
        provider: 'polkachu',
      },
    ],
    grpc: [
      {
        address: 'http://quick.grpc.t.stavr.tech:9112',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'quicksilver-testnet-grpc.polkachu.com:11190',
        provider: 'polkachu',
      },
    ],
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Quicksilver',
      tx_page: 'https://explorer.stavr.tech/Quicksilver/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Quicksilver/account/${accountAddress}',
    },
    {
      url: 'https://testnet.quicksilver.explorers.guru',
      tx_page:
        'https://testnet.quicksilver.explorers.guru/transaction/${txHash}',
      account_page:
        'https://testnet.quicksilver.explorers.guru/account/${accountAddress}',
    },
  ],
  images: [
    {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg',
    },
  ],
};

export const quicksilvertestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'quicksilvertestnet',
  assets: [
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [
        {
          denom: 'uqck',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'qck',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'uqck',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
      },
      coingecko_id: 'quicksilver',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
        },
      ],
    },
  ],
};

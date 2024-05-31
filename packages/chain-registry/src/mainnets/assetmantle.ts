import type { Chain, AssetList, Versions } from '../types';

export const assetmantle: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'assetmantle',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://assetmantle.one/',
  pretty_name: 'AssetMantle',
  chain_id: 'mantle-1',
  bech32_prefix: 'mantle',
  daemon_name: 'mantleNode',
  node_home: '$HOME/.mantleNode',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'umntl',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'umntl',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/AssetMantle/node.git',
    recommended_version: 'v0.3.0',
    compatible_versions: ['v0.3.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/AssetMantle/genesisTransactions/main/mantle-1/final_genesis.json',
    },
    versions: [
      {
        name: 'v0.3.0',
        recommended_version: 'v0.3.0',
        compatible_versions: ['v0.3.0'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo_Dark.svg',
  },
  description:
    'AssetMantle’s suite of products is focused on the NFT ecosystem, helping you up your game with digital asset ownership.',
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:14656',
        provider: 'Polkachu',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:14656',
        provider: 'WhisperNode 🤐',
      },
      {
        id: 'df949a46ae6529ae1e09b034b49716468d5cc7e9',
        address: 'seeds.stakerhouse.com:10156',
        provider: 'StakerHouse',
      },
    ],
    persistent_peers: [
      {
        id: '4654c8bed4349e4800238cff1f88e97c1f880080',
        address: '207.244.245.125:26656',
      },
      {
        id: 'a7aafd3330e57d3104be5b2820b6ad2d52ac19ec',
        address: '3.39.94.36:26656',
      },
      {
        id: '9c97f6143d3fae032af5f155d472bbc52f4d90b3',
        address: '194.34.232.225:26656',
      },
      {
        id: 'fd096224f9c918089410ac7ab6d42d21ec87db60',
        address: '65.21.230.230:26656',
      },
      {
        id: 'f33b2125c3b3a7c4838e22a060e38d2cefd66e78',
        address: '65.108.140.109:26656',
      },
      {
        id: '6261de9dac635a8fd8d19a70afc41f845c59db96',
        address: '116.203.35.46:26656',
      },
      {
        id: 'e0deea2d5c15e77c9d5934305bb23148ce836709',
        address: '185.252.232.79:26656',
      },
      {
        id: '4fc4fa6ec44f6da10830ffcb6344a8635156e11e',
        address: '141.95.65.26:26656',
      },
      {
        id: '7362b3c4d082680aeffe137d18cea0e37cab5037',
        address: '146.19.24.101:26656',
      },
      {
        id: '5e8e8e7071259beb3b32e39cb3d2bb059cff4d66',
        address: '65.108.137.22:26656',
      },
      {
        id: '5b3c90e6c07e03ffddc5dc3aae786a2990bc5bd3',
        address: '148.251.81.179:26656',
      },
      {
        id: '7ae8a8e62efcccf15198525868b0873b3c9bd698',
        address: '65.108.121.37:36656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.assetmantle.one',
        provider: 'AssetMantle',
      },
      {
        address: 'https://rpc-assetmantle.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://assetmantle-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc.assetmantle.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://rpc-assetmantle-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rpc-assetmantle.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://rpc.mantle.paranorm.pro:443',
        provider: 'paranorm',
      },
      {
        address: 'https://assetmantle-rpc.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://assetmantle-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://rest.assetmantle.one',
        provider: 'AssetMantle',
      },
      {
        address: 'https://rest-assetmantle.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://api.assetmantle.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://api-assetmantle-ia.cosmosia.notional.ventures',
        provider: 'Notional',
      },
      {
        address: 'https://assetmantle-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://lcd-assetmantle.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://api.mantle.paranorm.pro:443',
        provider: 'paranorm',
      },
      {
        address: 'https://assetmantle-rest.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://assetmantle-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'grpc.assetmantle.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'grpc-assetmantle-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'assetmantle-grpc.polkachu.com:14690',
        provider: 'Polkachu',
      },
      {
        address: 'assetmantle-grpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
      {
        address: 'assetmantle-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/assetmantle',
      tx_page: 'https://ezstaking.app/assetmantle/txs/${txHash}',
      account_page:
        'https://ezstaking.app/assetmantle/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/asset-mantle',
      tx_page: 'https://www.mintscan.io/asset-mantle/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/asset-mantle/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.postcapitalist.io/AssetMantle',
      tx_page: 'https://explorer.postcapitalist.io/AssetMantle/tx/${txHash}',
    },
    {
      kind: 'other',
      url: 'https://explorer.assetmantle.one',
      tx_page: 'https://explorer.assetmantle.one/transactions/${txHash}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://assetmantle.explorers.guru',
      tx_page: 'https://assetmantle.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/assetmantle',
      tx_page: 'https://atomscan.com/assetmantle/transactions/${txHash}',
      account_page:
        'https://atomscan.com/assetmantle/accounts/${accountAddress}',
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/assetmantle',
      tx_page: 'https://mainnet.whispernode.com/assetmantle/tx/${txHash}',
      account_page:
        'https://mainnet.whispernode.com/assetmantle/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/AM_Logo_Dark.svg',
    },
  ],
};

export const assetmantleAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'assetmantle',
  assets: [
    {
      description: 'The native token of Asset Mantle',
      denom_units: [
        {
          denom: 'umntl',
          exponent: 0,
        },
        {
          denom: 'mntl',
          exponent: 6,
        },
      ],
      base: 'umntl',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg',
      },
      coingecko_id: 'assetmantle',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg',
        },
      ],
      socials: {
        website: 'https://www.assetmantle.one/',
        twitter: 'https://twitter.com/AssetMantle',
      },
    },
  ],
};

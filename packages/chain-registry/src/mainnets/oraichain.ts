import type { Chain, AssetLists } from '../types';

export const oraichain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'oraichain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://orai.io/',
  pretty_name: 'Oraichain',
  chain_id: 'Oraichain',
  bech32_prefix: 'orai',
  daemon_name: 'oraid',
  node_home: '$WORKSPACE/.oraid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'orai',
        fixed_min_gas_price: 0,
        low_gas_price: 0.003,
        average_gas_price: 0.005,
        high_gas_price: 0.007,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'orai',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/oraichain/orai',
    recommended_version: 'v0.41.4',
    compatible_versions: ['v0.41.3', 'v0.41.4'],
    binaries: {
      'linux/amd64':
        'https://github.com/oraichain/orai/releases/download/v0.41.4/oraid',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/oraichain/oraichain-static-files/master/mainnet-static-files/genesis.json',
    },
    versions: [
      {
        name: 'v0.40.3',
        recommended_version: 'v0.40.3',
        compatible_versions: ['v0.40.3'],
        binaries: {
          'linux/amd64':
            'https://orai.s3.us-east-2.amazonaws.com/v0.40.3/oraid',
        },
      },
      {
        name: 'v0.41.4',
        height: 13567875,
        proposal: 197,
        recommended_version: 'v0.41.4',
        compatible_versions: ['v0.41.3', 'v0.41.4'],
        binaries: {
          'linux/amd64':
            'https://orai.s3.us-east-2.amazonaws.com/v0.41.4/oraid',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
  },
  peers: {
    seeds: [
      {
        id: '0baa806b3a4dd17be6e06369d899f140c3897d6e',
        address: '18.223.242.70:26656',
        provider: 'oraichain-team',
      },
      {
        id: '9749da4a81526266d7b8fe9a03d260cd3db241ad',
        address: '18.116.209.76:26656',
        provider: 'oraichain-team',
      },
      {
        id: '35c1f999d67de56736b412a1325370a8e2fdb34a',
        address: '5.189.169.99:26656',
        provider: 'ORAI Vanguard',
      },
      {
        id: '5ad3b29bf56b9ba95c67f282aa281b6f0903e921',
        address: '64.225.53.108:26656',
        provider: 'oraichain-team',
      },
      {
        id: 'd091cabe3584cb32043cc0c9199b0c7a5b68ddcb',
        address: 'seed.orai.synergynodes.com:26656',
        provider: 'synergynodes',
      },
      {
        id: 'f223f1be06ef35a6dfe54995f05daeb1897d94d7',
        address: 'seed-node.mms.team:42656',
        provider: 'MMS',
      },
    ],
    persistent_peers: [
      {
        id: '0baa806b3a4dd17be6e06369d899f140c3897d6e',
        address: '18.223.242.70:26656',
      },
      {
        id: '9749da4a81526266d7b8fe9a03d260cd3db241ad',
        address: '18.116.209.76:26656',
      },
      {
        id: '35c1f999d67de56736b412a1325370a8e2fdb34a',
        address: '5.189.169.99:26656',
      },
      {
        id: '5ad3b29bf56b9ba95c67f282aa281b6f0903e921',
        address: '64.225.53.108:26656',
      },
      {
        id: 'd091cabe3584cb32043cc0c9199b0c7a5b68ddcb',
        address: 'seed.orai.synergynodes.com:26656',
        provider: 'synergynodes',
      },
      {
        id: 'c14df7b2e097d743aa7574c7cf65397a06ea3833',
        address: 'peer-oraichain.mms.team:56103',
        provider: 'MMS',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.orai.io',
        provider: 'oraichain-team',
      },
      {
        address: 'http://64.225.53.108:26657',
        provider: 'oraichain-team',
      },
      {
        address: 'https://rpc-oraichain.vchain.zone',
        provider: 'Vchain-team',
      },
      {
        address: 'https://rpc-orai.nodine.id/',
        provider: 'Nodine.ID',
      },
      {
        address: 'https://rpc-oraichain.mms.team',
        provider: 'MMS',
      },
    ],
    rest: [
      {
        address: 'http://lcd.orai.io',
        provider: 'oraichain-team',
      },
      {
        address: 'http://64.225.53.108:1317',
        provider: 'oraichain-team',
      },
      {
        address: 'https://rest-oraichain.vchain.zone',
        provider: 'Vchain-team',
      },
      {
        address: 'https://api-orai.nodine.id',
        provider: 'Noidne.ID',
      },
      {
        address: 'https://api-oraichain.mms.team',
        provider: 'MMS',
      },
    ],
    grpc: [
      {
        address: 'grpc-oraichain.mms.team:443',
        provider: 'MMS',
      },
    ],
  },
  explorers: [
    {
      kind: 'oraiscan',
      url: 'https://scan.orai.io',
      tx_page: 'https://scan.orai.io/txs/${txHash}',
    },
    {
      kind: 'Nodine Explorer',
      url: 'https://explorer.co.id/orai',
      tx_page: 'https://explorer.co.id/orai/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/orai',
      tx_page: 'https://atomscan.com/orai/transactions/${txHash}',
      account_page: 'https://atomscan.com/orai/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
    },
  ],
};

export const oraichainAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'oraichain',
  assets: [
    {
      description: 'The native token of Oraichain',
      denom_units: [
        {
          denom: 'orai',
          exponent: 0,
        },
        {
          denom: 'ORAI',
          exponent: 6,
        },
      ],
      base: 'orai',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
      },
      coingecko_id: 'oraichain-token',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
        },
      ],
    },
  ],
};

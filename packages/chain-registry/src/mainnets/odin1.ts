import type { Chain, AssetList, Versions } from '../types';

export const odin1: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'odin',
  status: 'killed',
  network_type: 'mainnet',
  website: 'https://odinprotocol.io/',
  pretty_name: 'Odin Protocol',
  chain_id: 'odin-mainnet-freya',
  bech32_prefix: 'odin',
  daemon_name: 'odind',
  node_home: '$HOME/.odin',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'loki',
        fixed_min_gas_price: 0.0125,
        low_gas_price: 0.025,
        average_gas_price: 0.05,
        high_gas_price: 0.06,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'loki',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/ODIN-PROTOCOL/odin-core',
    recommended_version: 'v0.6.2',
    compatible_versions: ['v0.6.2'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ODIN-PROTOCOL/networks/master/mainnets/odin-mainnet-freya/genesis.json',
    },
    versions: [
      {
        name: 'v0.6.2',
        recommended_version: 'v0.6.2',
        compatible_versions: ['v0.6.2'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg',
  },
  peers: {
    seeds: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:16856',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'odin-mainnet-seed.autostake.com:26766',
        provider: 'AutoStake.net',
      },
    ],
    persistent_peers: [
      {
        id: '9d16b1ce74a34b869d69ad5fe34eaca614a36ecd',
        address: '35.241.238.207:26656',
        provider: 'Odin Protocol',
      },
      {
        id: '02e905f49e1b869f55ad010979931b542302a9e6',
        address: '35.241.221.154:26656',
        provider: 'Odin Protocol',
      },
      {
        id: '4847c79f1601d24d3605278a0183d416a99aa093',
        address: '34.140.252.7:26656',
        provider: 'Odin Protocol',
      },
      {
        id: '0165cd0d60549a37abb00b6acc8227a54609c648',
        address: '34.79.179.216:26656',
        provider: 'Odin Protocol',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'odin-mainnet-peer.autostake.com:26766',
        provider: 'AutoStake.net',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'http://34.79.179.216:26657',
        provider: 'Odin Protocol',
      },
      {
        address: 'https://odin-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://odin-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    rest: [
      {
        address: 'http://34.79.179.216:1317/',
        provider: 'Odin Protocol',
      },
      {
        address: 'https://odin-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://odin-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    grpc: [
      {
        address: 'odin-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'odin-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  explorers: [
    {
      kind: 'odin web',
      url: 'https://mainnet.odinprotocol.io/',
      tx_page: 'https://mainnet.odinprotocol.io/transactions/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/odin',
      tx_page: 'https://ping.pub/odin/tx/${txHash}',
    },
  ],
  images: [
    {
      image_sync: {
        chain_name: 'odin',
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg',
    },
  ],
};

export const odin1AssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'odin',
  assets: [
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [
        {
          denom: 'loki',
          exponent: 0,
        },
        {
          denom: 'odin',
          exponent: 6,
        },
      ],
      base: 'loki',
      name: 'ODIN',
      display: 'odin',
      symbol: 'ODIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg',
      },
      coingecko_id: 'odin-protocol',
      images: [
        {
          image_sync: {
            chain_name: 'odin',
            base_denom: 'loki',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg',
        },
      ],
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [
        {
          denom: 'mGeo',
          exponent: 0,
        },
        {
          denom: 'geo',
          exponent: 6,
        },
      ],
      base: 'mGeo',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'odin',
            base_denom: 'mGeo',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg',
        },
      ],
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [
        {
          denom: 'mO9W',
          exponent: 0,
        },
        {
          denom: 'O9W',
          exponent: 6,
        },
      ],
      base: 'mO9W',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'odin',
            base_denom: 'mO9W',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg',
        },
      ],
    },
  ],
};

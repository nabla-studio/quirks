import type { Chain, AssetLists, ChainVersions } from '../types';

export const andromeda1: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'andromeda1',
  chain_id: 'andromeda-1',
  pretty_name: 'Andromeda',
  status: 'killed',
  network_type: 'mainnet',
  bech32_prefix: 'andr',
  daemon_name: 'andromedad',
  node_home: '$HOME/.andromeda',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uandr',
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uandr',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/andromedaprotocol/andromedad',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/andromedaprotocol/mainnet/release/genesis.json',
    },
  },
  peers: {
    seeds: [
      {
        id: 'df949a46ae6529ae1e09b034b49716468d5cc7e9',
        address: 'seeds.stakerhouse.com:12156',
        provider: 'StakerHouse',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'andromeda-mainnet-peer.autostake.com:27126',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'nibiru.rpc.kjnodes.com:13959',
        provider: 'kjnodes.com 🦄',
      },
    ],
    persistent_peers: [
      {
        id: '17dda7b03ce866dbe36c048282fb742dd895a489',
        address: '95.56.244.244:56659',
        provider: 'Abduction',
      },
      {
        id: '0f310196e29d1f289966141e22caa72afaea8060',
        address: 'seeds.cros-nest.com:46656',
        provider: 'Crosnet',
      },
      {
        id: '301f9b0011f861693e08163f640c39cebbedd2f0',
        address: '95.56.244.244:56658',
        provider: 'Siradi',
      },
      {
        id: '26cdc42778d24c8b0b0b68ed07c97685bfd8682f',
        address: '178.162.165.65:26656',
        provider: 'Synergy Nodes',
      },
      {
        id: 'e4c2267b90c7cfbb45090ab7647dc01df97f58f9',
        address: 'andromeda-m.peer.stavr.tech:4376',
        provider: '🔥STAVR🔥',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:14956',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'andromeda-mainnet-seed.autostake.com:27126',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '28876b3094518bef97a1250ef641c26b7d4a658d',
        address: '138.201.21.197:39656',
        provider: 'StakeTown',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.andromeda-1.andromeda.aviaone.com',
        provider: 'AVIAONE',
      },
      {
        address: 'https://andromeda.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://andromeda.rpc.nodex.one',
        provider: 'nodex',
      },
      {
        address: 'https://andro.rpc.m.stavr.tech/',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://andromeda-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://andromeda-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://andromeda-rpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'https://andromeda-rpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
      {
        address: 'https://andromeda-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://andromeda-rpc.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://nibiru.rpc.kjnodes.comv',
        provider: 'kjnodes.com 🦄',
      },
    ],
    rest: [
      {
        address: 'https://api.andromeda-1.andromeda.aviaone.com/',
        provider: 'AVIAONE',
      },
      {
        address: 'https://andromeda.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://andromeda.api.nodex.one',
        provider: 'nodex',
      },
      {
        address: 'https://andro.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://andromeda-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://andromeda-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://andromeda-api.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'https://andromeda-rest.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
      {
        address: 'https://andromeda-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://andromeda-api.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://nibiru.api.kjnodes.com',
        provider: 'kjnodes.com 🦄',
      },
    ],
    grpc: [
      {
        address: 'andromeda-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://grpc.andromeda-1.andromeda.aviaone.com:9094',
        provider: 'AVIAONE',
      },
      {
        address: 'andromeda.grpc.kjnodes.com:443',
        provider: 'kjnodes',
      },
      {
        address: 'andromeda-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://andromeda.grpc.nodex.one:443',
        provider: 'nodex',
      },
      {
        address: 'http://andromedad.grpc.t.stavr.tech:132',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'andromeda-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'andromeda-grpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
      {
        address: 'andromeda-grpc.genznodes.dev:27090',
        provider: 'genznodes',
      },
      {
        address: 'nibiru.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄',
      },
    ],
  },
  explorers: [
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Andromeda-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Andromeda-Mainnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Andromeda-Mainnet/account/${accountAddress}',
    },
    {
      kind: 'exploreme.pro',
      url: 'https://andromeda.exploreme.pro',
      tx_page: 'https://andromeda.exploreme.pro/transaction/${txHash}',
      account_page: 'https://andromeda.exploreme.pro/account/${accountAddress}',
    },
    {
      kind: 'Cosmotracker',
      url: 'https://cosmotracker.com/andromeda',
      tx_page: 'https://cosmotracker.com/andromeda/tx/${txHash}',
      account_page:
        'https://cosmotracker.com/andromeda/account/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/andromeda',
      tx_page: 'https://ping.pub/andromeda/tx/${txHash}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
    },
  ],
};

export const andromeda1AssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'andromeda',
  assets: [
    {
      description: 'The native staking and governance token of Andromeda',
      denom_units: [
        {
          denom: 'uandr',
          exponent: 0,
        },
        {
          denom: 'andr',
          exponent: 6,
        },
      ],
      coingecko_id: 'andromeda-2',
      base: 'uandr',
      name: 'Andr',
      display: 'andr',
      symbol: 'ANDR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/andromeda/images/andromeda-logo.png',
        },
      ],
    },
  ],
};

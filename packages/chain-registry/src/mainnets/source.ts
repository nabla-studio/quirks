import type { Chain, AssetList, Versions } from '../types';

export const source: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'source',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.sourceprotocol.io/',
  pretty_name: 'Source',
  chain_id: 'source-1',
  bech32_prefix: 'source',
  daemon_name: 'sourced',
  node_home: '$HOME/.source',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usource',
        fixed_min_gas_price: 0.05,
        low_gas_price: 0.05,
        average_gas_price: 0.075,
        high_gas_price: 0.1,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'usource',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/Source-Protocol-Cosmos/source',
    recommended_version: 'v3.0.1',
    compatible_versions: ['v3.0.1'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.30',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/Source-Protocol-Cosmos/mainnet/master/source-1/genesis.json',
    },
    versions: [
      {
        name: 'v3.0.0',
        recommended_version: 'v3.0.1',
        compatible_versions: ['v3.0.1'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '7347b05f140e4ed5d3da7b26c754a486dc1d2ecd',
        address: 'source-mainnet-seed.itrocket.net:32656',
        provider: 'ITRocket',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'source-mainnet-seed.autostake.com:27446',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '738be29546d9504b3845d781b9dc35bc6f996c5f',
        address: 'rpc.source.nodestake.top:666',
        provider: 'NodeStake',
      },
      {
        id: '637077d431f618181597706810a65c826524fd74',
        address: 'source.rpc.nodeshub.online:15856',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'source-mainnet-seed.autostake.com:27446',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '8fb118f995c146357b67798e9bdd650d0c4161ea',
        address: 'seed.source.validatus.com:3000',
        provider: 'Validatus',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '96d63849a529a15f037a28c276ea6e3ac2449695',
        address: '34.222.1.252:26656',
      },
      {
        id: '8a812024b8a5b4539878b03ac2f822655831ca5f',
        address: 'source-mainnet-peer.itrocket.net:32656',
        provider: 'ITRocket',
      },
      {
        id: '79adf04741f4a019684efc73e42467cb7d6d3a69',
        address: '148.251.19.41:25656',
        provider: '[NODERS]TEAM',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'source-mainnet-peer.autostake.com:27446',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: ' 3c729ffe80393abd430a7c723fab2e8aa60ffa46',
        address: 'source.peers.stavr.tech:20056',
        provider: '🔥STAVR🔥',
      },
      {
        id: 'bf1a4f212727debe13519362322d06d03a5d395b',
        address: '95.217.160.123:26656',
        provider: 'NodeStake',
      },
      {
        id: 'afc8fa287e2b6b46bbeba57dfcb4bd6dcab6b6a3',
        address: '138.201.21.197:28656',
        provider: 'StakeTown',
      },
      {
        id: '7e153e83fbe2f5618fffbdfd803f70ee78ad797d',
        address: 'rpc.source.indonode.net:12656',
        provider: 'Indonode',
      },
      {
        id: '47b858cda8717aef908f2567b05ef312d18bb6f3',
        address: 'p2p-pve01.roomit.xyz:16602',
        provider: 'RoomIT',
      },
      {
        id: '73ef1c0f9bc77fd925decf7fa41f22a35b5dc76d',
        address: 'source.declab.pro:26606',
        provider: 'Decloud Nodes Lab',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.source.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://source.rpc.moonbridge.team/',
        provider: 'MoonBridge',
      },
      {
        address: 'https://source.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-source.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://source-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://source-mainnet-rpc.itrocket.net:443',
        provider: 'ITRocket',
      },
      {
        address: 'https://rpc-source.sr20de.xyz:443',
        provider: 'Sr20de',
      },
      {
        address: 'https://source-rpc.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://rpc.source.tcnetwork.io',
        provider: 'TC Network',
      },
      {
        address: 'https://rpc.source.indonode.net',
        provider: 'Indonode',
      },
      {
        address: 'https://source.rpc.skynodejs.net/',
        provider: 'skynodejs',
      },
      {
        address: 'https://source.rpc.nodeshub.online/',
        provider: 'Nodes Hub',
      },
      {
        address: 'https://rpc.source.roomit.xyz/',
        provider: 'RoomIT',
      },
      {
        address: 'https://rpc.source.posthuman.digital',
        provider: 'posthuman',
      },
      {
        address: 'https://source.declab.pro:26604',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://rpc.source.stakeup.tech',
        provider: 'StakeUp',
      },
      {
        address: 'https://source_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
    ],
    rest: [
      {
        address: 'https://api.source.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://api-source.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://source.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://source-mainnet-api.itrocket.net:443',
        provider: 'ITRocket',
      },
      {
        address: 'https://source-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://source.api.moonbridge.team/',
        provider: 'MoonBridge',
      },
      {
        address: 'https://api-source.sr20de.xyz',
        provider: 'Sr20de',
      },
      {
        address: 'https://source-api.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://rest.source.tcnetwork.io',
        provider: 'TC Network',
      },
      {
        address: 'https://api.source.indonode.net',
        provider: 'Indonode',
      },
      {
        address: 'https://source.api.nodeshub.online/',
        provider: 'Nodes Hub',
      },
      {
        address: 'https://api.source.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'https://api.source.roomit.xyz',
        provider: 'RoomIT',
      },
      {
        address: 'https://rest.source.posthuman.digital',
        provider: 'posthuman',
      },
      {
        address: 'http://source.api.staking-explorer.com',
        provider: 'Daily DROP | 2% Fee',
      },
      {
        address: 'https://source.declab.pro:443',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://api.source.stakeup.tech',
        provider: 'StakeUp',
      },
      {
        address: 'https://source_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
    ],
    grpc: [
      {
        address: 'source-mainnet-grpc.itrocket.net:32090',
        provider: 'ITRocket',
      },
      {
        address: 'http://source.grpc.m.stavr.tech:9590',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://grpc-source.nodeist.net:443',
        provider: 'Nodeist',
      },
      {
        address: 'https://grpc.source.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'https://grpc-source.sr20de.xyz:443',
        provider: 'Sr20de',
      },
      {
        address: 'source-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'source-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'https://source.grpc.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'https://source.grpc.nodeshub.online',
        provider: 'Nodes Hub',
      },
      {
        address: 'https://grpc.source.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'grpc.source.roomit.xyz:8443',
        provider: 'RoomIT',
      },
      {
        address: 'https://source.declab.pro:9003',
        provider: 'Decloud Nodes Lab',
      },
    ],
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Source-Mainnet/',
      tx_page: 'https://explorer.stavr.tech/Source-Mainnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Source-Mainnet/accounts/${accountAddress}',
    },
    {
      kind: 'Nodeist',
      url: 'https://exp.nodeist.net/source/',
      tx_page: 'https://exp.nodeist.net/source/tx/${txHash}',
      account_page: 'https://exp.nodeist.net/source/accounts/${accountAddress}',
    },
    {
      kind: 'MoonBridge',
      url: 'https://explorer.moonbridge.team/source',
      tx_page: 'https://explorer.moonbridge.team/source/tx/${txHash}',
      account_page:
        'https://explorer.moonbridge.team/source/accounts/${accountAddress}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/source',
      tx_page: 'https://explorer.nodestake.top/source/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.top/source/accounts/${accountAddress}',
    },
    {
      kind: 'Sr20de',
      url: 'https://explorer.sr20de.xyz/Source-mainnet',
      tx_page: 'https://explorer.sr20de.xyz/Source-mainnet/tx/${txHash}',
      account_page:
        'https://explorer.sr20de.xyz/Source-mainnet/accounts/${accountAddress}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/source',
      tx_page: 'https://explorer.tcnetwork.io/source/transaction/${txHash}',
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/source',
      tx_page: 'https://explorer.indonode.net/source/tx/${txHash}',
    },
    {
      kind: 'RoomIT',
      url: 'https://explorer.tendermint.roomit.xyz/source-mainnet/',
      tx_page:
        'https://explorer.tendermint.roomit.xyz/source-mainnet/tx/${txHash}',
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/source',
      tx_page: 'https://explorer.posthuman.digital/source/tx/${txHash}',
      account_page:
        'https://explorer.posthuman.digital/source/account/${accountAddress}',
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Source',
      tx_page: 'https://explorer.declab.pro/Source/tx/${txHash}',
      account_page:
        'https://explorer.declab.pro/Source/account/${accountAddress}',
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/source',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/source/tx/${txHash}',
      account_page:
        'https://explorer.whenmoonwhenlambo.money/source/account/${accountAddress}',
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/source/',
      tx_page: 'https://explorer.nodeshub.online/source/tx/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/source/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
  },
};

export const sourceAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'source',
  assets: [
    {
      description: 'The native token of SOURCE Chain',
      extended_description:
        "Enterprises, developers, and individuals are empowered to use SOURCE's sustainable and value backed network to easily access, build, and integrate web3 applications and services.",
      denom_units: [
        {
          denom: 'usource',
          exponent: 0,
        },
        {
          denom: 'source',
          exponent: 6,
        },
      ],
      base: 'usource',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
      },
      coingecko_id: 'source',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg',
        },
      ],
      socials: {
        website: 'https://www.sourceprotocol.io/',
        twitter: 'https://twitter.com/sourceprotocol_',
      },
    },
    {
      description:
        "Source Protocol's SRCX Token Bridged from BNB Through Planq",
      denom_units: [
        {
          denom:
            'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
          exponent: 0,
          aliases: ['nsrcx'],
        },
        {
          denom: 'srcx',
          exponent: 9,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
      name: 'SRCX',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'planq',
            base_denom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            channel_id: 'channel-61',
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png',
      },
    },
  ],
};

import type { Chain, AssetLists } from '../types';

export const nolus: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nolus',
  status: 'live',
  website: 'https://nolus.io/',
  network_type: 'mainnet',
  pretty_name: 'Nolus',
  chain_id: 'pirin-1',
  bech32_prefix: 'nolus',
  daemon_name: 'nolusd',
  node_home: '$HOME/.nolus',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'unls',
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.05,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'unls',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/nolus-protocol/nolus-core',
    recommended_version: 'v0.4.1',
    compatible_versions: ['v0.4.1'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'cometbft',
      version: '0.34.27',
    },
    cosmwasm_version: '0.31',
    cosmwasm_enabled: true,
    ibc_go_version: '4.3.1',
    ics_enabled: ['ics20-1', 'ics27-1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/nolus-protocol/nolus-networks/main/mainnet/pirin-1/genesis.json',
    },
    versions: [
      {
        name: 'v0.3.0',
        recommended_version: 'v0.3.0',
        compatible_versions: ['v0.3.0'],
        cosmos_sdk_version: '0.45',
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
        ics_enabled: ['ics20-1', 'ics27-1'],
        next_version_name: 'v0.4.0',
      },
      {
        name: 'v0.4.0',
        proposal: 5,
        height: 207300,
        recommended_version: 'v0.4.0',
        compatible_versions: ['v0.4.0'],
        cosmos_sdk_version: '0.45',
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
        ics_enabled: ['ics20-1', 'ics27-1'],
        next_version_name: 'v0.4.1',
      },
      {
        name: 'v0.4.1',
        proposal: 34,
        height: 941000,
        recommended_version: 'v0.4.1',
        compatible_versions: ['v0.4.1'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'cometbft',
          version: '0.34.27',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.1',
        ics_enabled: ['ics20-1', 'ics27-1'],
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
  },
  peers: {
    seeds: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:11956',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'nolus-mainnet-seed.autostake.com:27016',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'nolus-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'nolus-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'nolus.rpc.kjnodes.com:14359',
        provider: 'kjnodes',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'nolus-mainnet-peer.autostake.com:27016',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://pirin-cl.nolus.network:26657',
        provider: 'NolusProtocol',
      },
      {
        address: 'https://nolus-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://nolus-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://nolus-rpc.sphincs.plus',
        provider: 'Sphincs.plus 🔅',
      },
      {
        address: 'https://nolus.rpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://rpc-nolus.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://nolus.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://nolus-rpc.enigma-validator.com/',
        provider: 'Enigma',
      },
      {
        address: 'https://nolus-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://rpc-nolus.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://nolus-rpc.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/nolus/trpc',
        provider: 'PRO Delegators',
      },
    ],
    rest: [
      {
        address: 'https://pirin-cl.nolus.network:1317',
        provider: 'NolusProtocol',
      },
      {
        address: 'https://nolus-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://nolus-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://nolus-lcd.sphincs.plus',
        provider: 'Sphincs.plus 🔅',
      },
      {
        address: 'https://api-nolus.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://nolus.api.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://rest-nolus.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://nolus.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://nolus-lcd.enigma-validator.com/',
        provider: 'Enigma',
      },
      {
        address: 'https://nolus-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://nolus-rest.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/nolus/crpc',
        provider: 'PRO Delegators',
      },
    ],
    grpc: [
      {
        address: 'https://pirin-cl.nolus.network:9090',
        provider: 'NolusProtocol',
      },
      {
        address: 'nolus-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://nolus-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://nolus.grpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'grpc-nolus.architectnodes.com:1443',
        provider: 'Architect Nodes',
      },
      {
        address: 'grpc-nolus.cosmos-spaces.cloud:1190',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'nolus.grpc.kjnodes.com:14390',
        provider: 'kjnodes',
      },
      {
        address: 'nolus-grpc.w3coins.io:19790',
        provider: 'w3coins',
      },
      {
        address: 'nolus-grpc.publicnode.com:443',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'Nolus Explorer',
      url: 'https://explorer.nolus.io/pirin-1',
      tx_page: 'https://explorer.nolus.io/pirin-1/tx/${txHash}',
      account_page:
        'https://explorer.nolus.io/pirin-1/account/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/nolus',
      tx_page: 'https://ping.pub/nolus/tx/${txHash}',
      account_page: 'https://ping.pub/nolus/account/${accountAddress}',
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/nolus',
      tx_page: 'https://explorer.nodexcapital.com/nolus/tx/${txHash}',
      account_page:
        'https://explorer.nodexcapital.com/nolus/account/${accountAddress}',
    },
    {
      kind: 'Nodes Guru Explorer',
      url: 'https://nolus.explorers.guru',
      tx_page: 'https://nolus.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'KJ Nodes Explorer',
      url: 'https://explorer.kjnodes.com/nolus',
      tx_page: 'https://explorer.kjnodes.com/nolus/tx/${txHash}',
      account_page:
        'https://explorer.kjnodes.com/nolus/account/${accountAddress}',
    },
  ],
  keywords: ['mainnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
    },
  ],
};

export const nolusAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nolus',
  assets: [
    {
      description: 'The native token of Nolus chain',
      denom_units: [
        {
          denom: 'unls',
          exponent: 0,
        },
        {
          denom: 'nls',
          exponent: 6,
        },
      ],
      base: 'unls',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
      },
      coingecko_id: 'nolus',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
        },
      ],
    },
    {
      description:
        'axlUSDC transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
          exponent: 0,
          aliases: ['uusdc'],
        },
        {
          denom: 'usdc',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
      name: 'axlUSDC',
      display: 'usdc',
      symbol: 'axlUSDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-208/uusdc',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
          },
        },
      ],
    },
    {
      description:
        'OSMO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo'],
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uosmo',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'uosmo',
          },
        },
      ],
    },
    {
      description:
        'stOSMO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
          exponent: 0,
          aliases: ['stuosmo'],
        },
        {
          denom: 'stosmo',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
      name: 'Osmosis',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-326/stuosmo',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
          },
        },
      ],
    },
    {
      description:
        'ATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
          exponent: 0,
          aliases: ['uatom'],
        },
        {
          denom: 'atom',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
      name: 'Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-0/uatom',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          },
        },
      ],
    },
    {
      description:
        'stATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
          exponent: 0,
          aliases: ['ustatom'],
        },
        {
          denom: 'statom',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-326/stuatom',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
          },
        },
      ],
    },
    {
      description:
        'WETH transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
          exponent: 0,
          aliases: ['weth-wei'],
        },
        {
          denom: 'weth',
          exponent: 18,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
      name: 'WETH',
      display: 'weth',
      symbol: 'WETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-208/weth-wei',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
          },
        },
      ],
    },
    {
      description:
        'WBTC transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
          exponent: 0,
          aliases: ['wbtc-satoshi'],
        },
        {
          denom: 'wbtc',
          exponent: 8,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
      name: 'WBTC',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-208/wbtc-satoshi',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
          },
        },
      ],
    },
    {
      description:
        'AKT transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
          exponent: 0,
          aliases: ['uakt'],
        },
        {
          denom: 'akt',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
      name: 'AKT',
      display: 'akt',
      symbol: 'AKT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-1/uakt',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
          },
        },
      ],
    },
    {
      description:
        'AXL transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
          exponent: 0,
          aliases: ['uaxl'],
        },
        {
          denom: 'axl',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
      name: 'AXL',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-208/uaxl',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
          },
        },
      ],
    },
    {
      description:
        'JUNO transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
          exponent: 0,
          aliases: ['ujuno'],
        },
        {
          denom: 'juno',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
      name: 'JUNO',
      display: 'juno',
      symbol: 'JUNO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-42/ujuno',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
          },
        },
      ],
    },
    {
      description:
        'EVMOS transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
          exponent: 0,
          aliases: ['aevmos'],
        },
        {
          denom: 'evmos',
          exponent: 18,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
      name: 'EVMOS',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-204/aevmos',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
          },
        },
      ],
    },
    {
      description:
        'stkATOM transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
          exponent: 0,
          aliases: ['stk/uatom'],
        },
        {
          denom: 'stk/atom',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
      name: 'stkATOM',
      display: 'stk/atom',
      symbol: 'stkATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-4/stk/uatom',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
          },
        },
      ],
    },
    {
      description:
        'SCRT transferred from the Osmosis mainnet that is supported on the Nolus chain',
      denom_units: [
        {
          denom:
            'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107',
          exponent: 0,
          aliases: ['uscrt'],
        },
        {
          denom: 'scrt',
          exponent: 6,
          aliases: [],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107',
      name: 'SCRT',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
            channel_id: 'channel-783',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-88/uscrt',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
          },
        },
      ],
    },
  ],
};

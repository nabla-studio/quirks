import type { Chain, AssetLists } from '../types';

export const neutron: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'neutron',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Neutron',
  chain_id: 'neutron-1',
  bech32_prefix: 'neutron',
  website: 'https://neutron.org/',
  daemon_name: 'neutrond',
  node_home: '$HOME/.neutrond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'untrn',
        low_gas_price: 0.56,
        average_gas_price: 0.56,
        high_gas_price: 0.84,
      },
      {
        denom:
          'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        low_gas_price: 0.02,
        average_gas_price: 0.02,
        high_gas_price: 0.03,
      },
      {
        denom:
          'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
        low_gas_price: 0.2,
        average_gas_price: 0.2,
        high_gas_price: 0.3,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'untrn',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/neutron-org/neutron',
    recommended_version: 'v1.0.4',
    compatible_versions: ['v1.0.3', 'v1.0.4'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.31',
    cosmwasm_enabled: true,
    ibc_go_version: '4.3.0',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/neutron-org/mainnet-assets/main/neutron-1-genesis.json',
    },
    versions: [
      {
        name: 'v1.0.1',
        recommended_version: 'v1.0.4',
        compatible_versions: ['v1.0.3', 'v1.0.4'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg',
  },
  description:
    'The most secure CosmWasm platform in Cosmos, Neutron lets smart-contracts leverage bleeding-edge Interchain technology with minimal overhead.',
  peers: {
    seeds: [
      {
        id: '24f609fb5946ca3a979f40b7f54132c00104433e',
        address: 'p2p-erheim.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: 'b1c6fa570a184c56d0d736d260b8065d887e717c',
        address: 'p2p-kralum.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:19156',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'f4422e68f9a678838522d75fa8221985c723294d',
        address: 'seeds.whispernode.com:19156',
        provider: 'WhisperNode🤐',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'e5d2743d9a3de514e4f7b9461bf3f0c1500c58d9',
        address: 'neutron.peer.stakewith.us:39956',
        provider: 'StakeWithUs',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-kralum.neutron-1.neutron.org',
        provider: 'Neutron',
      },
      {
        address: 'https://rpc.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://neutron-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-neutron.whispernode.com',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://rpc-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://rpc.neutron.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://neutron-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/trpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://rpc-neutron.in3s.com:443',
        provider: 'in3s.com',
      },
    ],
    rest: [
      {
        address: 'https://rest-kralum.neutron-1.neutron.org',
        provider: 'Neutron',
      },
      {
        address: 'https://api.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://neutron-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://lcd-neutron.whispernode.com',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://api-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://api.neutron.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://neutron-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/crpc',
        provider: 'PRO Delegators',
      },
    ],
    grpc: [
      {
        address: 'grpc-kralum.neutron-1.neutron.org:80',
        provider: 'Neutron',
      },
      {
        address: 'https://grpc.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://grpc-web.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'neutron-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'grpc-neutron.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'grpc-neutron.cosmos-spaces.cloud:3090',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'grpc.neutron.nodestake.top:9090',
        provider: 'NodeStake',
      },
      {
        address: 'neutron-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/neutron',
      tx_page: 'https://www.mintscan.io/neutron/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/neutron/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg',
    },
  ],
};

export const neutronAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'neutron',
  assets: [
    {
      description: 'The native token of Neutron chain.',
      denom_units: [
        {
          denom: 'untrn',
          exponent: 0,
        },
        {
          denom: 'ntrn',
          exponent: 6,
        },
      ],
      base: 'untrn',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
      },
      coingecko_id: 'neutron-3',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
        },
      ],
    },
    {
      description: 'IBC uatom through cosmoshub-4 transfer/channel-1',
      denom_units: [
        {
          denom:
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom'],
        },
        {
          denom: 'atom',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'IBC atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-569',
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uatom',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      },
    },
    {
      description: 'IBC Axelar uusdc through axelar-dojo-1 transfer/channel-2',
      denom_units: [
        {
          denom:
            'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0,
          aliases: ['uusdc'],
        },
        {
          denom: 'usdc',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      name: 'IBC usdc',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
            channel_id: 'channel-78',
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/uusdc',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
      },
    },
    {
      description: 'Tia on Neutron',
      denom_units: [
        {
          denom:
            'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
          exponent: 0,
          aliases: ['utia'],
        },
        {
          denom: 'tia',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
            channel_id: 'channel-8',
          },
          chain: {
            channel_id: 'channel-35',
            path: 'transfer/channel-35',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
      },
    },
    {
      description: 'Astropepe meme coin',
      denom_units: [
        {
          denom:
            'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
          exponent: 0,
        },
        {
          denom: 'ASTROPEPE',
          exponent: 6,
        },
      ],
      base: 'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
      name: 'AstroPepe',
      display: 'ASTROPEPE',
      symbol: 'ASTROPEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png',
        },
      ],
    },
    {
      description: 'wstETH on Neutron',
      denom_units: [
        {
          denom:
            'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
          exponent: 0,
        },
        {
          denom: 'wstETH',
          exponent: 18,
        },
      ],
      base: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
      name: 'wstETH',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          },
          provider: 'Lido',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg',
      },
    },
    {
      description: 'NBTC on Neutron',
      denom_units: [
        {
          denom:
            'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920',
          exponent: 0,
          aliases: ['usat'],
        },
        {
          denom: 'sat',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920',
      name: 'Nomic NBTC',
      display: 'sat',
      symbol: 'SAT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'usat',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-42',
            path: 'transfer/channel-42/usat',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
      },
    },
    {
      description: 'DYDX on Neutron',
      denom_units: [
        {
          denom:
            'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
          exponent: 0,
          aliases: ['adydx'],
        },
        {
          denom: 'dydx',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
      name: 'DYDX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
            channel_id: 'channel-11',
          },
          chain: {
            channel_id: 'channel-48',
            path: 'transfer/channel-48/adydx',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
      },
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [
        {
          denom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
          exponent: 0,
          aliases: ['unewt'],
        },
        {
          denom: 'newt',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png',
        },
      ],
    },
  ],
};

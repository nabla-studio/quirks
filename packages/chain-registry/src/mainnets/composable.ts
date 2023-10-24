import type { Chain, AssetLists } from '../types';

export const composable: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'composable',
  chain_id: 'centauri-1',
  website: 'https://www.composable.finance/',
  pretty_name: 'Composable',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'centauri',
  daemon_name: 'centaurid',
  node_home: '$HOME/.banksy',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ppica',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ppica',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/notional-labs/composable-centauri',
    recommended_version: 'v5.1.0',
    compatible_versions: ['v5.1.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/notional-labs/composable-networks/main/mainnet/genesis.json',
    },
    versions: [
      {
        name: 'v2.3.5',
        tag: 'v2.3.5',
        recommended_version: 'v2.3.5',
        compatible_versions: ['v2.3.5'],
        cosmos_sdk_version: 'v0.47.1',
        ibc_go_version: 'v7.0.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.0',
        },
        height: 0,
        binaries: {
          'linux/amd64':
            'https://github.com/notional-labs/composable-centauri/releases/download/v2.3.5/banksyd',
        },
        next_version_name: 'centauri',
      },
      {
        name: 'centauri',
        tag: 'v3.1.0',
        recommended_version: 'v3.1.2',
        compatible_versions: ['v3.1.0', 'v3.1.1', 'v3.1.2'],
        cosmos_sdk_version: 'v0.47.3',
        ibc_go_version: 'v7.0.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.0',
        },
        height: 188500,
        proposal: 3,
        binaries: {
          'linux/amd64':
            'https://github.com/notional-labs/composable-centauri/releases/download/v3.1.2/centaurid',
        },
        next_version_name: 'reward',
      },
      {
        name: 'reward',
        tag: 'v3.2.2',
        recommended_version: 'v3.2.2',
        compatible_versions: ['v3.2.2'],
        cosmos_sdk_version: 'v0.47.3',
        ibc_go_version: 'v7.0.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.1',
        },
        height: 420000,
        proposal: 4,
        next_version_name: 'v4',
      },
      {
        name: 'v4',
        tag: 'v4.5.0',
        recommended_version: 'v4.5.0',
        compatible_versions: ['v4.5.0'],
        cosmos_sdk_version: 'v0.47.3',
        ibc_go_version: 'v7.0.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.1',
        },
        height: 792909,
        proposal: 5,
        next_version_name: 'v5',
      },
      {
        name: 'v5',
        tag: 'v5.0.1',
        recommended_version: 'v5.1.0',
        compatible_versions: ['v5.1.0'],
        cosmos_sdk_version: 'v0.47.3',
        ibc_go_version: 'v7.0.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.1',
        },
        height: 1515288,
        proposal: 10,
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'composable-mainnet-seed.autostake.com:26976',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:22256',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'd2362ebcdd562500ac8c4cfa2214a89ad811033c',
        address: 'seeds.whispernode.com:22256',
        provider: 'WhisperNode🤐',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'composable-mainnet-peer.autostake.com:26976',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '63559b939442512ed82d2ded46d02ab1021ea29a',
        address: '95.214.55.138:53656',
        provider: 'genznodes',
      },
      {
        id: '7082a715395427a519e611ed1454b0965fd95ef5',
        address: '88.99.208.54:37656',
        provider: 'StakeTown',
      },
      {
        id: '715af1847e1c785510d4cb94ac29f2bd7d0ddf91',
        address: '65.108.206.74:36656',
        provider: 'vinjan',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional',
      },
      {
        address: 'https://rpc.composable.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://composable-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://composable-rpc.cogwheel.zone:443',
        provider: 'Cogwheel',
      },
      {
        address: 'https://rpc-centauri.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://composable-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://composable-rpc.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://rpc-composable.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://composable-rpc.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://rpc-composable.vinjan.xyz:443',
        provider: 'vinjan',
      },
    ],
    rest: [
      {
        address: 'https://api-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional',
      },
      {
        address: 'https://api.composable.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://composable-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://composable-api.cogwheel.zone:443',
        provider: 'Cogwheel',
      },
      {
        address: 'https://api-centauri.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://composable-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://composable-api.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://lcd-composable.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://composable-api.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://api-composable.vinjan.xyz:443',
        provider: 'vinjan',
      },
    ],
    grpc: [
      {
        address: 'https://grpc-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional',
      },
      {
        address: 'grpc.composable.nodestake.top:9090',
        provider: 'NodeStake',
      },
      {
        address: 'composable-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc-centauri.cosmos-spaces.cloud:1120',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://composable-grpc.cogwheel.zone:443',
        provider: 'Cogwheel',
      },
      {
        address: 'https://composable-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'composable-grpc.genznodes.dev:53090',
        provider: 'genznodes',
      },
      {
        address: 'composable-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'grpc-composable.vinjan.xyz:36090',
        provider: 'vinjan',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/centauri',
      tx_page: 'https://ping.pub/centauri/tx/${txHash}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/composable',
      tx_page: 'https://explorer.nodestake.top/composable/tx/${txHash}',
    },
  ],
  images: [
    {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/composable.svg',
    },
  ],
};

export const composableAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'composable',
  assets: [
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [
        {
          denom: 'ppica',
          exponent: 0,
        },
        {
          denom: 'pica',
          exponent: 12,
        },
      ],
      base: 'ppica',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingecko_id: 'picasso',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'picasso',
            base_denom: 'ppica',
          },
          provider: 'Composable Finance',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica',
          },
        },
      ],
    },
    {
      description:
        'The native staking and governance token of Kusama Relay Chain.',
      denom_units: [
        {
          denom:
            'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
          exponent: 0,
          aliases: ['4'],
        },
        {
          denom: 'ksm',
          exponent: 12,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
      name: 'KSM',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '4',
            channel_id: 'channel-17',
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/4',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '4',
          },
        },
      ],
    },
    {
      description:
        'The native staking and governance token of Polkadot Relay Chain.',
      denom_units: [
        {
          denom:
            'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
          exponent: 0,
          aliases: ['79228162514264337593543950342'],
        },
        {
          denom: 'dot',
          exponent: 10,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
      name: 'DOT',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342',
            channel_id: 'channel-17',
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/transfer/channel-15/79228162514264337593543950342',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342',
          },
        },
      ],
    },
    {
      description:
        'The native staking and governance token of Statemine parachain.',
      denom_units: [
        {
          denom:
            'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
          exponent: 0,
          aliases: ['130'],
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
      name: 'USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '130',
            channel_id: 'channel-17',
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/130',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '130',
          },
        },
      ],
    },
  ],
};

import type { Chain, AssetList, Versions } from '../types';

export const composable: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'composable',
  chain_id: 'centauri-1',
  website: 'https://www.picasso.xyz/',
  pretty_name: 'Picasso',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'pica',
  daemon_name: 'picad',
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
    git_repo: 'https://github.com/composable/composable-cosmos',
    recommended_version: 'v6.5.3',
    compatible_versions: ['v6.5.3'],
    cosmos_sdk_version:
      'rust-ninja/cosmos-sdk v0.47.5-patch-validators-trim-tag',
    ibc_go_version:
      'notional-labs/ibc-go/v7 v7.2.1-0.20231010040541-6cf43006971f',
    consensus: {
      type: 'cometbft',
      version: 'composablefi/cometbft v0.37.2-fixed-len-vote-time-tag',
    },
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
        tag: 'v5.2.0',
        recommended_version: 'v5.2.0',
        compatible_versions: ['v5.1.0', 'v5.2.0'],
        cosmos_sdk_version: 'v0.47.3',
        ibc_go_version: 'v7.0.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.1',
        },
        height: 1515288,
        proposal: 10,
        next_version_name: 'v6',
      },
      {
        name: 'v6',
        tag: 'v6.3.1',
        recommended_version: 'v6.3.6',
        compatible_versions: ['v6.3.6'],
        cosmos_sdk_version: 'v0.47.5',
        ibc_go_version: 'v7.3.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
        height: 2301070,
        proposal: 12,
        next_version_name: 'v6_4',
      },
      {
        name: 'v6_4',
        tag: 'v6.4.2',
        recommended_version: 'v6.4.3',
        compatible_versions: ['v6.4.3'],
        cosmos_sdk_version: 'v0.47.5',
        ibc_go_version:
          'notional-labs/ibc-go/v7 v7.2.1-0.20231010040541-6cf43006971f',
        consensus: {
          type: 'cometbft',
          version: 'composablefi/cometbft v0.37.2-fixed-len-vote-time-tag',
        },
        height: 3486739,
        proposal: 14,
        next_version_name: '',
      },
      {
        name: 'v6_5_0',
        proposal: 16,
        height: 4446786,
        tag: 'v6.5.1',
        recommended_version: 'v6.5.2',
        compatible_versions: ['v6.5.2'],
        cosmos_sdk_version: 'v0.47.6',
        ibc_go_version:
          'notional-labs/ibc-go/v7 v7.2.1-0.20231010040541-6cf43006971f',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        next_version_name: 'v6_5_3',
      },
      {
        name: 'v6_5_3',
        proposal: 18,
        height: 4576500,
        tag: 'v6.5.3',
        recommended_version: 'v6.5.3',
        compatible_versions: ['v6.5.3'],
        cosmos_sdk_version:
          'rust-ninja/cosmos-sdk v0.47.5-patch-validators-trim-tag',
        ibc_go_version:
          'notional-labs/ibc-go/v7 v7.2.1-0.20231010040541-6cf43006971f',
        consensus: {
          type: 'cometbft',
          version: 'composablefi/cometbft v0.37.2-fixed-len-vote-time-tag',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg',
  },
  description:
    'Picasso is a DeFi infrastructure-focused Layer 1 protocol that leads the industry in building the trust-minimized interoperability solution -Cross-Ecosystem IBC. Complementary to the interoperability work, Picasso is building the first Generalized Restaking Layer starting with deployment on Solana, and expand support for all IBC connected ecosystems.',
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
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:22256',
        provider: 'WhisperNode 🤐',
      },
      {
        id: 'a3910d1bf22b4dacf66979d6ea75fd134aee00db',
        address: 'seed.composable.validatus.com:2000',
        provider: 'Validatus',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'aa6398f9644e98fa3d04f7dbdd7740c995eb0530',
        address: 'composable.seed.stavr.tech:20306',
        provider: '🔥STAVR🔥',
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
        address: '138.201.21.197:37656',
        provider: 'StakeTown',
      },
      {
        id: '715af1847e1c785510d4cb94ac29f2bd7d0ddf91',
        address: '65.108.206.74:36656',
        provider: 'vinjan',
      },
      {
        id: 'c6eefdcc5cbe41dd457183c7c3bd7311ddf97638',
        address: 'composable.peer.stakevillage.net:16156',
        provider: 'Stake Village',
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
        address: 'https://composable-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://picasso-rpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️',
      },
      {
        address: 'https://picasso-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://composable-rpc.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://rpc-picasso.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://picasso-rpc.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://composable.rpc.stakevillage.net:443',
        provider: 'Stake Village',
      },
      {
        address: 'https://composable-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://rpc.centauri.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://composable.rpc.moonbridge.team',
        provider: 'Moonbridge',
      },
      {
        address: 'https://rpc.composable.citizenweb3.com:443',
        provider: 'Citizen Web3',
      },
      {
        address: 'https://composable.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥',
      },
    ],
    rest: [
      {
        address: 'https://api-composable-ia.cosmosia.notional.ventures',
        provider: 'Notional',
      },
      {
        address: 'https://composable-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://picasso-api.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️',
      },
      {
        address: 'https://picasso-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://composable-api.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://api-picasso.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://picasso-api.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://composable.api.stakevillage.net',
        provider: 'Stake Village',
      },
      {
        address: 'https://composable-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://lcd.centauri.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://composable.api.moonbridge.team',
        provider: 'Moonbridge',
      },
      {
        address: 'https://composable.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
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
        address: 'https://picasso-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️',
      },
      {
        address: 'https://picasso-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'composable-grpc.genznodes.dev:53090',
        provider: 'genznodes',
      },
      {
        address: 'picasso-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'grpc-composable.vinjan.xyz:36090',
        provider: 'vinjan',
      },
      {
        address: 'composable.grpc.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'composable.grpc.stakevillage.net:16190',
        provider: 'Stake Village',
      },
      {
        address: 'composable-rpc.stakeandrelax.net:22290',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'grpc.composable.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'https://grpc.centauri.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://composable.grpc.moonbridge.team',
        provider: 'Moonbridge',
      },
      {
        address: 'composable.grpc.m.stavr.tech:9907',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'grpc-picasso.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/composable',
      tx_page: 'https://ping.pub/composable/tx/${txHash}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/composable',
      tx_page: 'https://explorer.nodestake.top/composable/tx/${txHash}',
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/composable',
      tx_page: 'https://exp.stakevillage.net/composable/tx/${txHash}',
      account_page:
        'https://exp.stakevillage.net/composable/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Composable-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Composable-Mainnet/tx/${txHash}',
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/picasso',
      tx_page: 'https://mainnet.whispernode.com/picasso/tx/${txHash}',
      account_page:
        'https://mainnet.whispernode.com/picasso/account/${accountAddress}',
    },
  ],
  images: [
    {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg',
    },
  ],
};

export const composableAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'composable',
  assets: [
    {
      description:
        'The native staking, governance and revenue sharing token of Picasso.',
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
          provider: 'Picasso',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg',
      },
      socials: {
        website: 'https://picasso.network/',
        twitter: 'https://twitter.com/picasso_network',
      },
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg',
      },
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
      },
    },
    {
      description: 'USDT issued by the Kusama Asset Hub.',
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
    {
      description:
        'The native fee, staking and governance token of the Tinkernet Parachain.',
      denom_units: [
        {
          denom:
            'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
          exponent: 0,
          aliases: ['2125'],
        },
        {
          denom: 'tnkr',
          exponent: 12,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
      name: 'TNKR',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'picasso',
            base_denom: '2125',
            channel_id: 'channel-17',
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/2125',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'picasso',
            base_denom: '2125',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg',
      },
    },
    {
      description: 'The native token of Ethereum, bridged via IBC.',
      extended_description:
        "Ether is the native token of the Ethereum blockchain. It powers a wide range of decentralized applications and smart contracts on the platform. This specific version has been bridged through Picasso's implementation of IBC on Ethereum.",
      denom_units: [
        {
          denom:
            'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
          exponent: 0,
          aliases: ['wei'],
        },
        {
          denom: 'eth',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
      name: 'Ethereum',
      display: 'eth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/wei',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        },
      ],
      socials: {
        website: 'https://ethereum.org/',
        twitter: 'https://twitter.com/ethereum',
      },
    },
    {
      description: 'A stablecoin issued by Maker Protocol.',
      extended_description:
        "DAI, a stablecoin issued by the Maker Protocol, maintains a value pegged to the US dollar. This specific version has been bridged through Picasso's implementation of IBC on Ethereum.",
      denom_units: [
        {
          denom:
            'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533',
          exponent: 0,
          aliases: ['dai-wei'],
        },
        {
          denom: 'dai',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533',
      name: 'Dai',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x6b175474e89094c44da98b954eedeac495271d0f',
          },
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg',
        },
      ],
      socials: {
        website: 'https://makerdao.com/',
        twitter: 'https://twitter.com/MakerDAO',
      },
    },
    {
      description: 'The governance token of the Frax ecosystem.',
      extended_description:
        "Frax Shares is the governance and utility token of the Frax Protocol. It plays a crucial role in maintaining the stability of the FRAX stablecoin. Holders of FXS can participate in governance decisions and benefit from the protocol's growth and revenue, as the token captures fees.",
      denom_units: [
        {
          denom:
            'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
          exponent: 0,
          aliases: ['fxs-wei'],
        },
        {
          denom: 'fxs',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
      name: 'Frax Shares',
      display: 'fxs',
      symbol: 'FXS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
        },
      ],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance',
      },
    },
    {
      description:
        'The first fractional-algorithmic stablecoin by Frax Finance.',
      extended_description:
        'FRAX is a stablecoin designed to maintain a stable value to a peg of the US dollar. It is issued by the Frax Protocol, which employs a hybrid approach combining algorithmic mechanisms with collateral backing.',
      denom_units: [
        {
          denom:
            'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB',
          exponent: 0,
          aliases: ['frax-wei'],
        },
        {
          denom: 'frax',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x853d955acef822db058eb8505911ed77f175b99e',
          },
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x853d955acef822db058eb8505911ed77f175b99e',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg',
        },
      ],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance',
      },
    },
    {
      description:
        'A liquid ETH staking derivative designed to leverage the Frax ecosystem.',
      extended_description:
        'FrxETH is a stablecoin that is loosely pegged to ETH, meaning that 1 frxETH always represents 1 ETH.',
      denom_units: [
        {
          denom:
            'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90',
          exponent: 0,
          aliases: ['frxeth-wei'],
        },
        {
          denom: 'frxeth',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90',
      name: 'Frax Ether',
      display: 'frxeth',
      symbol: 'frxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x5e8422345238f34275888049021821e8e08caa1f',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
        },
      ],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance',
      },
    },
    {
      description:
        'A Liquid Staking Derivative designed to accrue the staking yield of the Frax ETH validators.',
      extended_description:
        'SFRXETH is a ERC-4626 vault designed to accrue the staking yield of the Frax ETH validators. It allows users to earn staking yield on their frxETH, a type of Frax Ether.',
      denom_units: [
        {
          denom:
            'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A',
          exponent: 0,
          aliases: ['sfrxeth-wei'],
        },
        {
          denom: 'sfrxeth',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A',
      name: 'Frax Staked Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xac3e018457b222d93114458476f3e3416abbe38f',
          },
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xac3e018457b222d93114458476f3e3416abbe38f',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg',
        },
      ],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance',
      },
    },
    {
      description:
        'An ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. ',
      extended_description:
        'Staked FRAX (sFRAX) is an ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. The sFRAX token represents pro rata deposits within the vault and is always withdrawable for FRAX stablecoins at the pro rata rate at all times.',
      denom_units: [
        {
          denom:
            'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9',
          exponent: 0,
          aliases: ['sfrax-wei'],
        },
        {
          denom: 'sfrax',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9',
      name: 'Staked FRAX',
      display: 'sfrax',
      symbol: 'sFRAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
        },
      ],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance',
      },
    },
    {
      description:
        'A stablecoin issued by Tether that is pegged 1:1 to the USD.',
      extended_description:
        "USDT, or Tether, is a widely used stablecoin pegged to the US dollar, designed to maintain a stable value and facilitate transactions. This specific version has been bridged through Picasso's implementation of IBC on Ethereum.",
      denom_units: [
        {
          denom:
            'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD',
          exponent: 0,
          aliases: ['uusdt'],
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD',
      name: 'Tether (Ethereum)',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xdac17f958d2ee523a2206206994597c13d831ec7',
          },
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
        },
      ],
      socials: {
        website: 'https://www.tether.to/',
        twitter: 'https://twitter.com/Tether_to',
      },
    },
    {
      description: 'CRV is the governance token for Curve Finance.',
      denom_units: [
        {
          denom:
            'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
          exponent: 0,
          aliases: ['crv-wei'],
        },
        {
          denom: 'crv',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
      name: 'Curve DAO',
      display: 'crv',
      symbol: 'CRV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xd533a949740bb3306d119cc777fa900ba034cd52',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png',
        },
      ],
    },
    {
      description: 'An ERC-20 token issued Ethereum that represents Bitcoin.',
      denom_units: [
        {
          denom:
            'ibc/1507315B0C337368B85A7EC67C3956C508E1106EBD96336B1B092F7B2815B3E5',
          exponent: 0,
          aliases: ['wbtc-satoshi'],
        },
        {
          denom: 'wbtc',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/1507315B0C337368B85A7EC67C3956C508E1106EBD96336B1B092F7B2815B3E5',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'wBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        },
      ],
    },
    {
      description: 'A token that represents staked ether in Lido.',
      denom_units: [
        {
          denom:
            'ibc/74F65FE91F672BC2524C039B3CD0211F6D370071209552533DF26D57743D5FFD',
          exponent: 0,
          aliases: ['steth-wei'],
        },
        {
          denom: 'steth',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/74F65FE91F672BC2524C039B3CD0211F6D370071209552533DF26D57743D5FFD',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
          },
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg',
        },
      ],
    },
    {
      description: "Rocket Pool protocol's liquid staking token.",
      denom_units: [
        {
          denom:
            'ibc/207E7F34DFEBF714CED4900C1FD85BAF200230BF431EE8133EB26B98CB535EDC',
          exponent: 0,
          aliases: ['reth-wei'],
        },
        {
          denom: 'reth',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/207E7F34DFEBF714CED4900C1FD85BAF200230BF431EE8133EB26B98CB535EDC',
      name: 'Rocket Pool ETH',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xae78736cd615f374d3085123a210448e74fc6393',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xae78736cd615f374d3085123a210448e74fc6393',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xae78736cd615f374d3085123a210448e74fc6393',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png',
        },
      ],
    },
    {
      description:
        'A collateralized-debt-position (CDP) stablecoin by Curve DAO.',
      denom_units: [
        {
          denom:
            'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A',
          exponent: 0,
          aliases: ['crvusd-wei'],
        },
        {
          denom: 'crvusd',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A',
      name: 'crvUSD',
      display: 'crvusd',
      symbol: 'crvUSD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png',
        },
      ],
    },
    {
      description:
        'pxETH is built on top of the Pirex platform and forms the foundation of the Dinero protocol.',
      denom_units: [
        {
          denom:
            'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821',
          exponent: 0,
          aliases: ['pxeth-wei'],
        },
        {
          denom: 'pxeth',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821',
      name: 'Dinero Staked ETH',
      display: 'pxeth',
      symbol: 'pxETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png',
        },
      ],
    },
    {
      description:
        'eETH is a natively restaked liquid staking token on Ethereum.',
      denom_units: [
        {
          denom:
            'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B',
          exponent: 0,
          aliases: ['eeth-wei'],
        },
        {
          denom: 'eeth',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B',
      name: 'ether.fi Staked ETH',
      display: 'eeth',
      symbol: 'eETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x35fa164735182de50811e8e2e824cfb9b6118ac2',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png',
        },
      ],
    },
    {
      description: 'The native governance token of Ethena.',
      denom_units: [
        {
          denom:
            'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
          exponent: 0,
          aliases: ['ena-wei'],
        },
        {
          denom: 'ena',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
      name: 'Ethena',
      display: 'ena',
      symbol: 'ENA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x57e114b691db790c35207b2e685d4a43181e6061',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x57e114b691db790c35207b2e685d4a43181e6061',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x57e114b691db790c35207b2e685d4a43181e6061',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png',
        },
      ],
    },
    {
      description:
        'Ethena USDe is a synthetic dollar protocol built on Ethereum.',
      denom_units: [
        {
          denom:
            'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983',
          exponent: 0,
          aliases: ['usde-wei'],
        },
        {
          denom: 'usde',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983',
      name: 'Ethena USDe',
      display: 'usde',
      symbol: 'USDe',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png',
        },
      ],
    },
    {
      description:
        'A Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer.',
      denom_units: [
        {
          denom:
            'ibc/0247E0E2C174135AADF4EA172D97FF5C15A64689A403E83603EAE4F0616DD365',
          exponent: 0,
          aliases: ['ezeth-wei'],
        },
        {
          denom: 'ezeth',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/0247E0E2C174135AADF4EA172D97FF5C15A64689A403E83603EAE4F0616DD365',
      name: 'Renzo Restaked ETH',
      display: 'ezeth',
      symbol: 'ezETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0xbf5495efe5db9ce00f80364c8b423567e58d2110',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png',
        },
      ],
    },
    {
      description: 'PEPE is a deflationary memecoin launched on Ethereum. ',
      denom_units: [
        {
          denom:
            'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05',
          exponent: 0,
          aliases: ['pepe-wei'],
        },
        {
          denom: 'pepe',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-52',
            path: 'transfer/channel-52/0x6982508145454ce325ddbe47a25d4ec3d2311933',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        },
      ],
    },
    {
      description: 'SOL is the native cryptocurrency of the Solana blockchain.',
      denom_units: [
        {
          denom:
            'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C',
          exponent: 0,
          aliases: ['Lamport'],
        },
        {
          denom: 'wsol',
          exponent: 9,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C',
      name: 'Wrapped Solana',
      display: 'wsol',
      symbol: 'wSOL',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Lamport',
          },
          provider: 'Solana',
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/So11111111111111111111111111111111111111112',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg',
        },
      ],
    },
    {
      description: 'mSOL represents staked SOL in the Marinade stake pool.',
      denom_units: [
        {
          denom:
            'ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D',
          exponent: 0,
        },
        {
          denom: 'msol',
          exponent: 9,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D',
      name: 'Marinade Staked SOL',
      display: 'msol',
      symbol: 'mSOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png',
        },
      ],
    },
    {
      description:
        'A representative token for staked SOL, derived through the process of liquid staking SOL using Jito.',
      denom_units: [
        {
          denom:
            'ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2',
          exponent: 0,
        },
        {
          denom: 'jitosol',
          exponent: 9,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2',
      name: 'Jito Staked SOL',
      display: 'jitosol',
      symbol: 'jitoSOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jitosol.png',
        },
      ],
    },
    {
      description:
        'A representative token for staked SOL, derived through the process of liquid staking SOL using the BlazeStake protocol.',
      denom_units: [
        {
          denom:
            'ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716',
          exponent: 0,
        },
        {
          denom: 'bsol',
          exponent: 9,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716',
      name: 'BlazeStake Staked SOL',
      display: 'bsol',
      symbol: 'bSOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bsol.png',
        },
      ],
    },
    {
      description:
        'A representative token for staked SOL, derived through the process of liquid staking SOL using the MarginFi protocol.',
      denom_units: [
        {
          denom:
            'ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D',
          exponent: 0,
        },
        {
          denom: 'lst',
          exponent: 9,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D',
      name: 'Liquid Staking Token',
      display: 'lst',
      symbol: 'LST',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/lst.png',
        },
      ],
    },
    {
      description:
        'A representative token for staked SOL, derived through the process of liquid staking SOL using the Edgevana protocol.',
      denom_units: [
        {
          denom:
            'ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C',
          exponent: 0,
        },
        {
          denom: 'edgesol',
          exponent: 9,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C',
      name: 'Edgevana Staked SOL',
      display: 'edgesol',
      symbol: 'edgeSOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/edgesol.png',
        },
      ],
    },
    {
      description:
        "A liquid staked token that represents SOL staked to Helius's validator.",
      denom_units: [
        {
          denom:
            'ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6',
          exponent: 0,
        },
        {
          denom: 'hsol',
          exponent: 9,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6',
      name: 'Helius Staked SOL',
      display: 'hsol',
      symbol: 'hSOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/hsol.png',
        },
      ],
    },
    {
      description:
        "A liquid staked token that represents SOL staked to Jupiter's validator.",
      denom_units: [
        {
          denom:
            'ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626',
          exponent: 0,
        },
        {
          denom: 'jupsol',
          exponent: 9,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626',
      name: 'Jupiter Staked SOL',
      display: 'jupsol',
      symbol: 'jupSOL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jupsol.png',
        },
      ],
    },
    {
      description: 'dogwifhat is a meme coin that operates on Solana.',
      denom_units: [
        {
          denom:
            'ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071',
          exponent: 0,
        },
        {
          denom: 'wif',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071',
      name: 'dogwifhat',
      display: 'wif',
      symbol: 'WIF',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/wif.png',
        },
      ],
    },
    {
      description: 'Tether, issued natively on Solana.',
      denom_units: [
        {
          denom:
            'ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575',
      name: 'Tether',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'solana',
            base_denom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-71',
            path: 'transfer/channel-71/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'solana',
            base_denom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/usdt.png',
        },
      ],
    },
  ],
};

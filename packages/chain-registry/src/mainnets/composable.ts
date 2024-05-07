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
        address: 'https://composable-rpc.cogwheel.zone:443',
        provider: 'Cogwheel',
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
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://composable-rpc.stake-town.com',
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
        address: 'https://composable-api.cogwheel.zone:443',
        provider: 'Cogwheel',
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
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://composable-api.stake-town.com',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/picasso/images/pica.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/picasso/images/pica.svg',
      },
      socials: {
        website: 'https://picasso.xyz/',
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
        },
      ],
      logo_URIs: {
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
        },
      ],
    },
    {
      description: 'A stablecoin issued by Maker Protocol.',
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
    },
    {
      description: 'The governance token of the Frax ecosystem.',
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
        },
      ],
    },
    {
      description: 'The first fractional-algorithmic stablecoin.',
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
    },
    {
      description:
        'A liquid ETH staking derivative designed to leverage the Frax ecosystem.',
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x5e8422345238f34275888049021821e8e08caa1f',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg',
        },
      ],
    },
    {
      description:
        'A Liquid Staking Derivative designed to accrue the staking yield of the Frax ETH validators.',
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
    },
    {
      description:
        'An ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. ',
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg',
        },
      ],
    },
    {
      description:
        'A stablecoin issued by Tether that is pegged 1:1 to the USD.',
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
      name: 'Tether',
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
    },
  ],
};

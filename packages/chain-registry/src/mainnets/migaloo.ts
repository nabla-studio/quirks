import type { Chain, AssetLists } from '../types';

export const migaloo: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'migaloo',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.whitewhale.money/',
  pretty_name: 'Migaloo',
  chain_id: 'migaloo-1',
  bech32_prefix: 'migaloo',
  daemon_name: 'migalood',
  node_home: '$HOME/.migalood',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uwhale',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 2,
        high_gas_price: 3,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uwhale',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg',
  },
  codebase: {
    git_repo: 'https://github.com/White-Whale-Defi-Platform/migaloo-chain',
    recommended_version: 'v3.0.2',
    compatible_versions: ['v3.0.2'],
    cosmos_sdk_version: '0.46.15',
    ibc_go_version: '6.2.0',
    consensus: {
      type: 'cometbft',
      version: '0.34.29',
    },
    cosmwasm_version: 'v0.30.1-0.20230320091624-f5072b9b04a6',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/White-Whale-Defi-Platform/migaloo-chain/release/v2.0.x/networks/mainnet/genesis.json',
    },
    versions: [
      {
        name: 'v2.0.0',
        recommended_version: 'v2.0.5',
        compatible_versions: ['v2.0.0', 'v2.0.4', 'v2.0.5'],
        cosmos_sdk_version: '0.46.11',
        ibc_go_version: '6.1.0',
        consensus: {
          type: 'cometbft',
          version: '0.34.27',
        },
        cosmwasm_version: 'v0.30.1-0.20230320091624-f5072b9b04a6',
        cosmwasm_enabled: true,
        next_version_name: 'v2.2.5',
      },
      {
        name: 'v2.2.5',
        proposal: 10,
        height: 2342302,
        recommended_version: 'v2.2.7-hotfix',
        compatible_versions: ['v2.2.7-hotfix'],
        cosmos_sdk_version: 'v0.46.13',
        ibc_go_version: '6.2.0',
        consensus: {
          type: 'cometbft',
          version: '0.34.29',
        },
        cosmwasm_version: 'v0.30.1-0.20230320091624-f5072b9b04a6',
        cosmwasm_enabled: true,
        next_version_name: 'v3.0.0',
      },
      {
        name: 'v3.0.0',
        proposal: 13,
        height: 3574316,
        recommended_version: 'v3.0.1-hotfix',
        compatible_versions: ['v3.0.1-hotfix'],
        cosmos_sdk_version: '0.46.15',
        ibc_go_version: '6.2.0',
        consensus: {
          type: 'cometbft',
          version: '0.34.29',
        },
        cosmwasm_version: 'v0.30.1-0.20230320091624-f5072b9b04a6',
        cosmwasm_enabled: true,
        next_version_name: 'v3.0.2',
      },
      {
        name: 'v3.0.2',
        proposal: 19,
        height: 4128108,
        recommended_version: 'v3.0.2',
        compatible_versions: ['v3.0.2'],
        cosmos_sdk_version: '0.46.15',
        ibc_go_version: '6.2.0',
        consensus: {
          type: 'cometbft',
          version: '0.34.29',
        },
        cosmwasm_version: 'v0.30.1-0.20230320091624-f5072b9b04a6',
        cosmwasm_enabled: true,
        next_version_name: '',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:12856',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'c936ae78abca1169362e068e3e94c87a0ace96c7',
        address: 'seeds.cros-nest.com:27656',
        provider: 'Cros-Nest',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'whitewhale-mainnet-seed.autostake.com:27096',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:20756',
        provider: 'Polkachu',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'migaloo.rpc.kjnodes.com:14959',
        provider: 'kjnodes',
      },
      {
        id: '1b6a3dd166b8814f3064444206c2194a92dea62d',
        address: 'seeds.whispernode.com:20756',
        provider: 'WhisperNode🤐',
      },
      {
        id: '27b6d74c8408e033e2e5a9e966a0d15782e33596',
        address: 'seeds.nethernode.xyz:20756',
        provider: 'carbonZERO🌲',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'whitewhale-mainnet-peer.autostake.com:27096',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://migaloo-rpc.polkachu.com:443',
        provider: 'Polkachu',
      },
      {
        address: 'https://migaloo-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-migaloo.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://migaloo-rpc.kleomedes.network:443',
        provider: 'Kleomedes',
      },
      {
        address: 'https://rpc.whitewhale.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://migaloo.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://migaloo-rpc.cosmosrescue.com',
        provider: 'cosmosrescue',
      },
    ],
    rest: [
      {
        address: 'https://migaloo-api.polkachu.com:443',
        provider: 'Polkachu',
      },
      {
        address: 'https://migaloo-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api-migaloo.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://migaloo-api.kleomedes.network:443',
        provider: 'Kleomedes',
      },
      {
        address: 'https://api.whitewhale.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://migaloo.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://migaloo-api.cosmosrescue.com',
        provider: 'cosmosrescue',
      },
    ],
    grpc: [
      {
        address: 'migaloo-grpc.polkachu.com:20790',
        provider: 'Polkachu',
      },
      {
        address: 'migaloo-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'whitewhale-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc-migaloo.cosmos-spaces.cloud:4810',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://grpc.whitewhale.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'migaloo.grpc.kjnodes.com:14990',
        provider: 'kjnodes',
      },
      {
        address: 'migaloo-grpc.cosmosrescue.com:9090',
        provider: 'cosmosrescue',
      },
    ],
  },
  explorers: [
    {
      kind: 'Migaloo Explorers Guru',
      url: 'https://migaloo.explorers.guru',
      tx_page: 'https://migaloo.explorers.guru/transaction/${txHash}',
      account_page: 'https://migaloo.explorers.guru/account/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/migaloo',
      tx_page: 'https://ping.pub/migaloo/tx/${txHash}',
    },
    {
      kind: 'Silk Nodes',
      url: 'https://explorer.silknodes.io/migaloo',
      tx_page: 'https://explorer.silknodes.io/migaloo/tx/${txHash}',
      account_page:
        'https://explorer.silknodes.io/migaloo/account/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/migaloo',
      tx_page: 'https://atomscan.com/migaloo/transactions/${txHash}',
      account_page: 'https://atomscan.com/migaloo/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/migaloo-light.svg',
    },
  ],
};

export const migalooAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'migaloo',
  assets: [
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [
        {
          denom: 'uwhale',
          exponent: 0,
        },
        {
          denom: 'whale',
          exponent: 6,
        },
      ],
      base: 'uwhale',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
      },
      coingecko_id: 'white-whale',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg',
        },
      ],
    },
    {
      description: 'ampWHALE',
      denom_units: [
        {
          denom:
            'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
          exponent: 0,
        },
        {
          denom: 'ampWHALE',
          exponent: 6,
        },
      ],
      base: 'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
      name: 'ampWHALE',
      display: 'ampWHALE',
      symbol: 'ampWHALE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg',
        },
      ],
    },
    {
      description: 'boneWHALE',
      denom_units: [
        {
          denom:
            'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
          exponent: 0,
        },
        {
          denom: 'boneWHALE',
          exponent: 6,
        },
      ],
      base: 'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
      name: 'boneWHALE',
      display: 'boneWHALE',
      symbol: 'bWHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.svg',
        },
      ],
    },
    {
      description: 'FABLE',
      denom_units: [
        {
          denom: 'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
          exponent: 0,
        },
        {
          denom: 'fable',
          exponent: 6,
        },
      ],
      base: 'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
      name: 'FABLE',
      display: 'fable',
      symbol: 'FABLE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg',
        },
      ],
    },
    {
      description: 'boneLUNA are autocompounding LUNA tokens',
      denom_units: [
        {
          denom:
            'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
          exponent: 0,
        },
        {
          denom: 'bluna',
          exponent: 6,
        },
      ],
      base: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
      address:
        'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      type_asset: 'ics20',
      name: 'boneLuna',
      display: 'bluna',
      symbol: 'bLUNA',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channel_id: 'channel-87',
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-2',
            path: 'transfer/channel-2/cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png',
        },
      ],
    },
    {
      description: 'RAC',
      denom_units: [
        {
          denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
          exponent: 0,
        },
        {
          denom: 'RAC',
          exponent: 6,
        },
      ],
      base: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg',
        },
      ],
    },
    {
      description: 'ASH',
      denom_units: [
        {
          denom:
            'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
          exponent: 0,
        },
        {
          denom: 'ASH',
          exponent: 6,
        },
      ],
      base: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg',
        },
      ],
    },
    {
      description: 'Tether USDt on Migaloo',
      denom_units: [
        {
          denom:
            'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-120',
          },
          chain: {
            channel_id: 'channel-48',
            path: 'transfer/channel-48/erc20/tether/usdt',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
      },
    },
    {
      description: 'Auto componded USDC despoited into Ginkou on Migaloo chain',
      denom_units: [
        {
          denom:
            'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
          exponent: 0,
        },
        {
          denom: 'mUSDC',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address:
        'migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      base: 'cw20:migaloo10nucfm2zqgzqmy7y7ls398t58pjt9cwjsvpy88y2nvamtl34rgmqt5em2v',
      name: 'mUSDC',
      display: 'mUSDC',
      symbol: 'mUSDC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg',
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/mUSDC.svg',
        },
      ],
    },
  ],
};

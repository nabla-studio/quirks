import type { Chain, AssetList, Versions } from '../types';

export const stargaze: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'stargaze',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://stargaze.zone/',
  pretty_name: 'Stargaze',
  chain_id: 'stargaze-1',
  bech32_prefix: 'stars',
  daemon_name: 'starsd',
  node_home: '$HOME/.starsd',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ustars',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 1.1,
        high_gas_price: 1.2,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ustars',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/public-awesome/stargaze',
    recommended_version: 'v13.0.0',
    compatible_versions: ['v13.0.0'],
    cosmos_sdk_version: 'v0.47.10',
    ibc_go_version: 'v7.3.2',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4',
    },
    cosmwasm_version: 'v0.45.0',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/public-awesome/mainnet/main/stargaze-1/genesis.tar.gz',
    },
    versions: [
      {
        name: 'v9',
        recommended_version: 'v9.1.0',
        compatible_versions: ['v9.1.0', 'v9.0.0'],
        next_version_name: 'v10',
      },
      {
        name: 'v10',
        recommended_version: 'v10.0.1',
        compatible_versions: ['v10.0.1', 'v10.0.0'],
        next_version_name: 'v11',
      },
      {
        name: 'v11',
        recommended_version: 'v11.0.0',
        compatible_versions: ['v11.0.0'],
        next_version_name: 'v12',
      },
      {
        name: 'v12',
        recommended_version: 'v12.0.0',
        compatible_versions: ['v12.0.0'],
        next_version_name: 'v13',
      },
      {
        name: 'v13',
        proposal: 260,
        height: 12801683,
        recommended_version: 'v13.0.0',
        compatible_versions: ['v13.0.0'],
        cosmos_sdk_version: 'v0.47.10',
        ibc_go_version: 'v7.3.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        cosmwasm_version: 'v0.45.0',
        cosmwasm_enabled: true,
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
  },
  description:
    'The premier community-focused blockchain for NFTs. Stargaze empowers creators, developers, collectors, and traders to participate on the platform. The Stargaze chain consists of various NFT-related apps such as a Launchpad, and a Marketplace with offers and auctions.',
  peers: {
    seeds: [
      {
        id: '70ed826888f102c7c1ceb4d07287956628a53508',
        address: '174.138.124.7:36656',
      },
      {
        id: '722079345d941cd2da3daedea548c909d9b83ec5',
        address: '104.248.101.113:36656',
      },
      {
        id: 'd5fc4f479c4e212c96dff5704bb2468ea03b8ae3',
        address: 'sg-seed.blockpane.com:26656',
        provider: '[ block pane ]',
      },
      {
        id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
        address: 'seed.rhinostake.com:13756',
        provider: 'RHINO',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13756',
        provider: 'Polkachu',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'stargaze-mainnet-seed.autostake.com:26986',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:13756',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '96e0040d44a2f0b59d2a07e128369363d8535b67',
        address: 'seed-stargaze.ibs.team:16669',
        provider: 'Inter Blockchain Services',
      },
      {
        id: 'df949a46ae6529ae1e09b034b49716468d5cc7e9',
        address: 'seeds.stakerhouse.com:10356',
        provider: 'StakerHouse',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'stargaze-mainnet-peer.autostake.com:26986',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '344c62c700a59de6137ccd6cade56721cb1e9777',
        address: 'stargaze.ramuchi.tech:26656',
        provider: 'ramuchi.tech',
      },
      {
        id: 'f132374f5e70088e855c81df98dd8bb28ea7491d',
        address: '65.21.91.99:46656',
        provider: 'Staketab',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.stargaze-apis.com/',
        provider: 'Stargaze Foundation',
      },
      {
        address: 'https://rpc-stargaze.pupmos.network',
        provider: 'PUPMØS',
      },
      {
        address: 'https://rpc-stargaze.ezstaking.dev',
        provider: 'EZStaking.io',
      },
      {
        address: 'https://stargaze-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-stargaze-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://stargaze.c29r3.xyz:443/rpc/',
        provider: 'c29r3',
      },
      {
        address: 'https://rpc-stargaze.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://stargaze-rpc.ibs.team',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://rpc-stargaze.d-stake.xyz',
        provider: 'D-stake',
      },
      {
        address: 'https://rpc.stargaze.silentvalidator.com/',
        provider: 'silent',
      },
      {
        address: 'https://rpc-stargaze.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://stargaze-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://stargaze-rpc.ramuchi.tech',
        provider: 'ramuchi.tech',
      },
      {
        address: 'https://stargaze-rpc.staketab.org:443',
        provider: 'Staketab',
      },
      {
        address: 'https://stargaze-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://stargaze-rpc.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://stargaze-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://stargaze-rpc.reece.sh:443',
        provider: 'Reecepbcups',
      },
      {
        address: 'https://rpc.stargaze.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://stargaze-rpc.kleomedes.network',
        provider: 'Kleomedes',
      },
    ],
    rest: [
      {
        address: 'https://rest.stargaze-apis.com/',
        provider: 'Stargaze Foundation',
      },
      {
        address: 'https://api-stargaze.pupmos.network',
        provider: 'PUPMØS',
      },
      {
        address: 'https://api-stargaze.ezstaking.dev',
        provider: 'EZStaking.io',
      },
      {
        address: 'https://api-stargaze-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://stargaze.c29r3.xyz:443/api/',
        provider: 'c29r3',
      },
      {
        address: 'https://stargaze-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://stargaze-api.ibs.team',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://api-stargaze.d-stake.xyz',
        provider: 'D-stake',
      },
      {
        address: 'https://api-stargaze.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://api.stargaze.silentvalidator.com/',
        provider: 'silent',
      },
      {
        address: 'https://stargaze-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://lcd-stargaze.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://stargaze-api.ramuchi.tech',
        provider: 'ramuchi.tech',
      },
      {
        address: 'https://stargaze-rest.staketab.org',
        provider: 'Staketab',
      },
      {
        address: 'https://stargaze-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://stargaze-rest.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://stargaze-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://stargaze-api.reece.sh:443',
        provider: 'Reecepbcups',
      },
      {
        address: 'https://lcd.stargaze.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://stargaze-api.kleomedes.network',
        provider: 'Kleomedes',
      },
    ],
    grpc: [
      {
        address: 'grpc-stargaze-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'stargaze-grpc.polkachu.com:13790',
        provider: 'Polkachu',
      },
      {
        address: 'stargaze-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc-stargaze.cosmos-spaces.cloud:1150',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://stargaze-grpc.ramuchi.tech:9090',
        provider: 'ramuchi.tech',
      },
      {
        address: 'services.staketab.com:9092',
        provider: 'Staketab',
      },
      {
        address: 'stargaze-grpc.w3coins.io:13790',
        provider: 'w3coins',
      },
      {
        address: 'stargaze-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'stargaze-grpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
      {
        address: 'https://grpc.stargaze.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/stargaze',
      tx_page: 'https://ezstaking.app/stargaze/txs/${txHash}',
      account_page: 'https://ezstaking.app/stargaze/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stargaze/',
      tx_page: 'https://www.mintscan.io/stargaze/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/stargaze/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/stargaze',
      tx_page: 'https://ping.pub/stargaze/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stargaze',
      tx_page: 'https://atomscan.com/stargaze/transactions/${txHash}',
      account_page: 'https://atomscan.com/stargaze/accounts/${accountAddress}',
    },
    {
      kind: 'Starscan',
      url: 'https://starscan.net/',
      tx_page: 'https://starscan.net/stargaze-1/tx/${txHash}',
      account_page: 'https://starscan.net/stargaze-1/address/${accountAddress}',
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/stargaze',
      tx_page: 'https://mainnet.whispernode.com/stargaze/tx/${txHash}',
      account_page:
        'https://mainnet.whispernode.com/stargaze/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
    },
  ],
};

export const stargazeAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'stargaze',
  assets: [
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom: 'ustars',
          exponent: 0,
        },
        {
          denom: 'stars',
          exponent: 6,
        },
      ],
      base: 'ustars',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
      },
      coingecko_id: 'stargaze',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
        },
      ],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone',
      },
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [
        {
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
          exponent: 0,
        },
        {
          denom: 'strdst',
          exponent: 6,
        },
      ],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg',
        },
      ],
    },
    {
      description: 'The native meme token of stargaze.',
      denom_units: [
        {
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
          exponent: 0,
        },
        {
          denom: 'GAZE',
          exponent: 6,
        },
      ],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
      name: 'Gaze GAZE',
      display: 'GAZE',
      symbol: 'GAZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg',
        },
      ],
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [
        {
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
          exponent: 0,
        },
        {
          denom: 'BRNCH',
          exponent: 6,
        },
      ],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg',
        },
      ],
    },
    {
      description: 'Social token for the ohhVAULT.',
      denom_units: [
        {
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
          exponent: 0,
        },
        {
          denom: 'OHH',
          exponent: 6,
        },
      ],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
      name: 'ohhVAULT ohh',
      display: 'OHH',
      symbol: 'OHH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg',
        },
      ],
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [
        {
          denom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
          exponent: 0,
        },
        {
          denom: 'sneaky',
          exponent: 6,
        },
      ],
      base: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg',
        },
      ],
    },
    {
      description: 'LAB - Everything is an Experiment',
      extended_description:
        'LAB - Everything is an Experiment\n\nUse 10 $LAB tokens to mint 1 Mad Scientist NFT on Backbone Labs Osmosis Launchpad. You will then be able to trade your NFTs on the marketplace. You can also choose to hold onto your $LAB tokens as unrevealed NFTs and trade it.\n\n Fair Launch: The event was marked by the absence of whitelists (WLs), no bots and no lock, ensuring an equitable opportunity for all interested parties.\n\nPreparation for the Launch: Participants were given a 52.91-hour window to deposit $OSMO into a pool on Streamswap.\n\nThe Swap Process: After the initial deposit period, $OSMO was converted into $LAB tokens over an additional hour, allowing for a smooth transition and fair distribution.',
      denom_units: [
        {
          denom:
            'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
          exponent: 0,
        },
        {
          denom: 'LAB',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
      name: 'LAB',
      display: 'LAB',
      symbol: 'LAB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png',
      },
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
            channel_id: 'channel-75',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
          },
        },
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png',
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
          },
        },
      ],
    },
    {
      description: "CDT - Membrane's solvency preserving stablecoin",
      denom_units: [
        {
          denom:
            'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
          exponent: 0,
        },
        {
          denom: 'CDT',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
      name: 'CDT',
      display: 'CDT',
      symbol: 'CDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            channel_id: 'channel-75',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
          },
        },
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg',
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
          },
        },
      ],
    },
    {
      description: "MBRN - Membrane's network token",
      denom_units: [
        {
          denom:
            'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
          exponent: 0,
        },
        {
          denom: 'MBRN',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
      name: 'MBRN',
      display: 'MBRN',
      symbol: 'MBRN',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            channel_id: 'channel-75',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
          },
        },
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg',
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
          },
        },
      ],
    },
  ],
};

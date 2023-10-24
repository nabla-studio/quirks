import type { Chain, AssetLists } from '../types';

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
    recommended_version: 'v12.0.0',
    compatible_versions: ['v12.0.0'],
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
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
  },
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
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'stargaze-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'stargaze-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: '604f4baaa30cd3f50d080bf45806d222c7fadc94',
        address: 'seeds.whispernode.com:13756',
        provider: 'WhisperNode🤐',
      },
      {
        id: '96e0040d44a2f0b59d2a07e128369363d8535b67',
        address: 'seed-stargaze.ibs.team:16658',
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
        provider: 'WhisperNode🤐',
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
        address: 'https://stargaze-rpc.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
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
        provider: 'WhisperNode🤐',
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
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
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
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'stargaze-grpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/stargaze',
      tx_page: 'https://app.ezstaking.io/stargaze/txs/${txHash}',
      account_page:
        'https://app.ezstaking.io/stargaze/account/${accountAddress}',
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
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
    },
  ],
};

export const stargazeAssetList: AssetLists = {
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
      },
      coingecko_id: 'stargaze',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
        },
      ],
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg',
        },
      ],
    },
  ],
};

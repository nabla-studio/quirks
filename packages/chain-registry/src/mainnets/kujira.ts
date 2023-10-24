import type { Chain, AssetLists } from '../types';

export const kujira: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kujira',
  chain_id: 'kaiyo-1',
  pretty_name: 'Kujira',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://kujira.app/',
  bech32_prefix: 'kujira',
  daemon_name: 'kujirad',
  node_home: '$HOME/.kujira',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ukuji',
        fixed_min_gas_price: 0.00119,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ukuji',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/Team-Kujira/core',
    recommended_version: 'v0.9.0',
    compatible_versions: ['v0.9.0'],
    cosmos_sdk_version: 'v0.47.5',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2',
    },
    ics_enabled: ['ics20-1'],
    genesis: {
      genesis_url:
        'https://github.com/Team-Kujira/networks/raw/master/mainnet/kaiyo-1.json',
    },
    versions: [
      {
        name: 'v0.8.4',
        tag: 'v0.8.4',
        height: 9226200,
        proposal: 302,
        recommended_version: 'v0.8.4-mainnet',
        compatible_versions: ['v0.8.4', 'v0.8.4-mainnet'],
        cosmos_sdk_version: '0.46.11',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
        },
        ics_enabled: ['ics20-1'],
        next_version_name: 'v0.8.7',
      },
      {
        name: 'v0.8.7',
        proposal: -1,
        recommended_version: 'v0.8.7',
        compatible_versions: ['v0.8.7'],
        next_version_name: 'v0.9.0',
      },
      {
        name: 'v0.9.0',
        proposal: 483,
        height: 14783000,
        recommended_version: 'v0.9.0',
        compatible_versions: ['v0.9.0'],
        cosmos_sdk_version: 'v0.47.5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        next_version_name: '',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:11856',
        provider: 'Polkachu',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:11856',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: '322abfd7c0bcdf8a3d98ccb46ae2572bae0e8301',
        address: 'seed-kujira.starsquid.io:15602',
        provider: 'Starsquid',
      },
      {
        id: '824fa337b806bd48ce9505d74ba3e5adea80da93',
        address: 'seeds.goldenratiostaking.net:1628',
        provider: 'Golden Ratio Staking',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'kujira-mainnet-seed.autostake.com:26796',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'kujira.rpc.kjnodes.com:11359',
        provider: 'kjnodes',
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'kujira-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'kujira-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:11856',
        provider: 'WhisperNode🤐',
      },
      {
        id: '654ba97f74254965a80c0fac0f277f6f6e5506b6',
        address: 'seed-node.mms.team:29656',
        provider: 'MMS',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'kujira-mainnet-peer.autostake.com:26796',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'c1a740841a6dc0b56730e975b1a4aa2d8c73b204',
        address: 'peer-kujira.mms.team:29656',
        provider: 'MMS',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-kujira.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://rpc.kaiyo.kujira.setten.io',
        provider: 'setten.io',
      },
      {
        address: 'https://kujira-rpc.polkachu.com',
        provider: 'polkachu',
      },
      {
        address: 'https://rpc-kujira.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://kujira-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc.kujira.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://rpc-kujira-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://kujira-rpc.wildsage.io',
        provider: 'WildSage Labs',
      },
      {
        address: 'https://kujira-rpc.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://rpc-kujira.starsquid.io',
        provider: 'Starsquid',
      },
      {
        address: 'https://kujira.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://kuji-rpc.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://rpc-kujira.goldenratiostaking.net',
        provider: 'Golden Ratio Staking',
      },
      {
        address: 'https://rpc-kujira.huginn.tech',
        provider: 'Huginn',
      },
      {
        address: 'https://kujira-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rpc.kujira.rektdao.club',
        provider: 'rektDAO',
      },
      {
        address: 'https://kujira-rpc.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://kujira-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://rpc-kujira.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://kujira-rpc.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc-kujira.rorcualnodes.com',
        provider: 'Rorcual',
      },
    ],
    rest: [
      {
        address: 'https://lcd-kujira.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://rest-kujira.goldenratiostaking.net',
        provider: 'Golden Ratio Staking',
      },
      {
        address: 'https://lcd.kaiyo.kujira.setten.io',
        provider: 'setten.io',
      },
      {
        address: 'https://kujira-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://kujira-api.polkachu.com/',
        provider: 'polkachu',
      },
      {
        address: 'https://rest-kujira.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://api-kujira-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://kujira-lcd.wildsage.io/',
        provider: 'WildSage Labs',
      },
      {
        address: 'https://kujira-api.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://api-kujira.starsquid.io',
        provider: 'Starsquid',
      },
      {
        address: 'https://kujira.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://kuji-api.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://kujira-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://api.kujira.rektdao.club',
        provider: 'rektDAO',
      },
      {
        address: 'https://kujira-api.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://kujira-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://api-kujira.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://kujira-rest.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'kujira.grpcui.chaintools.host:443',
        provider: 'ChainTools',
      },
      {
        address: 'grpc-kujira-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'kujira-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'kujira-grpc.polkachu.com:11890',
        provider: 'Polkachu',
      },
      {
        address: 'kujira-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'kujira.grpc.kjnodes.com:11390',
        provider: 'kjnodes',
      },
      {
        address: 'kujira-grpc.w3coins.io:11890',
        provider: 'w3coins',
      },
      {
        address: 'grpc-kujira.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'kujira-grpc.publicnode.com:443',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'kujira',
      url: 'https://finder.kujira.app',
      tx_page: 'https://finder.kujira.app/kaiyo-1/tx/${txHash}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://kujira.explorers.guru',
      tx_page: 'https://kujira.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/kujira',
      tx_page: 'https://atomscan.com/kujira/transactions/${txHash}',
      account_page: 'https://atomscan.com/kujira/accounts/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
    },
  ],
};

export const kujiraAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'kujira',
  assets: [
    {
      description:
        'The native staking and governance token of the Kujira chain.',
      denom_units: [
        {
          denom: 'ukuji',
          exponent: 0,
        },
        {
          denom: 'kuji',
          exponent: 6,
        },
      ],
      base: 'ukuji',
      name: 'Kuji',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
        },
      ],
    },
    {
      description:
        'The native over-collateralized stablecoin from the Kujira chain.',
      denom_units: [
        {
          denom:
            'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
          exponent: 0,
        },
        {
          denom: 'usk',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
      name: 'USK',
      display: 'USK',
      symbol: 'USK',
      coingecko_id: 'usk',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg',
        },
      ],
    },
    {
      description: 'ampKUJI',
      denom_units: [
        {
          denom:
            'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
          exponent: 0,
        },
        {
          denom: 'ampKUJI',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
      name: 'ampKUJI',
      display: 'ampKUJI',
      symbol: 'ampKUJI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg',
        },
      ],
    },
    {
      description: 'MantaDAO Governance Token',
      denom_units: [
        {
          denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
          exponent: 0,
        },
        {
          denom: 'mnta',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
      name: 'MNTA',
      display: 'MNTA',
      symbol: 'MNTA',
      coingecko_id: 'mantadao',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg',
        },
      ],
    },
    {
      description: 'The content house of Kujira',
      denom_units: [
        {
          denom: 'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink',
          exponent: 0,
        },
        {
          denom: 'wink',
          exponent: 6,
        },
      ],
      base: 'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink',
      name: 'WINK',
      display: 'wink',
      symbol: 'WINK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg',
        },
      ],
    },
    {
      description: 'Blend Token',
      denom_units: [
        {
          denom: 'factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend',
          exponent: 0,
        },
        {
          denom: 'blend',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend',
      name: 'BLEND',
      display: 'blend',
      symbol: 'BLEND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg',
        },
      ],
    },
    {
      description: 'Tether USDt on Kujira',
      denom_units: [
        {
          denom:
            'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-116',
          },
          chain: {
            channel_id: 'channel-95',
            path: 'transfer/channel-95',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
          },
        },
      ],
    },
  ],
};

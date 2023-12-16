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
    recommended_version: 'v0.9.1',
    compatible_versions: ['v0.9.1'],
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
        next_version_name: 'v0.9.1',
      },
      {
        name: 'v0.9.1',
        proposal: 488,
        height: 15205000,
        recommended_version: 'v0.9.1',
        compatible_versions: ['v0.9.1'],
        cosmos_sdk_version: 'v0.47.5',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        next_version_name: '',
      },
    ],
  },
  description:
    'A decentralized ecosystem for protocols, builders and web3 users seeking sustainable FinTech.',
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
        provider: 'AutoStake ⚡️ 0% fee',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'kujira.rpc.kjnodes.com:11359',
        provider: 'kjnodes',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
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
        provider: 'AutoStake ⚡️ 0% fee',
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
        address: 'https://kujira-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake ⚡️ 0% fee',
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
        address: 'https://kujira-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://kujira.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸',
      },
    ],
    rest: [
      {
        address: 'https://lcd-kujira.whispernode.com:443',
        provider: 'WhisperNode🤐',
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
        provider: 'AutoStake ⚡️ 0% fee',
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
        provider: 'Allnodes ⚡️ Nodes & Staking',
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
        provider: 'AutoStake ⚡️ 0% fee',
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
        provider: 'Allnodes ⚡️ Nodes & Staking',
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
      name: 'Kujira',
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
      display: 'usk',
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
      description: "Quark's auto-compounding KUJI derivative",
      denom_units: [
        {
          denom:
            'factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt',
          exponent: 0,
        },
        {
          denom: 'qcKUJI',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt',
      name: 'qcKUJI',
      display: 'qcKUJI',
      symbol: 'qcKUJI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg',
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
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      coingecko_id: 'mantadao',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg',
        },
      ],
    },
    {
      description: "Quark's auto-compounding MNTA derivative",
      denom_units: [
        {
          denom:
            'factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt',
          exponent: 0,
        },
        {
          denom: 'qcMNTA',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt',
      name: 'qcMNTA',
      display: 'qcMNTA',
      symbol: 'qcMNTA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg',
        },
      ],
    },
    {
      description: 'ERIS Liquid Staked MNTA',
      denom_units: [
        {
          denom:
            'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA',
          exponent: 0,
        },
        {
          denom: 'ampMNTA',
          exponent: 6,
        },
      ],
      base: 'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA',
      name: 'ERIS Amplified MNTA',
      display: 'ampMNTA',
      symbol: 'ampMNTA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg',
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
      name: 'Tether USD',
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
            path: 'transfer/channel-95/erc20/tether/usdt',
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
      description: 'The staking and governance token of Fuzion',
      denom_units: [
        {
          denom: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn',
          exponent: 0,
        },
        {
          denom: 'fuzn',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn',
      name: 'Fuzion',
      display: 'fuzn',
      symbol: 'FUZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg',
        },
      ],
    },
    {
      description: 'The receipt token of Fuzion',
      denom_units: [
        {
          denom: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn',
          exponent: 0,
        },
        {
          denom: 'rfuzn',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn',
      name: 'Fuzion Receipt',
      display: 'rfuzn',
      symbol: 'rFUZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png',
        },
      ],
    },
    {
      description: 'The yield token of Fuzion',
      denom_units: [
        {
          denom: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn',
          exponent: 0,
        },
        {
          denom: 'yfuzn',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn',
      name: 'Fuzion Yield',
      display: 'yfuzn',
      symbol: 'yFUZN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg',
        },
      ],
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denom_units: [
        {
          denom: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
          exponent: 0,
        },
        {
          denom: 'nstk',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg',
        },
      ],
    },
    {
      description: 'Local Money',
      denom_units: [
        {
          denom: 'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local',
          exponent: 0,
        },
        {
          denom: 'local',
          exponent: 6,
        },
      ],
      base: 'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local',
      name: 'LOCAL',
      display: 'local',
      symbol: 'LOCAL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png',
        },
      ],
    },
  ],
};

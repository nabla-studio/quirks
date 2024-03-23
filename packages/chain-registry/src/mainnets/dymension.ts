import type { Chain, AssetLists, ChainVersions } from '../types';

export const dymension: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dymension',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://portal.dymension.xyz',
  pretty_name: 'Dymension Hub',
  chain_id: 'dymension_1100-1',
  bech32_prefix: 'dym',
  slip44: 60,
  node_home: '$HOME/.dymension',
  daemon_name: 'dymd',
  fees: {
    fee_tokens: [
      {
        denom: 'adym',
        low_gas_price: 5000000000,
        average_gas_price: 5000000000,
        high_gas_price: 20000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'adym',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
  },
  description:
    'Dymension is a network of easily deployable and lightning fast modular blockchains called RollApps.',
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
    },
  ],
  codebase: {
    git_repo: 'https://github.com/dymensionxyz/dymension',
    recommended_version: 'v3.0.0',
    compatible_versions: ['v3.0.0'],
    genesis: {
      genesis_url:
        'https://github.com/dymensionxyz/networks/raw/main/mainnet/dymension/genesis.json',
    },
  },
  peers: {
    seeds: [
      {
        id: '45bffa41836302b06310af67f012500cc0d1da31',
        address: 'rpc.dymension.nodestake.org:666',
        provider: 'NodeStake',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'dymension-mainnet-seed.autostake.com:27086',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:20556',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'dymension.rpc.kjnodes.com:14659',
        provider: 'kjnodes.com 🦄',
      },
      {
        id: '193262e32a9d7d3fffe14073160cabc4cdfef26b',
        address: 'dymension-rpc.stakeandrelax.net:20556',
        provider: 'Stake&Relax 🦥',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:20556',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '10ed1e176d874c8bb3c7c065685d2da6a4b86475',
        address: 'seed-dymension.ibs.team:16676',
        provider: 'Inter Blockchain Services',
      },
      {
        id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
        address: 'seed.dymension.node75.org:10956',
        provider: 'Pro-Nodes75',
      },
    ],
    persistent_peers: [
      {
        id: '792be7c7645f0547b786e89cd6ec3ba267d11613',
        address: '141.94.64.81:26656',
      },
      {
        id: 'e0d84deab2d0fd85f447c5c417fecbbdba584be0',
        address: 'dymension-m.peer.stavr.tech:17086',
      },
      {
        id: 'be3c133f618a8326f2f8da6f803750292454ebdc',
        address: '45.76.38.67:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'dymension-mainnet-peer.autostake.com:27086',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        id: 'babe3d67aa5570e65953a5253eaf36c7ebfbbb44',
        address: '82.223.0.229:26646',
        provider: 'Cumulo',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://dym-m-rpc.agoranodes.com',
        provider: 'AgoraNodes',
      },
      {
        address: 'https://rpc.dymension.nodestake.org',
        provider: 'NodeStake',
      },
      {
        address: 'http://dymension.mainnet.rpc.noders.team:42657',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://dymension-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        address: 'https://dymension-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://dymension-rpc.kynraze.com',
        provider: 'Kynraze',
      },
      {
        address: 'https://m-dymension.rpc.utsa.tech',
        provider: 'lesnik | UTSA',
      },
      {
        address: 'https://rpc-dymension.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://dym.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://dym.rpc-archive.m.stavr.tech:443',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc.dymension.hexnodes.co',
        provider: 'Hexnodes',
      },
      {
        address: 'https://dymension.rpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄',
      },
      {
        address: 'https://dymension-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://dymension-rpc.takeshi.team',
        provider: 'TAKESHI',
      },
      {
        address: 'https://dymension-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc.dymension.silentvalidator.com:443',
        provider: 'silent',
      },
      {
        address: 'https://rpc-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dymension/trpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://dymension-rpc.enigma-validator.com',
        provider: 'Enigma',
      },
      {
        address: 'https://dymension-rpc.ibs.team',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://dymension.nodejumper.io:443',
        provider: 'NODEJUMPER',
      },
      {
        address: 'https://rpc-dymension.hoodrun.io:443',
        provider: 'HoodRun',
      },
      {
        address: 'https://dymension.0xwave.com:2053',
        provider: 'Wave',
      },
      {
        address: 'https://archive.rpc.dym.cumulo.com.es:443',
        provider: 'Cumulo',
      },
      {
        address: 'https://rpc.dymension.posthuman.digital',
        provider: 'posthuman',
      },
      {
        address: 'https://rpc.dymension.node75.org',
        provider: 'Pro-Nodes75',
      },
      {
        address: 'https://rpc.dymension.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    rest: [
      {
        address: 'https://dym-m-api.agoranodes.com',
        provider: 'AgoraNodes',
      },
      {
        address: 'https://api.dymension.nodestake.org',
        provider: 'NodeStake',
      },
      {
        address: 'http://dymension.mainnet.api.noders.team:42317',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://dymension-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        address: 'https://dymension-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://dymension-api.kynraze.com',
        provider: 'Kynraze',
      },
      {
        address: 'https://m-dymension.api.utsa.tech',
        provider: 'lesnik | UTSA',
      },
      {
        address: 'https://api-dymension.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://dymension.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://dym.api-archive.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://lcd.dymension.hexnodes.co',
        provider: 'Hexnodes',
      },
      {
        address: 'https://dymension.api.kjnodes.com:443',
        provider: 'kjnodes.com 🦄',
      },
      {
        address: 'https://dymension-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://dymension-api.takeshi.team',
        provider: 'TAKESHI',
      },
      {
        address: 'https://dymension-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://api.dymension.silentvalidator.com:443',
        provider: 'silent',
      },
      {
        address: 'https://api-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/dymension/crpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://dymension-lcd.enigma-validator.com',
        provider: 'Enigma',
      },
      {
        address: 'https://dymension-api.ibs.team',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://dymension.nodejumper.io:1317',
        provider: 'NODEJUMPER',
      },
      {
        address: 'https://lcd-dymension.hoodrun.io',
        provider: 'HoodRun',
      },
      {
        address: 'https://dymension.0xwave.com',
        provider: 'Wave',
      },
      {
        address: 'https://api.dym.cumulo.com.es',
        provider: 'Cumulo',
      },
      {
        address: 'https://rest.dymension.posthuman.digital',
        provider: 'posthuman',
      },
      {
        address: 'https://api.dymension.node75.org',
        provider: 'Pro-Nodes75',
      },
      {
        address: 'https://lcd.dymension.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    grpc: [
      {
        address: 'https://dym-m-grpc.agoranodes.com',
        provider: 'AgoraNodes',
      },
      {
        address: 'grpc.dymension.nodestake.org:443',
        provider: 'NodeStake',
      },
      {
        address: 'dymension-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        address: 'dymension.mainnet.grpc.noders.team:42090',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://dymension-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'dymension-grpc.kynraze.com:77',
        provider: 'Kynraze',
      },
      {
        address: 'https://grpc-dymension.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'dymension.grpc.m.stavr.tech:7119',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'dymension.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄',
      },
      {
        address: 'http://dymension-grpc.stakeandrelax.net:20590',
        provider: 'Stake&Relax 🦥',
      },
      {
        address: 'https://dymension-grpc.takeshi.team',
        provider: 'TAKESHI',
      },
      {
        address: 'dymension-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc.dymension.silentvalidator.com:443',
        provider: 'silent',
      },
      {
        address: 'https://grpc-dymension.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'dymension.nodejumper.io:9090',
        provider: 'NODEJUMPER',
      },
      {
        address: 'grpc-dymension.hoodrun.io:9095',
        provider: 'HoodRun',
      },
      {
        address: 'https://dymension.0xwave.com:2083',
        provider: 'Wave',
      },
      {
        address: 'grpc.dym.cumulo.com.es:443',
        provider: 'Cumulo',
      },
      {
        address: 'https://grpc.dymension.posthuman.digital',
        provider: 'posthuman',
      },
      {
        address: 'https://grpc.dymension.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://dym-m-json.agoranodes.com',
        provider: 'AgoraNodes',
      },
      {
        address: 'https://dymension-jsonrpc.ibs.team',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://evm-dymension.hoodrun.io:8547',
        provider: 'HoodRun',
      },
      {
        address: 'https://dymension.0xwave.com:2087',
        provider: 'Wave',
      },
      {
        address: 'https://evm-rpc.dym.cumulo.com.es:443',
        provider: 'Cumulo',
      },
      {
        address: 'https://evm-rpc.dymension.node75.org',
        provider: 'Pro-Nodes75',
      },
      {
        address: 'https://evm-rpc.dymension.posthuman.digital',
        provider: 'posthuman',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/dymension',
      tx_page: 'https://ezstaking.app/dymension/txs/${txHash}',
      account_page: 'https://ezstaking.app/dymension/account/${accountAddress}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/dymension',
      tx_page: 'https://explorer.nodestake.org/dymension/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.org/dymension/account/${accountAddress}',
    },
    {
      kind: 'Kynraze',
      url: 'https://explorer.kynraze.com/dymension',
      tx_page: 'https://explorer.kynraze.com/dymension/tx/${txHash}',
      account_page:
        'https://explorer.kynraze.com/dymension/account/${accountAddress}',
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/dymension',
      tx_page: 'https://explorer.ist/dymension/tx/${txHash}',
      account_page: 'https://explorer.ist/dymension/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Dymension-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Dymension-Mainnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Dymension-Mainnet/account/${accountAddress}',
    },
    {
      kind: 'HoodScan',
      url: 'https://hoodscan.io/dymension',
      tx_page: 'https://hoodscan.io/dymension/transactions/${txHash}',
      account_page: 'https://hoodscan.io/dymension/accounts/${accountAddress}',
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/dymension',
      tx_page: 'https://explorer.posthuman.digital/dymension/tx/${txHash}',
      account_page:
        'https://explorer.posthuman.digital/dymension/account/${accountAddress}',
    },
  ],
};

export const dymensionAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dymension',
  assets: [
    {
      description:
        'The native governance and staking token of the Dymension Hub',
      denom_units: [
        {
          denom: 'adym',
          exponent: 0,
        },
        {
          denom: 'dym',
          exponent: 18,
        },
      ],
      base: 'adym',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
      },
      coingecko_id: 'dymension',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
        },
      ],
      socials: {
        webiste: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension',
      },
    },
  ],
};

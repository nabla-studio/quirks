import type { Chain, AssetList, Versions } from '../types';

export const kyve: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kyve',
  chain_id: 'kyve-1',
  pretty_name: 'KYVE',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'kyve',
  daemon_name: 'kyved',
  node_home: '$HOME/.kyve',
  website: 'https://www.kyve.network/',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ukyve',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.02,
        average_gas_price: 0.03,
        high_gas_price: 0.06,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ukyve',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/KYVENetwork/chain',
    recommended_version: 'v1.4.0',
    compatible_versions: ['v1.4.0'],
    cosmos_sdk_version: 'v0.47.6-kyve-rc0',
    ibc_go_version: 'v7.3.0',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2',
    },
    binaries: {
      'linux/amd64':
        'https://github.com/KYVENetwork/chain/releases/download/v1.4.0/kyved_mainnet_linux_amd64.tar.gz',
      'linux/arm64':
        'https://github.com/KYVENetwork/chain/releases/download/v1.4.0/kyved_mainnet_linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/KYVENetwork/chain/releases/download/v1.4.0/kyved_mainnet_darwin_amd64.tar.gz',
      'darwin/arm64':
        'https://github.com/KYVENetwork/chain/releases/download/v1.4.0/kyved_mainnet_darwin_arm64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/KYVENetwork/networks/main/kyve-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        next_version_name: 'v1.1.0',
      },
      {
        name: 'v1.1.0',
        height: 826000,
        proposal: 3,
        recommended_version: 'v1.1.0',
        compatible_versions: ['v1.1.0'],
        next_version_name: 'v1.2.0',
      },
      {
        name: 'v1.2.0',
        height: 1135000,
        proposal: 4,
        recommended_version: 'v1.2.2',
        compatible_versions: ['v1.2.1', '1.2.2'],
        next_version_name: 'v1.3.0',
      },
      {
        name: 'v1.3.0',
        proposal: 8,
        height: 2061100,
        recommended_version: 'v1.3.0',
        compatible_versions: ['v1.3.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/KYVENetwork/chain/releases/download/v1.3.0/kyved_mainnet_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/KYVENetwork/chain/releases/download/v1.3.0/kyved_mainnet_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/KYVENetwork/chain/releases/download/v1.3.0/kyved_mainnet_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/KYVENetwork/chain/releases/download/v1.3.0/kyved_mainnet_darwin_arm64.tar.gz',
        },
        next_version_name: 'v1.4.0',
      },
      {
        name: 'v1.4.0',
        proposal: 21,
        height: 3908000,
        recommended_version: 'v1.4.0',
        compatible_versions: ['v1.4.0'],
        cosmos_sdk_version: 'v0.47.6-kyve-rc0',
        ibc_go_version: 'v7.3.0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/KYVENetwork/chain/releases/download/v1.4.0/kyved_mainnet_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/KYVENetwork/chain/releases/download/v1.4.0/kyved_mainnet_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/KYVENetwork/chain/releases/download/v1.4.0/kyved_mainnet_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/KYVENetwork/chain/releases/download/v1.4.0/kyved_mainnet_darwin_arm64.tar.gz',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg',
  },
  description:
    'Revolutionizing data reliability in the Web3 space, KYVE Network provides fast and easy tooling for data validation, immutability, and retrieval, ensuring trustless data for seamless scalability and eliminating data risks and roadblocks.',
  peers: {
    seeds: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:11056',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'cec848e7d4c5a7ae305b27cda133d213435c110f',
        address: 'seed-kyve.ibs.team:16664',
        provider: 'Inter Blockchain Services',
      },
      {
        id: '63aef665906f1ac532f6266bb2067510ca35a9a2',
        address: 'seed-node.mms.team:41656',
        provider: 'MMS',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'kyve-mainnet-seed.autostake.com:27106',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    persistent_peers: [
      {
        id: 'fae8cd5f04406e64484a7a8b6719eacbb861c094',
        address: '44.241.103.199:26656',
        provider: 'kyve',
      },
      {
        id: '146d27829fd240e0e4672700514e9835cb6fdd98',
        address: '34.212.201.1:26656',
        provider: 'kyve',
      },
      {
        id: '23f2668adb6d7387c8bc7fdc8a9d10430a092df7',
        address: 'kyve.peer.stavr.tech:12356',
        provider: '🔥STAVR🔥',
      },
      {
        id: '25da6253fc8740893277630461eb34c2e4daf545',
        address: '3.76.244.30:26656',
        provider: 'kyve',
      },
      {
        id: 'b950b6b08f7a6d5c3e068fcd263802b336ffe047',
        address: '18.198.182.214:26656',
        provider: 'kyve',
      },
      {
        id: 'ae3f75549c0fe53bae94909fb7477eb308dfe989',
        address: '88.99.104.180:46656',
        provider: 'Stake-Take',
      },
      {
        id: '00917221debc335189292cce406cd20a8a44e603',
        address: 'peer-kyve.mms.team:27656',
        provider: 'MMS',
      },
      {
        id: '73ef1c0f9bc77fd925decf7fa41f22a35b5dc76d',
        address: 'kyve.declab.pro:26618',
        provider: 'Decloud Nodes Lab',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'kyve-mainnet-peer.autostake.com:27106',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-eu-1.kyve.network',
        provider: 'kyve',
      },
      {
        address: 'https://rpc-kyve.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://kyve-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'http://kyve.rpc.m.stavr.tech:12357',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-kyve.imperator.co',
        provider: 'Imperator.co',
      },
      {
        address: 'https://kyve-rpc.ibs.team',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://rpc.kyve.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://kyve.rpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://rpc-kyve.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://kyve.declab.pro:26616',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://kyve-rpc.noders.services',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://kyve_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
      {
        address: 'https://kyve-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    rest: [
      {
        address: 'https://api-eu-1.kyve.network',
        provider: 'kyve',
      },
      {
        address: 'https://kyve-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rest-kyve.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://lcd-kyve.imperator.co',
        provider: 'Imperator.co',
      },
      {
        address: 'https://kyve.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://kyve-api.ibs.team',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://api.kyve.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://kyve.api.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://api-kyve.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://kyve.declab.pro:443',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://kyve-api.noders.services',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://kyve_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
      {
        address: 'https://kyve-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.kyve.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://kyve-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://grpc-kyve.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'http://kyve.grpc.stavr.tech:7106',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://kyve.grpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'grpc-kyve.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'https://kyve.declab.pro:9011',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'kyve-grpc.noders.services:15090',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'kyve-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/kyve',
      tx_page: 'https://ezstaking.app/kyve/txs/${txHash}',
      account_page: 'https://ezstaking.app/kyve/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/kyve',
      tx_page: 'https://www.mintscan.io/kyve/txs/${txHash}',
      account_page: 'https://www.mintscan.io/kyve/account/${accountAddress}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/kyve',
      tx_page: 'https://explorer.nodestake.top/kyve/txs/${txHash}',
      account_page:
        'https://explorer.nodestake.top/kyve/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Kyve',
      tx_page: 'https://explorer.stavr.tech/Kyve/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Kyve/account/${accountAddress}',
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/kyve',
      tx_page: 'https://explorer.stake-take.com/kyve/txs/${txHash}',
      account_page:
        'https://explorer.stake-take.com/kyve/account/${accountAddress}',
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Kyve',
      tx_page: 'https://explorer.declab.pro/Kyve/txs/${txHash}',
      account_page:
        'https://explorer.declab.pro/Kyve/account/${accountAddress}',
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/kyve',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/kyve/txs/${txHash}',
      account_page:
        'https://explorer.whenmoonwhenlambo.money/kyve/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve.svg',
    },
  ],
};

export const kyveAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'kyve',
  assets: [
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [
        {
          denom: 'ukyve',
          exponent: 0,
        },
        {
          denom: 'kyve',
          exponent: 6,
        },
      ],
      base: 'ukyve',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
      },
      coingecko_id: 'kyve-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
        },
      ],
      socials: {
        website: 'https://www.kyve.network/',
        twitter: 'https://twitter.com/KYVENetwork',
      },
    },
  ],
};

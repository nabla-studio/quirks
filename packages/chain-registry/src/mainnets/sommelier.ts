import type { Chain, AssetLists, ChainVersions } from '../types';

export const sommelier: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sommelier',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://sommelier.finance/',
  pretty_name: 'Sommelier',
  chain_id: 'sommelier-3',
  bech32_prefix: 'somm',
  daemon_name: 'sommelier',
  node_home: '$HOME/.sommelier',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usomm',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'usomm',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/PeggyJV/sommelier',
    recommended_version: 'v6.0.0',
    compatible_versions: ['v6.0.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_amd64.tar.gz',
      'linux/arm64':
        'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_amd64.tar.gz',
      'darwin/arm64':
        'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_windows_amd64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/PeggyJV/sommelier/main/contrib/mainnet/sommelier-2/genesis.json',
    },
    versions: [
      {
        name: 'v5.0.0',
        recommended_version: 'v5.0.0',
        compatible_versions: ['v5.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_windows_amd64.tar.gz',
        },
      },
      {
        name: 'v6.0.0',
        recommended_version: 'v6.0.0',
        compatible_versions: ['v6.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_windows_amd64.tar.gz',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
  },
  description:
    'Automated vaults find best-in-class yields while mitigating risk.',
  peers: {
    seeds: [
      {
        id: 'c94fd60124e3656df54ff965d178e36c760c195d',
        address: '65.108.57.224:26656',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:14156',
        provider: 'Polkachu',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:14156',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'sommelier-mainnet-seed.autostake.com:27176',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    persistent_peers: [
      {
        id: '6533beebc826f84376e503bbc3265b07b26b9ad5',
        address: 'sommelier.standardcryptovc.com:26656',
        provider: 'standardcrypto',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'sommelier-mainnet-peer.autostake.com:27176',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://sommelier-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-sommelier.pupmos.network',
        provider: 'PUPMØS',
      },
      {
        address: 'https://sommelier-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://sommelier-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rpc-sommelier.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://somm-rpc.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://sommelier-rpc.w3coins.io',
        provider: 'w3coins',
      },
    ],
    rest: [
      {
        address: 'https://api-sommelier.pupmos.network',
        provider: 'PUPMØS',
      },
      {
        address: 'https://sommelier-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://sommelier-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api-sommelier.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://sommelier-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://somm-api.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://sommelier-api.w3coins.io',
        provider: 'w3coins',
      },
    ],
    grpc: [
      {
        address: 'sommelier-grpc.polkachu.com:14190',
        provider: 'Polkachu',
      },
      {
        address: 'sommelier-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'sommelier-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc-sommelier.cosmos-spaces.cloud:2310',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://grpc.sommelier.nodexcapital.com',
        provider: '⚡NodeX Validator⚡',
      },
      {
        address: 'sommelier-grpc.w3coins.io:14190',
        provider: 'w3coins',
      },
    ],
  },
  explorers: [
    {
      kind: 'sommscan',
      url: 'https://sommscan.io',
      tx_page: 'https://sommscan.io',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sommelier',
      tx_page: 'https://www.mintscan.io/sommelier/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/sommelier/accounts/${accountAddress}',
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/sommelier',
      tx_page: 'https://explorer.nodexcapital.com/sommelier/tx/${txHash}',
      account_page:
        'https://explorer.nodexcapital.com/sommelier/account/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sommelier',
      tx_page: 'https://atomscan.com/sommelier/transactions/${txHash}',
      account_page: 'https://atomscan.com/sommelier/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
    },
  ],
};

export const sommelierAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sommelier',
  assets: [
    {
      description:
        'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom: 'usomm',
          exponent: 0,
          aliases: ['microsomm'],
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm'],
        },
        {
          denom: 'somm',
          exponent: 6,
        },
      ],
      base: 'usomm',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
      },
      coingecko_id: 'sommelier',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
        },
      ],
    },
  ],
};

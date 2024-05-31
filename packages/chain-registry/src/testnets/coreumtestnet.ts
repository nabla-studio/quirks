import type { Chain, AssetList, Versions } from '../types';

export const coreumtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'coreumtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.coreum.com',
  pretty_name: 'Coreum',
  chain_id: 'coreum-testnet-1',
  bech32_prefix: 'testcore',
  daemon_name: 'cored',
  node_home: '$HOME/.core/coreum-testnet-1',
  key_algos: ['secp256k1'],
  slip44: 990,
  fees: {
    fee_tokens: [
      {
        denom: 'utestcore',
        fixed_min_gas_price: 0.03125,
        low_gas_price: 0.0625,
        average_gas_price: 0.0625,
        high_gas_price: 62.5,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'utestcore',
      },
    ],
    lock_duration: {
      time: '168h',
    },
  },
  codebase: {
    git_repo: 'https://github.com/CoreumFoundation/coreum',
    recommended_version: 'v3.0.3',
    compatible_versions: ['v3.0.3'],
    binaries: {
      'linux/amd64':
        'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-amd64?checksum=sha256:1719a32e6f8e8813d00cd86e1d8d02e893324d4f59fa7a1b8cedc5836140ecef',
      'linux/arm64':
        'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-arm64?checksum=sha256:cfbbad6803c0327407e4dd222a108505e6ff9e294d7c86e34b6b895b96b61bbd',
    },
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.30',
    cosmwasm_enabled: true,
    genesis: {
      name: 'v0',
      genesis_url:
        'https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-testnet-1.json',
    },
    versions: [
      {
        name: 'v0',
        tag: 'v0.1.1',
        height: 0,
        recommended_version: 'v0.1.1',
        compatible_versions: ['v0.1.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-amd64?checksum=sha256:21db2ea1b31d9e8202e0d11f2bee0de78d2e677c07fd75a7db1f3958bf49146c',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v0.1.1/cored-linux-arm64?checksum=sha256:7d383d1a1bc9185677b25c05ebbe01cf20dd6c779ca4301065359ea6e3bcefa3',
        },
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        next_version_name: 'v1',
      },
      {
        name: 'v1',
        tag: 'v1.0.0',
        proposal: 3,
        height: 3233700,
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-amd64?checksum=sha256:34098ad7586bda364b1b2e7c4569cbcefb630cd4ed7c8f68eb5bced834082c57',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v1.0.0/cored-linux-arm64?checksum=sha256:3ced97f06607f0cdaf77e7ff0b36b2011d101c660684e4f3e54c2ac6bf344dd6',
        },
        next_version_name: 'v2',
      },
      {
        name: 'v2',
        tag: 'v2.0.0',
        proposal: 13,
        height: 8728400,
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.0/cored-linux-amd64?checksum=sha256:7848022a3a35723ecef02eb835fbf139989aace8d780186018dbcdebdc57d694',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.0/cored-linux-arm64?checksum=sha256:c082eeebbc206633f1b71ef9c16a7f390f5ea5b27ce06c735ed7a632f38b5891',
        },
        next_version_name: 'v2patch1',
      },
      {
        name: 'v2patch1',
        tag: 'v2.0.2',
        proposal: 15,
        height: 9122200,
        recommended_version: 'v2.0.2',
        compatible_versions: ['v2.0.2'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.2/cored-linux-amd64?checksum=sha256:3facf55f7ff795719f68b9bcf76ea08262bc7c9e9cd735c660257ba73678250e',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v2.0.2/cored-linux-arm64?checksum=sha256:35e261eb3b87c833c30174e6b8667a6155f5962441275d443157e209bbb0bf0d',
        },
        next_version_name: 'v3',
      },
      {
        name: 'v3',
        tag: 'v3.0.0',
        proposal: 23,
        height: 14980000,
        recommended_version: 'v3.0.0',
        compatible_versions: ['v3.0.0'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37',
        },
        cosmwasm_version: '0.44',
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.0/cored-linux-amd64?checksum=sha256:0198b5bf7a32b0e76c57f5fe30bcb27bdc69ba91cd6e4fc8c416bea3a1251a24',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.0/cored-linux-arm64?checksum=sha256:192eaf4fcc49c3ea3339d12f53c905420575d00d605048e526a994a0c4368768',
        },
        next_version_name: 'v3patch1',
      },
      {
        name: 'v3patch1',
        tag: 'v3.0.1',
        proposal: 24,
        height: 15385000,
        recommended_version: 'v3.0.1',
        compatible_versions: ['v3.0.1'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37',
        },
        cosmwasm_version: '0.44',
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.1/cored-linux-amd64?checksum=sha256:4d533ed578bb3dddf0142095bf62c63c2f25edf8248df1e8f88b35361be180c4',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.1/cored-linux-arm64?checksum=sha256:83b88f8323061d5dd6aa08895a7ebde7491ccf6360538151e811b7edac9dd1c5',
        },
        next_version_name: 'v3patch2',
      },
      {
        name: 'v3patch2',
        tag: 'v3.0.3',
        proposal: 25,
        height: 15684437,
        recommended_version: 'v3.0.3',
        compatible_versions: ['v3.0.3'],
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.37',
        },
        cosmwasm_version: '0.44',
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-amd64?checksum=sha256:1719a32e6f8e8813d00cd86e1d8d02e893324d4f59fa7a1b8cedc5836140ecef',
          'linux/arm64':
            'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-arm64?checksum=sha256:cfbbad6803c0327407e4dd222a108505e6ff9e294d7c86e34b6b895b96b61bbd',
        },
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      theme: {
        primary_color_hex: '#25d695',
      },
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
  },
  peers: {
    seeds: [
      {
        id: '64391878009b8804d90fda13805e45041f492155',
        address: 'seed-sirius.testnet-1.coreum.dev:26656',
        provider: 'Coreum Foundation',
      },
      {
        id: '53f2367d8f8291af8e3b6ca60efded0675ff6314',
        address: 'seed-antares.testnet-1.coreum.dev:26656',
        provider: 'Coreum Foundation',
      },
      {
        id: '496ac0ba20188f70f41e0a814dfd4d9a617338f8',
        address: 'coreum-testnet-seed.ibs.team:16660',
        provider: 'Inter Blockchain Services',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://full-node.testnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-eris.testnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://coreum-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
    grpc: [
      {
        address: 'https://full-node.testnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation',
      },
      {
        address: 'https://full-node-eris.testnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation',
      },
    ],
    rest: [
      {
        address: 'https://full-node.testnet-1.coreum.dev:1317',
        provider: 'Coreum',
      },
      {
        address: 'https://coreum-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
  },
  explorers: [
    {
      kind: 'Coreum',
      url: 'https://explorer.testnet-1.coreum.dev/coreum',
      tx_page:
        'https://explorer.testnet-1.coreum.dev/coreum/transactions/${txHash}',
      account_page:
        'https://explorer.testnet-1.coreum.dev/coreum/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/coreum-testnet',
      tx_page: 'https://www.mintscan.io/coreum-testnet/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/coreum-testnet/accounts/${accountAddress}',
    },
  ],
  keywords: ['dex', 'staking', 'wasm', 'assets', 'nft'],
};

export const coreumtestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'coreumtestnet',
  assets: [
    {
      description: 'The native token of Coreum',
      denom_units: [
        {
          denom: 'utestcore',
          exponent: 0,
        },
        {
          denom: 'testcore',
          exponent: 6,
        },
      ],
      base: 'utestcore',
      name: 'Coreum',
      display: 'testcore',
      symbol: 'TESTCORE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
      },
      coingecko_id: 'coreum',
      keywords: ['dex', 'staking', 'wasm', 'assets', 'nft', 'XRPL'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
        },
      ],
    },
  ],
};

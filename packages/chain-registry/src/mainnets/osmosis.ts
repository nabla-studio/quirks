import type { Chain, AssetLists, ChainVersions } from '../types';

export const osmosisVersions: ChainVersions = {
  $schema: '../versions.schema.json',
  chain_name: 'osmosis',
  versions: [
    {
      name: 'v3',
      tag: 'v3.1.0',
      height: 0,
      binaries: {
        'darwin/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v3.1.0/osmosisd-3.1.0-darwin-amd64?checksum=sha256:a532f25ae754d2573f6a3c91ba59496ddb9f6766ccf6f69f408f6e1597144a74',
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v3.1.0/osmosisd-3.1.0-linux-amd64?checksum=sha256:6a73d75e9c75ea402c13edc8c5c4ed08e26c5d8e517d540a9ca8b7e7afa67f79',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v3.1.0/osmosisd-3.1.0-linux-arm64?checksum=sha256:893f8a9786ae76d4217260201cd94ab67010f68d98b9676a9b31c0a5e68d1eae',
      },
      next_version_name: 'v4',
    },
    {
      name: 'v4',
      tag: 'v4.2.0',
      height: 1314500,
      binaries: {
        'darwin/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v4.2.0/osmosisd-4.2.0-darwin-amd64?checksum=sha256:eee08350b223dd06a2aa16aab44aa51eb116f6267924ee1e788ca28fb54fe02d',
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v4.2.0/osmosisd-4.2.0-linux-amd64?checksum=sha256:a11c61a737983d176f23ce83fa5ff985000ce8d5107d738ee6fa7d59b8dd3053',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v4.2.0/osmosisd-4.2.0-linux-arm64?checksum=sha256:41260be15e874fbc6cc49757d9fe3d4e459634729e2b745923e508e9cb26f837',
      },
      previous_version_name: 'v3',
      next_version_name: 'v5',
    },
    {
      name: 'v5',
      tag: 'v6.4.0',
      height: 2383300,
      binaries: {
        'darwin/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v6.4.0/osmosisd-6.4.0-darwin-amd64?checksum=sha256:735c7828b0bc311381f4c18081fa648f849df03aeccf173425cc52a634e3c7d8',
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v6.4.0/osmosisd-6.4.0-linux-amd64?checksum=sha256:e4017da5d1a0a3b37b4f6936ba7ef16f39972ae25f95feae43e506f14933cf94',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v6.4.0/osmosisd-6.4.0-linux-arm64?checksum=sha256:a101bb3feb0419293a3ecee17d732a312bf9e864a829905ed509c65b5944040b',
      },
      previous_version_name: 'v4',
      next_version_name: 'v7',
    },
    {
      name: 'v7',
      tag: 'v8.0.0',
      height: 3401000,
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v8.0.0/osmosisd-8.0.0-linux-amd64?checksum=sha256:4559ffe7d1e83b1519c2d45a709d35a89b51f8b35f8bba3b58aef92e667e254c',
      },
      previous_version_name: 'v5',
      next_version_name: 'v9',
    },
    {
      name: 'v9',
      tag: 'v10.1.1',
      height: 4707300,
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v10.1.1/osmosisd-10.1.1-linux-amd64?checksum=sha256:aeae58f8b0be86d5e6e3aec1a8774eab4947207c88c7d4f309c46da98f6694e8',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v10.1.1/osmosisd-10.1.1-linux-arm64?checksum=sha256:d2c672ffa9782687f91d8d03bd23fdf8bd2fbe8b79c9cfcf8e9d302a1238a12c',
      },
      previous_version_name: 'v7',
      next_version_name: 'v11',
    },
    {
      name: 'v11',
      tag: 'v11.0.1',
      height: 5432450,
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v11.0.1/osmosisd-11.0.1-linux-amd64?checksum=sha256:41b8fd2345a5e5b77ee5ed9b9ec5370d94bd1b1aa0d4ac2ac0ab02ee98ddd0d8',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v11.0.1/osmosisd-11.0.1-linux-arm64?checksum=sha256:267776170495ecaa831238ea8994f8790a379663c9ae47a2e93e5beceafd8e1d',
      },
      previous_version_name: 'v9',
      next_version_name: 'v12',
    },
    {
      name: 'v12',
      tag: 'v12.3.0',
      height: 6246000,
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v12.3.0/osmosisd-12.3.0-linux-amd64?checksum=sha256:958210c919d13c281896fa9773c323c5534f0fa46d74807154f737609a00db70',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v12.3.0/osmosisd-12.3.0-linux-arm64?checksum=sha256:a931618c8a839c30e5cecfd2a88055cda1d68cc68557fe3303fe14e2de3bef8f',
      },
      previous_version_name: 'v11',
      next_version_name: 'v13',
    },
    {
      name: 'v13',
      tag: 'v13.1.2',
      height: 7241500,
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v13.1.2/osmosisd-13.1.2-linux-amd64?checksum=sha256:67ed53046667c72ec6bfe962bcb4d6b122610876b3adf75fb7820ce52c34872d',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v13.1.2/osmosisd-13.1.2-linux-arm64?checksum=sha256:ad35c2a8d55852fa28187a55bdeb983494c07923f2a8a9f4479fb044d8d62bd9',
      },
      previous_version_name: 'v12',
      next_version_name: 'v14',
    },
    {
      name: 'v14',
      tag: 'v14.0.1',
      height: 7937500,
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v14.0.1/osmosisd-14.0.1-linux-amd64?checksum=sha256:2cc4172bcf000f0f06b30b16864d875a8de2ee12df994a593dfd52a506851bce',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v14.0.1/osmosisd-14.0.1-linux-arm64?checksum=sha256:9a44c17d239c8d9afd19d0ff0bd14ca883fb9e9fbf69aff18c2607ffa6bff378',
      },
      previous_version_name: 'v13',
      next_version_name: 'v15',
    },
    {
      name: 'v15',
      tag: 'v15.2.0',
      height: 8732500,
      recommended_version: 'v15.2.0',
      compatible_versions: ['v15.2.0', 'v15.1.2', 'v15.0.0'],
      cosmos_sdk_version: '0.46.10',
      consensus: {
        type: 'tendermint',
        version: '0.34.24',
      },
      cosmwasm_version: '0.30',
      cosmwasm_enabled: true,
      ibc_go_version: '4.3.1',
      ics_enabled: ['ics20-1'],
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v15.2.0/osmosisd-15.2.0-linux-amd64?checksum=sha256:3aab2f2668cb5a713d5770e46a777ef01c433753378702d9ae941aa2d1ee5618',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v15.2.0/osmosisd-15.2.0-linux-arm64?checksum=sha256:e158d30707a0ea51482237f99676223e81ce5a353966a5c83791d2662a930f35',
      },
      previous_version_name: 'v14',
      next_version_name: 'v16',
    },
    {
      name: 'v16',
      tag: 'v16.1.1',
      height: 10517000,
      recommended_version: 'v16.1.1',
      compatible_versions: ['v16.1.0', 'v16.1.1'],
      cosmos_sdk_version:
        'osmosis-labs/cosmos-sdk@0.45.0-rc1.0.20230703010110-ed4eb883f2a6',
      consensus: {
        type: 'tendermint',
        version: 'informalsystems/tendermint@0.34.24',
      },
      cosmwasm_version: 'osmosis-labs/wasmd@0.31.0-osmo-v16',
      cosmwasm_enabled: true,
      ibc_go_version: '4.3.1',
      ics_enabled: ['ics20-1'],
      binaries: {
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v16.1.1/osmosisd-16.1.1-linux-arm64?checksum=sha256:b96ff1f4c9b4abecb1b38998b1a1f891cfed2cc8078ab64914b151183c0c199b',
        'darwin/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v16.1.1/osmosisd-16.1.1-darwin-arm64?checksum=sha256:c743da4d3632a2bc3ea0ce784bbd13383492a4a34d53295eb2c96987bacf8e8c',
        'darwin/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v16.1.1/osmosisd-16.1.1-darwin-amd64?checksum=sha256:d856ebda9c31f052d10a78443967a93374f2033292f0afdb6434b82b4ed79790',
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v16.1.1/osmosisd-16.1.1-linux-amd64?checksum=sha256:f838618633c1d42f593dc33d26b25842f5900961e987fc08570bb81a062e311d',
      },
      previous_version_name: 'v15',
    },
  ],
};

export const osmosis: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'osmosis',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://osmosis.zone/',
  update_link:
    'https://raw.githubusercontent.com/osmosis-labs/osmosis/main/chain.schema.json',
  pretty_name: 'Osmosis',
  chain_id: 'osmosis-1',
  bech32_prefix: 'osmo',
  daemon_name: 'osmosisd',
  node_home: '$HOME/.osmosisd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uosmo',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uosmo',
      },
    ],
    lock_duration: {
      time: '1209600s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/osmosis-labs/osmosis',
    recommended_version: 'v20.5.0',
    compatible_versions: ['v20.5.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/osmosis-labs/osmosis/releases/download/v20.5.0/osmosisd-20.5.0-linux-amd64',
      'linux/arm64':
        'https://github.com/osmosis-labs/osmosis/releases/download/v20.5.0/osmosisd-20.5.0-linux-arm64',
    },
    cosmos_sdk_version:
      'osmosis-labs/cosmos-sdk@0.45.0-rc1.0.20230922030206-734f99fba785',
    consensus: {
      type: 'tendermint',
      version: '0.38.0',
    },
    cosmwasm_version: 'osmosis-labs/wasmd@0.31.0-osmo-v16',
    cosmwasm_enabled: true,
    ibc_go_version: '4.5.1',
    ics_enabled: ['ics20-1'],
    genesis: {
      name: 'v3',
      genesis_url:
        'https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json',
    },
    versions: [
      {
        name: 'v3',
        tag: 'v3.1.0',
        height: 0,
        binaries: {
          'darwin/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v3.1.0/osmosisd-3.1.0-darwin-amd64?checksum=sha256:a532f25ae754d2573f6a3c91ba59496ddb9f6766ccf6f69f408f6e1597144a74',
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v3.1.0/osmosisd-3.1.0-linux-amd64?checksum=sha256:6a73d75e9c75ea402c13edc8c5c4ed08e26c5d8e517d540a9ca8b7e7afa67f79',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v3.1.0/osmosisd-3.1.0-linux-arm64?checksum=sha256:893f8a9786ae76d4217260201cd94ab67010f68d98b9676a9b31c0a5e68d1eae',
        },
        next_version_name: 'v4',
      },
      {
        name: 'v4',
        tag: 'v4.2.0',
        height: 1314500,
        binaries: {
          'darwin/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v4.2.0/osmosisd-4.2.0-darwin-amd64?checksum=sha256:eee08350b223dd06a2aa16aab44aa51eb116f6267924ee1e788ca28fb54fe02d',
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v4.2.0/osmosisd-4.2.0-linux-amd64?checksum=sha256:a11c61a737983d176f23ce83fa5ff985000ce8d5107d738ee6fa7d59b8dd3053',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v4.2.0/osmosisd-4.2.0-linux-arm64?checksum=sha256:41260be15e874fbc6cc49757d9fe3d4e459634729e2b745923e508e9cb26f837',
        },
        next_version_name: 'v5',
      },
      {
        name: 'v5',
        tag: 'v6.4.0',
        height: 2383300,
        binaries: {
          'darwin/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v6.4.0/osmosisd-6.4.0-darwin-amd64?checksum=sha256:735c7828b0bc311381f4c18081fa648f849df03aeccf173425cc52a634e3c7d8',
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v6.4.0/osmosisd-6.4.0-linux-amd64?checksum=sha256:e4017da5d1a0a3b37b4f6936ba7ef16f39972ae25f95feae43e506f14933cf94',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v6.4.0/osmosisd-6.4.0-linux-arm64?checksum=sha256:a101bb3feb0419293a3ecee17d732a312bf9e864a829905ed509c65b5944040b',
        },
        next_version_name: 'v7',
      },
      {
        name: 'v7',
        tag: 'v8.0.0',
        height: 3401000,
        binaries: {
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v8.0.0/osmosisd-8.0.0-linux-amd64?checksum=sha256:4559ffe7d1e83b1519c2d45a709d35a89b51f8b35f8bba3b58aef92e667e254c',
        },
        next_version_name: 'v9',
      },
      {
        name: 'v9',
        tag: 'v10.1.1',
        height: 4707300,
        binaries: {
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v10.1.1/osmosisd-10.1.1-linux-amd64?checksum=sha256:aeae58f8b0be86d5e6e3aec1a8774eab4947207c88c7d4f309c46da98f6694e8',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v10.1.1/osmosisd-10.1.1-linux-arm64?checksum=sha256:d2c672ffa9782687f91d8d03bd23fdf8bd2fbe8b79c9cfcf8e9d302a1238a12c',
        },
        next_version_name: 'v11',
      },
      {
        name: 'v11',
        tag: 'v11.0.1',
        height: 5432450,
        binaries: {
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v11.0.1/osmosisd-11.0.1-linux-amd64?checksum=sha256:41b8fd2345a5e5b77ee5ed9b9ec5370d94bd1b1aa0d4ac2ac0ab02ee98ddd0d8',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v11.0.1/osmosisd-11.0.1-linux-arm64?checksum=sha256:267776170495ecaa831238ea8994f8790a379663c9ae47a2e93e5beceafd8e1d',
        },
        next_version_name: 'v12',
      },
      {
        name: 'v12',
        tag: 'v12.3.0',
        height: 6246000,
        binaries: {
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v12.3.0/osmosisd-12.3.0-linux-amd64?checksum=sha256:958210c919d13c281896fa9773c323c5534f0fa46d74807154f737609a00db70',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v12.3.0/osmosisd-12.3.0-linux-arm64?checksum=sha256:a931618c8a839c30e5cecfd2a88055cda1d68cc68557fe3303fe14e2de3bef8f',
        },
        next_version_name: 'v13',
      },
      {
        name: 'v13',
        tag: 'v13.1.2',
        height: 7241500,
        binaries: {
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v13.1.2/osmosisd-13.1.2-linux-amd64?checksum=sha256:67ed53046667c72ec6bfe962bcb4d6b122610876b3adf75fb7820ce52c34872d',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v13.1.2/osmosisd-13.1.2-linux-arm64?checksum=sha256:ad35c2a8d55852fa28187a55bdeb983494c07923f2a8a9f4479fb044d8d62bd9',
        },
        next_version_name: 'v14',
      },
      {
        name: 'v14',
        tag: 'v14.0.1',
        height: 7937500,
        binaries: {
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v14.0.1/osmosisd-14.0.1-linux-amd64?checksum=sha256:2cc4172bcf000f0f06b30b16864d875a8de2ee12df994a593dfd52a506851bce',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v14.0.1/osmosisd-14.0.1-linux-arm64?checksum=sha256:9a44c17d239c8d9afd19d0ff0bd14ca883fb9e9fbf69aff18c2607ffa6bff378',
        },
        next_version_name: 'v15',
      },
      {
        name: 'v15',
        tag: 'v15.2.0',
        height: 8732500,
        recommended_version: 'v15.2.0',
        compatible_versions: ['v15.2.0', 'v15.1.2', 'v15.0.0'],
        cosmos_sdk_version: '0.46.10',
        consensus: {
          type: 'tendermint',
          version: '0.34.24',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.1',
        ics_enabled: ['ics20-1'],
        binaries: {
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v15.2.0/osmosisd-15.2.0-linux-amd64?checksum=sha256:3aab2f2668cb5a713d5770e46a777ef01c433753378702d9ae941aa2d1ee5618',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v15.2.0/osmosisd-15.2.0-linux-arm64?checksum=sha256:e158d30707a0ea51482237f99676223e81ce5a353966a5c83791d2662a930f35',
        },
        next_version_name: 'v16',
      },
      {
        name: 'v16',
        tag: 'v16.1.1',
        height: 10517000,
        recommended_version: 'v16.1.1',
        compatible_versions: ['v16.1.0', 'v16.1.1'],
        cosmos_sdk_version:
          'osmosis-labs/cosmos-sdk@0.45.0-rc1.0.20230703010110-ed4eb883f2a6',
        consensus: {
          type: 'tendermint',
          version: 'informalsystems/tendermint@0.34.24',
        },
        cosmwasm_version: 'osmosis-labs/wasmd@0.31.0-osmo-v16',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.1',
        ics_enabled: ['ics20-1'],
        binaries: {
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v16.1.1/osmosisd-16.1.1-linux-arm64?checksum=sha256:b96ff1f4c9b4abecb1b38998b1a1f891cfed2cc8078ab64914b151183c0c199b',
          'darwin/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v16.1.1/osmosisd-16.1.1-darwin-arm64?checksum=sha256:c743da4d3632a2bc3ea0ce784bbd13383492a4a34d53295eb2c96987bacf8e8c',
          'darwin/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v16.1.1/osmosisd-16.1.1-darwin-amd64?checksum=sha256:d856ebda9c31f052d10a78443967a93374f2033292f0afdb6434b82b4ed79790',
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v16.1.1/osmosisd-16.1.1-linux-amd64?checksum=sha256:f838618633c1d42f593dc33d26b25842f5900961e987fc08570bb81a062e311d',
        },
        next_version_name: 'v17',
      },
      {
        name: 'v17',
        tag: 'v17.0.0',
        height: 11126100,
        recommended_version: 'v17.0.0',
        compatible_versions: ['v17.0.0'],
        cosmos_sdk_version:
          'osmosis-labs/cosmos-sdk@v0.45.0-rc1.0.20230703010110-ed4eb883f2a6',
        consensus: {
          type: 'tendermint',
          version: 'informalsystems/tendermint@0.34.24',
        },
        cosmwasm_version: 'osmosis-labs/wasmd@0.31.0-osmo-v16',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.1',
        ics_enabled: ['ics20-1'],
        binaries: {
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v17.0.0/osmosisd-17.0.0-linux-arm64?checksum=sha256:d5eeab6a15e2acd7e24e7caf4fe3336c35367ff376da6299d404defd09ce52f9',
          'darwin/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v17.0.0/osmosisd-17.0.0-darwin-arm64?checksum=sha256:5ca1b120a62ba473e7772682d89db949ae67aa10dc9bf4629b0022a95e7ff1df',
          'darwin/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v17.0.0/osmosisd-17.0.0-darwin-amd64?checksum=sha256:b5e4deb0d659eeeaee791dab765433bdb8d6a7e37d909628e0f9becb7d1f154b',
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v17.0.0/osmosisd-17.0.0-linux-amd64?checksum=sha256:d7fe62ae33cf2f0b48a17eb8b02644dadd9924f15861ed622cd90cb1a038135b',
        },
        next_version_name: 'v18',
      },
      {
        name: 'v18',
        tag: 'v18.0.0',
        height: 11155350,
        recommended_version: 'v18.0.0',
        compatible_versions: ['v18.0.0'],
        cosmos_sdk_version:
          'osmosis-labs/cosmos-sdk@v0.45.0-rc1.0.20230703010110-ed4eb883f2a6',
        consensus: {
          type: 'tendermint',
          version: 'informalsystems/tendermint@0.34.24',
        },
        cosmwasm_version: 'osmosis-labs/wasmd@0.31.0-osmo-v16',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.1',
        ics_enabled: ['ics20-1'],
        binaries: {
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v18.0.0/osmosisd-18.0.0-linux-arm64?checksum=sha256:4331f9a318f6dd2f012c36f6ef19af8378fd1e9bc85c751e3f56f7018176ed58',
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v18.0.0/osmosisd-18.0.0-linux-amd64?checksum=sha256:9a98a57946e936e7380ae897a205b4e18a188332e91ca84a1f62c21cbb437845',
        },
        next_version_name: 'v19',
      },
      {
        name: 'v19',
        tag: 'v19.2.0',
        height: 11317300,
        recommended_version: 'v19.2.0',
        compatible_versions: ['v19.2.0', 'v19.1.0', 'v19.0.0'],
        cosmos_sdk_version:
          'osmosis-labs/cosmos-sdk@0.45.0-rc1.0.20230927020814-2854ac001f06',
        consensus: {
          type: 'tendermint',
          version: 'informalsystems/tendermint@0.34.24',
        },
        cosmwasm_version: 'osmosis-labs/wasmd@0.31.0-osmo-v16',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.1',
        ics_enabled: ['ics20-1'],
        binaries: {
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v19.2.0/osmosisd-19.2.0-linux-amd64?checksum=sha256:723ff1c5349eb3c039c3dc5f55895bbde2e1499fe7c0a96960cc6fadeec814c4',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v19.2.0/osmosisd-19.2.0-linux-arm64?checksum=sha256:d933b893d537422164a25bf161d7f269a59ea26d37f398cdb7dd575a9ec33ed2',
        },
        next_version_name: 'v20',
      },
      {
        name: 'v20',
        tag: 'v20.5.0',
        height: 12028900,
        recommended_version: 'v20.5.0',
        compatible_versions: ['v20.5.0'],
        cosmos_sdk_version:
          'osmosis-labs/cosmos-sdk@0.45.0-rc1.0.20230922030206-734f99fba785',
        consensus: {
          type: 'tendermint',
          version: '0.38.0',
        },
        cosmwasm_version: 'osmosis-labs/wasmd@0.31.0-osmo-v16',
        cosmwasm_enabled: true,
        ibc_go_version: '4.5.1',
        ics_enabled: ['ics20-1'],
        binaries: {
          'linux/amd64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v20.5.0/osmosisd-20.5.0-linux-amd64?checksum=sha256:f9ff6176e32499f22b20288c71dbc802556eb5399baef23de164fe6158a55a69',
          'linux/arm64':
            'https://github.com/osmosis-labs/osmosis/releases/download/v20.5.0/osmosisd-20.5.0-linux-arm64?checksum=sha256:99359257ff81d21b55b685924a74473d532cbc5af196a672a784bf13dad06d26',
        },
      },
    ],
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png',
      theme: {
        primary_color_hex: '#231D4B',
      },
      layout: 'logo',
      text_position: 'right',
    },
    {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
      layout: 'logomark',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png',
  },
  description:
    'Osmosis (OSMO) is the premier DEX and cross-chain DeFi hub within the Cosmos ecosystem, a network of over 50 sovereign, interoperable blockchains seamlessly connected through the Inter-Blockchain Communication Protocol (IBC). Pioneering in its approach, Osmosis offers a dynamic trading and liquidity provision experience, integrating non-IBC assets from other ecosystems, including Ethereum, Solana, Avalanche, and Polkadot. Initially adopting Balancer-style pools, Osmosis now also features a concentrated liquidity model that is orders of magnitude more capital efficient, meaning that significantly less liquidity is required to handle the same amount of trading volume with minimal slippage.\n\nAs a true appchain, Osmosis has greater control over the full blockchain stack than traditional smart contract DEXs, which must follow the code of the parent chain that it is built on. This fine-grained control has enabled, for example, the development of Superfluid Staking, an extension of Proof of Stake that allows assets at the application layer to be staked to secure the chain. The customizability of appchains also allows implementing features like the Protocol Revenue module, which enables Osmosis to conduct on-chain arbitrage on behalf of OSMO stakers, balancing prices across pools while generating real yield revenue from this volume. Additionally, as a sovereign appchain, Osmosis governance can vote on upgrades to the protocol. One example of this was the introduction of a Taker Fee, which switched on the collection of exchange fees to generate diverse yield from Osmosis volume and distribute it to OSMO stakers.\n\nOsmosis is bringing the full centralized exchange experience to the decentralized world by building a cross-chain native DEX and trading suite that connects all chains over IBC, including Ethereum and Bitcoin. To reach this goal, Osmosis hosts an ever-expanding suite of DeFi applications aimed at providing a one-stop experience that includes lending, credit, margin, DeFi strategy vaults, power perps, fiat on-ramps, NFTs, stablecoins, and more — all of the functionalities that centralized exchange offer and more, in the trust-minimized environment of decentralized finance.',
  peers: {
    seeds: [
      {
        id: 'f515a8599b40f0e84dfad935ba414674ab11a668',
        address: 'osmosis.blockpane.com:26656',
        provider: 'blockpane',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:12556',
        provider: 'Polkachu',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:12556',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'osmosis-mainnet-seed.autostake.com:26716',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '3cc024d1c760c9cd96e6413abaf3b36a8bdca58e',
        address: 'seeds.goldenratiostaking.net:1630',
        provider: 'Golden Ratio Staking',
      },
      {
        id: 'e891d42c31064fb7e0d99839536164473c4905c2',
        address: 'seed-osmosis.freshstaking.com:31656',
        provider: 'FreshSTAKING',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:12556',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '38ab18cb2ea1dfeb6232b429e1508f56b6ae5031',
        address: 'seed-osmosis-01.stakeflow.io:65535',
        provider: 'Stakeflow',
      },
      {
        id: '954ab3a0551b592b654b1554af8fc8746ed7b362',
        address: 'seed-node.mms.team:31656',
        provider: 'MMS',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '2cb8dd6195c65458e3c18505bb70ce2ff624f85c',
        address: 'seed.osmosis.validatus.com:2000',
        provider: 'Validatus',
      },
    ],
    persistent_peers: [
      {
        id: '4d9ac3510d9f5cfc975a28eb2a7b8da866f7bc47',
        address: '37.187.38.191:26656',
        provider: 'stakelab',
      },
      {
        id: '2f9c16151400d8516b0f58c030b3595be20b804c',
        address: '37.120.245.167:26656',
        provider: 'syncnode',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'osmosis-mainnet-peer.autostake.com:26716',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'e891d42c31064fb7e0d99839536164473c4905c2',
        address: 'seed-osmosis.freshstaking.com:31656',
        provider: 'FreshSTAKING',
      },
      {
        id: '38ab18cb2ea1dfeb6232b429e1508f56b6ae5031',
        address: 'peer-osmosis-01.stakeflow.io:65535',
        provider: 'Stakeflow',
      },
      {
        id: '6f1d92857e39a6f26a3a914f807064824c255939',
        address: '65.21.91.99:16956',
        provider: 'Staketab',
      },
      {
        id: '50d0865decf5657eaf8e50e51bd9d8ce5f927f6c',
        address: 'peer-osmosis.mms.team:56102',
        provider: 'MMS',
      },
      {
        id: 'b95edbc3337a6fdd672cd6af2790c0e9ade2c4dd',
        address: '65.108.195.213:41656',
        provider: 'StakeTown',
      },
      {
        id: '10539f7c0e3ab233cf0deec9930aa8b660aeeabf',
        address: 'osmosis-mainnet.peers.l0vd.com:12656',
        provider: 'L0vd.com ❤️',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.osmosis.zone/',
        provider: 'Osmosis Foundation',
      },
      {
        address: 'https://rpc-osmosis.blockapsis.com',
        provider: 'chainapsis',
      },
      {
        address: 'https://osmosis-rpc.onivalidator.com',
        provider: 'Oni Validator ⛩️',
      },
      {
        address: 'https://osmosis-rpc.quickapi.com:443',
        provider: 'Chainlayer',
      },
      {
        address: 'https://rpc-osmosis.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://osmosis-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-osmosis.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://rpc-osmosis.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://osmosis-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-osmosis-ia.cosmosia.notional.ventures',
        provider: 'Notional',
      },
      {
        address: 'https://osmosis.rpc.stakin-nodes.com',
        provider: 'Stakin',
      },
      {
        address: 'https://osmosis-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://osmosis.api.onfinality.io/public',
        provider: 'OnFinality',
      },
      {
        address: 'https://rpc-osmosis-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://osmosis-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://rpc-osmosis.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://osmosis-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/osmosis/trpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'http://rpc-osmosis.freshstaking.com:31657',
        provider: 'FreshSTAKING',
      },
      {
        address: 'https://osmosis-rpc.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://osmosis-mainnet.rpc.l0vd.com:443',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'https://osmosis-rpc.reece.sh',
        provider: 'Reecepbcups',
      },
      {
        address: 'https://rpc.osmosis.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'https://rpc.osmosis.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    rest: [
      {
        address: 'https://lcd.osmosis.zone/',
        provider: 'Osmosis Foundation',
      },
      {
        address: 'https://osmosis-lcd.quickapi.com:443',
        provider: 'Chainlayer',
      },
      {
        address: 'https://lcd-osmosis.blockapsis.com',
        provider: 'chainapsis',
      },
      {
        address: 'https://osmosis-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rest-osmosis.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://api-osmosis-ia.cosmosia.notional.ventures',
        provider: 'Notional',
      },
      {
        address: 'https://api-osmosis.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://osmosis-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://osmosis.rest.stakin-nodes.com',
        provider: 'Stakin',
      },
      {
        address: 'https://osmosis-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://api-osmosis-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://osmosis-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://lcd-osmosis.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://api-osmosis.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://osmosis-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/osmosis/crpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://osmosis-api.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://osmosis-mainnet.api.l0vd.com:443',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'https://osmosis-api.reece.sh',
        provider: 'Reecepbcups',
      },
      {
        address: 'https://api.osmosis.validatus.com:443',
        provider: 'Validatus',
      },
      {
        address: 'https://lcd.osmosis.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    grpc: [
      {
        address: 'osmosis-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'grpc-osmosis-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'osmosis.grpc.stakin-nodes.com:443',
        provider: 'Stakin',
      },
      {
        address: 'osmosis-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc-osmosis.cosmos-spaces.cloud:1130',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'grpc-osmosis-01.stakeflow.io:6754',
        provider: 'Stakeflow',
      },
      {
        address: 'services.staketab.com:9010',
        provider: 'Staketab',
      },
      {
        address: 'osmosis-grpc.w3coins.io:12590',
        provider: 'w3coins',
      },
      {
        address: 'grpc-osmosis.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'osmosis-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'osmosis-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'https://grpc-osmosis.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'osmosis-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'grpc-osmosis.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'grpc.osmosis.validatus.com:443',
        provider: 'Validatus',
      },
      {
        address: 'https://grpc.osmosis.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/osmosis',
      tx_page: 'https://app.ezstaking.io/osmosis/txs/${txHash}',
      account_page:
        'https://app.ezstaking.io/osmosis/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/osmosis',
      tx_page: 'https://www.mintscan.io/osmosis/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/osmosis/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/osmosis',
      tx_page: 'https://ping.pub/osmosis/tx/${txHash}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://osmosis.explorers.guru',
      tx_page: 'https://osmosis.explorers.guru/transaction/${txHash}',
      account_page: 'https://osmosis.explorers.guru/account/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/osmosis',
      tx_page: 'https://atomscan.com/osmosis/transactions/${txHash}',
      account_page: 'https://atomscan.com/osmosis/accounts/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/osmosis',
      tx_page: 'https://bigdipper.live/osmosis/transactions/${txHash}',
      account_page: 'https://bigdipper.live/osmosis/accounts/${accountAddress}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/osmosis',
      tx_page: 'https://explorer.tcnetwork.io/osmosis/transaction/${txHash}',
      account_page:
        'https://explorer.tcnetwork.io/osmosis/account/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/osmosis',
      account_page: 'https://stakeflow.io/osmosis/accounts/${accountAddress}',
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/osmosis',
      tx_page: 'https://exp.nodeist.net/osmosis/tx/${txHash}',
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://explorers.l0vd.com/osmosis-mainnet',
      tx_page: 'https://explorers.l0vd.com/osmosis-mainnet/tx/${txHash}',
    },
    {
      kind: 'Chainscope',
      url: 'https://chainsco.pe/osmosis',
      tx_page: 'https://chainsco.pe/osmosis/tx/${txHash}',
    },
  ],
  keywords: ['dex'],
};

export const osmosisAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'osmosis',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom: 'uosmo',
          exponent: 0,
        },
        {
          denom: 'osmo',
          exponent: 6,
        },
      ],
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'uion',
          exponent: 0,
        },
        {
          denom: 'ion',
          exponent: 6,
        },
      ],
      base: 'uion',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom:
            'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
          exponent: 0,
        },
        {
          denom: 'ibcx',
          exponent: 6,
        },
      ],
      address:
        'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
      base: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
      name: 'IBC Index',
      display: 'ibcx',
      symbol: 'IBCX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg',
      },
      coingecko_id: 'ibc-index',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom:
            'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
          exponent: 0,
        },
        {
          denom: 'stibcx',
          exponent: 6,
        },
      ],
      address:
        'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
      base: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
      name: 'Staked IBCX',
      display: 'stibcx',
      symbol: 'stIBCX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom:
            'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
          exponent: 0,
          aliases: ['uusdc'],
        },
        {
          denom: 'usdc',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
      name: 'Axelar USD Coin',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
            channel_id: 'channel-3',
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/uusdc',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
          exponent: 0,
          aliases: ['avalanche-uusdc'],
        },
        {
          denom: 'avalanche-usdc',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche.USDC.wh',
      symbol: 'avalanche.USDC.wh',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gateway',
            base_denom:
              'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
            channel_id: 'channel-3',
          },
          chain: {
            channel_id: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
          },
        },
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
          exponent: 0,
          aliases: ['uusdc'],
        },
        {
          denom: 'usdc',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-750',
            path: 'transfer/channel-750/uusdc',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
          exponent: 0,
          aliases: ['stuosmo'],
        },
        {
          denom: 'stosmo',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
      name: 'stOSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuosmo',
            channel_id: 'channel-5',
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuosmo',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuosmo',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom'],
        },
        {
          denom: 'atom',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-141',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uatom',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
          exponent: 0,
          aliases: ['stuatom'],
        },
        {
          denom: 'statom',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
      name: 'stATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuatom',
            channel_id: 'channel-5',
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stuatom',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuatom',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
          exponent: 0,
          aliases: ['weth-wei'],
        },
        {
          denom: 'weth',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'weth-wei',
            channel_id: 'channel-3',
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/weth-wei',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'weth-wei',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
          exponent: 0,
          aliases: ['wbtc-satoshi'],
        },
        {
          denom: 'wbtc',
          exponent: 8,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.axl',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi',
            channel_id: 'channel-3',
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/wbtc-satoshi',
          },
        },
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
        },
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
      },
    },
    {
      description: 'ERIS liquid staked OSMO',
      denom_units: [
        {
          denom:
            'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
          exponent: 0,
        },
        {
          denom: 'ampOSMO',
          exponent: 6,
        },
      ],
      address:
        'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
      base: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
      name: 'ERIS Amplified OSMO',
      display: 'ampOSMO',
      symbol: 'ampOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png',
        },
      ],
    },
    {
      description: 'Tether USDT on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
      name: 'Tether USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/erc20/tether/usdt',
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
      description: "Membrane's CDP-style stablecoin called CDT",
      denom_units: [
        {
          denom:
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
          exponent: 0,
        },
        {
          denom: 'cdt',
          exponent: 6,
        },
      ],
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
      name: 'CDT Stablecoin',
      display: 'cdt',
      symbol: 'CDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg',
      },
      coingecko_id: 'collateralized-debt-token',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg',
        },
      ],
    },
    {
      description: "Membrane's protocol token",
      denom_units: [
        {
          denom:
            'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
          exponent: 0,
        },
        {
          denom: 'mbrn',
          exponent: 6,
        },
      ],
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
      name: 'Membrane',
      display: 'mbrn',
      symbol: 'MBRN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg',
      },
      coingecko_id: 'membrane',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg',
        },
      ],
    },
    {
      description: 'TIA on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
          exponent: 0,
          aliases: ['utia'],
        },
        {
          denom: 'tia',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-6994',
            path: 'transfer/channel-6994/utia',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
      },
    },
    {
      description: 'Margined Power Token sqOSMO',
      denom_units: [
        {
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
          exponent: 0,
        },
        {
          denom: 'sqosmo',
          exponent: 6,
        },
      ],
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
      name: 'OSMO Squared',
      display: 'sqosmo',
      symbol: 'sqOSMO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg',
        },
      ],
    },
    {
      description: 'NOIS on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
          exponent: 0,
          aliases: ['unois'],
        },
        {
          denom: 'nois',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
      name: 'Nois NOIS',
      display: 'nois',
      symbol: 'NOIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nois',
            base_denom: 'unois',
            channel_id: 'channel-37',
          },
          chain: {
            channel_id: 'channel-8277',
            path: 'transfer/channel-8277/unois',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nois',
            base_denom: 'unois',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg',
      },
    },
    {
      description: 'Margined Power Token sqBTC',
      denom_units: [
        {
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
          exponent: 0,
        },
        {
          denom: 'sqbtc',
          exponent: 6,
        },
      ],
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
      name: 'BTC Squared',
      display: 'sqbtc',
      symbol: 'sqBTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg',
        },
      ],
    },
    {
      description: 'Margined Power Token sqATOM',
      denom_units: [
        {
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
          exponent: 0,
        },
        {
          denom: 'sqatom',
          exponent: 6,
        },
      ],
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
      name: 'ATOM Squared',
      display: 'sqatom',
      symbol: 'sqATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg',
        },
      ],
    },
    {
      description:
        'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [
        {
          denom:
            'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
          exponent: 0,
          aliases: ['basecro'],
        },
        {
          denom: 'cro',
          exponent: 8,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro',
            channel_id: 'channel-10',
          },
          chain: {
            channel_id: 'channel-5',
            path: 'transfer/channel-5/basecro',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
      },
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [
        {
          denom:
            'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
          exponent: 0,
          aliases: ['ustars'],
        },
        {
          denom: 'stars',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars',
            channel_id: 'channel-0',
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/ustars',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
      },
    },
    {
      description:
        'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      denom_units: [
        {
          denom:
            'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
          exponent: 0,
          aliases: [
            '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
            'yieldeth-wei',
          ],
        },
        {
          denom: 'YieldETH',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
      name: 'Real Yield Eth',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei',
          },
          provider: 'Seven Seas & DeFine Logic Labs',
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec',
          },
          provider: 'Axelar',
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'yieldeth-wei',
            channel_id: 'channel-3',
          },
          chain: {
            channel_id: 'channel-208',
            path: 'transfer/channel-208/yieldeth-wei',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: 'wei',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
      },
    },
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [
        {
          denom:
            'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
          exponent: 0,
          aliases: ['adydx'],
        },
        {
          denom: 'dydx',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
            channel_id: 'channel-3',
          },
          chain: {
            channel_id: 'channel-6787',
            path: 'transfer/channel-6787/adydx',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
      },
    },
    {
      description: 'The native token of Quasar',
      denom_units: [
        {
          denom:
            'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
          exponent: 0,
          aliases: ['uqsr'],
        },
        {
          denom: 'qsr',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'quasar',
            base_denom: 'uqsr',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-688',
            path: 'transfer/channel-688/uqsr',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'quasar',
            base_denom: 'uqsr',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
      },
    },
    {
      description: 'Levana native token',
      denom_units: [
        {
          denom:
            'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
          exponent: 0,
        },
        {
          denom: 'lvn',
          exponent: 6,
        },
      ],
      base: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
      name: 'Levana',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg',
      },
      coingecko_id: 'levana-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg',
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        },
      ],
    },
    {
      description: "MilkyWay's liquid staked TIA",
      denom_units: [
        {
          denom:
            'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
          exponent: 0,
        },
        {
          denom: 'milkTIA',
          exponent: 6,
        },
      ],
      base: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
          },
          provider: 'MilkyWay',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg',
      },
      coingecko_id: 'milkyway-staked-tia',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom:
            'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
          exponent: 0,
          aliases: ['stk/uosmo'],
        },
        {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo',
            channel_id: 'channel-6',
          },
          chain: {
            channel_id: 'channel-4',
            path: 'transfer/channel-4/stk/uosmo',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg',
      },
    },
    {
      description:
        'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denom_units: [
        {
          denom:
            'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
          exponent: 0,
          aliases: [
            'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
            '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
          ],
        },
        {
          denom: 'page',
          exponent: 8,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
      name: 'PageDAO',
      display: 'page',
      symbol: 'PAGE.grv',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravity',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
            channel_id: 'channel-10',
          },
          chain: {
            channel_id: 'channel-144',
            path: 'transfer/channel-144/gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg',
      },
    },
    {
      description: "Nomic's native token.",
      denom_units: [
        {
          denom:
            'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
          exponent: 0,
          aliases: ['unom'],
        },
        {
          denom: 'nom',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
      name: 'Nomic',
      display: 'nomic',
      symbol: 'NOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'unom',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-6897',
            path: 'transfer/channel-6897/unom',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'unom',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
      },
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [
        {
          denom:
            'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
          exponent: 0,
          aliases: ['usat'],
        },
        {
          denom: 'nbtc',
          exponent: 14,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'usat',
            channel_id: 'channel-1',
          },
          chain: {
            channel_id: 'channel-6897',
            path: 'transfer/channel-6897/usat',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
      },
    },
    {
      description: 'AUTISM on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
          exponent: 0,
          aliases: ['uautism'],
        },
        {
          denom: 'autism',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
      name: 'Injective AUTISM',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'injective',
            base_denom:
              'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
            channel_id: 'channel-8',
          },
          chain: {
            channel_id: 'channel-122',
            path: 'transfer/channel-122/factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'injective',
            base_denom:
              'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png',
      },
    },
    {
      description: 'Woof on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
          exponent: 0,
          aliases: ['uwoof'],
        },
        {
          denom: 'WOOF',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
      name: 'WOOF chihuahua',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom:
              'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
            channel_id: 'channel-7',
          },
          chain: {
            channel_id: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png',
        },
      ],
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [
        {
          denom:
            'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
          exponent: 0,
          aliases: ['usneaky'],
        },
        {
          denom: 'sneaky',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom:
              'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
            channel_id: 'channel-0',
          },
          chain: {
            channel_id: 'channel-75',
            path: 'transfer/channel-75/factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom:
            'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
          exponent: 0,
          aliases: ['wbtc-satoshi'],
        },
        {
          denom: 'wbtc',
          exponent: 8,
        },
      ],
      address:
        'osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743',
      type_asset: 'sdk.coin',
      base: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          },
          provider: 'BitGo, Kyber, and Ren',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
      },
    },
    {
      description:
        "The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It's scientifically anarchic, professionally foolish, and your ticket to the madhouse.",
      denom_units: [
        {
          denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          exponent: 0,
        },
        {
          denom: 'WOSMO',
          exponent: 6,
        },
      ],
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
      name: 'WOSMO',
      display: 'WOSMO',
      symbol: 'WOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png',
        },
      ],
    },
    {
      description: 'NLS on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
          exponent: 0,
          aliases: ['unls'],
        },
        {
          denom: 'nls',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nolus',
            base_denom: 'unls',
            channel_id: 'channel-0',
          },
          chain: {
            channel_id: 'channel-783',
            path: 'transfer/channel-783/unls',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
      },
    },
    {
      description: 'STRD on Osmosis',
      denom_units: [
        {
          denom:
            'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
          exponent: 0,
          aliases: ['ustrd'],
        },
        {
          denom: 'strd',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'ustrd',
            channel_id: 'channel-5',
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/ustrd',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'stride',
            base_denom: 'ustrd',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
      },
    },
    {
      description: 'Margined Power Token sqTIA',
      denom_units: [
        {
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
          exponent: 0,
        },
        {
          denom: 'sqtia',
          exponent: 6,
        },
      ],
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
      name: 'TIA Squared',
      display: 'sqtia',
      symbol: 'sqTIA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg',
        },
      ],
    },
  ],
};

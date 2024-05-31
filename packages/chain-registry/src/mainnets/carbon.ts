import type { Chain, AssetList, Versions } from '../types';

export const carbon: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'carbon',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Carbon',
  chain_id: 'carbon-1',
  bech32_prefix: 'swth',
  daemon_name: 'carbond',
  website: 'https://www.carbon.network/',
  node_home: '$HOME/.carbon',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'swth',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'usc',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0001,
        average_gas_price: 0.0001,
        high_gas_price: 0.0001,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'bnb.1.6.773edb',
        fixed_min_gas_price: 0,
        low_gas_price: 1000000,
        average_gas_price: 1000000,
        high_gas_price: 1000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'bneo.1.14.e2e5f6',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0015,
        average_gas_price: 0.0015,
        high_gas_price: 0.0015,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'busd.1.6.754a80',
        fixed_min_gas_price: 0,
        low_gas_price: 100000000,
        average_gas_price: 100000000,
        high_gas_price: 100000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'cglp.1.19.1698d3',
        fixed_min_gas_price: 0,
        low_gas_price: 100000000,
        average_gas_price: 100000000,
        high_gas_price: 100000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'cgt/1',
        fixed_min_gas_price: 0,
        low_gas_price: 100000000,
        average_gas_price: 100000000,
        high_gas_price: 100000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'eth.1.19.c3b805',
        fixed_min_gas_price: 0,
        low_gas_price: 100000,
        average_gas_price: 100000,
        high_gas_price: 100000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'eth.1.2.942d87',
        fixed_min_gas_price: 0,
        low_gas_price: 100000,
        average_gas_price: 100000,
        high_gas_price: 100000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0035,
        average_gas_price: 0.0035,
        high_gas_price: 0.0035,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0000075,
        average_gas_price: 0.0000075,
        high_gas_price: 0.0000075,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00005,
        average_gas_price: 0.00005,
        high_gas_price: 0.00005,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00032,
        average_gas_price: 0.00032,
        high_gas_price: 0.00032,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
        fixed_min_gas_price: 0,
        low_gas_price: 300000000,
        average_gas_price: 300000000,
        high_gas_price: 300000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0006,
        average_gas_price: 0.0006,
        high_gas_price: 0.0006,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00015,
        average_gas_price: 0.00015,
        high_gas_price: 0.00015,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0000075,
        average_gas_price: 0.0000075,
        high_gas_price: 0.0000075,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00015,
        average_gas_price: 0.00015,
        high_gas_price: 0.00015,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
        fixed_min_gas_price: 0,
        low_gas_price: 200000000,
        average_gas_price: 200000000,
        high_gas_price: 200000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00001,
        average_gas_price: 0.00001,
        high_gas_price: 0.00001,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00001,
        average_gas_price: 0.00001,
        high_gas_price: 0.00001,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom:
          'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00015,
        average_gas_price: 0.00015,
        high_gas_price: 0.00015,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'usdc.1.2.343151',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0001,
        average_gas_price: 0.0001,
        high_gas_price: 0.0001,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'usdc.1.6.53ff75',
        fixed_min_gas_price: 0,
        low_gas_price: 100000000,
        average_gas_price: 100000000,
        high_gas_price: 100000000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
      {
        denom: 'zil.1.18.1a4a06',
        fixed_min_gas_price: 0,
        low_gas_price: 6000,
        average_gas_price: 6000,
        high_gas_price: 6000,
        gas_costs: {
          cosmos_send: 10000000,
          ibc_transfer: 10000000,
        },
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'swth',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/Switcheo/carbon-bootstrap',
    recommended_version: 'v2.43.0',
    compatible_versions: ['v2.43.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.43.0/carbond-mainnet.linux-amd64.tar.gz',
      'linux/arm64':
        'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.43.0/carbond-mainnet.linux-arm64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://github.com/Switcheo/carbon-bootstrap/raw/master/carbon-1/genesis.json',
    },
    versions: [
      {
        name: 'v2.24.0',
        recommended_version: 'v2.24.5',
        compatible_versions: [
          'v2.24.5',
          'v2.24.4',
          'v2.24.3',
          'v2.24.2',
          'v2.24.1',
          'v2.24.0',
        ],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.24.5/carbond2.24.5-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.24.5/carbond2.24.5-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.25.0',
      },
      {
        name: 'v2.25.0',
        height: 40405361,
        recommended_version: 'v2.25.0',
        compatible_versions: ['v2.25.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.25.0/carbond2.25.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.25.0/carbond2.25.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.26.0',
      },
      {
        name: 'v2.26.0',
        proposal: 306,
        height: 43970651,
        recommended_version: 'v2.26.3',
        compatible_versions: ['v2.26.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.26.3/carbond2.26.3-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.26.3/carbond2.26.3-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.27.0',
      },
      {
        name: 'v2.27.0',
        proposal: 307,
        height: 44688221,
        recommended_version: 'v2.27.3',
        compatible_versions: ['v2.27.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.27.3/carbond2.27.3-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.27.3/carbond2.27.3-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.28.0',
      },
      {
        name: 'v2.28.0',
        proposal: 308,
        height: 45469721,
        recommended_version: 'v2.28.1',
        compatible_versions: ['v2.28.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.28.1/carbond2.28.1-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.28.1/carbond2.28.1-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.29.0',
      },
      {
        name: 'v2.29.0',
        proposal: 312,
        height: 46139891,
        recommended_version: 'v2.29.0',
        compatible_versions: ['v2.29.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.29.0/carbond2.29.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.29.0/carbond2.29.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.30.0',
      },
      {
        name: 'v2.30.0',
        proposal: 313,
        height: 46228611,
        recommended_version: 'v2.30.0',
        compatible_versions: ['v2.30.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.30.0/carbond2.30.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.30.0/carbond2.30.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.31.0',
      },
      {
        name: 'v2.31.0',
        proposal: 316,
        height: 46451861,
        recommended_version: 'v2.31.0',
        compatible_versions: ['v2.31.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.31.0/carbond2.31.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.31.0/carbond2.31.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.32.0',
      },
      {
        name: 'v2.32.0',
        proposal: 317,
        height: 46538071,
        recommended_version: 'v2.32.0',
        compatible_versions: ['v2.32.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.32.0/carbond2.32.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.32.0/carbond2.32.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.33.0',
      },
      {
        name: 'v2.33.0',
        proposal: 318,
        height: 47592681,
        recommended_version: 'v2.33.0',
        compatible_versions: ['v2.33.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.33.0/carbond2.33.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.33.0/carbond2.33.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.34.0',
      },
      {
        name: 'v2.34.0',
        proposal: 319,
        height: 48331411,
        recommended_version: 'v2.34.1',
        compatible_versions: ['v2.34.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.34.1/carbond2.34.1-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.34.1/carbond2.34.1-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.35.0',
      },
      {
        name: 'v2.35.0',
        proposal: 321,
        height: 49398331,
        recommended_version: 'v2.35.0',
        compatible_versions: ['v2.35.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.35.0/carbond2.35.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.35.0/carbond2.35.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.36.0',
      },
      {
        name: 'v2.36.0',
        proposal: 323,
        height: 49677971,
        recommended_version: 'v2.36.9',
        compatible_versions: ['v2.36.0', 'v2.36.9'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.36.9/carbond2.36.9-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.36.9/carbond2.36.9-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.37.0',
      },
      {
        name: 'v2.37.0',
        proposal: 338,
        height: 52699891,
        recommended_version: 'v2.37.1',
        compatible_versions: ['v2.37.0', 'v2.37.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.37.1/carbond2.37.1-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.37.1/carbond2.37.1-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.38.0',
      },
      {
        name: 'v2.38.0',
        proposal: 340,
        height: 53991841,
        recommended_version: 'v2.38.1',
        compatible_versions: ['v2.38.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.38.1/carbond2.38.1-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.38.1/carbond2.38.1-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.39.0',
      },
      {
        name: 'v2.39.0',
        proposal: 349,
        height: 56495871,
        recommended_version: 'v2.39.0',
        compatible_versions: ['v2.39.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.39.0/carbond2.39.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.39.0/carbond2.39.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.40.0',
      },
      {
        name: 'v2.40.0',
        proposal: 352,
        height: 56635731,
        recommended_version: 'v2.40.0',
        compatible_versions: ['v2.40.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.40.0/carbond2.40.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.40.0/carbond2.40.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.41.0',
      },
      {
        name: 'v2.41.0',
        proposal: 353,
        height: 57169241,
        recommended_version: 'v2.41.1',
        compatible_versions: ['v2.41.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.41.1/carbond2.41.1-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.41.1/carbond2.41.1-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.42.0',
      },
      {
        name: 'v2.42.0',
        proposal: 355,
        height: 57602151,
        recommended_version: 'v2.42.0',
        compatible_versions: ['v2.42.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.42.0/carbond2.42.0-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.42.0/carbond2.42.0-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: 'v2.43.0',
      },
      {
        name: 'v2.43.0',
        proposal: 356,
        height: 57636191,
        recommended_version: 'v2.43.0',
        compatible_versions: ['v2.43.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.43.0/carbond-mainnet.linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.43.0/carbond-mainnet.linux-arm64.tar.gz',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
  },
  peers: {
    seeds: [
      {
        id: 'c2354dc2f8a787b43c921207bd132390f2f32380',
        address: '34.126.82.69:26656',
        provider: 'switcheo-labs',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:19656',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'carbon-mainnet-seed.autostake.com:27426',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '75efe81807f1a69d1ed5d881203e49f65afd765b',
        address: '34.126.188.181:26656',
        provider: 'switcheo-labs',
      },
      {
        id: 'abf4cc677fab6f946bc42828605ebbf5468c717e',
        address: '34.87.36.140:26656',
        provider: 'switcheo-labs',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'carbon-mainnet-peer.autostake.com:27426',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://tm-api.carbon.network',
        provider: 'switcheo-labs',
      },
      {
        address: 'https://carbon-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://carbon-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rpc.carbon.blockhunters.org',
        provider: 'BlockHunters',
      },
    ],
    rest: [
      {
        address: 'https://api.carbon.network',
        provider: 'switcheo-labs',
      },
      {
        address: 'https://carbon-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://carbon-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rest.carbon.blockhunters.org',
        provider: 'BlockHunters',
      },
    ],
    grpc: [
      {
        address: 'https://carbon-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'carbon-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  explorers: [
    {
      kind: 'carbonscan',
      url: 'https://scan.carbon.network',
      tx_page: 'https://scan.carbon.network/transaction/${txHash}?net=main',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/carbon',
      tx_page: 'https://ping.pub/carbon/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/carbon',
      tx_page: 'https://atomscan.com/carbon/transactions/${txHash}',
      account_page: 'https://atomscan.com/carbon/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
    },
  ],
};

export const carbonAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'carbon',
  assets: [
    {
      description: 'The native governance token of Carbon',
      denom_units: [
        {
          denom: 'swth',
          exponent: 0,
        },
        {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH'],
        },
      ],
      type_asset: 'sdk.coin',
      base: 'swth',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
      },
      coingecko_id: 'switcheo',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
        },
      ],
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [
        {
          denom: 'usc',
          exponent: 0,
        },
        {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC'],
        },
      ],
      type_asset: 'sdk.coin',
      base: 'usc',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg',
      },
      coingecko_id: 'carbon-usd',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg',
        },
      ],
    },
    {
      description: 'BNB token on Carbon',
      denom_units: [
        {
          denom: 'bnb.1.6.773edb',
          exponent: 0,
        },
        {
          denom: 'bnb',
          exponent: 18,
          aliases: ['BNB'],
        },
      ],
      base: 'bnb.1.6.773edb',
      name: 'Binance Coin',
      display: 'bnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: 'wei',
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430',
          },
          chain: {
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430',
          },
          provider: 'PolyNetwork',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: 'wei',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg',
        },
      ],
    },
    {
      description: 'bNEO token on Carbon',
      denom_units: [
        {
          denom: 'bneo.1.14.e2e5f6',
          exponent: 0,
        },
        {
          denom: 'bneo',
          exponent: 8,
          aliases: ['bNEO'],
        },
      ],
      base: 'bneo.1.14.e2e5f6',
      name: 'BurgerNEO',
      display: 'bneo',
      symbol: 'bNEO',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'neo',
            base_denom: '0x48c40d4666f93408be1bef038b6722404d9a4c2a',
            contract: '0x8eb3bdf5ed4ac1516d316c6b1b207a3cf5eb7567',
          },
          chain: {
            contract: '0x8eb3bdf5ed4ac1516d316c6b1b207a3cf5eb7567',
          },
          provider: 'PolyNetwork',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg',
        },
      ],
    },
    {
      description: 'BUSD (BEP-20) token on Carbon',
      denom_units: [
        {
          denom: 'busd.1.6.754a80',
          exponent: 0,
        },
        {
          denom: 'busd',
          exponent: 18,
          aliases: ['BUSD'],
        },
      ],
      base: 'busd.1.6.754a80',
      name: 'BUSD (BEP-20)',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430',
          },
          chain: {
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430',
          },
          provider: 'PolyNetwork',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
      },
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        },
      ],
    },
    {
      description: 'Carbon Wrapped GLP on Carbon',
      denom_units: [
        {
          denom: 'cglp.1.19.1698d3',
          exponent: 0,
        },
        {
          denom: 'cglp',
          exponent: 18,
          aliases: ['CGLP'],
        },
      ],
      base: 'cglp.1.19.1698d3',
      name: 'Carbon Wrapped GLP',
      display: 'cglp',
      symbol: 'CGLP',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad',
          },
          chain: {
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad',
          },
          provider: 'PolyNetwork',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg',
        },
      ],
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [
        {
          denom: 'cgt/1',
          exponent: 0,
        },
        {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD'],
        },
      ],
      base: 'cgt/1',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg',
        },
      ],
    },
    {
      description: 'ETH (Arbitrum) token on Carbon',
      denom_units: [
        {
          denom: 'eth.1.19.c3b805',
          exponent: 0,
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH'],
        },
      ],
      base: 'eth.1.19.c3b805',
      name: 'Ethereum (Arbitrum)',
      display: 'eth',
      symbol: 'ETH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'arbitrum',
            base_denom: 'wei',
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad',
          },
          chain: {
            contract: '0xb1e6f8820826491fcc5519f84ff4e2bdbb6e3cad',
          },
          provider: 'PolyNetwork',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
        },
      ],
    },
    {
      description: 'ETH (ERC20) token on Carbon',
      denom_units: [
        {
          denom: 'eth.1.2.942d87',
          exponent: 0,
        },
        {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH'],
        },
      ],
      base: 'eth.1.2.942d87',
      name: 'Ethereum (ERC20)',
      display: 'eth',
      symbol: 'ETH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei',
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54',
          },
          chain: {
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54',
          },
          provider: 'PolyNetwork',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg',
        },
      ],
    },
    {
      description: 'STARS token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
          exponent: 0,
        },
        {
          denom: 'stars',
          exponent: 6,
          aliases: ['STARS'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
      name: 'Stargaze Staking Coin',
      display: 'stars',
      symbol: 'STARS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stargaze',
            base_denom: 'ustars',
            channel_id: 'channel-123',
          },
          chain: {
            channel_id: 'channel-15',
            path: 'transfer/channel-15/ustars',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
      },
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
    },
    {
      description: 'LUNA token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
          exponent: 0,
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['LUNA'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
      name: 'Terra Staking Coin',
      display: 'luna',
      symbol: 'LUNA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'terra2',
            base_denom: 'uluna',
            channel_id: 'channel-36',
          },
          chain: {
            channel_id: 'channel-12',
            path: 'transfer/channel-12/uluna',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'uluna',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
        },
      ],
    },
    {
      description: 'TIA token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
          exponent: 0,
          aliases: ['utia'],
        },
        {
          denom: 'tia',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            channel_id: 'channel-188',
          },
          chain: {
            channel_id: 'channel-0',
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
      description: 'MilkTIA token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
          exponent: 0,
          aliases: ['umilkTIA'],
        },
        {
          denom: 'milkTIA',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
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
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg',
        },
      ],
    },
    {
      description: 'STRD token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
          exponent: 0,
        },
        {
          denom: 'strd',
          exponent: 6,
          aliases: ['STRD'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'ustrd',
            channel_id: 'channel-47',
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/ustrd',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg',
      },
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
    },
    {
      description: 'EVMOS token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
          exponent: 0,
        },
        {
          denom: 'evmos',
          exponent: 18,
          aliases: ['EVMOS'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'evmos',
            base_denom: 'aevmos',
            channel_id: 'channel-23',
          },
          chain: {
            channel_id: 'channel-6',
            path: 'transfer/channel-6/aevmos',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'evmos',
            base_denom: 'aevmos',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
        },
      ],
    },
    {
      description: 'IRIS token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
          exponent: 0,
        },
        {
          denom: 'iris',
          exponent: 6,
          aliases: ['IRIS'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
      name: 'IRIS Hub Staking Coin',
      display: 'iris',
      symbol: 'IRIS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'irisnet',
            base_denom: 'uiris',
            channel_id: 'channel-68',
          },
          chain: {
            channel_id: 'channel-28',
            path: 'transfer/channel-28/uiris',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'irisnet',
            base_denom: 'uiris',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
        },
      ],
    },
    {
      description: 'KUJI token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
          exponent: 0,
        },
        {
          denom: 'kuji',
          exponent: 6,
          aliases: ['KUJI'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kujira',
            base_denom: 'ukuji',
            channel_id: 'channel-46',
          },
          chain: {
            channel_id: 'channel-9',
            path: 'transfer/channel-9/ukuji',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'kujira',
            base_denom: 'ukuji',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg',
        },
      ],
    },
    {
      description: 'stOSMO token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
          exponent: 0,
        },
        {
          denom: 'stosmo',
          exponent: 6,
          aliases: ['stOSMO'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuosmo',
            channel_id: 'channel-47',
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/stuosmo',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg',
      },
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
    },
    {
      description: 'CANTO token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
          exponent: 0,
        },
        {
          denom: 'canto',
          exponent: 18,
          aliases: ['CANTO'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'canto',
            base_denom: 'acanto',
            channel_id: 'channel-6',
          },
          chain: {
            channel_id: 'channel-18',
            path: 'transfer/channel-18/acanto',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'canto',
            base_denom: 'acanto',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
        },
      ],
    },
    {
      description: 'Cosmos governance token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
          exponent: 0,
        },
        {
          denom: 'atom',
          exponent: 6,
          aliases: ['ATOM'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-342',
          },
          chain: {
            channel_id: 'channel-3',
            path: 'transfer/channel-3/uatom',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      },
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
    },
    {
      description: 'stATOM token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
          exponent: 0,
        },
        {
          denom: 'statom',
          exponent: 6,
          aliases: ['stATOM'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stuatom',
            channel_id: 'channel-47',
          },
          chain: {
            channel_id: 'channel-8',
            path: 'transfer/channel-8/stuatom',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg',
      },
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
    },
    {
      description: 'OSMO token on Carbon',
      denom_units: [
        {
          denom:
            'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: ['OSMO'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'uosmo',
            channel_id: 'channel-188',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uosmo',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'uosmo',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
        },
      ],
    },
    {
      description: 'USDC (ERC20) token on Carbon',
      denom_units: [
        {
          denom: 'usdc.1.2.343151',
          exponent: 0,
        },
        {
          denom: 'usdc',
          exponent: 6,
          aliases: ['USDC'],
        },
      ],
      base: 'usdc.1.2.343151',
      name: 'Circle USD',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54',
          },
          chain: {
            contract: '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54',
          },
          provider: 'PolyNetwork',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
        },
      ],
    },
    {
      description: 'USD Coin (BEP-20) token on Carbon',
      denom_units: [
        {
          denom: 'usdc.1.6.53ff75',
          exponent: 0,
        },
        {
          denom: 'usdc',
          exponent: 18,
          aliases: ['USDC'],
        },
      ],
      base: 'usdc.1.6.53ff75',
      name: 'USD Coin (BEP-20)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchain',
            base_denom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430',
          },
          chain: {
            contract: '0xb5D4f343412dC8efb6ff599d790074D0f1e8D430',
          },
          provider: 'PolyNetwork',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
        },
      ],
    },
    {
      description: 'ZIL token on Carbon',
      denom_units: [
        {
          denom: 'zil.1.18.1a4a06',
          exponent: 0,
        },
        {
          denom: 'zil',
          exponent: 12,
          aliases: ['ZIL'],
        },
      ],
      base: 'zil.1.18.1a4a06',
      name: 'Zilliqa',
      display: 'zil',
      symbol: 'ZIL',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'zilliqa',
            base_denom: 'wei',
            contract: '0xd73c6b871b4d0e130d64581993b745fc938a5be7',
          },
          chain: {
            contract: '0xd73c6b871b4d0e130d64581993b745fc938a5be7',
          },
          provider: 'PolyNetwork',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg',
        },
      ],
    },
  ],
};

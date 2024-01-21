import type { Chain, AssetLists, ChainVersions } from '../types';

export const chain4Energy: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'chain4energy',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://c4e.io/',
  pretty_name: 'Chain4Energy',
  chain_id: 'perun-1',
  bech32_prefix: 'c4e',
  daemon_name: 'c4ed',
  node_home: '$HOME/.c4e-chain',
  key_algos: ['secp256k1'],
  slip44: 4444,
  fees: {
    fee_tokens: [
      {
        denom: 'uc4e',
        fixed_min_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/chain4energy/c4e-chain',
    recommended_version: 'v1.2.1',
    compatible_versions: ['v1.2.1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/chain4energy/c4e-chains/main/perun-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.1',
        compatible_versions: ['v1.0.0', 'v1.0.1'],
        cosmos_sdk_version: 'v0.45.5',
        ibc_go_version: 'v3.0.1',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.19',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.0.0/c4ed_v1.0.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.0.0/c4ed_v1.0.0_darwin_amd64.tar.gz',
          'darwin/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.0.0/c4ed_v1.0.0_darwin_amd64.tar.gz',
        },
        next_version_name: 'v1.1.0',
      },
      {
        name: 'v1.1.0',
        tag: 'v1.1.0',
        proposal: 1,
        height: 1952250,
        recommended_version: 'v1.1.0',
        compatible_versions: ['v1.1.0'],
        cosmos_sdk_version: 'v0.45.9',
        ibc_go_version: 'v3.0.1',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.1.0/c4ed_v1.1.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.1.0/c4ed_v1.1.0_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.1.0/c4ed_v1.1.0_darwin_amd64.tar.gz',
        },
        next_version_name: 'v1.2.0',
      },
      {
        name: 'v1.2.0',
        tag: 'v1.2.0',
        proposal: 4,
        height: 2826500,
        recommended_version: 'v1.2.0',
        compatible_versions: ['v1.2.0'],
        cosmos_sdk_version: 'v0.46.10',
        ibc_go_version: 'v5.2.0',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.26',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.0/c4ed_v1.2.0_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.0/c4ed_v1.2.0_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.0/c4ed_v1.2.0_darwin_amd64.tar.gz',
        },
        next_version_name: 'v1.2.1',
      },
      {
        name: 'v1.2.1',
        tag: 'v1.2.1',
        height: 3767300,
        recommended_version: 'v1.2.1',
        compatible_versions: ['v1.2.1'],
        cosmos_sdk_version: 'v0.46.13',
        ibc_go_version: 'v5.2.0',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.1/c4ed_v1.2.1_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.1/c4ed_v1.2.1_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.2.1/c4ed_v1.2.1_darwin_amd64.tar.gz',
        },
        next_version_name: 'v1.3.0',
      },
      {
        name: 'v1.3.0',
        tag: 'v1.3.0',
        proposal: 7,
        height: 6283905,
        recommended_version: 'v1.3.0',
        compatible_versions: ['v1.3.0'],
        cosmos_sdk_version: 'v0.46.13',
        ibc_go_version: 'v5.2.1',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.3.0/c4ed_v1.3.0_darwin_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.3.0/c4ed_v1.3.0_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/chain4energy/c4e-chain/releases/download/v1.3.0/c4ed_v1.3.0_darwin_amd64.tar.gz',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
  },
  peers: {
    seeds: [
      {
        id: '30e98bbcf5bb29ed4e4ff685fa8fa84fa0ddff51',
        address: 'tenderseed.ccvalidators.com:26008',
        provider: 'CryptoCrew',
      },
      {
        id: '54515079bae4cadae2f9b511cffeb9447d4bc98d',
        address: 'c4e.seed.bccnodes.com:27656',
        provider: 'BccNodes',
      },
      {
        id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
        address: 'c4e.seed.node75.org:10156',
        provider: 'Pro-nodes75',
      },
      {
        id: '54ca81dd509cc6160de7f4b479a96b341d8e830e',
        address: 'rpc.c4e.nodexcapital.com:13956',
        provider: 'NodeX Validator',
      },
      {
        id: '6da239cb4fe03d957cdb1fdc26af3d083a7f5945',
        address: 'seed.c4e.hexnodes.co:02656',
        provider: 'Hexnodes',
      },
      {
        id: '9aa8a73ea9364aa3cf7806d4dd25b6aed88d8152',
        address: 'c4e.seed.mzonder.com:11256',
        provider: 'MZONDER',
      },
      {
        id: 'a85a651a3cf1746694560c5b6f76d566c04ca581',
        address: 'c4e-seed.takeshi.team:10256',
        provider: 'TAKESHI',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'chain4energy-mainnet-seed.autostake.com:27276',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '8cb175d973c3c638a4e5d014c030d8599369419f',
        address: 'seeds.cros-nest.com:28656',
        provider: 'Crosnest',
      },
      {
        id: '5e71b5585d186cc32b9f071610f43042b445c05c',
        address: 'seeds.c4e.silentvalidator.com:39656',
        provider: 'silent',
      },
      {
        id: '6b0ffcce9b59b91ceb8eea5d4599e27707e3604a',
        address: 'seeds.stakeup.tech:10210',
        provider: 'StakeUp',
      },
      {
        id: '6cb7ff21d19f139f4ca5e6e2a336e59d2857aba1',
        address: 'seeds.anode.team:10256',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        id: 'e47f4fa12187234dd205f51cb984c8235c3a3511',
        address: 'c4e-seeds.validatrium.club:26656',
        provider: 'Validatrium',
      },
      {
        id: '3ef7e5e7e163500af9baf53480779448461dac18',
        address: '185.245.182.192:46656',
        provider: 'Meerlabs',
      },
      {
        id: '0d1a44cc32e927dd062e0fd45d21475f9836e73d',
        address: '89.117.58.109:26656',
        provider: 'medes',
      },
      {
        id: 'd81f51b4a1aae66792fb1717589fa28975f328b0',
        address: '164.68.125.243:26656',
        provider: 'Smt Network',
      },
      {
        id: '2e08beed75525c2d583e6413fa5f090801965aba',
        address: 'c4e.doubletop:30655',
        provider: 'DOUBLETOP',
      },
      {
        id: '6f181c91dee34ebf2ea5c4f951c51b8c2c897702',
        address: 'c4e.seed.kalia.network:30656',
        provider: 'Kalia Network',
      },
      {
        id: '8739107d0484a4c58c4f980d61f488655597f80c',
        address: 'seed.c4e.validatus.com:2000',
        provider: 'Validatus',
      },
    ],
    persistent_peers: [
      {
        id: '5b62ff6035d9c8143c0ebf4fe05fa0b22d96bb05',
        address: 'rpc.c4e.ppnv.space:13656',
        provider: 'PPNV Service',
      },
      {
        id: 'a5133743ec9e0edffd83428af65004926352e393',
        address: 'c4e-peer.nodine.id:13656',
        provider: 'Nodine.ID',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'chain4energy-mainnet-peer.autostake.com:27276',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'e3d0b136495c3f4382ac801fbc89083d32625ff8',
        address: 'c4e.peer.stavr.tech:17096',
        provider: '🔥STAVR🔥',
      },
      {
        id: '094cc97f8443ba4302e2db818e64497d03176fad',
        address: 'rpc.c4e.indonode.net:24656',
        provider: 'Indonode',
      },
      {
        id: '89427b98e35b23dacafa8df90df6ae173245439b',
        address: 'seed-c4e.theamsolutions.info:16656',
        provider: 'AM Solutions',
      },
      {
        id: '5be2027950e249c42e20390c94fc1e8f3cd16657',
        address: '65.108.70.119:33656',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        id: '1b802d4616c1de3fa687ad0d671b1b9d64754a44',
        address: '88.198.49.217:26157',
        provider: 'Validator.run',
      },
      {
        id: '3ef7e5e7e163500af9baf53480779448461dac18',
        address: '185.245.182.192:46656',
        provider: 'Meerlabs',
      },
      {
        id: 'd81f51b4a1aae66792fb1717589fa28975f328b0',
        address: '164.68.125.243:26656',
        provider: 'Smt Network',
      },
      {
        id: '2e08beed75525c2d583e6413fa5f090801965aba',
        address: 'c4e.doubletop:30655',
        provider: 'DOUBLETOP',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.c4e.io/',
        provider: 'C4E',
      },
      {
        address: 'https://rpc.c4e.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://chain4energy-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'http://c4e.rpc.m.stavr.tech:17097',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-c4e.d-stake.xyz',
        provider: 'D-Stake',
      },
      {
        address: 'https://c4e.rpc.bccnodes.com',
        provider: 'BccNodes',
      },
      {
        address: 'https://rpc-m.c4e.hexnodes.co',
        provider: 'Hexnodes',
      },
      {
        address: 'https://rpc-c4e.takeshi.team',
        provider: 'TAKESHI',
      },
      {
        address: 'https://rpc-c4e.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://rpc.cros-nest.com/chain4energy',
        provider: 'Crosnest',
      },
      {
        address: 'https://rpc.c4e.indonode.net',
        provider: 'Indonode',
      },
      {
        address: 'https://c4e-rpc.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://rpc.c4e.silentvalidator.com',
        provider: 'silent',
      },
      {
        address: 'http://rpc.c4e.stakeup.tech',
        provider: 'StakeUp',
      },
      {
        address: 'https://chain4energy-rpc.stakeangle.com',
        provider: 'StakeAngle',
      },
      {
        address: 'https://c4e-rpc.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://rpc-c4e.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://c4e.rpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        address: 'https://c4e-rpc.validatrium.club',
        provider: 'Validatrium',
      },
      {
        address: 'http://185.245.182.192:46657',
        provider: 'Meerlabs',
      },
      {
        address: 'http://89.117.58.109:26657',
        provider: 'medes',
      },
      {
        address: 'http://c4e.rpc.node75.org:26957',
        provider: 'Pro-nodes75',
      },
      {
        address: 'https://rpc-c4e.stakerun.com:443',
        provider: 'StakeRun',
      },
      {
        address: 'http://164.68.125.243:26657',
        provider: 'Smt Network',
      },
      {
        address: 'https://c4e-rpc.antrixy.org/',
        provider: 'Antrix Validators',
      },
      {
        address: 'https://c4e.doubletop.tech/',
        provider: 'DOUBLETOP',
      },
      {
        address: 'https://c4e-rpc.kalia.network:443',
        provider: 'Kalia Network',
      },
      {
        address: 'https://c4e.rpc.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'http://38.242.220.64:16657',
        provider: 'mahof',
      },
      {
        address: 'http://209.182.239.169:46657',
        provider: 'SECARD',
      },
      {
        address: 'https://rpc.c4e.validatus.com:443',
        provider: 'Validatus',
      },
    ],
    rest: [
      {
        address: 'https://lcd.c4e.io/',
        provider: 'C4E',
      },
      {
        address: 'https://api.c4e.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://chain4energy-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://c4e.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api-m.c4e.hexnodes.co',
        provider: 'Hexnodes',
      },
      {
        address: 'https://api-c4e.takeshi.team',
        provider: 'TAKESHI',
      },
      {
        address: 'https://api-c4e.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://rest.cros-nest.com/chain4energy',
        provider: 'Crosnest',
      },
      {
        address: 'https://api.c4e.indonode.net',
        provider: 'Indonode',
      },
      {
        address: 'https://c4e-api.stake-town.com',
        provider: 'StakeTown',
      },
      {
        address: 'https://api.c4e.silentvalidator.com',
        provider: 'silent',
      },
      {
        address: 'http://api.c4e.stakeup.tech',
        provider: 'StakeUp',
      },
      {
        address: 'http://chain4energy-rpc.stakeangle.com:1317',
        provider: 'StakeAngle',
      },
      {
        address: 'https://c4e-api.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://api-c4e.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://c4e.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        address: 'https://c4e-api.validatrium.club',
        provider: 'Validatrium',
      },
      {
        address: 'http://c4e.api.node75.org:1397',
        provider: 'Pro-nodes75',
      },
      {
        address: 'https://lcd-c4e.stakerun.com:443',
        provider: 'StakeRun',
      },
      {
        address: 'http://164.68.125.243:1319',
        provider: 'Smt Network',
      },
      {
        address: 'https://c4e-rest.antrixy.org/',
        provider: 'Antrix Validators',
      },
      {
        address: 'https://c4e-api.kalia.network:443',
        provider: 'Kalia Network',
      },
      {
        address: 'https://c4e.api.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'http://38.242.220.64:11317',
        provider: 'mahof',
      },
      {
        address: 'http://209.182.239.169:1417',
        provider: 'SECARD',
      },
      {
        address: 'https://api.c4e.validatus.com:443',
        provider: 'Validatus',
      },
    ],
    grpc: [
      {
        address: 'grpc.c4e.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'chain4energy-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'c4e.grpc.bccnodes.com:443',
        provider: 'BccNodes',
      },
      {
        address: 'grpc-c4e.takeshi.team:443',
        provider: 'TAKESHI',
      },
      {
        address: 'grpc-c4e.mzonder.com:443',
        provider: 'MZONDER',
      },
      {
        address: 'http://c4e.grpc.m.stavr.tech:7029',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'c4e-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
      {
        address: 'grpc.c4e.silentvalidator.com:443',
        provider: 'silent',
      },
      {
        address: 'http://chain4energy-rpc.stakeangle.com:1317',
        provider: 'StakeAngle',
      },
      {
        address: 'c4e-grpc.genznodes.dev:52090',
        provider: 'genznodes',
      },
      {
        address: 'https://grpc-c4e.theamsolutions.info:9391',
        provider: 'AM Solutions',
      },
      {
        address: 'https://c4e.grpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        address: 'https://c4e-grpc.validatrium.club',
        provider: 'Validatrium',
      },
      {
        address: 'http://185.245.182.192:1318',
        provider: 'Meerlabs',
      },
      {
        address: 'grpc-c4e.stakerun.com:1190',
        provider: 'StakeRun',
      },
      {
        address: 'https://c4e-grpc.antrixy.org/',
        provider: 'Antirx Validators',
      },
      {
        address: 'https://c4e.doubletop.tech:443',
        provider: 'DOUBLETOP',
      },
      {
        address: 'c4e-grpc.kalia.network:3090',
        provider: 'Kalia Network',
      },
      {
        address: 'https://c4e.grpc.skynodejs.net',
        provider: 'skynodejs',
      },
      {
        address: 'http://38.242.220.64:19090',
        provider: 'mahof',
      },
      {
        address: 'http://209.182.239.169:9190',
        provider: 'SECARD',
      },
      {
        address: 'https://grpc.c4e.validatus.com:443',
        provider: 'Validatus',
      },
    ],
  },
  explorers: [
    {
      kind: 'explorer',
      url: 'https://explorer.apeironnodes.com/chain4energy',
      tx_page:
        'https://explorer.apeironnodes.com/chain4energy/transactions/${txHash}',
    },
    {
      kind: 'explorer',
      url: 'https://explorer.ppnv.space/c4e',
      tx_page: 'https://explorer.ppnv.space/c4e/transactions/${txHash}',
    },
    {
      kind: 'explorer',
      url: 'https://explorer.c4e.io/',
      tx_page: 'https://explorer.c4e.io/transactions/${txHash}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/chain4energy',
      tx_page:
        'https://explorer.nodestake.top/chain4energy/transactions/${txHash}',
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer',
      url: 'https://exp.utsa.tech/c4e',
      tx_page: 'https://exp.utsa.tech/c4e/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/c4e',
      tx_page: 'https://explorer.stavr.tech/c4e/tx/${txHash}',
    },
    {
      kind: 'BccNodes Explorer',
      url: 'https://explorer.bccnodes.com/chain4energy',
      tx_page:
        'https://explorer.bccnodes.com/chain4energy/transactions/${txHash}',
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/c4e',
      tx_page: 'https://explorer.nodexcapital.com/c4e/transactions/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/chain4energy',
      tx_page: 'https://atomscan.com/chain4energy/transactions/${txHash}',
      account_page:
        'https://atomscan.com/chain4energy/accounts/${accountAddress}',
    },
    {
      kind: 'AM Solutions Explorer',
      url: 'https://explorer.theamsolutions.info/c4e-main/staking',
      tx_page:
        'https://explorer.theamsolutions.info/c4e-main/transactions/${txHash}',
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM Explorer',
      url: 'https://main.anode.team/c4e',
      tx_page: 'https://main.anode.team/c4e/tx/${txHash}',
    },
    {
      kind: 'ScanRun',
      url: 'https://scanrun.io/c4e',
      tx_page: 'https://scanrun.io/c4e/transactions/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
    },
  ],
};

export const chain4EnergyAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'chain4energy',
  assets: [
    {
      description: 'The native token of Chain4Energy',
      denom_units: [
        {
          denom: 'uc4e',
          exponent: 0,
        },
        {
          denom: 'c4e',
          exponent: 6,
        },
      ],
      base: 'uc4e',
      name: 'Chain4Energy',
      display: 'c4e',
      symbol: 'C4E',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png',
        },
      ],
    },
  ],
};

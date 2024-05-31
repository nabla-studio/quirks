import type { Chain, AssetList, Versions } from '../types';

export const bitcanna: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bitcanna',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.bitcanna.io/',
  pretty_name: 'BitCanna',
  chain_id: 'bitcanna-1',
  bech32_prefix: 'bcna',
  daemon_name: 'bcnad',
  node_home: '$HOME/.bcna',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ubcna',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.0025,
        high_gas_price: 0.01,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ubcna',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/BitCannaGlobal/bcna',
    recommended_version: 'v3.1.0',
    compatible_versions: ['v3.1.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/BitCannaGlobal/bcna/releases/download/v3.1.0/bcna_linux_amd64.tar.gz',
      'linux/arm64':
        'https://github.com/BitCannaGlobal/bcna/releases/download/v3.1.0/bcna_linux_arm64.tar.gz',
      'darwin/arm64':
        'https://github.com/BitCannaGlobal/bcna/releases/download/v3.1.0/bcna_darwin_arm64.tar.gz',
    },
    cosmos_sdk_version: 'v0.47.11',
    ibc_go_version: 'v7.4.0',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json',
    },
    versions: [
      {
        name: 'vigorous-grow-fix',
        proposal: 10,
        height: 7585420,
        recommended_version: 'v1.6.3',
        compatible_versions: ['v1.6.1', 'v1.6.2', 'v1.6.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_linux_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_darwin_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v1.6.3/bcna_darwin_amd64.tar.gz',
        },
        next_version_name: 'vigorous-grow-huckleberry',
      },
      {
        name: 'vigorous-grow-huckleberry',
        proposal: 11,
        height: 8771420,
        recommended_version: 'v1.7.0',
        compatible_versions: ['v1.7.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v1.7.0/bcna_linux_amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v1.7.0/bcna_darwin_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v1.7.0/bcna_darwin_amd64.tar.gz',
        },
        next_version_name: 'wakeandbake',
      },
      {
        name: 'wakeandbake',
        proposal: 12,
        height: 9209420,
        recommended_version: 'v2.0.3',
        compatible_versions: ['v2.0.2', 'v2.0.3'],
        binaries: {
          'linux/amd64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.3/bcna_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.3/bcna_linux_arm64.tar.gz',
          'darwin/arm64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.3/bcna_darwin_arm64.tar.gz',
        },
        next_version_name: 'ganjarevolution',
      },
      {
        name: 'ganjarevolution',
        proposal: 14,
        height: 12288420,
        recommended_version: 'v3.0.2',
        compatible_versions: ['v3.0.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v3.0.2/bcna_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v3.0.2/bcna_linux_arm64.tar.gz',
          'darwin/arm64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v3.0.2/bcna_darwin_arm64.tar.gz',
        },
        cosmos_sdk_version: 'v0.47.9',
        ibc_go_version: 'v7.3.1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        next_version_name: 'ganjarevolutionburn',
      },
      {
        name: 'ganjarevolutionburn',
        proposal: 15,
        height: 13846420,
        recommended_version: 'v3.1.0',
        compatible_versions: ['v3.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v3.1.0/bcna_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v3.1.0/bcna_linux_arm64.tar.gz',
          'darwin/arm64':
            'https://github.com/BitCannaGlobal/bcna/releases/download/v3.1.0/bcna_darwin_arm64.tar.gz',
        },
        cosmos_sdk_version: 'v0.47.11',
        ibc_go_version: 'v7.4.0',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
  },
  peers: {
    seeds: [
      {
        id: 'd6aa4c9f3ccecb0cc52109a95962b4618d69dd3f',
        address: 'seed1.bitcanna.io:26656',
        provider: 'bitcanna',
      },
      {
        id: 'e2e7c704f766ef6b9e2c8dd61d963f8393b87966',
        address: 'seed3.bitcanna.io:26656',
        provider: 'bitcanna',
      },
      {
        id: 'f0e6c86d769bf5c52f78e01864091690e731643f',
        address: 'bitcanna-seed.panthea.eu:37656',
        provider: 'Panthea EU',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:13056',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: '258f523c96efde50d5fe0a9faeea8a3e83be22ca',
        address: 'seed.bitcanna-1.bitcanna.aviaone.com:10263',
        provider: 'AVIAONE 🟢',
      },
      {
        id: '33ab202dfef5e08d5d0346e7b3cfaab2a946198a',
        address: 'seeds.bitcanna-mainnet.hexnodes.co:27656',
        provider: 'Hexnodes',
      },
      {
        id: 'd5ed854872ad96f114737889ac9521ea3a29e3a3',
        address: 'bitcanna-seed.oldcat.io:26656',
        provider: 'Oldcat',
      },
      {
        id: 'd37062587a2aba2a5256b7363f722f4acb4b8e2f',
        address: 'seed-node.mms.team:30656',
        provider: 'MMS',
      },
      {
        id: '10ed1e176d874c8bb3c7c065685d2da6a4b86475',
        address: 'seed-bcna.ibs.team:16656',
        provider: 'Inter Blockchain Services',
      },
      {
        id: '951cadb1888c0360dce506c1eff925cb6eb47e06',
        address: 'seeds-2.anode.team:10258',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        id: '09ba537d6563018b97c502979c3478df4decf426',
        address: 'bitcanna-seed.genznodes.dev:20656',
        provider: 'genznodes',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '71df77a8f57af72a4d2b4e842c9ac7eaec31cc09',
        address: 'mainnet-seed.konsortech.xyz:27156',
        provider: 'KonsorTech°',
      },
      {
        id: '7546889cad5cb44012a9b190bee9c5a8d92d47cd',
        address: 'cottage.sopko.net:31656',
        provider: '🐔 The Chicken Coop 🦝 Homestead',
      },
    ],
    persistent_peers: [
      {
        id: 'a4c1e46441164c350f721cf142d52c136215e05c',
        address: '65.108.43.170:26656',
        provider: 'BitCanna',
      },
      {
        id: '8fa7a04d55ca7d0ab70dc5cbc35d5cf26c5ecfb7',
        address: '65.108.142.81:26682',
        provider: 'Stakely',
      },
      {
        id: 'ad820cb2fa85e525538207bb24ee49a61a74eb45',
        address: '93.115.25.15:26656',
        provider: 'Stakely',
      },
      {
        id: 'df99de6cec9152c517990317b340b8b9a307493c',
        address: '193.34.144.156:26656',
        provider: 'ParanormalBrothers',
      },
      {
        id: '0a658df9d9fab096983a12e6f878e87281a15ce6',
        address: 'bitcanna-peer.panthea.eu:27656',
        provider: 'Panthea EU',
      },
      {
        id: '756fa9ce5d65c3c43021d2780e1bda0924a6cd14',
        address: '144.76.97.251:27656',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        id: '5a048cab1d183de5c465c56b29a16fd93a8bf9bd',
        address: 'mainnet-bitcanna.konsortech.xyz:27656',
        provider: 'KonsorTech',
      },
      {
        id: '50e4ad8f5847c1fc4d9cb3de2cb6356d1a14291b',
        address: '95.214.55.138:32656',
        provider: 'genznodes',
      },
      {
        id: '2ff33d346b1b0f19cd59018ceb62d06a6406d472',
        address: 'bitcanna.peers.stavr.tech:21326',
        provider: '🔥STAVR🔥',
      },
      {
        id: 'e69d68eae1f01baac83c1ed321ba1dca2379bdc2',
        address: '144.91.65.13:26666',
        provider: 'AVIAONE 🟢',
      },
      {
        id: '6ae1dfa46884560e13962d73462e5bda0bb8c019',
        address: 'bitcanna-mainnet.peers.l0vd.com:17656',
        provider: 'L0vd.com',
      },
      {
        id: '526e4529131070e39134d94edc0e7e48289a64b1',
        address: '176.191.97.120:28656',
        provider: 'Inter Blockchain Services',
      },
      {
        id: '3cb7bc8d5c448eaa42558347fb6cb03cd414b223',
        address: '38.242.232.202:26656',
        provider: 'Inter Blockchain Services',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13056',
        provider: 'Polkachu',
      },
      {
        id: '45589e6147e36dda9e429668484d7614fb25b142',
        address: 'bitcanna.nodejumper.io:27656',
        provider: 'NODEJUMPER',
      },
      {
        id: 'd2cb1f04b351e82dada97794d32a468dd71d6a84',
        address: 'peer-bitcanna.mms.team:56104',
        provider: 'MMS',
      },
      {
        id: '88497ab3bbbcc1e8545771f45020e738bcce590f',
        address: '95.165.89.222:26756',
        provider: 'MaxFoton nodes',
      },
      {
        id: 'f28f565a6514340f2506b8f2b4e1d5322c4a26dd',
        address: 'p2p.bitcanna.safeblock.space:26656',
        provider: 'Safe Block',
      },
      {
        id: '637077d431f618181597706810a65c826524fd74',
        address: 'bitcanna.rpc.nodeshub.online:13056',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
      {
        id: 'fe587eb0d37cabb9b8089ec8899cf32ee2870994',
        address: '185.144.99.40:46656',
        provider: 'CrypTech',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.bitcanna.io/',
        provider: 'bitcanna',
      },
      {
        address: 'http://bcna.paranorm.pro/',
        provider: 'ParanormalBrothers',
      },
      {
        address: 'https://bcna-rpc.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://bitcanna-rpc.panthea.eu',
        provider: 'Panthea EU',
      },
      {
        address: 'https://rpc.bitcanna.sgtstake.com/',
        provider: 'SGTstake',
      },
      {
        address: 'https://bitcanna.rpc.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        address: 'http://bitcanna.rpc.m.stavr.tech:21327',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-bcna.kjinc.io/',
        provider: 'KJINC.io',
      },
      {
        address: 'https://mainnet-bitcanna-rpc.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://bitcanna.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://bitcanna-rpc.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://rpc.bitcanna-1.bitcanna.aviaone.com',
        provider: 'AVIAONE 🟢',
      },
      {
        address: 'https://rpc.bitcanna-mainnet.hexnodes.co',
        provider: 'Hexnodes',
      },
      {
        address: 'https://rpc.bitcanna.citizenweb3.com:443',
        provider: 'Citizen Web3',
      },
      {
        address: 'https://bitcanna-mainnet.rpc.l0vd.com/',
        provider: 'L0vd.com',
      },
      {
        address: 'https://rpc-bitcanna-ia.cosmosia.notional.ventures',
        provider: 'Notional',
      },
      {
        address: 'https://bitcanna-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc.bitcanna.safeblock.space',
        provider: 'Safe Block',
      },
      {
        address: 'https://bitcanna.nodejumper.io:443',
        provider: 'NODEJUMPER',
      },
      {
        address: 'https://rpc.bitcanna.indonode.net/',
        provider: 'Indonode',
      },
      {
        address: 'https://rpc-bitcanna.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'http://65.108.142.81:26683',
        provider: 'Stakely',
      },
      {
        address: 'http://93.115.25.15:26657',
        provider: 'Stakely',
      },
      {
        address: 'https://bitcanna-rpc.validatornode.com',
        provider: 'ValidatorNode',
      },
      {
        address: 'https://bcna.rpc.arcturian.tech/',
        provider: 'Arcturian Tech',
      },
      {
        address: 'https://bitcanna-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc.bcna.sopko.net:443',
        provider: '🐔 The Chicken Coop 🦝 Homestead',
      },
      {
        address: 'https://bitcanna_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
      {
        address: 'https://bitcanna.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
      {
        address: 'https://rpc-bitcanna.cryptech.com.ua',
        provider: 'CrypTech',
      },
    ],
    grpc: [
      {
        address: 'grpc.bitcanna.io:443',
        provider: 'bitcanna',
      },
      {
        address: 'bitcanna-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'bitcanna.grpc.m.stavr.tech:9081',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'grpc.bitcanna-mainnet.hexnodes.co:27090',
        provider: 'HexNodes',
      },
      {
        address: 'grpc.bitcanna-1.bitcanna.aviaone.com:9092',
        provider: 'AVIAONE 🟢',
      },
      {
        address: 'bitcanna-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com',
      },
      {
        address: 'grpc-bitcanna-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'bitcanna.grpc.kjnodes.com:14290',
        provider: 'kjnodes',
      },
      {
        address: 'bitcanna-grpc.polkachu.com:13090',
        provider: 'Polkachu',
      },
      {
        address: 'grpc-bitcanna.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'bitcanna.grpc.m.anode.team:443',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        address: 'bitcanna-grpc.panthea.eu:16710',
        provider: 'Panthea EU',
      },
      {
        address: 'https://grpc.bitcanna.indonode.net:11090',
        provider: 'Indonode',
      },
      {
        address: 'bitcanna-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc.bitcanna.safeblock.space:9090',
        provider: 'Safe Block',
      },
      {
        address: 'https://bitcanna.grpc.nodeshub.online',
        provider: 'Nodes Hub',
      },
      {
        address: 'https://grpc-bitcanna.cryptech.com.ua',
        provider: 'CrypTech',
      },
    ],
    rest: [
      {
        address: 'https://lcd.bitcanna.io',
        provider: 'bitcanna',
      },
      {
        address: 'https://bitcanna-api.panthea.eu',
        provider: 'Panthea EU',
      },
      {
        address: 'https://api.bitcanna.sgtstake.com/',
        provider: 'SGTstake',
      },
      {
        address: 'https://bitcanna.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://bcna-api.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://bitcanna.api.m.anode.team',
        provider: 'AlxVoy ⚡ ANODE.TEAM',
      },
      {
        address: 'https://api-bcna.kjinc.io/',
        provider: 'KJINC.io',
      },
      {
        address: 'https://mainnet-bitcanna-api.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://bitcanna.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://bitcanna-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://bitcanna-api.genznodes.dev',
        provider: 'genznodes',
      },
      {
        address: 'https://api.bitcanna-1.bitcanna.aviaone.com/',
        provider: 'AVIAONE 🟢',
      },
      {
        address: 'https://lcd.bitcanna-mainnet.hexnodes.co',
        provider: 'Hexnodes',
      },
      {
        address: 'https://bitcanna-mainnet.api.l0vd.com',
        provider: 'L0vd.com',
      },
      {
        address: 'https://api-bitcanna-ia.cosmosia.notional.ventures',
        provider: 'Notional',
      },
      {
        address: 'https://bitcanna-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://api.bitcanna.safeblock.space',
        provider: 'Safe Block',
      },
      {
        address: 'https://bitcanna.nodejumper.io:1317',
        provider: 'NODEJUMPER',
      },
      {
        address: 'https://api-bitcanna.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'http://65.108.142.81:1325',
        provider: 'Stakely',
      },
      {
        address: 'http://93.115.25.15:1317',
        provider: 'Stakely',
      },
      {
        address: 'https://bitcanna-api.validatornode.com',
        provider: 'ValidatorNode',
      },
      {
        address: 'https://bcna.api.arcturian.tech/',
        provider: 'Arcturian Tech',
      },
      {
        address: 'https://api.bitcanna.indonode.net/',
        provider: 'Indonode',
      },
      {
        address: 'https://bitcanna-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://bitcanna_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      },
      {
        address: 'https://bitcanna.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
      {
        address: 'https://api-bitcanna.cryptech.com.ua',
        provider: 'CrypTech',
      },
    ],
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/bitcanna',
      tx_page: 'https://ezstaking.tools/bitcanna/txs/${txHash}',
      account_page:
        'https://ezstaking.tools/bitcanna/account/${accountAddress}',
    },
    {
      kind: 'forbole',
      url: 'https://explorer.bitcanna.io',
      tx_page: 'https://explorer.bitcanna.io/transactions/${txHash}',
      account_page: 'https://explorer.bitcanna.io/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/bitcanna',
      tx_page: 'https://ping.pub/bitcanna/tx/${txHash}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitcanna/',
      tx_page: 'https://www.mintscan.io/bitcanna/txs/${txHash}',
      account_page:
        'https://www.mintscan.io/bitcanna/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/bitcanna',
      tx_page: 'https://explorer.stavr.tech/bitcanna/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/bitcanna/account/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bitcanna',
      tx_page: 'https://atomscan.com/bitcanna/transactions/${txHash}',
    },
    {
      kind: 'ValidatorNode Explorer',
      url: 'https://explorer.validatornode.com/bitcanna',
      tx_page: 'https://explorer.validatornode.com/bitcanna/tx/${txHash}',
    },
    {
      kind: 'AlxVoy ⚡ ANODE.TEAM Explorer',
      url: 'https://main.anode.team/bitcanna',
      tx_page: 'https://main.anode.team/bitcanna/txs/${txHash}',
      account_page:
        'https://main.anode.team/bitcanna/account/${accountAddress}',
    },
    {
      kind: 'Moonbys Dashboard',
      url: 'https://explorer.moonbys.com',
      tx_page: 'https://explorer.moonbys.com/tx/${txHash}',
      account_page:
        'https://explorer.moonbys.com/bitcanna/account/${accountAddress}',
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/bitcanna',
      tx_page: 'https://explorer.indonode.net/bitcanna/tx/${txHash}',
    },
    {
      kind: 'Safe Block',
      url: 'https://explorer.safeblock.space/bitcanna',
      tx_page: 'https://explorer.safeblock.space/bitcanna/tx/${txHash}',
      account_page:
        'https://explorer.safeblock.space/bitcanna/account/${accountAddress}',
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/bitcanna',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/bitcanna/tx/${txHash}',
      account_page:
        'https://explorer.whenmoonwhenlambo.money/bitcanna/account/${accountAddress}',
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/bitcanna/',
      tx_page: 'https://explorer.nodeshub.online/bitcanna/tx/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/bitcanna/accounts/${accountAddress}',
    },
    {
      kind: 'CrypTech Explorer',
      url: 'https://explorers.cryptech.com.ua/bitcanna',
      tx_page: 'https://explorers.cryptech.com.ua/bitcanna/txs/${txHash}',
      account_page:
        'https://explorers.cryptech.com.ua/bitcanna/account/${accountAddress}',
    },
    {
      kind: 'Blockchain Explorer by AVIAONE 🟢',
      url: 'https://mainnet.explorer.aviaone.com/bitcanna',
      tx_page: 'https://mainnet.explorer.aviaone.com/bitcanna/txs/${txHash}',
      account_page:
        'https://mainnet.explorer.aviaone.com/bitcanna/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
    },
  ],
};

export const bitcannaAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'bitcanna',
  assets: [
    {
      description:
        'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [
        {
          denom: 'ubcna',
          exponent: 0,
        },
        {
          denom: 'bcna',
          exponent: 6,
        },
      ],
      base: 'ubcna',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
      },
      coingecko_id: 'bitcanna',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg',
        },
      ],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal',
      },
    },
  ],
};

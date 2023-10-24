import type { Chain, AssetLists } from '../types';

export const cosmoshub: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cosmoshub',
  chain_id: 'cosmoshub-4',
  website: 'https://cosmos.network/',
  pretty_name: 'Cosmos Hub',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'cosmos',
  daemon_name: 'gaiad',
  node_home: '$HOME/.gaia',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uatom',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uatom',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/cosmos/gaia',
    recommended_version: 'v13.0.0',
    compatible_versions: ['v13.0.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-linux-amd64',
      'linux/arm64':
        'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-linux-arm64',
      'darwin/amd64':
        'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-darwin-amd64',
      'darwin/arm64':
        'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-darwin-arm64',
      'windows/amd64':
        'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-windows-amd64.exe',
      'windows/arm64':
        'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-windows-arm64.exe',
    },
    genesis: {
      genesis_url:
        'https://github.com/cosmos/mainnet/raw/master/genesis/genesis.cosmoshub-4.json.gz',
    },
    versions: [
      {
        name: 'v9-Lambda',
        tag: 'v9.1.1',
        recommended_version: 'v9.1.1',
        compatible_versions: ['v9.1.1'],
        cosmos_sdk_version: 'v0.45.15-ics',
        ibc_go_version: 'v4.2.1',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27',
        },
        height: 15213800,
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-linux-amd64?checksum=sha256:f62814711be991e535b2fd86f7d4ed8c055bebf774253a06477dc182ce98cdc3',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-linux-arm64?checksum=sha256:a7112c03c7a2bec2a761a3d430bfea9616ed0ebb10c785cafdd6fac117abc504',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-darwin-amd64?checksum=sha256:959f3ddbf3a65b557574527222c5a673b706e9d52a203dfbda2ceb827b760261',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-darwin-arm64?checksum=sha256:0a913a3a9a31456ddfba26eccdfccca61d00b06498faa94019776df391509d27',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v9.1.1/gaiad-v9.1.1-windows-amd64.exe?checksum=sha256:db1d82650ed2a0aa9abccb2bb60dca902c4d1444444f6c76a8b6d61d6bc41e08',
        },
        next_version_name: 'v10',
      },
      {
        name: 'v10',
        tag: 'v10.0.2',
        proposal: 798,
        height: 15816200,
        recommended_version: 'v10.0.2',
        compatible_versions: ['v10.0.0', 'v10.0.1', 'v10.0.2'],
        cosmos_sdk_version: 'v0.45.16-ics',
        ibc_go_version: 'v4.4.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-linux-amd64?checksum=sha256:fcb8210308223d78bc36f3d4c89e2578dcf784994c052cea97efd61f1672cf72',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-linux-arm64?checksum=sha256:db9b69cf224b410c669fa4f820192890357534e74d4693a744ef915028567462',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-darwin-amd64?checksum=sha256:d0bee3b4b243fe1f88ad3258f4648de3a73787434702bcac6e31ca38f81a283a',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-darwin-arm64?checksum=sha256:c8124d66ffa99b51da274656f6c3401b1ec9e165a76f3f01699761672e83a136gaiad-v10.0.1-linux-amd64',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v10.0.2/gaiad-v10.0.2-windows-amd64.exe?checksum=sha256:c02ab2b8fc347f858db1c33fcacafa2467ca550ed83178aee67331762e876926',
        },
        next_version_name: 'v11',
      },
      {
        name: 'v11',
        tag: 'v11.0.0',
        proposal: 804,
        height: 16596000,
        recommended_version: 'v11.0.0',
        compatible_versions: ['v11.0.0'],
        cosmos_sdk_version: 'v0.45.16-ics',
        ibc_go_version: 'v4.4.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-linux-amd64',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-linux-arm64',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-darwin-amd64',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-darwin-arm64',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-windows-amd64.exe',
          'windows/arm64':
            'https://github.com/cosmos/gaia/releases/download/v11.0.0/gaiad-v11.0.0-windows-arm64.exe',
        },
        next_version_name: 'v12',
      },
      {
        name: 'v12',
        tag: 'v12.0.0',
        proposal: 821,
        height: 16985500,
        recommended_version: 'v12.0.0',
        compatible_versions: ['v12.0.0'],
        cosmos_sdk_version: 'v0.45.16-ics',
        ibc_go_version: 'v4.4.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-amd64',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-arm64',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-amd64',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-arm64',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-amd64.exe',
          'windows/arm64':
            'https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-arm64.exe',
        },
        next_version_name: 'v13',
      },
      {
        name: 'v13',
        tag: 'v13.0.0',
        proposal: 825,
        height: 17380000,
        recommended_version: 'v13.0.0',
        compatible_versions: ['v13.0.0'],
        cosmos_sdk_version: 'v0.45.16-ics-lsm',
        ibc_go_version: 'v4.4.2',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-linux-amd64?checksum=sha256:ef34857554888de598edfa411d43d4dc0a820bad285cf044f5d8f91769d5599e',
          'linux/arm64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-linux-arm64?checksum=sha256:114b085fb1bcd5a0de1aaf2d120ad0c102498ed3729cd31318f0baf865f5262a',
          'darwin/amd64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-darwin-amd64?checksum=sha256:58b9ca70f47376590aa4b4a9d75c69428c07bf6d0ad1481e669022bd470ec2c4',
          'darwin/arm64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-darwin-arm64?checksum=sha256:c104c29c5af8e6da8308774f6fed4be3b09544a085c960359ca6ae0ec0045e5f',
          'windows/amd64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-windows-amd64.exe?checksum=sha256:87814b1072465cac7aa48c601bd11ea7563f900eaee15d38a17414cb642fc03d',
          'windows/arm64':
            'https://github.com/cosmos/gaia/releases/download/v13.0.0/gaiad-v13.0.0-windows-arm64.exe?checksum=sha256:c31c4700c073a76d18cfd85cf840a8b140ad1a95ff6788559d05ad3b4fba723c',
        },
        next_version_name: 'v13',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ba3bacc714817218562f743178228f23678b2873',
        address: 'public-seed-node.cosmoshub.certus.one:26656',
        provider: 'certusone',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:14956',
        provider: 'Polkachu',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:14956',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: '57a5297537b9b6ef8b105c08a8ad3f6ac452c423',
        address: 'seeds.goldenratiostaking.net:1618',
        provider: 'Golden Ratio Staking',
      },
      {
        id: '7aa410eb8f699c366b1f1e2904ba6b0d1cac379b',
        address: 'seeds.whispernode.com:14956',
        provider: 'WhisperNode🤐',
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'cosmoshub-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'cosmoshub-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'cosmoshub.rpc.kjnodes.com:11359',
        provider: 'kjnodes',
      },
      {
        id: 'fe21dd474640247888fc7c4dce82da8da08a8bfd',
        address: 'seed-cosmos-hub-01.stakeflow.io:26656',
        provider: 'Stakeflow',
      },
      {
        id: '11c6114a18f7b380e536b0bd17c031f4746e4ded',
        address: 'seed-node.mms.team:43656',
        provider: 'MMS',
      },
      {
        id: '87ccc1dcc0b846fc1623ab9a5ab55682e8e2ad2e',
        address: 'seed-cosmoshub.freshstaking.com:26656',
        provider: 'FreshSTAKING',
      },
    ],
    persistent_peers: [
      {
        id: 'd6318b3bd51a5e2b8ed08f2e520d50289ed32bf1',
        address: '52.79.43.100:26656',
      },
      {
        id: 'b0e746acb6fbed7a0311fe21cfb2ee94581ca3bc',
        address: '51.79.21.187:26656',
      },
      {
        id: '1da54d20c7339713f1d6d28dd2117087dd33d0ca',
        address: 'cosmos-seed.icycro.org:26656',
        provider: 'IcyCRO 🧊',
      },
      {
        id: 'fe21dd474640247888fc7c4dce82da8da08a8bfd',
        address: 'peer-cosmos-hub-01.stakeflow.io:26656',
        provider: 'Stakeflow',
      },
      {
        id: '01c0d24922dcdf6f8816ec814a5c3436c5d5fbc5',
        address: '65.108.195.29:36656',
        provider: 'Staketab',
      },
      {
        id: '28d36c3d45f0208528de3c38f2934ae241bd23e7',
        address: 'peer-cosmoshub.mms.team:26656',
        provider: 'MMS',
      },
      {
        id: '87ccc1dcc0b846fc1623ab9a5ab55682e8e2ad2e',
        address: 'seed-cosmoshub.freshstaking.com:26656',
        provider: 'FreshSTAKING',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-cosmoshub.blockapsis.com',
        provider: 'chainapsis',
      },
      {
        address: 'https://cosmos-rpc.quickapi.com:443',
        provider: 'Chainlayer',
      },
      {
        address: 'https://cosmos-rpc.onivalidator.com',
        provider: 'Oni Validator ⛩️',
      },
      {
        address: 'https://rpc-cosmoshub.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://cosmoshub-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc.cosmoshub.strange.love',
        provider: 'strangelove-ventures',
      },
      {
        address: 'https://rpc-cosmoshub.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://rpc-cosmoshub.pupmos.network',
        provider: 'PUPMØS',
      },
      {
        address: 'https://rpc-cosmoshub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://cosmos-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://cosmos-rpc.staketab.org:443',
        provider: 'Staketab',
      },
      {
        address: 'https://rpc-cosmoshub-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rpc.cosmos.interbloc.org',
        provider: 'Interbloc',
      },
      {
        address: 'https://rpc-cosmoshub.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://rpc.cosmos.dragonstake.io',
        provider: 'DragonStake',
      },
      {
        address: 'https://cosmoshub.rpc.stakin-nodes.com',
        provider: 'Stakin',
      },
      {
        address: 'https://cosmos-rpc.icycro.org',
        provider: 'IcyCRO 🧊',
      },
      {
        address: 'https://rpc.cosmos.bh.rocks',
        provider: 'BlockHunters 🎯',
      },
      {
        address: 'https://cosmos-rpc.rockrpc.net',
        provider: 'RockawayX Infra',
      },
      {
        address: 'http://rpc-cosmoshub.freshstaking.com:26657',
        provider: 'FreshSTAKING',
      },
      {
        address: 'https://cosmoshub.rpc.interchain.ivaldilabs.xyz',
        provider: 'ivaldilabs',
      },
      {
        address: 'https://cosmos-rpc.easy2stake.com/',
        provider: 'Easy 2 Stake',
      },
      {
        address: 'https://rpc.cosmos.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://cosmos.rpc.silknodes.io',
        provider: 'Silk Nodes',
      },
      {
        address: 'https://cosmos-rpc.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://cosmoshub.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://rpc-cosmoshub.goldenratiostaking.net',
        provider: 'Golden Ratio Staking',
      },
      {
        address: 'https://rpc-cosmos-hub-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://cosmos-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://rpc-cosmoshub.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://cosmos-rpc.tienthuattoan.ventures',
        provider: 'TienThuatToan',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/gaia/trpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://cosmos-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://cosmoshub-mainnet.rpc.l0vd.com:443',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'https://cosmoshub-4-archive.rpc.l0vd.com:443',
        provider: 'L0vd.com Archive ❤️',
      },
      {
        address: 'https://rpc-cosmos.in3s.com:443',
        provider: 'in3s.com',
      },
      {
        address: 'https://rpc-cosmos.nodeist.net',
        provider: 'Nodeist',
      },
    ],
    rest: [
      {
        address: 'https://lcd-cosmoshub.blockapsis.com',
        provider: 'chainapsis',
      },
      {
        address: 'https://cosmos-lcd.quickapi.com:443',
        provider: 'Chainlayer',
      },
      {
        address: 'https://rest-cosmoshub.goldenratiostaking.net',
        provider: 'Golden Ratio Staking',
      },
      {
        address: 'https://cosmoshub-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api-cosmoshub.pupmos.network',
        provider: 'PUPMØS',
      },
      {
        address: 'https://api-cosmoshub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://api-cosmoshub-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://cosmos-rest.staketab.org',
        provider: 'Staketab',
      },
      {
        address: 'https://api.cosmos.interbloc.org',
        provider: 'Interbloc',
      },
      {
        address: 'https://lcd.cosmos.dragonstake.io',
        provider: 'DragonStake',
      },
      {
        address: 'https://cosmoshub.rest.stakin-nodes.com',
        provider: 'Stakin',
      },
      {
        address: 'https://rest-cosmoshub.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://rest-cosmoshub.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://cosmoshub.rest.interchain.ivaldilabs.xyz',
        provider: 'ivaldilabs',
      },
      {
        address: 'https://lcd-cosmoshub.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://cosmos-lcd.easy2stake.com',
        provider: 'Easy 2 Stake',
      },
      {
        address: 'https://api.cosmos.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://cosmos.api.silknodes.io',
        provider: 'Silk Nodes',
      },
      {
        address: 'https://cosmos-rest.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://cosmoshub.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://api-cosmos-hub-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://cosmos-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://api-cosmoshub.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://cosmos-api.tienthuattoan.ventures',
        provider: 'TienThuatToan',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/gaia/crpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://cosmos-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://cosmoshub-mainnet.api.l0vd.com',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'https://cosmoshub-4-archive.api.l0vd.com',
        provider: 'L0vd.com Archive ❤️',
      },
      {
        address: 'https://api-cosmos.nodeist.net',
        provider: 'Nodeist',
      },
    ],
    grpc: [
      {
        address: 'cosmoshub-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'grpc-cosmoshub-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'cosmos-grpc.polkachu.com:14990',
        provider: 'Polkachu',
      },
      {
        address: 'grpc.cosmos.interbloc.org:443',
        provider: 'Interbloc',
      },
      {
        address: 'services.staketab.com:9030',
        provider: 'Staketab',
      },
      {
        address: 'grpc.cosmos.dragonstake.io:443',
        provider: 'DragonStake',
      },
      {
        address: 'cosmoshub.grpc.stakin-nodes.com:443',
        provider: 'Stakin',
      },
      {
        address: 'cosmoshub.grpc.interchain.ivaldilabs.xyz:443',
        provider: 'ivaldilabs',
      },
      {
        address: 'https://grpc.cosmos.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'cosmos-grpc.publicnode.com:443',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc-cosmoshub.cosmos-spaces.cloud:1290',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'cosmoshub.grpc.kjnodes.com:11390',
        provider: 'kjnodes',
      },
      {
        address: 'grpc-cosmos-hub-01.stakeflow.io:9090',
        provider: 'Stakeflow',
      },
      {
        address: 'grpc-cosmoshub.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'cosmos-grpc.w3coins.io:14990',
        provider: 'w3coins',
      },
      {
        address: 'grpc-cosmoshub.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'cosmos-grpc.tienthuattoan.ventures:9090',
        provider: 'TienThuatToan',
      },
      {
        address: 'cosmoshub-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️',
      },
      {
        address: 'https://grpc-cosmos.nodeist.net',
        provider: 'Nodeist',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/cosmoshub',
      tx_page: 'https://app.ezstaking.io/cosmoshub/txs/${txHash}',
      account_page:
        'https://app.ezstaking.io/cosmoshub/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/cosmos',
      tx_page: 'https://www.mintscan.io/cosmos/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/cosmos/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cosmos',
      tx_page: 'https://ping.pub/cosmos/tx/${txHash}',
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/cosmos',
      tx_page: 'https://bigdipper.live/cosmos/transactions/${txHash}',
      account_page: 'https://bigdipper.live/cosmos/accounts/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com',
      tx_page: 'https://atomscan.com/transactions/${txHash}',
      account_page: 'https://atomscan.com/accounts/${accountAddress}',
    },
    {
      kind: 'unichain',
      url: 'https://unicha.in/cosmos',
      tx_page: 'https://unicha.in/cosmos/transaction/${txHash}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/cosmoshub',
      tx_page: 'https://explorer.tcnetwork.io/cosmoshub/transaction/${txHash}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/cosmos',
      account_page: 'https://stakeflow.io/cosmos/accounts/${accountAddress}',
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/cosmos',
      tx_page: 'https://exp.nodeist.net/cosmos/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
    },
  ],
};

export const cosmoshubAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cosmoshub',
  assets: [
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [
        {
          denom: 'uatom',
          exponent: 0,
        },
        {
          denom: 'atom',
          exponent: 6,
        },
      ],
      base: 'uatom',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      },
      coingecko_id: 'cosmos',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
        },
      ],
    },
    {
      description: 'Tether USDt on the Cosmos Hub',
      denom_units: [
        {
          denom:
            'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-0',
          },
          chain: {
            channel_id: 'channel-277',
            path: 'transfer/channel-277/erc20/tether/usdt',
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
    {
      description: 'FX on Cosmos Hub',
      denom_units: [
        {
          denom:
            'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
          exponent: 0,
          aliases: ['FX'],
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
      name: 'Function X',
      display: 'FX',
      symbol: 'FX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'fxcore',
            base_denom: 'FX',
            channel_id: 'channel-10',
          },
          chain: {
            channel_id: 'channel-585',
            path: 'transfer/channel-585/FX',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'fxcore',
            base_denom: 'FX',
          },
        },
      ],
    },
  ],
};

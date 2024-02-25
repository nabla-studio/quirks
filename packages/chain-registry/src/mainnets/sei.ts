import type { Chain, AssetLists, ChainVersions } from '../types';

export const sei: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sei',
  status: 'live',
  website: 'https://www.sei.io/',
  network_type: 'mainnet',
  pretty_name: 'Sei',
  chain_id: 'pacific-1',
  bech32_prefix: 'sei',
  daemon_name: 'seid',
  node_home: '$HOME/.sei',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usei',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.02,
        average_gas_price: 0.02,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'usei',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/sei-protocol/sei-chain',
    recommended_version: 'v3.6.1',
    compatible_versions: ['v3.6.1'],
    ibc_go_version: 'sei-ibc-go/v3 v3.3.0',
    cosmos_sdk_version: 'sei-cosmos v0.2.72',
    consensus: {
      type: 'sei-tendermint',
      version: 'v0.2.37',
    },
    cosmwasm_version: 'sei-wasmd v0.0.4',
    cosmwasm_enabled: true,
    cosmwasm_path: '$HOME/.sei/wasm',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/sei-protocol/testnet/main/pacific-1/genesis.json',
    },
    versions: [
      {
        name: '',
        recommended_version: '3.0.8',
        compatible_versions: ['3.0.8'],
        ibc_go_version: 'v3.0.0',
        cosmos_sdk_version: 'v0.45.10',
        cosmwasm_version: 'v0.27.0',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.sei/wasm',
        next_version_name: 'v3.0.9',
      },
      {
        name: 'v3.0.9',
        recommended_version: 'v3.0.9',
        compatible_versions: ['v3.0.9'],
        proposal: 24,
        height: 25259000,
        ibc_go_version: 'v3.1.0',
        cosmos_sdk_version: 'v0.45.10',
        cosmwasm_version: 'v0.27.0',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.sei/wasm',
        next_version_name: 'v3.1.1',
      },
      {
        name: 'v3.1.1',
        recommended_version: 'v3.1.1',
        compatible_versions: ['v3.1.1'],
        proposal: 32,
        height: 29772820,
        ibc_go_version: 'v3.2.0',
        cosmos_sdk_version: 'v0.45.10',
        cosmwasm_version: 'v0.27.0',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.sei/wasm',
        next_version_name: 'v3.2.1',
      },
      {
        name: 'v3.2.1',
        recommended_version: 'v3.2.1',
        compatible_versions: ['v3.2.1'],
        proposal: 42,
        height: 34078260,
        ibc_go_version: 'v3.2.0',
        cosmos_sdk_version: 'v0.45.10',
        cosmwasm_version: 'v0.27.0',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.sei/wasm',
        next_version_name: 'v3.3.0',
      },
      {
        name: 'v3.3.0',
        recommended_version: 'v3.3.4',
        compatible_versions: ['v3.3.1', 'v3.3.2', 'v3.3.3', 'v3.3.4'],
        ibc_go_version: 'sei-ibc-go/v3 v3.3.0',
        cosmos_sdk_version: 'sei-cosmos v0.2.63',
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.2.28',
        },
        cosmwasm_version: 'sei-wasmd v0.0.2',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.sei/wasm',
        next_version_name: 'v3.5.0',
      },
      {
        name: 'v3.5.0',
        recommended_version: 'v3.5.1',
        compatible_versions: ['v3.5.0', 'V3.5.1'],
        ibc_go_version: 'sei-ibc-go/v3 v3.3.0',
        cosmos_sdk_version: 'sei-cosmos v0.2.63',
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.2.35',
        },
        cosmwasm_version: 'sei-wasmd v0.0.4',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.sei/wasm',
        next_version_name: 'v3.6.1',
      },
      {
        name: 'v3.6.1',
        proposal: 49,
        height: 53894102,
        recommended_version: 'v3.6.1',
        compatible_versions: ['v3.6.1'],
        ibc_go_version: 'sei-ibc-go/v3 v3.3.0',
        cosmos_sdk_version: 'sei-cosmos v0.2.72',
        consensus: {
          type: 'sei-tendermint',
          version: 'v0.2.37',
        },
        cosmwasm_version: 'sei-wasmd v0.0.4',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.sei/wasm',
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
  },
  description:
    'Sei is the fastest Layer 1 blockchain, designed to scale with the industry.',
  peers: {
    seeds: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:11956',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'sei-mainnet-seed.autostake.com:26806',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:11956',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'sei.rpc.kjnodes.com:16859',
        provider: 'kjnodes',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:11956',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'sei-mainnet-peer.autostake.com:26806',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'd9bfa29e0cf9c4ce0cc9c26d98e5d97228f93b0b',
        address: 'sei.rpc.kjnodes.com:16856',
        provider: 'kjnodes',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://sei-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://sei-rpc.polkachu.com/',
        provider: 'polkachu.com',
      },
      {
        address: 'https://sei-rpc.brocha.in/',
        provider: 'Brochain',
      },
      {
        address: 'https://rpc-sei.stingray.plus/',
        provider: 'StingRay',
      },
      {
        address: 'https://rpc-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://sei.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://sei-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://sei-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://sei-api.polkachu.com/',
        provider: 'polkachu.com',
      },
      {
        address: 'https://sei-rest.brocha.in/',
        provider: 'Brochain',
      },
      {
        address: 'https://api-sei.stingray.plus/',
        provider: 'StingRay',
      },
      {
        address: 'https://lcd-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://sei.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://sei-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'https://sei-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://sei-grpc.polkachu.com:11990/',
        provider: 'polkachu.com',
      },
      {
        address: 'sei-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://grpc-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'sei.grpc.kjnodes.com:443',
        provider: 'kjnodes',
      },
      {
        address: 'sei-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/sei',
      tx_page: 'https://ping.pub/sei/tx/${txHash}',
      account_page: 'https://ping.pub/sei/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sei',
      tx_page: 'https://www.mintscan.io/sei/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/sei/accounts/${accountAddress}',
    },
    {
      kind: 'seiscan',
      url: 'https://www.seiscan.app/pacific-1',
      tx_page: 'https://www.seiscan.app/pacific-1/txs/${txHash}',
      account_page:
        'https://www.seiscan.app/pacific-1/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
    },
  ],
};

export const seiAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sei',
  assets: [
    {
      description: 'The native staking token of Sei.',
      denom_units: [
        {
          denom: 'usei',
          exponent: 0,
        },
        {
          denom: 'sei',
          exponent: 6,
        },
      ],
      base: 'usei',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
      },
      coingecko_id: 'sei-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
        },
      ],
    },
    {
      description:
        'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denom_units: [
        {
          denom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
          exponent: 0,
        },
        {
          denom: 'oin',
          exponent: 6,
        },
      ],
      address: 'sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w',
      base: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png',
        },
      ],
    },
    {
      description: 'ERIS liquid staked SEI',
      denom_units: [
        {
          denom:
            'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
          exponent: 0,
        },
        {
          denom: 'ampSEI',
          exponent: 6,
        },
      ],
      base: 'factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI',
      name: 'ERIS Amplified SEI',
      display: 'ampSEI',
      symbol: 'ampSEI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/ampsei.svg',
        },
      ],
    },
    {
      description: 'Popeye the Seilor',
      denom_units: [
        {
          denom: 'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye',
          exponent: 0,
        },
        {
          denom: 'popeye',
          exponent: 6,
        },
      ],
      base: 'factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye',
      name: 'Popeye',
      display: 'popeye',
      symbol: 'POPEYE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/popeye.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/popeye.png',
        },
      ],
    },
    {
      description: 'A wise dog and a marshal arts master',
      denom_units: [
        {
          denom: 'factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei',
          exponent: 0,
        },
        {
          denom: 'sensei',
          exponent: 6,
        },
      ],
      base: 'factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei',
      name: 'Sensei Dog',
      display: 'sensei',
      symbol: 'SENSEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SenseiDog.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SenseiDog.png',
        },
      ],
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [
        {
          denom:
            'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
          exponent: 0,
        },
        {
          denom: 'WOSMO',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channel_id: 'channel-0',
          },
          chain: {
            channel_id: 'channel-782',
            path: 'transfer/channel-782/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/WOSMO.png',
      },
    },
  ],
};

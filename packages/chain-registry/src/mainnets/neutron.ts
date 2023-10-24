import type { Chain, AssetLists } from '../types';

export const neutron: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'neutron',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Neutron',
  chain_id: 'neutron-1',
  bech32_prefix: 'neutron',
  daemon_name: 'neutrond',
  node_home: '$HOME/.neutrond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'untrn',
        low_gas_price: 0.5,
        average_gas_price: 0.5,
        high_gas_price: 0.5,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'untrn',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/neutron-org/neutron',
    recommended_version: 'v1.0.4',
    compatible_versions: ['v1.0.3', 'v1.0.4'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.31',
    cosmwasm_enabled: true,
    ibc_go_version: '4.3.0',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/neutron-org/mainnet-assets/main/neutron-1-genesis.json',
    },
    versions: [
      {
        name: 'v1.0.1',
        recommended_version: 'v1.0.4',
        compatible_versions: ['v1.0.3', 'v1.0.4'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg',
  },
  peers: {
    seeds: [
      {
        id: '24f609fb5946ca3a979f40b7f54132c00104433e',
        address: 'p2p-erheim.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: 'b1c6fa570a184c56d0d736d260b8065d887e717c',
        address: 'p2p-kralum.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:19156',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'f4422e68f9a678838522d75fa8221985c723294d',
        address: 'seeds.whispernode.com:19156',
        provider: 'WhisperNode🤐',
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'neutron-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'neutron-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'e5d2743d9a3de514e4f7b9461bf3f0c1500c58d9',
        address: 'neutron.peer.stakewith.us:39956',
        provider: 'StakeWithUs',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-kralum.neutron-1.neutron.org',
        provider: 'Neutron',
      },
      {
        address: 'https://rpc.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://neutron-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-neutron.whispernode.com',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://rpc-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://posthuman-neutron-rpc.ingress.europlots.com',
        provider: 'POSTHUMAN ꝏ DVS',
      },
      {
        address: 'http://rpc.neutron.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://neutron-rpc.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/trpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://rpc-neutron.in3s.com:443',
        provider: 'in3s.com',
      },
    ],
    rest: [
      {
        address: 'https://rest-kralum.neutron-1.neutron.org',
        provider: 'Neutron',
      },
      {
        address: 'https://api.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://neutron-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://lcd-neutron.whispernode.com',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://api-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://api.neutron.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://neutron-rest.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/crpc',
        provider: 'PRO Delegators',
      },
    ],
    grpc: [
      {
        address: 'grpc-kralum.neutron-1.neutron.org:80',
        provider: 'Neutron',
      },
      {
        address: 'https://grpc.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://grpc-web.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'neutron-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'grpc-neutron.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'grpc-neutron.cosmos-spaces.cloud:3090',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'grpc.neutron.nodestake.top:9090',
        provider: 'NodeStake',
      },
      {
        address: 'neutron-grpc.publicnode.com:443',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/neutron',
      tx_page: 'https://www.mintscan.io/neutron/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/neutron/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg',
    },
  ],
};

export const neutronAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'neutron',
  assets: [
    {
      description: 'The native token of Neutron chain.',
      denom_units: [
        {
          denom: 'untrn',
          exponent: 0,
        },
        {
          denom: 'ntrn',
          exponent: 6,
        },
      ],
      base: 'untrn',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
      },
      coingecko_id: 'neutron-3',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
        },
      ],
    },
  ],
};

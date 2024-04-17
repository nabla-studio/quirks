import type { Chain, AssetLists, ChainVersions } from '../types';

export const terpnettestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'terpnettestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Terp-Network',
  chain_id: '90u-4',
  bech32_prefix: 'terp',
  daemon_name: 'terpd',
  node_home: '$HOME/.terp',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uthiolx',
        fixed_min_gas_price: 0.5,
        low_gas_price: 0.75,
        average_gas_price: 1,
        high_gas_price: 1.25,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uterpx',
      },
    ],
  },

  codebase: {
    git_repo: 'github.com/terpnetwork/terp-core.git',
    recommended_version: 'v4.2.0',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2',
    },
    compatible_versions: [],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/terpnetwork/test-net/master/90u-4/genesis.json',
    },
    binaries: {
      'linux/amd64':
        'https://github.com/terpnetwork/terp-core/releases/download/v4.2.0/terpd-linux-amd64',
      'linux/arm64':
        'https://github.com/terpnetwork/terp-core/releases/download/v4.2.0/terpd-linux-arm64',
    },
    versions: [
      {
        name: 'v4.2.0',
        recommended_version: 'v4.2.0',
        compatible_versions: [],
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '9e194721d68dd28d3c4b625c17b2cb287ef30327',
        address: 'testnet-peer.terp.network:26656',
      },
      {
        id: '15f5bc75be9746fd1f712ca046502cae8a0f6ce7',
        address: 'terp-testnet.nodejumper.io:30656',
      },
      {
        id: '51d48be3809bb8907c1ef5f747e53cdd0c9ded1b',
        address: 'terp-testnet-peer.itrocket.net:443',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-rpc.terp.network:443/',
        provider: 'Terpnet Foundation',
      },
      {
        address: 'https://terp-testnet-rpc.itrocket.net:443/',
        provider: 'itrocket',
      },
    ],
    rest: [
      {
        address: 'https://testnet-api.terp.network:443/',
        provider: 'Terpnet Foundation',
      },
      {
        address: 'https://terp-testnet-api.itrocket.net:443/',
        provider: 'itrocket',
      },
    ],
    grpc: [
      {
        address: 'terp-testnet-grpc.itrocket.net/',
        provider: 'itrocket',
      },
    ],
  },
  explorers: [
    {
      kind: 'Ping Pub',
      url: 'https://explorer.nodestake.top/terp-testnet',
      tx_page: 'https://explorer.nodestake.top/terp-testnet/tx/${txHash}',
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com',
      tx_page: 'https://explorer.nodexcapital.com/terp/tx/${txHash}',
      account_page:
        'https://explorer.nodexcapital.com/terp/account/{$accountAddress}',
    },
  ],
};

export const terpnettestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'terpnettestnet',
  assets: [
    {
      description:
        "Terp Token (TERP) is the Terp Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom: 'uterpx',
          exponent: 0,
        },
        {
          denom: 'terpx',
          exponent: 6,
        },
      ],
      base: 'uterpx',
      name: 'Terp Testnet Token',
      display: 'terpx',
      symbol: 'TERPX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png',
        },
      ],
    },
    {
      description:
        "Persy Gas Token (Persy) is the Terp Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom: 'uthiolx',
          exponent: 0,
        },
        {
          denom: 'thiolx',
          exponent: 6,
        },
      ],
      base: 'uthiolx',
      name: 'Thiol Testnet Gas Token',
      display: 'thiolx',
      symbol: 'THIOLX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png',
        },
      ],
    },
  ],
};

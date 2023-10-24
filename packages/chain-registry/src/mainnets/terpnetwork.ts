import type { Chain, AssetLists } from '../types';

export const terpnetwork: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'terpnetwork',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Terp-Network',
  chain_id: 'morocco-1',
  bech32_prefix: 'terp',
  daemon_name: 'terp',
  node_home: '$HOME/.terp',
  codebase: {
    git_repo: 'https://github.com/terpnetwork/terp-core.git',
    recommended_version: 'barberry',
    consensus: {
      type: 'cometbft',
      version: '0.37.1',
    },
    compatible_versions: ['v1.0.0', 'v1.0.0-stable', 'barberry'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/terpnetwork/mainnet/main/morocco-1/genesis.json',
    },
    binaries: {
      'linux/amd64':
        'https://github.com/terpnetwork/terp-core/releases/download/barberry/terpd_linux_amd64',
    },
    versions: [
      {
        name: 'v1.0.0-stable',
        recommended_version: 'v1.0.0-stable',
        compatible_versions: ['v1.0.0', 'v1.0.0-stable'],
        consensus: {
          type: 'cometbft',
          version: '0.37.0',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/terpnetwork/terp-core/archive/refs/tags/v1.0.0-stable.tar.gz',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png',
  },
  peers: {
    seeds: [
      {
        id: 'd8256642afae77264bcce1631d51233a9d00249b',
        address: 'terp-mainnet-seed.itrocket.net:13656',
        provider: 'itrocket.net',
      },
    ],
    persistent_peers: [
      {
        id: 'a81dc3bf1bb1c3837b768eeb82659eecc971890b',
        address: 'terp-mainnet-peer.itrocket.net:13656',
        provider: 'itrocket.net',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-terp.zenchainlabs.io/',
        provider: 'ZenChainLabs',
      },
      {
        address: 'https://rpc.terp.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'https://terp-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket.net',
      },
    ],
    rest: [
      {
        address: 'https://api-terp.zenchainlabs.io:443',
        provider: 'ZenChainLabs',
      },
      {
        address: 'https://rpc.terp.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'https://terp-mainnet-api.itrocket.net:443',
        provider: 'itrocket.net',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.terp.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'terp-mainnet-grpc.itrocket.net:13090',
        provider: 'itrocket.net',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodestake.top',
      tx_page: 'https://explorer.nodestake.top/terp/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.top/terp/account/{$accountAddress}',
    },
    {
      kind: 'ZenChainLabs',
      url: 'https://terp.zenscan.io/',
      tx_page: 'https://terp.zenscan.io/transaction.php?hash=${txHash}',
      account_page:
        'https://terp.zenscan.io/address.php?address=${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/logo.png',
    },
  ],
};

export const terpnetworkAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'terpnetwork',
  assets: [
    {
      description:
        "Terp Token (TERP) is the Terp Network's native utility token, used as the primary means to govern & secure the blockchain.",
      denom_units: [
        {
          denom: 'uterp',
          exponent: 0,
        },
        {
          denom: 'terp',
          exponent: 6,
        },
      ],
      base: 'uterp',
      name: 'Terp Network Native Token',
      display: 'terp',
      symbol: 'TERP',
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
        "Thiol Gas Token (Thiols) is the Terp Network's native utility token, used as the primary means to govern, secure the blockchain & incentivize participants.",
      denom_units: [
        {
          denom: 'uthiol',
          exponent: 0,
        },
        {
          denom: 'thiol',
          exponent: 6,
        },
      ],
      base: 'uthiol',
      name: 'Thiol Terp Gas Token',
      display: 'thiol',
      symbol: 'THIOL',
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

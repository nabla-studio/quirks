import type { Chain, AssetLists } from '../types';

export const akashtestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'akashtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://akash.network/',
  pretty_name: 'Sandbox',
  chain_id: 'sandbox-01',
  bech32_prefix: 'akash',
  daemon_name: 'akash',
  node_home: '$HOME/.akash',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uakt',
        fixed_min_gas_price: 0,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uakt',
      },
    ],
  },
  codebase: {
    git_repo: 'github.com/ovrclk/akash',
    recommended_version: 'v0.22.0',
    compatible_versions: ['v0.22.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_amd64.zip',
      'linux/arm64':
        'https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_arm64.zip',
    },
    versions: [
      {
        name: 'v0',
        recommended_version: 'v0.22.0',
        compatible_versions: ['v0.22.0'],
      },
    ],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/akash-network/net/master/sandbox/genesis.json',
    },
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
  },
  peers: {
    seeds: [
      {
        id: '865b21750f7fc5a2fa901192f7ccbe1212cd6d55',
        address: 'p2p.sandbox-01.aksh.pw:26656',
      },
    ],
    persistent_peers: [
      {
        id: '865b21750f7fc5a2fa901192f7ccbe1212cd6d55',
        address: 'p2p.sandbox-01.aksh.pw:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.sandbox-01.aksh.pw:443',
        provider: 'akash',
      },
    ],
    rest: [
      {
        address: 'https://api.sandbox-01.aksh.pw:443',
        provider: 'akash',
      },
    ],
    grpc: [
      {
        address: 'grpc.sandbox-01.aksh.pw:9090',
        provider: 'akash',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.sandbox-01.aksh.pw/akash',
      tx_page: 'https://explorer.sandbox-01.aksh.pw/akash/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
    },
  ],
};

export const akashtestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'akashtestnet',
  assets: [
    {
      description:
        "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      denom_units: [
        {
          denom: 'uakt',
          exponent: 0,
        },
        {
          denom: 'akt',
          exponent: 6,
        },
      ],
      base: 'uakt',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
        },
      ],
    },
  ],
};

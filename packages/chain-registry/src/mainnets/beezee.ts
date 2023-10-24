import type { Chain, AssetLists } from '../types';

export const beezee: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'beezee',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'BeeZee',
  chain_id: 'beezee-1',
  bech32_prefix: 'bze',
  daemon_name: 'bzed',
  node_home: '$HOME/.bze',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ubze',
        fixed_min_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ubze',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/bze-alphateam/bze',
    recommended_version: 'v6.0.0',
    compatible_versions: ['v6.0.0'],
    binaries: {
      'darwin/amd64':
        'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-amd64.tar.gz',
      'darwin/arm64':
        'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-arm64.tar.gz',
      'linux/amd64':
        'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-amd64.tar.gz',
      'linux/arm64':
        'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-arm64.tar.gz',
      'windows/amd64':
        'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-win64.zip',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/bze-alphateam/bze/main/genesis.json',
    },
    versions: [
      {
        name: 'v6.0.0',
        recommended_version: 'v6.0.0',
        compatible_versions: ['v6.0.0'],
        binaries: {
          'darwin/amd64':
            'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-amd64.tar.gz',
          'darwin/arm64':
            'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-darwin-arm64.tar.gz',
          'linux/amd64':
            'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-amd64.tar.gz',
          'linux/arm64':
            'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-linux-arm64.tar.gz',
          'windows/amd64':
            'https://github.com/bze-alphateam/bze/releases/download/v6.0.0/bze-6.0.0-win64.zip',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
  },
  peers: {
    seeds: [
      {
        id: '6385d5fb198e3a793498019bb8917973325e5eb7',
        address: '51.15.138.216:26656',
        provider: 'AlphaTeam',
      },
    ],
    persistent_peers: [
      {
        id: '6385d5fb198e3a793498019bb8917973325e5eb7',
        address: '51.15.228.169:26656',
        provider: 'AlphaTeam',
      },
      {
        id: 'ce25088267cef31f3be1ec03263524764c5c80bb',
        address: '163.172.130.162:26656',
        provider: 'AlphaTeam',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.getbze.com',
        provider: 'AlphaTeam',
      },
      {
        address: 'https://rpc-1.getbze.com',
        provider: 'AlphaTeam',
      },
      {
        address: 'https://rpc-2.getbze.com',
        provider: 'AlphaTeam',
      },
    ],
    rest: [
      {
        address: 'https://rest.getbze.com',
        provider: 'AlphaTeam',
      },
      {
        address: 'https://rest-1.getbze.com',
        provider: 'AlphaTeam',
      },
      {
        address: 'https://rest-2.getbze.com',
        provider: 'AlphaTeam',
      },
    ],
    grpc: [
      {
        address: '144.91.122.246:9999',
        provider: 'AlphaTeam',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/beezee',
      tx_page: 'https://ping.pub/beezee/tx/${txHash}',
      account_page: 'https://ping.pub/beezee/account/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://explorers.vidulum.app/beezee',
      tx_page: 'https://explorers.vidulum.app/beezee/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.erialos.me/beezee',
      tx_page: 'https://explorer.erialos.me/beezee/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/beezee',
      tx_page: 'https://atomscan.com/beezee/transactions/${txHash}',
      account_page: 'https://atomscan.com/beezee/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
    },
  ],
};

export const beezeeAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'beezee',
  assets: [
    {
      description: 'BeeZee native blockchain',
      denom_units: [
        {
          denom: 'ubze',
          exponent: 0,
        },
        {
          denom: 'bze',
          exponent: 6,
        },
      ],
      base: 'ubze',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
      },
      coingecko_id: 'bzedge',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
        },
      ],
    },
  ],
};

import type { Chain, AssetLists } from '../types';

export const vidulum: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'vidulum',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://vidulum.app/',
  pretty_name: 'Vidulum',
  chain_id: 'vidulum-1',
  bech32_prefix: 'vdl',
  daemon_name: 'vidulumd',
  node_home: '$HOME/.vidulum',
  key_algos: ['secp256k1'],
  slip44: 370,
  fees: {
    fee_tokens: [
      {
        denom: 'uvdl',
        fixed_min_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uvdl',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/vidulum/mainnet',
    recommended_version: 'v1.2.0',
    compatible_versions: ['v1.2.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_amd64.tar.gz',
      'linux/arm64':
        'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_darwin_amd64.tar.gz',
      'windows/amd64':
        'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_windows_amd64.zip',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/vidulum/mainnet/main/genesis.json',
    },
    versions: [
      {
        name: 'v1.2.0',
        recommended_version: 'v1.2.0',
        compatible_versions: ['v1.2.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_amd64.tar.gz',
          'linux/arm64':
            'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_darwin_amd64.tar.gz',
          'windows/amd64':
            'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_windows_amd64.zip',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg',
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '52051fef449e76eb399966312f523e8e5e27490b',
        address: '95.217.118.211:26656',
        provider: 'minerpool',
      },
      {
        id: '209688f5bccb88f6397a97cc11ab545a014aa559',
        address: '137.184.92.115:26656',
        provider: '1square',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet-rpc.vidulum.app/',
        provider: 'vidulum',
      },
      {
        address: 'https://rpc-vidulum-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rpc-vdl.nodine.id',
        provider: 'Nodine.ID',
      },
    ],
    rest: [
      {
        address: 'https://mainnet-lcd.vidulum.app',
        provider: 'vidulum',
      },
      {
        address: 'https://api-vidulum-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://api-vdl.nodine.id/',
        provider: 'Nodine.ID',
      },
    ],
    grpc: [
      {
        address: 'grpc-vidulum-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorers.vidulum.app/vidulum',
      tx_page: 'https://explorers.vidulum.app/vidulum/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/vidulum',
      tx_page: 'https://ping.pub/vidulum/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/vidulum',
      tx_page: 'https://atomscan.com/vidulum/transactions/${txHash}',
      account_page: 'https://atomscan.com/vidulum/accounts/${accountAddress}',
    },
    {
      kind: 'Nodine Explorer',
      url: 'https://explorer.co.id/vidulum',
      tx_page: 'https://explorer.co.id/vidulum/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg',
    },
  ],
};

export const vidulumAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'vidulum',
  assets: [
    {
      description: 'The native token of Vidulum',
      denom_units: [
        {
          denom: 'uvdl',
          exponent: 0,
        },
        {
          denom: 'vdl',
          exponent: 6,
        },
      ],
      base: 'uvdl',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
      },
      coingecko_id: 'vidulum',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg',
        },
      ],
    },
  ],
};

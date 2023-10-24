import type { Chain, AssetLists } from '../types';

export const entrypointtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'entrypointtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'EntryPoint Testnet',
  chain_id: 'entrypoint-pubtest-1',
  bech32_prefix: 'entrypoint',
  daemon_name: 'entrypointd',
  node_home: '$HOME/.entrypointd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom:
          'ibc/E774302AE43D5FA03522C42B14823288E7DD1B2F54F85DFD3D6FC3E5FCF54645',
        low_gas_price: 0.01,
        average_gas_price: 0.01,
        high_gas_price: 0.02,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uentry',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/entrypoint-zone/testnets',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    cosmos_sdk_version: '0.47.4',
    consensus: {
      type: 'cometbft',
      version: '0.37.2',
    },
    genesis: {
      genesis_url:
        'https://github.com/entrypoint-zone/testnets/blob/2c4490fcce0f9f32d579e2581e592f5c320e5c14/entrypoint-pubtest-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        cosmos_sdk_version: '0.47.4',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-rest.entrypoint.zone',
        provider: 'Simply Staking',
      },
    ],
    rest: [
      {
        address: 'https://testnet-rpc.entrypoint.zone',
        provider: 'Simply Staking',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg',
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.entrypoint.zone/entrypoint',
      tx_page: 'https://explorer.entrypoint.zone/entrypoint/tx/${txHash}',
      account_page:
        'https://explorer.entrypoint.zone/entrypoint/account/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/entrypoint',
      tx_page: 'https://testnet.ping.pub/entrypoint/tx/${txHash}',
      account_page:
        'https://testnet.ping.pub/entrypoint/account/${accountAddress}',
    },
  ],
  keywords: ['testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg',
    },
  ],
};

export const entrypointtestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'entrypointtestnet',
  assets: [
    {
      description: 'The native token of EntryPoint',
      denom_units: [
        {
          denom: 'uentry',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'entry',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'uentry',
      name: 'EntryPoint',
      display: 'entry',
      symbol: 'ENTRY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.svg',
      },
      keywords: ['staking', 'governance', 'vaults'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.svg',
        },
      ],
    },
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Cosmos Hub, via Osmosis.',
      denom_units: [
        {
          denom:
            'ibc/E774302AE43D5FA03522C42B14823288E7DD1B2F54F85DFD3D6FC3E5FCF54645',
          exponent: 0,
        },
        {
          denom: 'atom',
          exponent: 6,
        },
      ],
      base: 'ibc/E774302AE43D5FA03522C42B14823288E7DD1B2F54F85DFD3D6FC3E5FCF54645',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'ibc/B28CFD38D84A480EF2A03AC575DCB05004D934A603A5A642888847BCDA6340C0',
            channel_id: 'channel-1543',
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-1497/uatom',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
        },
      ],
    },
  ],
};

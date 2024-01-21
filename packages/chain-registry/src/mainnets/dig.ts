import type { Chain, AssetLists, ChainVersions } from '../types';

export const dig: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dig',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://digchain.org/',
  pretty_name: 'Dig Chain',
  chain_id: 'dig-1',
  bech32_prefix: 'dig',
  daemon_name: 'digd',
  node_home: '$HOME/.dig',
  key_algos: ['secp256k1', 'ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'udig',
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.035,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'udig',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/notional-labs/dig',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/notional-labs/dig/master/networks/mainnets/dig-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png',
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '64eccffdc60a206227032d3a021fbf9dfc686a17',
        address: '194.163.156.84:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-1-dig.notional.ventures',
      },
      {
        address: 'https://rpc-dig-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
    ],
    rest: [
      {
        address: 'https://api-1-dig.notional.ventures',
      },
      {
        address: 'https://api-dig-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
    ],
    grpc: [
      {
        address: 'grpc-dig-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/dig',
      tx_page: 'https://ping.pub/dig/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/dig',
      tx_page: 'https://atomscan.com/dig/transactions/${txHash}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/dig',
      tx_page: 'https://explorer.tcnetwork.io/dig/transaction/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png',
    },
  ],
};

export const digAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dig',
  assets: [
    {
      description: 'Native token of Dig Chain',
      denom_units: [
        {
          denom: 'udig',
          exponent: 0,
        },
        {
          denom: 'dig',
          exponent: 6,
        },
      ],
      base: 'udig',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png',
      },
      coingecko_id: 'dig-chain',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png',
        },
      ],
    },
  ],
};

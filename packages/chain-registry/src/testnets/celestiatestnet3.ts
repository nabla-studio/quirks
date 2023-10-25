import type { Chain, AssetLists } from '../types';

export const celestiatestnet3: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'celestiatestnet3',
  chain_id: 'mocha-4',
  pretty_name: 'Mocha Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'celestia',
  daemon_name: 'celestia-appd',
  node_home: '$HOME/.celestia-app',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'utia',
        fixed_min_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/celestiaorg/celestia-app',
    recommended_version: 'v1.0.0-rc14',
    compatible_versions: ['v1.0.0-rc14'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/celestiaorg/networks/master/mocha-3/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0-rc14',
        recommended_version: 'v1.0.0-rc14',
        compatible_versions: ['v1.0.0-rc14'],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '3314051954fc072a0678ec0cbac690ad8676ab98',
        address: '65.108.66.220:26656',
        provider: 'P-OPS',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mocha.pops.one',
        provider: 'P-OPs',
      },
    ],
    rest: [
      {
        address: 'https://api-mocha.pops.one',
        provider: 'P-OPs',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/celestia-testnet',
      tx_page: 'https://testnet.mintscan.io/celestia-testnet/txs/${txHash}',
    },
  ],
};

export const celestiatestnet3AssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'celestiatestnet3',
  assets: [
    {
      description: '',
      denom_units: [
        {
          denom: 'utia',
          exponent: 0,
        },
        {
          denom: 'tia',
          exponent: 6,
        },
      ],
      base: 'utia',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg',
        },
      ],
    },
  ],
};
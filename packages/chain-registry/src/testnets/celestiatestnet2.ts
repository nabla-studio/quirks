import type { Chain, AssetLists } from '../types';

export const celestiatestnet2: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'celestiatestnet2',
  chain_id: 'arabica-10',
  pretty_name: 'Arabica Testnet',
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
        'https://raw.githubusercontent.com/celestiaorg/networks/master/arabica-9/genesis.json',
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
        id: 'ad8e16b0b78cd44239590c49da75ba074c02e1c4',
        address: 'consensus-full.celestia-arabica-10.com',
        provider: 'Celestia Labs',
      },
      {
        id: '4686b0b70a8d1a2b24cbe0f856ba2b52a38a02b1',
        address: 'full.consensus.celestia-arabica-10.com',
        provider: 'Celestia Labs',
      },
      {
        id: '25c2e83bde060c51bb117c6526e14053bd4a83ec',
        address: 'consensus-validator.celestia-arabica-10.com',
        provider: 'Celestia Labs',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://consensus-full.celestia-arabica-10.com/',
        provider: 'Celestia Labs',
      },
    ],
    rest: [
      {
        address: 'https://api.consensus.celestia-arabica-10.com/',
        provider: 'Celestia Labs',
      },
    ],
  },
  explorers: [
    {
      kind: 'Ping.Pub',
      url: 'https://explorer.celestia-arabica-10.com/arabica-10',
      tx_page:
        'https://explorer.celestia-arabica-10.com/arabica-10/tx/${txHash}',
    },
  ],
};

export const celestiatestnet2AssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'celestiatestnet2',
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
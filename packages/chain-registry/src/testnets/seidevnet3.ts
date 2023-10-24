import type { Chain, AssetLists } from '../types';

export const seidevnet3: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'seidevnet3',
  chain_id: 'sei-devnet-3',
  pretty_name: 'Sei Devnet 3',
  status: 'live',
  network_type: 'devnet',
  bech32_prefix: 'sei',
  daemon_name: 'seid',
  node_home: '$HOME/.sei',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usei',
        fixed_min_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/sei-protocol/sei-chain',
    recommended_version: '2.0.40beta',
    compatible_versions: [
      '2.0.27beta',
      '2.0.29eta',
      '2.0.31beta',
      '2.0.32beta',
      '2.0.36beta',
      '2.0.37beta',
      '2.0.39beta',
      '2.0.40beta',
    ],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/sei-protocol/testnet/main/sei-devnet-3/genesis.json',
    },
    versions: [
      {
        name: '2.0.40beta',
        recommended_version: '2.0.40beta',
        compatible_versions: [
          '2.0.27beta',
          '2.0.29eta',
          '2.0.31beta',
          '2.0.32beta',
          '2.0.36beta',
          '2.0.37beta',
          '2.0.39beta',
          '2.0.40beta',
        ],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f',
        address: 'sei-devnet-seed.p2p.brocha.in:30515',
        provider: 'Brochain',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.sei-devnet-3.seinetwork.io',
        provider: 'Sei Foundation',
      },
      {
        address: 'https://sei-testnet-2-rpc.brocha.in',
        provider: 'Brochain',
      },
    ],
    rest: [
      {
        address: 'https://rest.sei-devnet-3.seinetwork.io',
        provider: 'Sei Foundation',
      },
      {
        address: 'https://sei-testnet-2-rest.brocha.in',
        provider: 'Brochain',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.sei-devnet-3.seinetwork.io',
        provider: 'Sei Foundation',
      },
    ],
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://devnet.sei.explorers.guru',
      tx_page: 'https://devnet.sei.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'Brochain',
      url: 'https://testnet-explorer.brocha.in/sei%20atlantic%202',
      tx_page:
        'https://testnet-explorer.brocha.in/sei%20atlantic%202/tx/${txHash}',
    },
  ],
};

export const seidevnet3AssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'seidevnet3',
  assets: [
    {
      description:
        'The native staking and governance token of the Atlantic testnet version of Sei.',
      denom_units: [
        {
          denom: 'usei',
          exponent: 0,
        },
        {
          denom: 'sei',
          exponent: 6,
        },
      ],
      base: 'usei',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seidevnet3/images/sei.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/seidevnet3/images/sei.png',
        },
      ],
    },
  ],
};

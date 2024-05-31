import type { Chain, AssetList, Versions } from '../types';

export const mantrachaintestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'mantrachaintestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'MANTRA Hongbai Testnet',
  chain_id: 'mantra-hongbai-1',
  bech32_prefix: 'uom',
  daemon_name: 'mantrachaind',
  node_home: '$HOME/.mantrachain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uom',
        fixed_min_gas_price: 0,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.003,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uom',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/MANTRA-Finance',
    recommended_version: '3.0.0',
    compatible_versions: ['3.0.0'],
    cosmos_sdk_version: '0.47.3',
    consensus: {
      type: 'cometbft',
      version: '0.37',
    },
    cosmwasm_version: '0.41',
    cosmwasm_enabled: true,
    versions: [
      {
        name: '1.0.0',
        recommended_version: '1.0.0',
        compatible_versions: ['1.0.0'],
        cosmos_sdk_version: '0.47.3',
        consensus: {
          type: 'cometbft',
          version: '0.37',
        },
        cosmwasm_version: '0.41',
        cosmwasm_enabled: true,
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'd6016af7cb20cf1905bd61468f6a61decb3fd7c0',
        address: 'seed.hongbai.mantrachain.io:26656',
        provider: 'MANTRACHAIN',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'da061f404690c5b6b19dd85d40fefde1fecf406c',
        address: '34.68.19.19:26656',
        provider: 'MANTRACHAIN',
      },
      {
        id: '20db08acbcac9b7114839e63539da2802b848982',
        address: '34.72.148.3:26656',
        provider: 'MANTRACHAIN',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN',
      },
      {
        address: 'https://mantra-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://api.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN',
      },
      {
        address: 'https://mantra-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN',
      },
      {
        address: 'mantra-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  keywords: ['dex', 'testnet'],
  images: [
    {
      image_sync: {
        chain_name: 'mantrachain',
        base_denom: 'uom',
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
      layout: 'logomark',
    },
  ],
};

export const mantrachaintestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'mantrachaintestnet',
  assets: [
    {
      description: 'The native token of MANTRA',
      denom_units: [
        {
          denom: 'uom',
          exponent: 0,
        },
        {
          denom: 'om',
          exponent: 6,
        },
      ],
      base: 'uom',
      name: 'MANTRA Chain',
      display: 'om',
      symbol: 'OM',
      keywords: [
        'mantra',
        'staking',
        'delegating',
        'governance',
        'regulation',
        'defi',
      ],
      traces: [
        {
          type: 'test-mintage',
          counterparty: {
            chain_name: 'mantrachain',
            base_denom: 'uom',
          },
          provider: 'MANTRA Chain',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'mantrachain',
            base_denom: 'uom',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true,
          },
        },
      ],
    },
  ],
};

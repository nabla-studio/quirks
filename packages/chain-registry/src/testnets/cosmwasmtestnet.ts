import type { Chain, AssetList, Versions } from '../types';

export const cosmwasmtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'cosmwasmtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'CosmWasm Testnet',
  chain_id: 'malaga-420',
  bech32_prefix: 'wasm',
  daemon_name: 'wasmd',
  node_home: '$HOME/.wasmd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'umlg',
        low_gas_price: 0.03,
        average_gas_price: 0.04,
        high_gas_price: 0.05,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uand',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/CosmWasm/wasmd',
    recommended_version: 'v0.27',
    compatible_versions: ['v0.27'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.27',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-5/genesis.json',
    },
    versions: [
      {
        name: 'v0.27',
        recommended_version: 'v0.27',
        compatible_versions: ['v0.27'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.27',
        cosmwasm_enabled: true,
      },
    ],
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: '3e3d0d09027dda13a1cd95b5146edc24da5ef872',
        address: '142.132.236.229:26656',
        provider: 'Confio',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.malaga-420.cosmwasm.com:443',
        provider: 'Confio',
      },
    ],
    rest: [
      {
        address: 'https://api.malaga-420.cosmwasm.com',
        provider: 'Confio',
      },
    ],
  },
  explorers: [
    {
      kind: 'BIG DIPPER',
      url: 'https://block-explorer.malaga-420.cosmwasm.com/',
      tx_page:
        'https://block-explorer.malaga-420.cosmwasm.com/transactions/${txHash}',
    },
  ],
};

export const cosmwasmtestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'cosmwasmtestnet',
  assets: [
    {
      description: 'Fee Token',
      denom_units: [
        {
          denom: 'umlg',
          exponent: 0,
        },
        {
          denom: 'MLG',
          exponent: 6,
        },
      ],
      base: 'umlg',
      name: 'Malaga',
      display: 'umlg',
      symbol: 'MLG',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg',
        },
      ],
    },
    {
      description: 'Staking Token',
      denom_units: [
        {
          denom: 'uand',
          exponent: 0,
        },
        {
          denom: 'AND',
          exponent: 6,
        },
      ],
      base: 'uand',
      name: 'Malaga Stake',
      display: 'uand',
      symbol: 'AND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cosmwasmtestnet/images/cosmwasm.svg',
        },
      ],
    },
  ],
};

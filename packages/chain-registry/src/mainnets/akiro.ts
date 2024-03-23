import type { Chain, AssetLists, ChainVersions } from '../types';

export const akiro: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'akiro',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'AKIRO',
  chain_id: 'akiro-1',
  bech32_prefix: 'akiro',
  daemon_name: 'akirod',
  node_home: '$HOME/.akiro',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uakiro',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.035,
        high_gas_price: 0.045,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uakiro',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/akiroinu/akiro/',
    recommended_version: 'v0.2',
    compatible_versions: ['v0.2'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/akiroinu/akiro/main/mainnet/genesis.json',
    },
    versions: [
      {
        name: 'v0.2',
        recommended_version: 'v0.2',
        compatible_versions: ['v0.2'],
        cosmos_sdk_version: 'v0.45.4',
        ibc_go_version: 'v3.0.0',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.19',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ae1a5b5a94888d18a08fc64a9343b4450cc5cedc',
        address: '213.199.36.82:26656',
        provider: 'AKIRO',
      },
    ],
    persistent_peers: [
      {
        id: 'ae1a5b5a94888d18a08fc64a9343b4450cc5cedc',
        address: '213.199.36.82:26656',
        provider: 'AKIRO',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'http://213.199.36.82:26657',
        provider: 'AKIRO',
      },
    ],
    rest: [
      {
        address: 'http://213.199.36.82:1317',
        provider: 'AKIRO',
      },
    ],
    grpc: [
      {
        address: 'http://213.199.36.82:9090',
        provider: 'AKIRO',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/akiro',
      tx_page: 'https://ping.pub/akiro/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg',
    },
  ],
};

export const akiroAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'akiro',
  assets: [
    {
      description: 'AKIRO meme token',
      denom_units: [
        {
          denom: 'uakiro',
          exponent: 0,
        },
        {
          denom: 'akiro',
          exponent: 6,
        },
      ],
      base: 'uakiro',
      name: 'AKIRO',
      display: 'akiro',
      symbol: 'AKIRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akiro/images/akiro.svg',
        },
      ],
    },
  ],
};

import type { Chain, AssetLists, ChainVersions } from '../types';

export const selfchaindevnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'selfchaindevnet',
  chain_id: 'self-dev-1',
  pretty_name: 'Devnet 1',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'self',
  daemon_name: 'selfchaind',
  node_home: '$HOME/.selfchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uself',
        fixed_min_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: 'https://docs.selfchain.xyz/nodes-and-validators/releases',
    recommended_version: '0.2.2',
    compatible_versions: ['0.2.2'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/hotcrosscom/selfchain-genesis/main/networks/devnet/genesis.json',
    },
    versions: [
      {
        name: '0.2.2',
        recommended_version: '0.2.2',
        compatible_versions: ['0.2.2'],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '94a7baabb2bcc00c7b47cbaa58adf4f433df9599',
        address: '157.230.119.165:26656',
      },
      {
        id: 'd3b5b6ca39c8c62152abbeac4669816166d96831',
        address: '165.22.24.236:26656',
      },
      {
        id: '35f478c534e2d58dc2c4acdf3eb22eeb6f23357f',
        address: '165.232.125.66:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-devnet.selfchain.xyz',
        provider: 'Selfchain',
      },
    ],
    rest: [
      {
        address: 'https://api-devnet.selfchain.xyz/',
        provider: 'Selfchain',
      },
    ],
  },
  explorers: [
    {
      kind: 'Selfchain',
      url: 'https://explorer-devnet.selfchain.xyz',
      tx_page:
        'https://explorer-devnet.selfchain.xyz/self/transactions/${txHash}',
    },
  ],
};

export const selfchaindevnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'selfchaindevnet',
  assets: [
    {
      description:
        'Self Chain Is the First Modular Intent-Centric Access Layer L1 Blockchain and Keyless Wallet Infrastructure Service That Uses MPC-TSS/AA for Multi-Chain Web3 Access.',
      denom_units: [
        {
          denom: 'uself',
          exponent: 0,
        },
        {
          denom: 'self',
          exponent: 6,
        },
      ],
      base: 'uself',
      name: 'self',
      display: 'self',
      symbol: 'SELF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/selfchaindevnet/images/selfchain.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/selfchaindevnet/images/selfchain.png',
        },
      ],
    },
  ],
};

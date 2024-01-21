import type { Chain, AssetLists, ChainVersions } from '../types';

export const genesisl1: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'genesisl1',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'GenesisL1',
  chain_id: 'genesis_29-2',
  bech32_prefix: 'genesis',
  daemon_name: 'genesisd',
  node_home: '$HOME/.genesisd',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'el1',
        low_gas_price: 51000000000,
        average_gas_price: 52000000000,
        high_gas_price: 53000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'el1',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/alpha-omega-labs/genesisd',
    recommended_version: 'v0.3.0',
    compatible_versions: ['v0.3.0'],
    genesis: {
      genesis_url:
        'https://github.com/alpha-omega-labs/genesisd/raw/neolithic/genesis_29-1-state/genesis.json',
    },
    versions: [
      {
        name: 'v0.3.0',
        recommended_version: 'v0.3.0',
        compatible_versions: ['v0.3.0'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
  },
  peers: {
    persistent_peers: [
      {
        id: '36111b4156ace8f1cfa5584c3ccf479de4d94936',
        address: '65.21.34.226:26656',
        provider: 'GenesisL1',
      },
      {
        id: 'be81a20b7134552e270774ec861c4998fabc2969',
        address: 'genesisl1.3ventures.io:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://26657.genesisl1.org',
        provider: 'GenesisL1',
      },
    ],
    rest: [
      {
        address: 'https://api.genesisl1.org',
        provider: 'GenesisL1',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/genesisL1',
      tx_page: 'https://ping.pub/genesisL1/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.utsa.tech/genesis',
      tx_page: 'https://exp.utsa.tech/genesis/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Genesisl1',
      tx_page: 'https://explorer.stavr.tech/Genesisl1/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Genesisl1/accounts/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/genesisl1',
      tx_page: 'https://atomscan.com/genesisl1/transactions/${txHash}',
      account_page: 'https://atomscan.com/genesisl1/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
    },
  ],
};

export const genesisl1AssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'genesisl1',
  assets: [
    {
      description:
        'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denom_units: [
        {
          denom: 'el1',
          exponent: 0,
        },
        {
          denom: 'l1',
          exponent: 18,
        },
      ],
      base: 'el1',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
        },
      ],
    },
  ],
};

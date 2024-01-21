import type { Chain, AssetLists, ChainVersions } from '../types';

export const impacthub: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'impacthub',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.ixo.world/',
  pretty_name: 'ixo',
  chain_id: 'ixo-5',
  bech32_prefix: 'ixo',
  daemon_name: 'ixod',
  node_home: '$HOME/.ixod',
  key_algos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uixo',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uixo',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/ixofoundation/ixo-blockchain',
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    genesis: {
      genesis_url:
        'https://github.com/ixofoundation/genesis/raw/bc042e1223d551b22d55c155de06e662ca24d2f2/ixo-5/genesis.json.tar.gz',
    },
    versions: [
      {
        name: 'v0.20.0',
        recommended_version: 'v0.20.1',
        compatible_versions: ['v0.20.0', 'v0.20.1'],
        proposal: 403,
        height: 1254500,
        next_version_name: 'v2',
      },
      {
        name: 'v2',
        proposal: 439,
        height: 2383000,
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0'],
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
  },
  peers: {
    seeds: [
      {
        id: '36e4738c7efcf353d3048e5e6073406d045bae9d',
        address: '80.64.208.43:26656',
        provider: 'simplyvc',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:16656',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
    persistent_peers: [
      {
        id: '36e4738c7efcf353d3048e5e6073406d045bae9d',
        address: '80.64.208.43:26656',
        provider: 'simplyvc',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://proxies.sifchain.finance/api/impacthub-3/rpc',
        provider: 'sifchain',
      },
      {
        address: 'https://impacthub.ixo.world/rpc/',
        provider: 'ixoworld',
      },
      {
        address: 'https://rpc-ixo-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://impacthub-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://ixo-rpc.ibs.team',
        provider: 'Inter Blockchain Services',
      },
    ],
    rest: [
      {
        address: 'https://proxies.sifchain.finance/api/impacthub-3/rest',
        provider: 'sifchain',
      },
      {
        address: 'https://impacthub.ixo.world/rest/',
        provider: 'ixoworld',
      },
      {
        address: 'https://api-ixo-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://impacthub-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://ixo-api.ibs.team',
        provider: 'Inter Blockchain Services',
      },
    ],
    grpc: [
      {
        address: 'grpc-ixo-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'impacthub-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/ixo',
      tx_page: 'https://app.ezstaking.io/ixo/txs/${txHash}',
      account_page: 'https://app.ezstaking.io/ixo/account/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://blockscan.ixo.world',
      tx_page: 'https://blockscan.ixo.world/transactions/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/ixo',
      tx_page: 'https://ping.pub/ixo/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/ixo',
      tx_page: 'https://atomscan.com/ixo/transactions/${txHash}',
      account_page: 'https://atomscan.com/ixo/accounts/${accountAddress}',
    },
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/ixo',
      tx_page: 'https://www.mintscan.io/ixo/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/ixo/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
    },
  ],
};

export const impacthubAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'impacthub',
  assets: [
    {
      description: 'The native token of IXO Chain',
      denom_units: [
        {
          denom: 'uixo',
          exponent: 0,
        },
        {
          denom: 'ixo',
          exponent: 6,
        },
      ],
      base: 'uixo',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
      },
      coingecko_id: 'ixo',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
        },
      ],
    },
  ],
};

import type { Chain, AssetLists } from '../types';

export const passage1: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'passage1',
  chain_id: 'passage-1',
  pretty_name: 'Passage',
  status: 'killed',
  network_type: 'mainnet',
  website: 'https://passage3d.com/',
  bech32_prefix: 'pasg',
  daemon_name: 'passage',
  node_home: '$HOME/.passage',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'upasg',
        fixed_min_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'upasg',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/envadiv/Passage3D',
    recommended_version: 'v1.1.0',
    compatible_versions: ['v1.1.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/envadiv/mainnet/main/passage-1/genesis.json',
    },
  },
  explorers: [
    {
      kind: 'aneka',
      url: 'https://passage.aneka.io',
      tx_page: 'https://passage.aneka.io/txs/${txHash}',
      account_page: 'https://passage.aneka.io/accounts/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/passage',
      tx_page: 'https://www.mintscan.io/passage/txs/${txHash}',
      account_page: 'https://www.mintscan.io/passage/account/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/passage',
      tx_page: 'https://atomscan.com/passage/transactions/${txHash}',
      account_page: 'https://atomscan.com/passage/accounts/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
    },
  ],
};

export const passage1AssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'passage1',
  assets: [
    {
      description:
        'The native staking and governance token of the Passage chain.',
      denom_units: [
        {
          denom: 'upasg',
          exponent: 0,
        },
        {
          denom: 'pasg',
          exponent: 6,
        },
      ],
      base: 'upasg',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
        },
      ],
    },
  ],
};

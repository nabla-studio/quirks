import type { Chain, AssetList, Versions } from '../types';

export const neuratestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'neuratestnet',
  chain_id: 'neura_267-1',
  bech32_prefix: 'neura',
  pretty_name: 'Neura Testnet',
  website: 'https://www.neuraprotocol.io/',
  description:
    'Neura is an AI-centric, EVM-compatible Layer 1 blockchain built on the Cosmos SDK. We democratize GPU access and revolutionize AI project funding with IMO’s to advance AI development.',
  status: 'live',
  network_type: 'testnet',
  node_home: '$HOME/.neurad',
  daemon_name: 'neurad',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 1,
  fees: {
    fee_tokens: [
      {
        denom: 'atankr',
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'atankr',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.ankr.com/neura_testnet',
        provider: 'ankr',
      },
    ],
  },
  explorers: [
    {
      kind: 'ankrscan-neura',
      url: 'https://testnet.explorer.neuraprotocol.io',
      tx_page: 'https://testnet.explorer.neuraprotocol.io/tx/${txHash}',
    },
    {
      kind: 'blockscout',
      url: 'https://explorer.neura-testnet.ankr.com',
      tx_page: 'https://explorer.neura-testnet.ankr.com/tx/${txHash}',
    },
  ],
  codebase: {
    versions: [
      {
        name: 'v0.0.1',
        height: 0,
      },
    ],
  },
  images: [
    {
      image_sync: {
        chain_name: 'neura',
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neura/images/neura.png',
    },
  ],
};

export const neuratestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'neuratestnet',
  assets: [
    {
      description:
        'ANKR: The native EVM, governance, and staking token for Neura, enabling secure transactions, and seamless GPU resourcing within the ecosystem.',
      denom_units: [
        {
          denom: 'atankr',
          exponent: 0,
        },
        {
          denom: 'ankr',
          exponent: 18,
        },
      ],
      base: 'atankr',
      name: 'Neura Testnet',
      display: 'ankr',
      symbol: 'ANKR',
      traces: [
        {
          type: 'test-mintage',
          counterparty: {
            chain_name: 'neura',
            base_denom: 'atankr',
          },
          provider: 'Neura',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'neura',
            base_denom: 'atankr',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ankr.svg',
        },
      ],
    },
  ],
};

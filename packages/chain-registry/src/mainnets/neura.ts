import type { Chain, AssetList, Versions } from '../types';

export const neura: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'neura',
  chain_id: 'neura_266-1',
  bech32_prefix: 'neura',
  pretty_name: 'Neura',
  website: 'https://www.neuraprotocol.io/',
  description:
    'Neura is an AI-centric, EVM-compatible Layer 1 blockchain built on the Cosmos SDK. We democratize GPU access and revolutionize AI project funding with IMO’s to advance AI development.',
  status: 'upcoming',
  network_type: 'mainnet',
  node_home: '$HOME/.neurad',
  daemon_name: 'neurad',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
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
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neura/images/neura.png',
    },
  ],
};

export const neuraAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'neura',
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
      name: 'Neura',
      display: 'ankr',
      symbol: 'ANKR',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
          },
          provider: 'Neura',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ankr.svg',
        },
      ],
      coingecko_id: 'ankr',
      socials: {
        website: 'https://www.ankr.com',
        twitter: 'https://x.com/ankr',
      },
    },
  ],
};

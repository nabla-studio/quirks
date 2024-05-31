import type { Chain, AssetList, Versions } from '../types';

export const nim: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nim',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://ai.nim.network',
  pretty_name: 'Nim Network',
  chain_id: 'nim_1122-1',
  bech32_prefix: 'nim',
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'anim',
        low_gas_price: 20000000000,
        average_gas_price: 20000000000,
        high_gas_price: 20000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'anim',
      },
    ],
    lock_duration: {
      time: '1209600s',
    },
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
  },
  description:
    'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
    },
  ],
  codebase: {
    git_repo: 'https://github.com/Nim-Network-Foundation/mainnet',
    genesis: {
      genesis_url:
        'https://github.com/Nim-Network-Foundation/mainnet/raw/main/genesis.json',
    },
    recommended_version: 'v2.1.3-rc02',
    compatible_versions: ['v2.1.3-rc02'],
    versions: [
      {
        name: 'v2.1',
        recommended_version: 'v2.1.3-rc02',
        compatible_versions: ['v2.1.3-rc02'],
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://nim-mainnet-tendermint.public.blastapi.io',
        provider: 'BlastAPI',
      },
    ],
    rest: [
      {
        address: 'https://nim-mainnet-rest.public.blastapi.io',
        provider: 'BlastAPI',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://nim-mainnet.public.blastapi.io',
        provider: 'BlastAPI',
      },
    ],
  },
  explorers: [
    {
      kind: 'FYI',
      url: 'https://dym.fyi/r/nim',
      tx_page: 'https://dym.fyi/r/nim/tx/${txHash}',
      account_page: 'https://dym.fyi/r/nim/address/${accountAddress}',
    },
  ],
};

export const nimAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nim',
  assets: [
    {
      description: 'The native token of Nim Network.',
      extended_description:
        'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
      denom_units: [
        {
          denom: 'anim',
          exponent: 0,
        },
        {
          denom: 'nim',
          exponent: 18,
        },
      ],
      type_asset: 'sdk.coin',
      base: 'anim',
      name: 'NIM Network',
      display: 'nim',
      symbol: 'NIM',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
        },
      ],
      socials: {
        website: 'https://ai.nim.network/',
        twitter: 'https://twitter.com/nim_network',
      },
      keywords: ['gaming', 'AI'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
      },
    },
  ],
};

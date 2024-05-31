import type { Chain, AssetList, Versions } from '../types';

export const mantrachainAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mantrachain',
  assets: [
    {
      description: 'The native token of MANTRA',
      extended_description:
        'The first RWA Layer 1 Blockchain, capable of adherence and enforcement of real world regulatory requirements.',
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
      type_asset: 'sdk.coin',
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
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Prim-Col.svg',
          theme: {
            circle: true,
          },
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-Darkmatt.svg',
          theme: {
            dark_mode: true,
            circle: true,
          },
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mantrachain/images/OM-WHT.svg',
          theme: {
            dark_mode: false,
            circle: true,
          },
        },
      ],
      socials: {
        website: 'https://www.mantrachain.io/',
        twitter: 'https://x.com/MANTRA_Chain',
      },
    },
  ],
};

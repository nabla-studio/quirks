import type { Chain, AssetList, Versions } from '../types';

export const vincechaintestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'vincechaintestnet',
  status: 'killed',
  network_type: 'testnet',
  pretty_name: 'VinceChain Testnet',
  chain_id: 'vince_1903-1',
  bech32_prefix: 'vce',
  node_home: '$HOME/.vinced',
  slip44: 60,
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  fees: {
    fee_tokens: [
      {
        denom: 'avce',
        fixed_min_gas_price: 250000000,
        low_gas_price: 10000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'avce',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/AyrisDev/vinceChain_Blockchain',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/AyrisDev/vinceChain_Blockchain/master/genesis.json',
    },
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png',
  },
  peers: {
    seeds: [
      {
        id: 'e55544ae75edbce87a43e36e152d9fe1492de186',
        address: 'http://154.53.47.14:26656',
        provider: 'AyrisDev',
      },
    ],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'http://api-testnet.vincechain.com/:26657/',
        provider: 'vincescan.com',
      },
    ],
    rest: [
      {
        address: 'http://lcd-testnet.vincechain.com/:1317/',
        provider: 'vincescan.com',
      },
    ],
    grpc: [],
    'evm-http-jsonrpc': [
      {
        address: 'http://rpc-testnet.vincechain.com',
        provider: 'vincescan.com',
      },
    ],
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://scan-testnet.vincechain.com',
      tx_page: 'https://scan-testnet.vincechain.com/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png',
    },
  ],
};

export const vincechaintestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'vincechaintestnet',
  assets: [
    {
      description:
        'Vince Chain is an Industry-Grade Blockchain For DeFi, Remote work, Gaming, Web3 and will power the new internet.',
      denom_units: [
        {
          denom: 'avce',
          exponent: 0,
        },
        {
          denom: 'vce',
          exponent: 18,
        },
      ],
      base: 'avce',
      name: 'VinceChain',
      display: 'vce',
      symbol: 'VCE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png',
        },
      ],
    },
  ],
};

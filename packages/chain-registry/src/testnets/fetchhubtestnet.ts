import type { Chain, AssetList, Versions } from '../types';

export const fetchhubtestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'fetchhubtestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Fetch.ai Testnet',
  chain_id: 'dorado-1',
  bech32_prefix: 'fetch',
  daemon_name: 'fetchd',
  node_home: '$HOME/.fetchd',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'atestfet',
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.035,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'atestfet',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/fetchai/fetchd',
    recommended_version: 'v0.10.5',
    compatible_versions: ['v0.10.5'],
    genesis: {
      genesis_url:
        'https://storage.googleapis.com/fetch-ai-testnet-genesis/genesis-dorado-827201.json',
    },
    versions: [
      {
        name: 'v0.10.5',
        recommended_version: 'v0.10.5',
        compatible_versions: ['v0.10.5'],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'eb9b9717975b49a57e62ea93aa4480e091ae0660',
        address: 'connect-dorado.fetch.ai:36556',
        provider: 'fetch.ai',
      },
      {
        id: '46d2f86a255ece3daf244e2ca11d5be0f16cb633',
        address: 'connect-dorado.fetch.ai:36557',
        provider: 'fetch.ai',
      },
      {
        id: '066fc564979b1f3173615f101b62448ac7e00eb1',
        address: 'connect-dorado.fetch.ai:36558',
        provider: 'fetch.ai',
      },
    ],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-dorado.fetch.ai:443',
        provider: 'fetch.ai',
      },
    ],
    rest: [
      {
        address: 'https://rest-dorado.fetch.ai',
        provider: 'fetch.ai',
      },
    ],
    grpc: [
      {
        address: 'grpc-dorado.fetch.ai:443',
        provider: 'fetch.ai',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explore-dorado.fetch.ai',
      tx_page: 'https://explore-dorado.fetch.ai/transactions/${txHash}',
    },
    {
      kind: 'azoyalabs',
      url: 'https://fetchstation.azoyalabs.com/testnet',
      tx_page:
        'https://fetchstation.azoyalabs.com/testnet/explorer/transactions/${txHash}',
      account_page:
        'https://fetchstation.azoyalabs.com/testnet/explorer/address/${accountAddress}',
    },
  ],
};

export const fetchhubtestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'fetchhubtestnet',
  assets: [
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [
        {
          denom: 'atestfet',
          exponent: 0,
        },
        {
          denom: 'testfet',
          exponent: 18,
        },
      ],
      base: 'atestfet',
      name: 'fetch-ai',
      display: 'testfet',
      symbol: 'FET',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
      },
      coingecko_id: 'fetch-ai',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
        },
      ],
    },
  ],
};

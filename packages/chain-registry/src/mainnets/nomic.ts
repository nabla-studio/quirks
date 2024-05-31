import type { Chain, AssetList, Versions } from '../types';

export const nomic: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nomic',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Nomic',
  website: 'https://nomic.io/',
  chain_id: 'nomic-stakenet-3',
  bech32_prefix: 'nomic',
  daemon_name: 'nomic',
  node_home: '$HOME/.nomic-stakenet-3',
  slip44: 118,
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [
      {
        denom: 'unom',
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'unom',
      },
    ],
    lock_duration: {
      time: '1209600s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/nomic-io/nomic',
    recommended_version: 'v8.0.0',
    compatible_versions: ['v8.0.0'],
    consensus: {
      type: 'tendermint',
      version: 'v0.32.0',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/nomic-io/nomic/develop/genesis/stakenet-3.json',
    },
    versions: [
      {
        name: 'v8.0.0',
        recommended_version: 'v8.0.0',
        compatible_versions: ['v8.0.0'],
        consensus: {
          type: 'tendermint',
          version: 'v0.32.0',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg',
  },
  description:
    'The superior way to use Bitcoin in Cosmos DeFi. Use IBC to securely and efficiently bridge your BTC to Osmosis and more.',
  peers: {
    seeds: [
      {
        id: '238120dfe716082754048057c1fdc3d6f09609b5',
        address: 'rpc.nomic.mappum.io:26656',
        provider: 'mappum',
      },
      {
        id: '34544f82960d2ff2b1defb7b04f097557f4183be',
        address: 'seeds.goldenratiostaking.net:26656',
        provider: 'Golden Ratio Staking',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:12756',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '27b6d74c8408e033e2e5a9e966a0d15782e33596',
        address: 'seeds.nethernode.xyz:12756',
        provider: 'carbonZERO🌲',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'd4342c478c75704e8284dc3494fbd0acc444e674',
        address: 'basementnodes.ca:20656',
        provider: 'Basement Nodes ⚡️',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://stakenet-rpc.nomic.io:2096',
        provider: 'nomic-io',
      },
      {
        address: 'https://nomic-rpc.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-nomic.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://rpc.nomic.basementnodes.ca:443',
        provider: 'Basement Nodes ⚡️',
      },
      {
        address: 'https://rpc.nomic.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    rest: [
      {
        address: 'https://app.nomic.io:8443',
        provider: 'nomic-io',
      },
    ],
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/nomic',
      account_page: 'https://bigdipper.live/nomic/accounts/${accountAddress}',
      tx_page: 'https://bigdipper.live/nomic/transactions/${txHash}',
    },
    {
      kind: 'Zenscan.io',
      url: 'https://nomic.zenscan.io/index.php',
      account_page:
        'https://nomic.zenscan.io/address.php?address=${accountAddress}',
      tx_page: 'https://nomic.zenscan.io/transaction.php?hash=${txHash}',
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/nomic',
      tx_page: 'https://mainnet.whispernode.com/nomic/tx/${txHash}',
      account_page:
        'https://mainnet.whispernode.com/nomic/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg',
    },
  ],
  bech32_config: {
    bech32PrefixAccAddr: 'nomic',
    bech32PrefixAccPub: 'nomic',
    bech32PrefixConsAddr: 'nomic',
    bech32PrefixConsPub: 'nomic',
    bech32PrefixValAddr: 'nomic',
    bech32PrefixValPub: 'nomic',
  },
};

export const nomicAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nomic',
  assets: [
    {
      description: "Nomic's native token.",
      denom_units: [
        {
          denom: 'unom',
          exponent: 0,
        },
        {
          denom: 'nom',
          exponent: 6,
        },
      ],
      base: 'unom',
      name: 'Nomic',
      display: 'nom',
      symbol: 'NOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
        },
      ],
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [
        {
          denom: 'usat',
          exponent: 0,
        },
        {
          denom: 'nbtc',
          exponent: 14,
        },
      ],
      base: 'usat',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
      },
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat',
          },
          provider: 'Nomic',
        },
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
        },
      ],
    },
  ],
};

import type { Chain, AssetLists } from '../types';

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
  codebase: {
    git_repo: 'https://github.com/nomic-io/nomic',
    recommended_version: 'develop',
    compatible_versions: ['develop', 'v3'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/nomic-io/nomic/develop/genesis.json',
    },
    versions: [
      {
        name: 'main',
        recommended_version: 'main',
        compatible_versions: ['main'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg',
  },
  peers: {
    seeds: [
      {
        id: '238120dfe716082754048057c1fdc3d6f09609b5',
        address: '161.35.51.124:26656',
      },
      {
        id: '34544f82960d2ff2b1defb7b04f097557f4183be',
        address: 'seeds.goldenratiostaking.net:26656',
        provider: 'Golden Ratio Staking',
      },
      {
        id: '10beadbcd4bc5fef8a1f5f57353bdb8646f7a554',
        address: 'seeds.whispernode.com:26656',
        provider: 'WhisperNode🤐',
      },
      {
        id: '27b6d74c8408e033e2e5a9e966a0d15782e33596',
        address: 'seeds.nethernode.xyz:12756',
        provider: 'carbonZERO🌲',
      },
    ],
    persistent_peers: [],
  },
  apis: {
    rpc: [
      {
        address: 'http://138.197.71.46:26657',
        provider: 'nomic-io',
      },
      {
        address: 'https://nomic-rpc.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc.nomic.interbloc.org',
        provider: 'Interbloc',
      },
      {
        address: 'https://rpc.nomic.bh.rocks',
        provider: 'BlockHunters 🎯',
      },
      {
        address: 'https://rpc-nomic.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://rpc-nomic.carbonZERO.zone:443',
        provider: 'carbonZERO🌲',
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
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg',
    },
  ],
};

export const nomicAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nomic',
  assets: [
    {
      description:
        "Nomic Token (NOM) is the Nomic's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg',
        },
      ],
    },
  ],
};

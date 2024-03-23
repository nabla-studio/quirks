import type { Chain, AssetLists, ChainVersions } from '../types';

export const onomy: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'onomy',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://onomy.io/',
  pretty_name: 'Onomy',
  chain_id: 'onomy-mainnet-1',
  bech32_prefix: 'onomy',
  daemon_name: 'onomyd',
  node_home: '$HOME/.onomyd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'anom',
        low_gas_price: 0,
        average_gas_price: 0.03,
        high_gas_price: 0.06,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'anom',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/onomyprotocol/onomy',
    recommended_version: 'v1.0.1',
    compatible_versions: ['v1.0.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd',
      'linux/arm64':
        'https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd-arm',
    },
    cosmos_sdk_version: '0.44',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    ibc_go_version: '2.0.4',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/onomyprotocol/onomy/main/genesis/mainnet/genesis-mainnet-1.json',
    },
    versions: [
      {
        name: 'v1.0.1',
        recommended_version: 'v1.0.1',
        compatible_versions: ['v1.0.1'],
        cosmos_sdk_version: '0.44',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '2.0.4',
        binaries: {
          'linux/amd64':
            'https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd',
          'linux/arm64':
            'https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd-arm',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
  },
  peers: {
    seeds: [
      {
        id: '211535f9b799bcc8d46023fa180f3359afd4c1d3',
        address: '44.213.44.5:26656',
        provider: 'onomy',
      },
      {
        id: 'cd9a47cebe8eef076a5795e1b8460a8e0b2384e5',
        address: '3.210.0.126:26656',
        provider: 'onomy',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'onomy-mainnet-seed.autostake.com:27556',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    persistent_peers: [
      {
        id: 'c213f678b9e3b7c37b9229318b3e27b95c9d5af4',
        address: '52.70.182.125:26656',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '00ce2f84f6b91639a7cedb2239e38ffddf9e36de',
        address: '44.195.221.88:26656',
        provider: 'cosmostation',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'onomy-mainnet-peer.autostake.com:27556',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mainnet.onomy.io',
        provider: 'onomy',
      },
      {
        address: 'https://onomy-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    rest: [
      {
        address: 'https://rest-mainnet.onomy.io',
        provider: 'onomy',
      },
      {
        address: 'https://onomy-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    grpc: [],
  },
  explorers: [
    {
      kind: 'Big Dipper',
      url: 'https://explorer.onomy.io',
      tx_page: 'https://explorer.onomy.io/transactions/${txHash}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/onomy-protocol',
      tx_page: 'https://www.mintscan.io/onomy-protocol/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/onomy-protocol/accounts/${accountAddress}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/onomy',
      tx_page: 'https://ezstaking.app/onomy/txs/${txHash}',
      account_page: 'https://ezstaking.app/onomy/account/${accountAddress}',
    },
  ],
  keywords: ['dex', 'stablecoin', 'bridge', 'staking'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
    },
  ],
};

export const onomyAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'onomy',
  assets: [
    {
      description: 'The native token of Onomy Protocol',
      denom_units: [
        {
          denom: 'anom',
          exponent: 0,
        },
        {
          denom: 'nom',
          exponent: 18,
        },
      ],
      base: 'anom',
      name: 'Nom',
      display: 'nom',
      symbol: 'NOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg',
      },
      keywords: ['dex', 'stablecoin', 'bridge', 'staking'],
      coingecko_id: 'onomy-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg',
        },
      ],
    },
  ],
};

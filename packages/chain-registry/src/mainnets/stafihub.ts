import type { Chain, AssetList, Versions } from '../types';

export const stafihub: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'stafihub',
  chain_id: 'stafihub-1',
  website: 'https://stafihub.io/',
  pretty_name: 'StaFi Hub',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'stafi',
  daemon_name: 'stafihubd',
  node_home: '$HOME/.stafihub',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ufis',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ufis',
      },
    ],
    lock_duration: {
      time: '1209600s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/stafihub/stafihub',
    recommended_version: 'v0.5.0',
    compatible_versions: ['v0.5.0'],
    cosmos_sdk_version: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    ibc_go_version: '5.2.1',
    ics_enabled: ['ics20-1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/stafihub/network/main/mainnets/stafihub-1(dragonberry)/genesis.json',
    },
    versions: [
      {
        name: 'v020',
        tag: 'v0.2.3',
        height: 0,
        next_version_name: 'v030',
      },
      {
        name: 'v030',
        tag: 'v0.3.0',
        height: 2626590,
        proposal: 1,
        next_version_name: 'v040',
      },
      {
        name: 'v040',
        tag: 'v0.4.0',
        height: 3766566,
        proposal: 2,
        next_version_name: 'v050',
      },
      {
        name: 'v050',
        tag: 'v0.5.0',
        height: 5868372,
        proposal: 4,
        recommended_version: 'v0.5.0',
        compatible_versions: ['v0.5.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '5.2.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v060',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'bed296dfadd972ed07cab82c87a0ee5c182dea43',
        address: '18.136.189.120:26656',
      },
      {
        id: '045fe6e054a5abe35f5433bd333f0a1b18aa28cf',
        address: '45.136.28.11:26656',
      },
      {
        id: '20c0b45c47426c51b3187aa5dca82d9900c2fb36',
        address: '5.161.88.157:26656',
      },
      {
        id: '70230067eb1e668d2566329e727c72c930e54de3',
        address: '116.202.30.7:26656',
      },
      {
        id: '03f3cb61c7c472044c37aeededde2ffe8884fa02',
        address: '159.69.108.86:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://public-rpc1.stafihub.io:443',
        provider: 'StaFiHub',
      },
      {
        address: 'https://public-rpc2.stafihub.io:443',
        provider: 'StaFiHub',
      },
      {
        address: 'https://rpc.stafihub.nodestake.top:443',
        provider: 'NodeStake',
      },
    ],
    rest: [
      {
        address: 'https://public-rest-rpc1.stafihub.io',
        provider: 'StaFiHub',
      },
      {
        address: 'https://public-rest-rpc2.stafihub.io',
        provider: 'StaFiHub',
      },
      {
        address: 'https://api.stafihub.nodestake.top',
        provider: 'NodeStake',
      },
    ],
    grpc: [
      {
        address: 'public-grpc-rpc1.stafihub.io:443',
        provider: 'StaFiHub',
      },
      {
        address: 'public-grpc-rpc2.stafihub.io:443',
        provider: 'StaFiHub',
      },
      {
        address: 'grpc.stafihub.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'stafihub.nodejumper.io:9090',
        provider: 'NODEJUMPER',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stafi',
      tx_page: 'https://www.mintscan.io/stafi/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/stafi/accounts/${accountAddress}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/stafihub',
      tx_page: 'https://ezstaking.app/stafihub/txs/${txHash}',
      account_page: 'https://ezstaking.app/stafihub/account/${accountAddress}',
    },
    {
      kind: 'ping-pub',
      url: 'https://ping.pub/stafihub',
      tx_page: 'https://ping.pub/stafihub/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stafihub',
      tx_page: 'https://atomscan.com/stafihub/transactions/${txHash}',
      account_page: 'https://atomscan.com/stafihub/accounts/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png',
  },
  keywords: ['liquid staking'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png',
    },
  ],
};

export const stafihubAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'stafihub',
  assets: [
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [
        {
          denom: 'ufis',
          exponent: 0,
        },
        {
          denom: 'fis',
          exponent: 6,
        },
      ],
      base: 'ufis',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg',
      },
      coingecko_id: 'stafi',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg',
        },
      ],
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denom_units: [
        {
          denom: 'uratom',
          exponent: 0,
        },
        {
          denom: 'ratom',
          exponent: 6,
        },
      ],
      base: 'uratom',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
          },
          provider: 'StaFiHub',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg',
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg',
        },
      ],
    },
    {
      description: 'A liquid staking representation of staked IRISs',
      denom_units: [
        {
          denom: 'uriris',
          exponent: 0,
        },
        {
          denom: 'riris',
          exponent: 6,
        },
      ],
      base: 'uriris',
      name: 'rIRIS',
      display: 'riris',
      symbol: 'rIRIS',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'irisnet',
            base_denom: 'uiris',
          },
          provider: 'StaFiHub',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg',
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg',
        },
      ],
    },
    {
      description: 'A liquid staking representation of staked HUAHUAs',
      denom_units: [
        {
          denom: 'urhuahua',
          exponent: 0,
        },
        {
          denom: 'rhuahua',
          exponent: 6,
        },
      ],
      base: 'urhuahua',
      name: 'rHUAHUA',
      display: 'rhuahua',
      symbol: 'rHUAHUA',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'chihuahua',
            base_denom: 'uhuahua',
          },
          provider: 'StaFiHub',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg',
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg',
        },
      ],
    },
    {
      description: 'A liquid staking representation of staked SWTHs',
      denom_units: [
        {
          denom: 'urswth',
          exponent: 0,
        },
        {
          denom: 'rswth',
          exponent: 8,
        },
      ],
      base: 'urswth',
      name: 'rSWTH',
      display: 'rswth',
      symbol: 'rSWTH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'carbon',
            base_denom: 'swth',
          },
          provider: 'StaFiHub',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg',
      },
      coingecko_id: '',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg',
        },
      ],
    },
  ],
};

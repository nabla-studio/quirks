import type { Chain, AssetLists, ChainVersions } from '../types';

export const injective: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'injective',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://injective.com/',
  pretty_name: 'Injective',
  chain_id: 'injective-1',
  bech32_prefix: 'inj',
  extra_codecs: ['injective'],
  slip44: 60,
  daemon_name: 'injectived',
  node_home: '$HOME/.injectived',
  fees: {
    fee_tokens: [
      {
        denom: 'inj',
        fixed_min_gas_price: 160000000,
        low_gas_price: 500000000,
        average_gas_price: 700000000,
        high_gas_price: 900000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'inj',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/InjectiveLabs/injective-chain-releases',
    recommended_version: 'v1.12.0-1704530206',
    compatible_versions: ['v1.12.0-1704530206'],
    binaries: {
      'linux/amd64':
        'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.12.0-1704530206/linux-amd64.zip',
      'darwin/amd64':
        'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.12.0-1704530206/darwin-amd64.zip',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/InjectiveLabs/mainnet-config/master/10001/genesis.json',
    },
    versions: [
      {
        name: 'v1.10',
        recommended_version: 'v1.10',
        compatible_versions: ['v1.10'],
        binaries: {
          'linux/amd64':
            'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.10.0-1679065799/linux-amd64.zip',
          'darwin/amd64':
            'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.10.0-1679065799/darwin-amd64.zip',
        },
        next_version_name: 'v1.11',
      },
      {
        name: 'v1.11',
        proposal: 231,
        height: 34775000,
        recommended_version: 'v1.11.5-1687535916',
        compatible_versions: [
          'v1.11',
          'v1.11.3-1686246472',
          'v1.11.4-1686608669',
          'v1.11.5-1687535916',
        ],
        binaries: {
          'linux/amd64':
            'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.11.5-1687535916/linux-amd64.zip',
          'darwin/amd64':
            'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.11.5-1687535916/darwin-amd64.zip',
        },
        next_version_name: 'v1.12.0',
      },
      {
        name: 'v1.12.0',
        proposal: 314,
        height: 57076000,
        recommended_version: 'v1.12.0-1704530206',
        compatible_versions: ['v1.12.0-1704530206'],
        binaries: {
          'linux/amd64':
            'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.12.0-1704530206/linux-amd64.zip',
          'darwin/amd64':
            'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.12.0-1704530206/darwin-amd64.zip',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
  },
  description:
    'Injective’s mission is to create a truly free and inclusive financial system through decentralization.',
  peers: {
    seeds: [
      {
        id: '38c18461209694e1f667ff2c8636ba827cc01c86',
        address: '176.9.143.252:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: '4f9025feca44211eddc26cd983372114947b2e85',
        address: '176.9.140.49:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: 'c98bb1b889ddb58b46e4ad3726c1382d37cd5609',
        address: '65.109.51.80:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: '23d0eea9bb42316ff5ea2f8b4cd8475ef3f35209',
        address: '65.109.36.70:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: 'f9ae40fb4a37b63bea573cc0509b4a63baa1a37a',
        address: '15.235.114.80:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: '7f3473ddab10322b63789acb4ac58647929111ba',
        address: '15.235.13.116:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:14356',
        provider: 'polkachu.com',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'injective-mainnet-seed.autostake.com:26726',
        provider: 'AutoStake.com',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:14356',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: '1846e76e14913124a07e231586d487a0636c0296',
        address: 'tenderseed.ccvalidators.com:26007',
        provider: 'ccvalidators.com',
      },
      {
        id: '5a1cd1a7da5aab3e3075fbae0a905c7256e48193',
        address: 'seeds.goldenratiostaking.net:1635',
        provider: 'Golden Ratio Staking',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:14356',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '858c86e2590f82934b8483ed184afd88416a7b31',
        address: 'seed-injective-01.stakeflow.io:2106',
        provider: 'Stakeflow',
      },
    ],
    persistent_peers: [
      {
        id: '38c18461209694e1f667ff2c8636ba827cc01c86',
        address: '176.9.143.252:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: '4f9025feca44211eddc26cd983372114947b2e85',
        address: '176.9.140.49:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: 'c98bb1b889ddb58b46e4ad3726c1382d37cd5609',
        address: '65.109.51.80:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: '23d0eea9bb42316ff5ea2f8b4cd8475ef3f35209',
        address: '65.109.36.70:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: 'f9ae40fb4a37b63bea573cc0509b4a63baa1a37a',
        address: '15.235.114.80:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: '7f3473ddab10322b63789acb4ac58647929111ba',
        address: '15.235.13.116:11751',
        provider: 'injectivelabs.org',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'injective-mainnet-peer.autostake.com:26726',
        provider: 'AutoStake.com',
      },
      {
        id: '858c86e2590f82934b8483ed184afd88416a7b31',
        address: 'peer-injective-01.stakeflow.io:2106',
        provider: 'Stakeflow',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://injective-rpc.quickapi.com:443',
        provider: 'Chainlayer',
      },
      {
        address: 'https://rpc-injective.goldenratiostaking.net',
        provider: 'Golden Ratio Staking',
      },
      {
        address: 'https://injective-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://injective-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-injective-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://injective-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake.com',
      },
      {
        address: 'https://rpc.injective.posthuman.digital:443',
        provider: 'POSTHUMAN ꝏ DVS',
      },
      {
        address: 'https://rpc-injective.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://rpc-injective-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://injective-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://injective-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://injective-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭',
      },
    ],
    rest: [
      {
        address: 'https://injective-lcd.quickapi.com:443',
        provider: 'Chainlayer',
      },
      {
        address: 'https://api-injective-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://injective-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://injective-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rest.injective.posthuman.digital:443',
        provider: 'POSTHUMAN ꝏ DVS',
      },
      {
        address: 'https://lcd-injective.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://api-injective-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://rest-injective.goldenratiostaking.net',
        provider: 'Golden Ratio Staking',
      },
      {
        address: 'https://injective-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://injective-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://injective-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭',
      },
    ],
    grpc: [
      {
        address: 'grpc-injective-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'injective-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'injective-grpc.polkachu.com:14390',
        provider: 'Polkachu',
      },
      {
        address: 'injective-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake.com',
      },
      {
        address: 'grpc-injective.cosmos-spaces.cloud:9900',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'grpc.injective.posthuman.digital:80',
        provider: 'POSTHUMAN ꝏ DVS',
      },
      {
        address: 'grpc-injective.architectnodes.com:1443',
        provider: 'Architect Nodes',
      },
      {
        address: 'grpc-injective-01.stakeflow.io:2102',
        provider: 'Stakeflow',
      },
      {
        address: 'injective-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'injective-grpc.w3coins.io:14390',
        provider: 'w3coins',
      },
      {
        address: 'grpc-injective.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
    ],
  },
  explorers: [
    {
      kind: 'injectiveprotocol',
      url: 'https://explorer.injective.network/',
      tx_page: 'https://explorer.injective.network/transaction/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/injective',
      tx_page: 'https://ping.pub/injective/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/injective',
      tx_page: 'https://atomscan.com/injective/transactions/${txHash}',
      account_page: 'https://atomscan.com/injective/accounts/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/injective',
      tx_page: 'https://www.mintscan.io/injective/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/injective/accounts/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/injective',
      account_page: 'https://stakeflow.io/injective/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
    },
  ],
};

export const injectiveAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'injective',
  assets: [
    {
      description:
        'The INJ token is the native governance token for the Injective chain.',
      denom_units: [
        {
          denom: 'inj',
          exponent: 0,
        },
        {
          denom: 'INJ',
          exponent: 18,
        },
      ],
      base: 'inj',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
      },
      coingecko_id: 'injective-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
        },
      ],
    },
    {
      description: 'Tether USDt on Injective',
      denom_units: [
        {
          denom:
            'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-122',
          },
          chain: {
            channel_id: 'channel-143',
            path: 'transfer/channel-143/erc20/tether/usdt',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
      },
    },
    {
      description: 'ERIS liquid staked INJ',
      denom_units: [
        {
          denom: 'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
          exponent: 0,
        },
        {
          denom: 'ampINJ',
          exponent: 6,
        },
      ],
      base: 'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
      name: 'ERIS Amplified INJ',
      display: 'ampINJ',
      symbol: 'ampINJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png',
        },
      ],
    },
    {
      description:
        '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denom_units: [
        {
          denom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
          exponent: 0,
        },
        {
          denom: 'autism',
          exponent: 6,
        },
      ],
      base: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png',
      },
      coingecko_id: 'autism',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png',
        },
      ],
    },
    {
      description:
        'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denom_units: [
        {
          denom: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
          exponent: 0,
        },
        {
          denom: 'NINJA',
          exponent: 6,
        },
      ],
      base: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png',
      },
      coingecko_id: 'dog-wif-nuchucks',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png',
        },
      ],
    },
    {
      description: 'The $WGMI Token - We Gonna Make It. Are you ready?',
      denom_units: [
        {
          denom: 'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
          exponent: 0,
        },
        {
          denom: 'WGMI',
          exponent: 6,
        },
      ],
      base: 'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
      name: 'WGMI',
      display: 'WGMI',
      symbol: 'WGMI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png',
        },
      ],
    },
  ],
};

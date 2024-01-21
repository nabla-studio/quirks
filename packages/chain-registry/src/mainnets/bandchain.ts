import type { Chain, AssetLists, ChainVersions } from '../types';

export const bandchain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bandchain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://bandprotocol.com/',
  pretty_name: 'Band Protocol',
  chain_id: 'laozi-mainnet',
  daemon_name: 'bandd',
  node_home: '$HOME/.band',
  bech32_prefix: 'band',
  slip44: 494,
  fees: {
    fee_tokens: [
      {
        denom: 'uband',
        low_gas_price: 0.0025,
        average_gas_price: 0.003,
        high_gas_price: 0.005,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uband',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/bandprotocol/chain',
    recommended_version: 'v2.5.3',
    compatible_versions: ['v2.5.3'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/genesis.json',
    },
    versions: [
      {
        name: 'v2.4.1',
        recommended_version: 'v2.4.1',
        compatible_versions: ['v2.4.1'],
      },
      {
        name: 'v2.5.2',
        recommended_version: 'v2.5.2',
        compatible_versions: ['v2.5.2'],
      },
      {
        name: 'v2.5.3',
        recommended_version: 'v2.5.3',
        compatible_versions: ['v2.5.3'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg',
  },
  description:
    'Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.',
  peers: {
    seeds: [
      {
        id: '8d42bdcb6cced03e0b67fa3957e4e9c8fd89015a',
        address: '34.87.86.195:26656',
      },
      {
        id: '543e0cab9c3016a0e99775443a17bcf163038912',
        address: '34.150.156.78:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'bandchain-mainnet-seed.autostake.com:26666',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '4ded49b3a718828eb64cf35da1ed791ecb201bc1',
        address: 'seed-band-01.stakeflow.io:25017',
        provider: 'Stakeflow',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'band.rpc.kjnodes.com:16959',
        provider: 'kjnodes',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '98823087b61d442a4ab86998709c77b2e517ee78',
        address: '35.240.152.216:26656',
      },
      {
        id: '3ea84babead3d6bc488810a0f2cf0744cf5c68fe',
        address: '34.86.22.251:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'bandchain-mainnet-peer.autostake.com:26666',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '0bfd5d7355ebf38e35af619ae0cab70aa21675a5',
        address: 'band-m.peer.stavr.tech:11026',
        provider: '🔥STAVR🔥',
      },
      {
        id: '4ded49b3a718828eb64cf35da1ed791ecb201bc1',
        address: 'peer-band-01.stakeflow.io:25017',
        provider: 'Stakeflow',
      },
      {
        id: 'd3fe7586b604196461db92c2c7cf72eb354af1fc',
        address: 'rpc.band.indonode.net:12656',
        provider: 'Indonode',
      },
      {
        id: 'c6f9e1309055eedbcd58d018b54247f13e9f878b',
        address: '88.99.208.54:44656',
        provider: 'StakeTown',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'http://rpc.laozi1.bandchain.org:80',
        provider: 'bandprotocol',
      },
      {
        address: 'https://rpc-bandchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://band-rpc.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://bandchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://band.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-band-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://rpc-band.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://band-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://bandprotocol-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://band-rpc.stake-town.com',
        provider: 'StakeTown',
      },
    ],
    rest: [
      {
        address: 'https://laozi1.bandchain.org/api',
        provider: 'bandprotocol',
      },
      {
        address: 'https://api-bandchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://band-api.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://api-band.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://band.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://bandchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://api-band-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://band-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://bandprotocol-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://band-api.stake-town.com',
        provider: 'StakeTown',
      },
    ],
    grpc: [
      {
        address: 'grpc-bandchain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'bandchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc-band.cosmos-spaces.cloud:2240',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'grpc-band-01.stakeflow.io:2502',
        provider: 'Stakeflow',
      },
      {
        address: 'band-grpc.w3coins.io:22990',
        provider: 'w3coins',
      },
      {
        address: 'http://band.grpc.m.stavr.tech:7803',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://grpc-band.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'band.grpc.kjnodes.com:443',
        provider: 'kjnodes',
      },
      {
        address: 'band-grpc.stake-town.com:443',
        provider: 'StakeTown',
      },
    ],
  },
  explorers: [
    {
      kind: 'cosmoscan',
      url: 'https://cosmoscan.io',
      tx_page: 'https://cosmoscan.io/tx/${txHash}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/band',
      tx_page: 'https://www.mintscan.io/band/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/band/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/band-protocol',
      tx_page: 'https://ping.pub/band-protocol/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Band-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Band-Mainnet/tx/${txHash}',
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/band',
      tx_page: 'https://exp.nodeist.net/band/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/band-protocol',
      tx_page: 'https://atomscan.com/band-protocol/transactions/${txHash}',
      account_page:
        'https://atomscan.com/band-protocol/accounts/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/band',
      tx_page: 'https://bigdipper.live/band/transactions/${txHash}',
      account_page: 'https://bigdipper.live/band/accounts/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/band-protocol',
      account_page:
        'https://stakeflow.io/band-protocol/accounts/${accountAddress}',
    },
    {
      kind: 'kjnodes Explorer',
      url: 'https://explorer.kjnodes.com/band',
      tx_page: 'https://explorer.kjnodes.com/band/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg',
    },
  ],
};

export const bandchainAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'bandchain',
  assets: [
    {
      description: 'The native token of BandChain',
      denom_units: [
        {
          denom: 'uband',
          exponent: 0,
        },
        {
          denom: 'band',
          exponent: 6,
        },
      ],
      base: 'uband',
      display: 'band',
      name: 'Band Protocol',
      symbol: 'BAND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg',
      },
      coingecko_id: 'band-protocol',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg',
        },
      ],
    },
  ],
};

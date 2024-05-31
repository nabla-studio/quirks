import type { Chain, AssetList, Versions } from '../types';

export const pryzm: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'pryzm',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Pryzm',
  chain_id: 'pryzm-1',
  bech32_prefix: 'pryzm',
  daemon_name: 'pryzmd',
  node_home: '$HOME/.pryzm',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.01,
        high_gas_price: 0.01,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'upryzm',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/pryzm-finance/pryzm-core',
    recommended_version: 'v0.16.0',
    compatible_versions: ['v0.16.0'],
    cosmos_sdk_version: '0.47.10',
    consensus: {
      type: 'tendermint',
      version: '0.37.4',
    },
    ibc_go_version: '7.4.0',
    genesis: {
      genesis_url:
        'https://storage.googleapis.com/pryzm-zone/pryzm-1/genesis.json',
    },
    versions: [
      {
        name: 'v0.16.0',
        recommended_version: 'v0.16.0',
        compatible_versions: ['v0.16.0'],
        cosmos_sdk_version: '0.47.10',
        consensus: {
          type: 'tendermint',
          version: '0.37.4',
        },
        ibc_go_version: '7.4.0',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '3fce94795e925fb28e95acbaf1e5bd16e6885824',
        address: 'seed.pryzm.zone:26656',
        provider: 'PRYZM',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:24856',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'pryzm-mainnet-seed.autostake.com:27406',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'pryzm-mainnet-peer.autostake.com:27406',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.pryzm.zone',
        provider: 'PRYZM',
      },
      {
        address: 'https://pryzm-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://pryzm-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    rest: [
      {
        address: 'https://api.pryzm.zone',
        provider: 'PRYZM',
      },
      {
        address: 'https://pryzm-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://pryzm-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.pryzm.zone',
        provider: 'PRYZM',
      },
      {
        address: 'https://pryzm-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'pryzm-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.svg',
  },
  explorers: [
    {
      kind: 'Chainscope',
      url: 'https://chainsco.pe/pryzm',
      tx_page: 'https://chainsco.pe/pryzm/tx/${txHash}',
      account_page: 'https://chainsco.pe/pryzm/address/${accountAddress}',
    },
    {
      kind: 'PingPub',
      url: 'https://cosmosrun.info/pryzm',
      tx_page: 'https://cosmosrun.info/pryzm/tx/${txHash}',
      account_page: 'https://cosmosrun.info/pryzm/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.svg',
    },
  ],
};

export const pryzmAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'pryzm',
  assets: [
    {
      description: 'The native token of PRYZM',
      denom_units: [
        {
          denom: 'upryzm',
          exponent: 0,
        },
        {
          denom: 'pryzm',
          exponent: 6,
        },
      ],
      base: 'upryzm',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
        },
      ],
    },
    {
      description: 'The meme token of PRYZM',
      denom_units: [
        {
          denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
          exponent: 0,
        },
        {
          denom: 'auuu',
          exponent: 6,
        },
      ],
      base: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
      name: 'AUUU',
      display: 'auuu',
      symbol: 'AUUU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.svg',
        },
      ],
    },
  ],
};

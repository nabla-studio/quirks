import type { Chain, AssetLists } from '../types';

export const kichain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'kichain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://foundation.ki/',
  pretty_name: 'Ki',
  chain_id: 'kichain-2',
  bech32_prefix: 'ki',
  daemon_name: 'kid',
  node_home: '$HOME/.kid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uxki',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.05,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uxki',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/KiFoundation/ki-tools',
    recommended_version: '5.0.1',
    compatible_versions: ['5.0.0', '5.0.1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/KiFoundation/ki-networks/v0.1/Mainnet/kichain-2/genesis.json',
    },
    versions: [
      {
        name: '5.0.0',
        recommended_version: '5.0.1',
        compatible_versions: ['5.0.0', '5.0.1'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
  },
  peers: {
    seeds: [
      {
        id: '24cbccfa8813accd0ebdb09e7cdb54cff2e8fcd9',
        address: '51.89.166.197:26656',
        provider: 'kifoundation',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:13556',
        provider: 'Polkachu',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'kichain-mainnet-seed.autostake.com:27396',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:13556',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: '8edd80b2e7e807af9617d643dcbf5125425cab68',
        address: 'kichain-seed.panthea.eu:38656',
        provider: 'Panthea EU',
      },
      {
        id: '27941ba20ad57cb665c7870d073a938e35e7d634',
        address: 'seed-ki.ibs.team:16663',
        provider: 'Inter Blockchain Services',
      },
    ],
    persistent_peers: [
      {
        id: '41b321292cbe50c5c30017cc71c404481be0e20b',
        address: '3.38.12.5:26656',
        provider: 'cosmostation',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'kichain-mainnet-peer.autostake.com:27396',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'e7bab76ef15493aaee6f91a0652ba098838a0bfb',
        address: 'kichain-peer.panthea.eu:28656',
        provider: 'Panthea EU',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mainnet.blockchain.ki',
        provider: 'kifoundation',
      },
      {
        address: 'https://kichain-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-kichain-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://kichain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rpc.kichain.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://kichain-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://ki-rpc.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://kichain-rpc.panthea.eu',
        provider: 'Panthea EU',
      },
    ],
    rest: [
      {
        address: 'https://api-mainnet.blockchain.ki',
        provider: 'kifoundation',
      },
      {
        address: 'https://api-kichain-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://api.kichain.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://kichain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://kichain-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://kichain-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://ki-api.ibs.team/',
        provider: 'Inter Blockchain Services',
      },
      {
        address: 'https://kichain-api.panthea.eu',
        provider: 'Panthea EU',
      },
    ],
    grpc: [
      {
        address: 'grpc-kichain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'kichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'kichain-grpc.polkachu.com:13590',
        provider: 'Polkachu',
      },
      {
        address: 'kichain-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/kichain',
      tx_page: 'https://app.ezstaking.io/kichain/txs/${txHash}',
      account_page:
        'https://app.ezstaking.io/kichain/account/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/ki-chain',
      tx_page: 'https://www.mintscan.io/ki-chain/txs/${txHash}',
      account_page:
        'https://www.mintscan.io/ki-chain/account/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/kichain',
      tx_page: 'https://ping.pub/kichain/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/ki-chain',
      tx_page: 'https://atomscan.com/ki-chain/transactions/${txHash}',
      account_page: 'https://atomscan.com/ki-chain/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
    },
  ],
};

export const kichainAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'kichain',
  assets: [
    {
      description: 'The native token of Ki Chain',
      denom_units: [
        {
          denom: 'uxki',
          exponent: 0,
        },
        {
          denom: 'xki',
          exponent: 6,
        },
      ],
      base: 'uxki',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
      },
      coingecko_id: 'ki',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
        },
      ],
    },
    {
      description: 'ELEVENPARIS loyalty token on KiChain',
      type_asset: 'cw20',
      address: 'ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
      denom_units: [
        {
          denom:
            'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
          exponent: 0,
        },
        {
          denom: 'lvn',
          exponent: 6,
        },
      ],
      base: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
      name: 'LVN',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png',
      },
      coingecko_id: 'lvn',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png',
        },
      ],
    },
  ],
};
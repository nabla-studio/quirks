import type { Chain, AssetLists } from '../types';

export const terra2: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'terra2',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.terra.money/',
  pretty_name: 'Terra',
  chain_id: 'phoenix-1',
  daemon_name: 'terrad',
  node_home: '$HOME/.terra',
  bech32_prefix: 'terra',
  slip44: 330,
  fees: {
    fee_tokens: [
      {
        denom: 'uluna',
        fixed_min_gas_price: 0.0125,
        low_gas_price: 0.0125,
        average_gas_price: 0.015,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uluna',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/terra-money/core/',
    recommended_version: 'v2.5.2',
    compatible_versions: ['v2.5.2'],
    binaries: {
      'linux/arm64':
        'https://github.com/terra-money/core/releases/download/v2.5.2/terra_2.5.2_Linux_arm64.tar.gz',
      'linux/amd64':
        'https://github.com/terra-money/core/releases/download/v2.5.2/terra_2.5.2_Linux_x86_64.tar.gz',
    },
    genesis: {
      name: 'v2.0',
      genesis_url: 'https://tfl-phoenix-1.s3.amazonaws.com/genesis.json',
    },
    versions: [
      {
        name: 'v2.0',
        tag: 'v2.0.1',
        recommended_version: 'v2.0.1',
        cosmos_sdk_version: '0.45.4',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.27.0',
        ibc_go_version: '3.0.0',
        consensus: {
          type: 'tendermint',
          version: '0.34.19',
        },
        height: 1,
        next_version_name: 'v2.1',
        binaries: {
          'linux/amd64':
            'https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Linux_x86_64.tar.gz?checksum=sha256:eae23aad59b36ea2adaa541a7662a6119569279d2e6c4013e3deee96e9263b30',
          'darwin/amd64':
            'https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Darwin_x86_64.tar.gz?checksum=sha256:c2a6b1bff922b127a31757bdb0c8f05a34f3b1f879dee1e862f9f8b748e15a54',
        },
      },
      {
        name: 'v2.1',
        tag: 'v2.1.4',
        recommended_version: 'v2.1.4',
        cosmos_sdk_version: '0.46.9',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.27.0',
        ibc_go_version: '3.0.0',
        consensus: {
          type: 'tendermint',
          version: '0.34.21',
        },
        height: 890000,
        next_version_name: 'v2.2',
        binaries: {
          'linux/amd64':
            'https://github.com/terra-money/core/releases/download/v2.1.4/terra_2.1.4_Linux_x86_64.tar.gz?checksum=sha256:e05b85ae2eac5df886f4f9d0ecf719b82ebe4da4fc59cae93a34af7c3e89ddfb',
          'darwin/amd64':
            'https://github.com/terra-money/core/releases/download/v2.1.4/terra_2.1.4_Darwin_x86_64.tar.gz?checksum=sha256:4b66ebf800cb903f7b6c07686636eff43e686f5956c9fadc307f077afd7f23bb',
        },
      },
      {
        name: 'v2.2',
        tag: 'v2.2.1',
        height: 2979805,
        recommended_version: 'v2.2.1',
        compatible_versions: ['v2.2.0', 'v2.2.1'],
        cosmos_sdk_version: 'v0.46.11',
        cosmwasm_enabled: true,
        cosmwasm_version: 'v0.27.0',
        ibc_go_version: 'v3.4.0',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.21',
        },
        next_version_name: 'v2.3',
        binaries: {
          'linux/amd64':
            'https://github.com/terra-money/core/releases/download/v2.2.1/terra_2.2.1_Linux_x86_64.tar.gz?checksum=sha256:8a9353ae3c33a750ce2a9d236f00c12c5449c41fad96e9885a5c0b8678fcf8bc',
        },
      },
      {
        name: 'v2.3',
        tag: 'v2.3.5',
        height: 4711800,
        recommended_version: 'v2.3.5',
        compatible_versions: ['v2.3.0', 'v2.3.1', 'v2.3.2', 'v2.3.4', 'v2.3.5'],
        cosmos_sdk_version: 'v0.46.11',
        cosmwasm_enabled: true,
        cosmwasm_version: 'v0.30.0',
        ibc_go_version: 'v6.1.1',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.27',
        },
        binaries: {
          'linux/arm64':
            'https://github.com/terra-money/core/releases/download/v2.3.5/terra_2.3.5_Linux_arm64.tar.gz?checksum=sha256:93b0c508e16f779b93f0e76629ab247ddaf5fa0db96573405b3b2b11e3eb6859',
          'linux/amd64':
            'https://github.com/terra-money/core/releases/download/v2.3.5/terra_2.3.5_Linux_x86_64.tar.gz?checksum=sha256:8c3ac7392436b102dcdd63fd275fa73b1e0201e65e420af71954782cee682ac6',
        },
        next_version_name: 'v2.4',
      },
      {
        name: 'v2.4',
        tag: 'v2.4.1',
        proposal: 4737,
        height: 5994365,
        cosmos_sdk_version: 'v0.46.11',
        cosmwasm_enabled: true,
        cosmwasm_version: 'v0.30.0',
        ibc_go_version: 'v6.1.1',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.27',
        },
        binaries: {
          'linux/arm64':
            'https://github.com/terra-money/core/releases/download/v2.4.1/terra_2.4.1_Linux_arm64.tar.gz',
          'linux/amd64':
            'https://github.com/terra-money/core/releases/download/v2.4.1/terra_2.4.1_Linux_x86_64.tar.gz',
        },
        next_version_name: 'v2.5',
      },
      {
        name: 'v2.5',
        tag: 'v2.5.2',
        proposal: 4785,
        height: 7316000,
        cosmos_sdk_version: 'v0.47.5-terra.2',
        cosmwasm_enabled: true,
        cosmwasm_version: 'v0.41.0',
        ibc_go_version: 'v7.3.1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        binaries: {
          'linux/arm64':
            'https://github.com/terra-money/core/releases/download/v2.5.2/terra_2.5.2_Linux_arm64.tar.gz',
          'linux/amd64':
            'https://github.com/terra-money/core/releases/download/v2.5.2/terra_2.5.2_Linux_x86_64.tar.gz',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
  },
  peers: {
    seeds: [
      {
        id: '406bcf90a7b29df6ae475a1f94abe04ebde805af',
        address: 'phoenix.seed.stakebin.io:16656',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:11756',
        provider: 'Polkachu',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:11756',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'terra-mainnet-seed.autostake.com:26676',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: 'terra2-seed-de.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: 'terra2-seed-us.allnodes.me:26656',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        id: '1e094db9c147a0fd5e9793365d66736c80bfef46',
        address: 'seeds.whispernode.com:11756',
        provider: 'WhisperNode🤐',
      },
      {
        id: 'a8d12536bdcc210ac35a9f092f3295360b97830d',
        address: 'seed-terra-01.stakeflow.io:33007',
        provider: 'Stakeflow',
      },
    ],
    persistent_peers: [
      {
        id: '0f1096278efafcf3f0d3bd5b6544e6b8dcc36a0e',
        address: '206.189.129.195:26656',
      },
      {
        id: '9038d63588e0ab421fa71582720c1efb1ee867f6',
        address: '45.34.1.114:27656',
      },
      {
        id: 'f2069012aec5ced4e88e7e4311391eabe72bb5a3',
        address: 'node-phoenix.terra.lunastations.online:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'terra-mainnet-peer.autostake.com:26676',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
        address: 'terra.seed.node75.org:10856',
        provider: 'Pro-Nodes75',
      },
      {
        id: 'a8d12536bdcc210ac35a9f092f3295360b97830d',
        address: 'peer-terra-01.stakeflow.io:33007',
        provider: 'Stakeflow',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.terrav2.ccvalidators.com:443/',
        provider: 'CryptoCrew',
      },
      {
        address: 'https://terra2-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://terra-rpc.polkachu.com',
        provider: 'polkachu',
      },
      {
        address: 'https://terra-rpc.stakely.io:443/',
        provider: 'stakely',
      },
      {
        address: 'https://rpc-terra2.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://terra-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://phoenix-rpc.terra.dev:443',
        provider: 'Terraform Labs',
      },
      {
        address: 'https://terra-rpc.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc-terra-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://terra-phoenix-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭',
      },
      {
        address: 'https://rpc-terra.wildsage.io',
        provider: '🧙 WildSage Labs',
      },
    ],
    rest: [
      {
        address: 'https://lcd-terra.wildsage.io',
        provider: '🧙 WildSage Labs',
      },
      {
        address: 'https://terra-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://lcd-terra2.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://phoenix-lcd.terra.dev:443',
        provider: 'Terraform Labs',
      },
      {
        address: 'https://terra-rest.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'terra2-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api-terra-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://terra-phoenix-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭',
      },
    ],
    grpc: [
      {
        address: 'terra2-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'terra-grpc.polkachu.com:11790',
        provider: 'Polkachu',
      },
      {
        address: 'terra-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'terra-grpc.publicnode.com:443',
        provider: 'Allnodes.com ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc-terra-01.stakeflow.io:1102',
        provider: 'Stakeflow',
      },
    ],
  },
  explorers: [
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/terra2',
      tx_page: 'https://atomscan.com/terra2/transactions/${txHash}',
      account_page: 'https://atomscan.com/terra2/accounts/${accountAddress}',
    },
    {
      kind: 'finder',
      url: 'http://finder.terra.money/',
      tx_page: 'https://finder.terra.money/mainnet/tx/${txHash}',
      account_page:
        'https://finder.terra.money/mainnet/address/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/terra',
      account_page: 'https://stakeflow.io/terra/accounts/${accountAddress}',
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/terra',
      tx_page: 'https://www.mintscan.io/terra/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/terra/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
    },
  ],
};

export const terra2AssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'terra2',
  assets: [
    {
      description: 'The native staking token of Terra.',
      denom_units: [
        {
          denom: 'uluna',
          exponent: 0,
        },
        {
          denom: 'luna',
          exponent: 6,
        },
      ],
      base: 'uluna',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
      },
      coingecko_id: 'terra-luna-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
        },
      ],
    },
    {
      description:
        'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [
        {
          denom:
            'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
          exponent: 0,
        },
        {
          denom: 'astro',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address:
        'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      base: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      name: 'Astroport',
      display: 'astro',
      symbol: 'ASTRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png',
      },
      coingecko_id: 'astroport-fi',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png',
        },
      ],
    },
    {
      description:
        'Dinheiros is the reserve currency of dioalma.protocol, an undivisible and rare token.',
      denom_units: [
        {
          denom:
            'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
          exponent: 0,
        },
        {
          denom: 'Dinheiros',
          exponent: 0,
        },
      ],
      type_asset: 'cw20',
      address:
        'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      base: 'cw20:terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      name: 'dinheiro',
      display: 'Dinheiros',
      symbol: 'DINHEIROS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Dinheiros.png',
        },
      ],
    },
    {
      description:
        'Reis is the king of trading, high volume high liquidity, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [
        {
          denom:
            'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
          exponent: 0,
        },
        {
          denom: 'Reis',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address:
        'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      base: 'cw20:terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      name: 'real',
      display: 'Reis',
      symbol: 'REIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Reis.png',
        },
      ],
    },
    {
      description:
        'Escudos is the everyday currency of dioalma.protocol, good to send money back and foward.',
      denom_units: [
        {
          denom:
            'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
          exponent: 0,
        },
        {
          denom: 'Escudos',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address:
        'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      base: 'cw20:terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      name: 'escudo',
      display: 'Escudos',
      symbol: 'ESCUDOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Escudos.png',
        },
      ],
    },
    {
      description:
        'Alem is a local currency for the region of Alentejo in Portugal, sibling of Dinheiros, Reis and Alem, a token of dioalma.protocol.',
      denom_units: [
        {
          denom:
            'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
          exponent: 0,
        },
        {
          denom: 'Alem',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address:
        'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      base: 'cw20:terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      name: 'alentejo.money',
      display: 'Alem',
      symbol: 'ALEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/Alem.png',
        },
      ],
    },
    {
      description: 'ERIS liquid staked LUNA.',
      type_asset: 'cw20',
      address:
        'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      denom_units: [
        {
          denom:
            'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
          exponent: 0,
        },
        {
          denom: 'ampluna',
          exponent: 6,
        },
      ],
      base: 'cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      name: 'ERIS Amplified LUNA',
      display: 'ampluna',
      symbol: 'ampLUNA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg',
      },
      coingecko_id: 'eris-amplified-luna',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampluna.svg',
        },
      ],
    },
    {
      description:
        'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      type_asset: 'cw20',
      address:
        'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      denom_units: [
        {
          denom:
            'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
          exponent: 0,
        },
        {
          denom: 'roar',
          exponent: 6,
        },
      ],
      base: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png',
        },
      ],
    },
    {
      description:
        'GEM DAO, building a decentralized, community-owned, low-supply store of value',
      type_asset: 'cw20',
      address:
        'terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      denom_units: [
        {
          denom:
            'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
          exponent: 0,
        },
        {
          denom: 'gem',
          exponent: 6,
        },
      ],
      base: 'cw20:terra1ynvsz80w9xmhdxucv96gkwpxlwvjgsq75xh2f3pf825c4wfmkfxskq6pqv',
      name: 'GEM DAO',
      display: 'gem',
      symbol: 'GEM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/gem.png',
        },
      ],
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      type_asset: 'cw20',
      address:
        'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      denom_units: [
        {
          denom:
            'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
          exponent: 0,
        },
        {
          denom: 'cub',
          exponent: 6,
        },
      ],
      base: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png',
        },
      ],
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      type_asset: 'cw20',
      address:
        'terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      denom_units: [
        {
          denom:
            'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
          exponent: 0,
        },
        {
          denom: 'blue',
          exponent: 6,
        },
      ],
      base: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png',
        },
      ],
    },
    {
      description: 'Liquidity token, NFT, HARVEST FOR VALUE',
      type_asset: 'cw20',
      address:
        'terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      denom_units: [
        {
          denom:
            'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
          exponent: 0,
        },
        {
          denom: 'xxx',
          exponent: 10,
        },
      ],
      base: 'cw20:terra10se906awphtccf4vd83m0ulpmpt9v4msuakmpy0pwvmtxmup3kdq25rayn',
      name: 'TheOnlyOne',
      display: 'xxx',
      symbol: 'xxx',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/xxx3.png',
        },
      ],
    },
    {
      description:
        'The GraveDigger is the Liquid Staking Product of BackBone Labs. It will have its own platform. Its liquid staking derivative (LSD) is boneLUNA.',
      type_asset: 'cw20',
      address:
        'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      denom_units: [
        {
          denom:
            'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
          exponent: 0,
        },
        {
          denom: 'bluna',
          exponent: 6,
        },
      ],
      base: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      name: 'boneLuna',
      display: 'bluna',
      symbol: 'bLUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png',
        },
      ],
    },
    {
      description:
        'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      type_asset: 'cw20',
      address:
        'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      denom_units: [
        {
          denom:
            'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
          exponent: 0,
        },
        {
          denom: 'sayve',
          exponent: 6,
        },
      ],
      base: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg',
        },
      ],
    },
    {
      description: 'ERIS Alliance Staked ampWHALE on Terra',
      denom_units: [
        {
          denom:
            'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt',
          exponent: 0,
        },
        {
          denom: 'ampWHALEt',
          exponent: 6,
        },
      ],
      base: 'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt',
      name: 'ERIS Alliance Staked ampWHALE',
      display: 'ampWHALEt',
      symbol: 'ampWHALEt',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg',
        },
      ],
    },
    {
      description: 'ERIS Alliance Staked boneWHALE on Terra',
      denom_units: [
        {
          denom:
            'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt',
          exponent: 0,
        },
        {
          denom: 'boneWHALEt',
          exponent: 6,
        },
      ],
      base: 'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt',
      name: 'ERIS Alliance Staked boneWHALE',
      display: 'boneWHALEt',
      symbol: 'boneWHALEt',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg',
        },
      ],
    },
    {
      description: 'ERIS Liquid Enterprise Staked ROAR',
      denom_units: [
        {
          denom:
            'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR',
          exponent: 0,
        },
        {
          denom: 'ampROAR',
          exponent: 6,
        },
      ],
      base: 'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR',
      name: 'ERIS Amplified ROAR',
      display: 'ampROAR',
      symbol: 'ampROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png',
        },
      ],
    },
  ],
};

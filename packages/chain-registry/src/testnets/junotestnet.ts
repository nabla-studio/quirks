import type { Chain, AssetList, Versions } from '../types';

export const junotestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'junotestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Juno Testnet',
  chain_id: 'uni-6',
  bech32_prefix: 'juno',
  daemon_name: 'junod',
  node_home: '$HOME/.juno',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ujunox',
        low_gas_price: 0.003,
        average_gas_price: 0.0045,
        high_gas_price: 0.006,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ujunox',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/CosmosContracts/juno',
    recommended_version: 'v15.0.0-alpha.2',
    compatible_versions: ['v15.0.0', 'v15.0.0-alpha.2'],
    cosmos_sdk_version: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '0.31',
    cosmwasm_enabled: true,
    ibc_go_version: '4.3.1',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-6/genesis.json',
    },
    versions: [
      {
        name: 'v13.0.0-beta.1',
        recommended_version: 'v13.0.0-beta.1',
        compatible_versions: ['v13.0.0-beta.1'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
      },
      {
        name: 'v14.0.0-alpha.1',
        recommended_version: 'v14.0.0-alpha.1',
        compatible_versions: ['v14.0.0-alpha.1'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.30',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
        address: 'testnet-seed.rhinostake.com:12656',
        provider: 'RHINO',
      },
    ],
    persistent_peers: [
      {
        id: 'c54bf418fb542634495f57a1e36c9bd057d55e1b',
        address: '5.161.80.115:26656',
        provider: 'Reecepbcups',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://juno-testnet-rpc.polkachu.com',
        provider: 'Polkachu',
      },
    ],
    rest: [
      {
        address: 'https://juno-testnet-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://juno.api.t.stavr.tech',
        provider: '🔥STAVR🔥',
      },
    ],
    grpc: [
      {
        address: 'juno-testnet-grpc.polkachu.com:12690',
        provider: 'Polkachu',
      },
    ],
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Juno-Testnet',
      tx_page: 'https://explorer.stavr.tech/Juno-Testnet/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Juno-Testnet/account/${accountAddress}',
    },
  ],
};

export const junotestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'junotestnet',
  assets: [
    {
      description: 'The native token of JUNO Chain',
      denom_units: [
        {
          denom: 'ujunox',
          exponent: 0,
        },
        {
          denom: 'junox',
          exponent: 6,
        },
      ],
      base: 'ujunox',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg',
      },
      coingecko_id: 'juno-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg',
        },
      ],
    },
    {
      description: 'The native token of NEXX GEN AI',
      denom_units: [
        {
          denom: 'factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX',
          exponent: 0,
        },
        {
          denom: 'nexx',
          exponent: 6,
        },
      ],
      base: 'factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX',
      name: 'NEXX GEN AI',
      display: 'nexx',
      symbol: 'NEXX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png',
        },
      ],
    },
    {
      type_asset: 'sdk.coin',
      denom_units: [
        {
          denom:
            'factory/juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k/ARENA',
          exponent: 0,
        },
        {
          denom: 'arena',
          exponent: 6,
        },
      ],
      address:
        'juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k',
      base: 'factory/juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k/ARENA',
      name: 'Arena Token',
      description: 'The token for the Arena DAO',
      display: 'arena',
      symbol: 'ARENA',
      traces: [
        {
          type: 'test-mintage',
          counterparty: {
            chain_name: 'juno',
            base_denom:
              'factory/juno1vwmnqk0vyxc96qgffrure4nqxupjrql0zut8s02hadgp0n79r8xq5xdsxy/ARENA',
          },
          provider: 'Arena DAO',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'juno',
            base_denom:
              'factory/juno1vwmnqk0vyxc96qgffrure4nqxupjrql0zut8s02hadgp0n79r8xq5xdsxy/ARENA',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena.png',
        },
      ],
    },
  ],
};

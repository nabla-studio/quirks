import type { Chain, AssetList, Versions } from '../types';

export const xiontestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'xiontestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Xion Testnet',
  chain_id: 'xion-testnet-1',
  bech32_prefix: 'xion',
  daemon_name: 'xiond',
  node_home: '$HOME/.xiond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uxion',
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
        denom: 'uxion',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/burnt-labs/xion',
    recommended_version: 'v0.3.9',
    compatible_versions: ['v0.3.9'],
    cosmos_sdk_version: '0.47.10',
    consensus: {
      type: 'cometbft',
      version: '0.37.4',
    },
    cosmwasm_version: '0.45.1',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/burnt-labs/burnt-networks/main/testnets/xion-testnet-1/genesis.json',
    },
    versions: [
      {
        name: 'v0.1.0',
        tag: 'v0.1.0',
        height: 0,
        recommended_version: 'v0.1.0',
        cosmos_sdk_version: '0.47.0',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.40.0-rc.0',
        ibc_go_version: 'v7.0.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.0',
        },
      },
      {
        name: 'v0.3.2',
        tag: 'v0.3.2',
        height: 1929544,
        recommended_version: 'v0.3.2',
        cosmos_sdk_version: '0.47.3',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.40.1',
        ibc_go_version: 'v7.2.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
      },
      {
        name: 'v0.3.3',
        tag: 'v0.3.3',
        height: 2147030,
        recommended_version: 'v0.3.3',
        cosmos_sdk_version: '0.47.3',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.40.1',
        ibc_go_version: 'v7.2.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
      },
      {
        name: 'v0.3.4',
        tag: 'v0.3.4',
        height: 3278095,
        recommended_version: 'v0.3.4',
        cosmos_sdk_version: '0.47.5',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.43.0',
        ibc_go_version: 'v7.3.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.2',
        },
      },
      {
        name: 'v0.3.7',
        tag: 'v0.3.7',
        height: 6887750,
        recommended_version: 'v0.3.7',
        cosmos_sdk_version: '0.47.10',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.45.0',
        ibc_go_version: 'v7.3.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.4',
        },
      },
      {
        name: 'v0.3.8',
        tag: 'v0.3.8',
        height: 7130100,
        recommended_version: 'v0.3.8',
        cosmos_sdk_version: '0.47.10',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.45.0',
        ibc_go_version: 'v7.3.1',
        consensus: {
          type: 'cometbft',
          version: '0.37.4',
        },
      },
      {
        name: 'v0.3.9',
        tag: 'v0.3.9',
        height: 7438800,
        recommended_version: 'v0.3.9',
        cosmos_sdk_version: '0.47.10',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.45.1',
        ibc_go_version: 'v7.4.0',
        consensus: {
          type: 'cometbft',
          version: '0.37.4',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '7900d5f177228def24170f9631db76afab20278e',
        address: 'xion-testnet-1.burnt.com:11656',
        provider: 'burnt-labs',
      },
    ],
    persistent_peers: [
      {
        id: '93db3539d6cc9603bbb6b9e43bfb473bdaff7e4b',
        address: 'xion-testnet-1.burnt.com:32656',
        provider: 'burnt-labs',
      },
      {
        id: '0f2ccb6d7e8f233c03f91dee690f5ff714319fba',
        address: 'xion-testnet-1.burnt.com:33656',
        provider: 'burnt-labs',
      },
      {
        id: 'f684e3873191d62a74e5431202581d99fe3439b7',
        address: 'xion-testnet-1.burnt.com:34656',
        provider: 'burnt-labs',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://testnet-burnt-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://xion-testnet-rpc.polkachu.com',
        provider: 'polkachu',
      },
    ],
    rest: [
      {
        address: 'https://testnet-burnt-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://xion-testnet-api.polkachu.com',
        provider: 'polkachu',
      },
    ],
    grpc: [
      {
        address: 'https://testnet-burnt-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'xion-testnet-grpc.polkachu.com:22390',
        provider: 'polkachu',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png',
  },
  keywords: ['xion', 'burnt', 'testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png',
    },
  ],
};

export const xiontestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'xiontestnet',
  assets: [
    {
      description: 'The native staking token of the Xion network.',
      denom_units: [
        {
          denom: 'uxion',
          exponent: 0,
          aliases: ['microxion'],
        },
        {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion'],
        },
      ],
      base: 'uxion',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom:
            'ibc/05007A23A23D8B3D286EC4A541189D86C0B76FD769008E4C85EBE977DDA437D3',
          exponent: 0,
          aliases: ['uaxl'],
        },
        {
          denom: 'axl',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/05007A23A23D8B3D286EC4A541189D86C0B76FD769008E4C85EBE977DDA437D3',
      name: 'Axelar AXL Token',
      display: 'axl',
      symbol: 'AXL',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelartestnet',
            base_denom: 'uaxl',
            channel_id: 'channel-462',
          },
          chain: {
            channel_id: 'channel-486',
            path: 'transfer/channel-486/uaxl',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelartestnet',
            base_denom: 'uaxl',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/484532EB74866F3FB8A71F909F7B1B470FE2E66313DA0A1F9EE5B7C5C046D195',
          exponent: 0,
          aliases: ['uosmo'],
        },
        {
          denom: 'osmo',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/484532EB74866F3FB8A71F909F7B1B470FE2E66313DA0A1F9EE5B7C5C046D195',
      name: 'Osmosis OSMO Token',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosistestnet',
            base_denom: 'uosmo',
            channel_id: 'channel-6668',
          },
          chain: {
            channel_id: 'channel-490',
            path: 'transfer/channel-490/uosmo',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosistestnet',
            base_denom: 'uosmo',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64',
          exponent: 0,
          aliases: ['uusdc'],
        },
        {
          denom: 'usdc',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64',
      name: 'Noble USDC Token',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc',
            channel_id: 'channel-147',
          },
          chain: {
            channel_id: 'channel-489',
            path: 'transfer/channel-489/uusdc',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nobletestnet',
            base_denom: 'uusdc',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/05314A48723E06A1B1B666066B6BEC89F3708E8854DF2E5E9193387AA9653036',
          exponent: 0,
          aliases: ['inj'],
        },
        {
          denom: 'INJ',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/05314A48723E06A1B1B666066B6BEC89F3708E8854DF2E5E9193387AA9653036',
      name: 'Injective INJ token',
      display: 'INJ',
      symbol: 'INJ',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'injectivetestnet',
            base_denom: 'inj',
            channel_id: 'channel-489',
          },
          chain: {
            channel_id: 'channel-487',
            path: 'transfer/channel-487/inj',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'injectivetestnet',
            base_denom: 'inj',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
      },
    },
  ],
};

import type { Chain, AssetLists } from '../types';

export const axelartestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'axelartestnet',
  chain_id: 'axelar-testnet-lisbon-3',
  pretty_name: 'Axelar Testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://axelar.network/',
  bech32_prefix: 'axelar',
  daemon_name: 'axelard',
  node_home: '$HOME/.axelard',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uaxl',
        low_gas_price: 0.007,
        average_gas_price: 0.007,
        high_gas_price: 0.01,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uaxl',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/axelarnetwork/axelar-core',
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-axelar-testnet.imperator.co:443',
        provider: 'Imperator.co',
      },
      {
        address: 'https://axelartest-rpc.quickapi.com/',
        provider: 'Quickapi',
      },
    ],
    rest: [
      {
        address: 'https://lcd-axelar-testnet.imperator.co:443',
        provider: 'Imperator.co',
      },
      {
        address: 'https://axelartest-lcd.quickapi.com/',
        provider: 'Quickapi',
      },
    ],
  },
  explorers: [
    {
      kind: 'axelarscan',
      url: 'https://testnet.axelarscan.io',
      tx_page: 'https://testnet.axelarscan.io/tx/${txHash}',
    },
    {
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/axelar-testnet',
      tx_page: 'https://testnet.mintscan.io/axelar-testnet/txs/${txHash}',
      account_page:
        'https://testnet.mintscan.io/axelar-testnet/account/${accountAddress}',
    },
  ],
};

export const axelartestnetAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'axelartestnet',
  assets: [
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom: 'uaxl',
          exponent: 0,
        },
        {
          denom: 'axl',
          exponent: 6,
        },
      ],
      base: 'uaxl',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
      },
      coingecko_id: 'axelar',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg',
        },
      ],
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom: 'uausdc',
          exponent: 0,
        },
        {
          denom: 'ausdc',
          exponent: 6,
        },
      ],
      base: 'uausdc',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereumtestnet',
            base_denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A',
          },
          provider: 'Axelar',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
      },
      coingecko_id: 'usd-coin',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        },
      ],
    },
    {
      description: 'Wrapped Ether on Axelar',
      denom_units: [
        {
          denom: 'weth-wei',
          exponent: 0,
        },
        {
          denom: 'weth',
          exponent: 18,
        },
      ],
      base: 'weth-wei',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'WETH',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereumtestnet',
            base_denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
          },
          provider: 'Axelar',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
      },
      coingecko_id: 'weth',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png',
        },
      ],
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denom_units: [
        {
          denom: 'wglmr-wei',
          exponent: 0,
        },
        {
          denom: 'wglmr',
          exponent: 18,
        },
      ],
      base: 'wglmr-wei',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WGLMR',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'moonbeamtestnet',
            base_denom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
          },
          provider: 'Axelar',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
      },
      coingecko_id: 'wrapped-moonbeam',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg',
        },
      ],
    },
    {
      description: 'Wrapped Matic on Axelar',
      denom_units: [
        {
          denom: 'wmatic-wei',
          exponent: 0,
        },
        {
          denom: 'wmatic',
          exponent: 18,
        },
      ],
      base: 'wmatic-wei',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'polygontestnet',
            base_denom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
          },
          provider: 'Axelar',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg',
      },
      coingecko_id: 'matic-network',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg',
        },
      ],
    },
    {
      description: 'Wrapped BNB on Axelar',
      denom_units: [
        {
          denom: 'wbnb-wei',
          exponent: 0,
        },
        {
          denom: 'wbnb',
          exponent: 18,
        },
      ],
      base: 'wbnb-wei',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'binancesmartchaintestnet',
            base_denom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
          },
          provider: 'Axelar',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
      },
      coingecko_id: 'wbnb',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg',
        },
      ],
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denom_units: [
        {
          denom: 'wavax-wei',
          exponent: 0,
        },
        {
          denom: 'avax',
          exponent: 18,
        },
      ],
      base: 'wavax-wei',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'avalanchetestnet',
            base_denom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
          },
          provider: 'Axelar',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg',
        },
      ],
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denom_units: [
        {
          denom: 'wftm-wei',
          exponent: 0,
        },
        {
          denom: 'ftm',
          exponent: 18,
        },
      ],
      base: 'wftm-wei',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'fantomtestnet',
            base_denom: '0x812666209b90344Ec8e528375298ab9045c2Bd08',
          },
          provider: 'Axelar',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        },
      ],
    },
  ],
};
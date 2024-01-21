import type { Chain, AssetLists, ChainVersions } from '../types';

export const cryptoorgchain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cryptoorgchain',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Cronos POS Chain',
  chain_id: 'crypto-org-chain-mainnet-1',
  bech32_prefix: 'cro',
  website: 'https://cronos-pos.org/',
  daemon_name: 'chain-maind',
  node_home: '$HOME/.chain-maind',
  slip44: 394,
  alternative_slip44s: [118],
  fees: {
    fee_tokens: [
      {
        denom: 'basecro',
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'basecro',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/crypto-org-chain/chain-main',
    recommended_version: 'v4.2.2',
    compatible_versions: ['v4.2.2'],
    binaries: {
      'linux/amd64':
        'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Linux_x86_64.tar.gz',
      'linux/arm64':
        'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Linux_arm64.tar.gz',
      'darwin/amd64':
        'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Darwin_x86_64.tar.gz',
      'darwin/arm64':
        'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Darwin_arm64.tar.gz',
      'windows/amd64':
        'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Windows_x86_64.zip',
    },
    genesis: {
      genesis_url:
        'https://github.com/crypto-org-chain/mainnet/raw/main/crypto-org-chain-mainnet-1/genesis.json',
    },
    versions: [
      {
        name: 'v4.2.2',
        recommended_version: 'v4.2.2',
        compatible_versions: ['v4.2.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Linux_x86_64.tar.gz',
          'linux/arm64':
            'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Linux_arm64.tar.gz',
          'darwin/amd64':
            'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Darwin_x86_64.tar.gz',
          'darwin/arm64':
            'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Darwin_arm64.tar.gz',
          'windows/amd64':
            'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.2/chain-main_4.2.2_Windows_x86_64.zip',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/cronos.png',
  },
  description:
    'Cronos PoS Chain is a public, open-source and permissionless blockchain - a fully decentralized network with high speed and low fees, designed to be a public good that helps drive mass adoption of blockchain technology through use cases like Payments, DeFi and NFTs.',
  peers: {
    seeds: [
      {
        id: '87c3adb7d8f649c51eebe0d3335d8f9e28c362f2',
        address: 'seed-0.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: 'e1d7ff02b78044795371beb1cd5fb803f9389256',
        address: 'seed-1.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: '2c55809558a4e491e9995962e10c026eb9014655',
        address: 'seed-2.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:20256',
        provider: 'Polkachu',
      },
    ],
    persistent_peers: [
      {
        id: '87c3adb7d8f649c51eebe0d3335d8f9e28c362f2',
        address: 'seed-0.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: 'e1d7ff02b78044795371beb1cd5fb803f9389256',
        address: 'seed-1.crypto.org:26656',
        provider: 'cronos.org',
      },
      {
        id: '2c55809558a4e491e9995962e10c026eb9014655',
        address: 'seed-2.crypto.org:26656',
        provider: 'cronos.org',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.crypto.org/',
        provider: 'cronos.org',
      },
      {
        address: 'https://rpc-cryptoorgchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rpc-cryptoorgchain.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://cryptocom-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://cryptocom-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://rpc-cryptoorg.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://cro-chain-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://rest.mainnet.crypto.org/',
        provider: 'cronos.org',
      },
      {
        address: 'https://api-cryptoorgchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://cryptocom-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rest-cryptoorgchain.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://cryptocom-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://api-cryptoorg.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://cro-chain-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'grpc.mainnet.crypto.org:443',
        provider: 'cronos.org',
      },
      {
        address: 'grpc-cryptoorgchain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'cryptocom-grpc.polkachu.com:20290',
        provider: 'Polkachu',
      },
      {
        address: 'cryptocom-grpc.w3coins.io:20290',
        provider: 'w3coins',
      },
      {
        address: 'grpc-cryptoorg.cosmos-spaces.cloud:1160',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'cro-chain-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/crypto-org',
      tx_page: 'https://www.mintscan.io/crypto-org/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/crypto-org/accounts/${accountAddress}',
    },
    {
      kind: 'cronos.org',
      url: 'https://cronos-pos.org/explorer',
      tx_page: 'https://cronos-pos.org/explorer/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/crypto-com-chain',
      tx_page: 'https://ping.pub/crypto-com-chain/tx/${txHash}',
    },
    {
      kind: 'yummy-explorer',
      url: 'https://explorer.yummy.capital',
      tx_page: 'https://explorer.yummy.capital/txs/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/cronos.png',
    },
    {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/Cronos_POS_Chain_Colour.svg',
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
    },
  ],
};

export const cryptoorgchainAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'cryptoorgchain',
  assets: [
    {
      description:
        'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [
        {
          denom: 'basecro',
          exponent: 0,
        },
        {
          denom: 'cro',
          exponent: 8,
        },
      ],
      base: 'basecro',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
      },
      coingecko_id: 'crypto-com-chain',
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
        },
      ],
    },
  ],
};

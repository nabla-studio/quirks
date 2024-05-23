<script setup lang="ts">
import { useConnect, useConfig, useChains, useChain } from '@quirks/vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const { wallets } = useConfig();
const { accounts } = useChains();
const { address } = useChain((route.params.chain as string) ?? 'osmosis');
const { connect, disconnect, connected, status, walletName, connecting } =
  useConnect();

const open = async (chainName: string) => {
  await connect(chainName);
};
</script>

<template>
  <div>
    Wallet {{ walletName }} status: {{ status }} connecting:
    {{ connecting }}
    <button @click="disconnect" v-if="connected">DISCONNECT</button>
    <div v-else>
      <div v-for="wallet in wallets" :key="wallet.options.wallet_name">
        <button @click="open(wallet.options.wallet_name)">
          <img
            :src="wallet.logoLight ?? wallet.logoDark"
            :alt="wallet.options.pretty_name"
            height="48px"
            width="48px"
            :style="{ width: '48px', height: '48px' }"
          />
        </button>

        <a
          :href="
            wallet.options.platforms && wallet.options.platforms.length > 0
              ? wallet.options.platforms[0].install_link
              : '#'
          "
          target="_blank"
          v-if="!wallet.injected"
        >
          Install
        </a>
      </div>
    </div>

    <div>
      STATUS: {{ status }} ADDRESS: {{ address }}
      <div v-if="connected">
        Addresses:
        <div v-for="account in accounts" :key="account.chainId">
          <div>Chain ID: {{ account.chainId }}</div>

          <div>Chain Name: {{ account.chainName }}</div>

          <div>Address: {{ account.bech32Address }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

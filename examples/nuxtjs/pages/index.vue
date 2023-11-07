<script setup lang="ts">
import { useConnect, useConfig } from '@quirks/vue';
import { suggestChains } from '@quirks/store';
import { bitsong, bitsongAssetList } from '@nabla-studio/chain-registry';

const { wallets } = useConfig();
const { connect, disconnect, connected, status } = useConnect();

const open = async (chainName: string) => {
  await suggestChains(chainName, [
    { chain: bitsong, assetList: bitsongAssetList, name: 'bitsong' },
  ]);
  await connect(chainName);
};
</script>

<template>
  <div>
    Hello world {{ status }} {{ connected }}
    {{ wallets.length }}
    <button @click="disconnect" v-if="connected">DISCONNECT</button>
    <div v-else>
      <div v-for="wallet in wallets" :key="wallet.options.name">
        <button
          @click="
            {
              open(wallet.options.name);
            }
          "
        >
          <img
            :src="wallet.options.logoUrls?.light?.svg"
            :alt="wallet.options.prettyName"
            height="48px"
            width="48px"
            :style="{ width: '48px', height: '48px' }"
          />
        </button>

        <a
          :href="
            wallet.options.downloads && wallet.options.downloads.length > 0
              ? wallet.options.downloads[0].link
              : '#'
          "
          target="_blank"
          v-if="!wallet.injected"
        >
          Install
        </a>
      </div>
    </div>
  </div>
</template>

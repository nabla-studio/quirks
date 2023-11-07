<script setup lang="ts">
import { QuirksConfig } from '@quirks/vue';
import {
  bitsong,
  bitsongAssetList,
  osmosis,
  osmosisAssetList,
} from '@nabla-studio/chain-registry';
import { type Config, ssrPersistOptions } from '@quirks/store';
import { keplrExtension, leapExtension } from '@quirks/wallets';

const config: Config = {
  wallets: [keplrExtension, leapExtension],
  chains: [osmosis, bitsong],
  assetsLists: [osmosisAssetList, bitsongAssetList],
  persistOptions: ssrPersistOptions,
};
</script>

<template>
  <QuirksConfig :config="config">
    <NuxtPage />
  </QuirksConfig>
</template>

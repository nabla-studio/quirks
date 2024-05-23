<script setup lang="ts">
import { useChain } from '@quirks/vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const chain = ref((route.params.chain as string) ?? 'osmosis');
const { address } = useChain(chain);

watch(
  () => route.params.chain,
  () => {
    chain.value = (route.params.chain as string) ?? 'osmosis';
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <div>Global layout: address: {{ address }}</div>
</template>

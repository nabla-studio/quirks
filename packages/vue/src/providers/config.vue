<script setup lang="ts">
import { provide, readonly } from 'vue';
import { ConfigStateSymbol, type QuirksConfigProps } from './config';
import { createConfig } from '@quirks/store';

const props = defineProps<QuirksConfigProps>();

if (!props.config) {
  throw new Error(['`config` must be setup within `QuirksConfig`.'].join('\n'));
}

const store = createConfig(props.config);

store.persist.rehydrate();

provide(ConfigStateSymbol, readonly(store));
</script>

<template>
  <slot></slot>
</template>

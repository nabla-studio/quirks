<script setup lang="ts">
import { provide, reactive, readonly, toRefs } from 'vue';
import { ConfigStateSymbol, QuirksConfigProps } from './config';
import { createConfig } from '@quirks/store';

const props = defineProps<QuirksConfigProps>();

if (!props.config) {
  throw new Error(['`config` must be setup within `QuirksConfig`.'].join('\n'));
}

const state = reactive({
  store: createConfig(props.config),
});

provide(ConfigStateSymbol, toRefs(readonly(state)));
</script>

<template>
  {{ $slots.default }}
</template>

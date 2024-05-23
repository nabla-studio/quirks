<script setup lang="ts">
import Layout from '../components/Layout.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <Layout />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/chain/cosmoshub">Cosmos</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

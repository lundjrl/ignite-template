<script setup lang="ts">
import { Toaster } from 'components/ui/sonner'
// Required for our toast component
import 'vue-sonner/style.css' // vue-sonner v2 requires this import
</script>

<template>
  <Toaster />
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

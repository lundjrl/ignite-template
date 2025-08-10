<script setup lang="ts">
import { Toaster } from 'components/ui/sonner'
// Required for our toast component
import 'vue-sonner/style.css' // vue-sonner v2 requires this import
</script>

<template>
  <Toaster />
  <router-view />
</template>

<style scoped></style>

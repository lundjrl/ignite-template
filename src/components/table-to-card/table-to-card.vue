<script setup lang="ts">
import { payments as data } from './dummy-data'
import { columns } from './payments/columns'
import DataTable from './payments/data-table.vue'
</script>

<template>
  <div class="container py-10 mx-auto">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import ServersidePaginationDropdownExample from 'components/server-side-pagination-dropdown/index.vue'
import { Heading } from 'components/typography/heading'
import Paragraph from 'components/typography/paragraph/paragraph.vue'
import MainLayout from 'layouts/main.vue'
</script>

<template>
  <MainLayout>
    <div class="flex flex-col">
      <Heading as="h1">
        Server-side Pagination Select
      </Heading>
      <Paragraph as="pg-md" class="pt-10">
        Gets the next 25 items as the user scrolls.
      </Paragraph>
    </div>
    <div class="flex items-center w-full">
      <ServersidePaginationDropdownExample />
    </div>
  </MainLayout>
</template>

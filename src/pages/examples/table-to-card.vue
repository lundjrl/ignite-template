<script setup lang="ts">
import { TableToCardSection } from 'components/table-to-card'
import { Heading } from 'components/typography/heading'
import { Paragraph } from 'components/typography/paragraph'
import MainLayout from 'layouts/main.vue'
</script>

<template>
  <MainLayout>
    <div class="flex flex-col">
      <Heading as="h1">
        Responsive Table Example
      </Heading>
      <Paragraph as="pg-md" class="pt-10">
        This page serves as an example of building a mobile-responsive table.
      </Paragraph>
      <Paragraph as="pg-md" class="pb-4">
        Complete with autocomplete, search, and filters, this table covers a handful of what we'll typically build for clients.
      </Paragraph>
      <Paragraph as="pg-md" class="pb-4">
        Each table for each client is completely different. Sure, there's similarities but they all use different data sources and have different filter requirements. One of the reasons the tanstack/vue-table library is so powerful is because its flexible.
      </Paragraph>
      <div class="pb-10">
        <a class="text-emerald-600 hover:text-emerald-500 text-shadow-slate-200 text-shadow-xs" target="_blank" href="https://www.shadcn-vue.com/docs/components/data-table.html">
          Read More
        </a>
      </div>
    </div>
    <TableToCardSection />
  </MainLayout>
</template>

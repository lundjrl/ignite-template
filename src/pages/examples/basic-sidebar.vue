<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Paragraph } from 'components/typography/paragraph'
import BasicLayout from 'layouts/basic.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <BasicLayout>
    <div class="flex flex-col">
      <Heading as="h1">
        Here's a basic sidebar example
      </Heading>
      <Paragraph as="pg-md" class="pt-10">
        The sidebar has a body and footer component. Additionally, you can provide a header section.
      </Paragraph>
      <RouterLink class="text-emerald-600 hover:text-emerald-500 text-shadow-slate-200 text-shadow-xs" to="https://www.shadcn-vue.com/docs/components/sidebar.html">
        For more details, checkout the docs
      </RouterLink>
    </div>
  </BasicLayout>
</template>

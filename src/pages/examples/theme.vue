<script setup lang="ts">
import ColorsExampleSection from 'components/examples/colors-examples.vue'
import HeadingExampleSection from 'components/examples/heading-examples.vue'
import LabelExampleSection from 'components/examples/label-examples.vue'
import ParagraphExampleSection from 'components/examples/paragraph-examples.vue'
import Heading from 'components/typography/heading/heading.vue'
import MainLayout from 'layouts/main.vue'
</script>

<template>
  <MainLayout>
    <div class="flex flex-col">
      <Heading as="h1" class="font-bold">
        Theme + Typography
      </Heading>
      <div class="pt-8">
        <ColorsExampleSection />
      </div>
      <div class="p-4 gap-5">
        <HeadingExampleSection />
        <ParagraphExampleSection />
        <LabelExampleSection />
      </div>
    </div>
  </MainLayout>
</template>

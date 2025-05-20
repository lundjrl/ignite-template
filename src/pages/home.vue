<script setup lang="ts">
import AccordionExampleSection from 'components/examples/accordion-examples.vue'
import ButtonExampleSection from 'components/examples/button-examples.vue'
import HeadingExampleSection from 'components/examples/heading-examples.vue'
import ParagraphExampleSection from 'components/examples/paragraph-example.vue'
import { Heading } from 'components/typography/heading'
</script>

<template>
  <main class="h-screen w-screen flex flex-col gap-4 p-24">
    <div class="flex flex-col">
      <Heading as="h1">
        Typography
      </Heading>
      <div class="border p-4 gap-5 flex flex-col">
        <HeadingExampleSection />
        <ParagraphExampleSection />
      </div>
    </div>
    <ButtonExampleSection />

    <AccordionExampleSection />
  </main>
</template>

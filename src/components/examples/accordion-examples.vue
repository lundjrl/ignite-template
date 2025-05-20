<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h1">
      Accordions
    </Heading>
    <div class="border p-4 gap-5 flex">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

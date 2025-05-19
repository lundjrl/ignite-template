<template>
  <main class="h-screen w-screen flex flex-col gap-4 p-24">
    <div class="flex flex-col">
      <heading as="h1">Typography</heading>
      <div class="border p-4 gap-5 flex">
        <div>
          <Heading as="h2">Headings</Heading>
          <div class="pb-10">
            <Heading as="h1"
              >The quick brown fox jumps over the lazy dog</Heading
            >
            <Heading as="h2"
              >The quick brown fox jumps over the lazy dog</Heading
            >
            <Heading as="h3"
              >The quick brown fox jumps over the lazy dog</Heading
            >
            <Heading as="h4"
              >The quick brown fox jumps over the lazy dog</Heading
            >
            <Heading as="h5"
              >The quick brown fox jumps over the lazy dog</Heading
            >
            <Heading as="h6"
              >The quick brown fox jumps over the lazy dog</Heading
            >
          </div>
        </div>
        <div>
          <Heading as="h2">Paragraphs</Heading>

          <div class="pg-10">
            <Paragraph as="pg-lg">
              The quick brown fox jumps over the lazy dog
            </Paragraph>
            <Paragraph as="pg-md"
              >The quick brown fox jumps over the lazy dog</Paragraph
            >
            <Paragraph as="pg-sm"
              >The quick brown fox jumps over the lazy dog</Paragraph
            >
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <Heading as="h1">Buttons</Heading>
      <div class="border p-4 gap-5 flex">
        <Button>Click Me</Button>
        <Button variant="destructive">Click Me</Button>
        <Button variant="outline">Click Me</Button>
        <Button variant="secondary">Click Me</Button>
        <Button variant="ghost">Click Me</Button>
        <Button variant="link">Click Me</Button>
      </div>
    </div>

    <div class="flex flex-col">
      <Heading as="h1">Accordions</Heading>
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
  </main>
</template>

<script setup lang="ts">
import { Button } from "components/ui/button";
import { Heading } from "components/typography/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";
import Paragraph from "components/typography/paragraph/paragraph.vue";
</script>

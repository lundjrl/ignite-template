<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Paragraph } from 'components/typography/paragraph'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Paragraphs
    </Heading>
    <div class="pg-10">
      <Paragraph as="pg-lg">
        The quick brown fox jumps over the lazy dog
      </Paragraph>
      <Paragraph as="pg-md">
        The quick brown fox jumps over the lazy dog
      </Paragraph>
      <Paragraph as="pg-sm">
        The quick brown fox jumps over the lazy dog
      </Paragraph>
    </div>
  </div>
</template>

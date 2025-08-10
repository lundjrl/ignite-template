<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Label } from 'components/typography/label'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2" class="font-bold">
      Labels
    </Heading>
    <div class="pt-2 pb-10">
      <Label as="l-lg" for="">The quick brown fox jumps over the lazy dog</Label>
      <Label as="l-md" for="">The quick brown fox jumps over the lazy dog</Label>
      <Label as="l-sm" for="">The quick brown fox jumps over the lazy dog</Label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Slider } from 'components/ui/slider'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Sliders
    </Heading>
    <div class="pg-10">
      <div class="p-4">
        <Slider
          :default-value="[33]" :max="100" :step="1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

interface Props {
  as?: 'l-lg' | 'l-md' | 'l-sm'
  class?: string
  for: string
}

const props = defineProps<Props>()
</script>

<template>
  <label
    v-if="props.as === 'l-lg'"
    :for="props.for"
    :class="twMerge('label text-lg mb-0', props.class)"
  >
    <slot />
  </label>
  <label
    v-else-if="props.as === 'l-md'"
    :for="props.for"
    :class="twMerge('label text-base mb-0', props.class)"
  >
    <slot />
  </label>
  <label
    v-else-if="props.as === 'l-sm'"
    :for="props.for"
    :class="twMerge('label text-sm mb-0', props.class)"
  >
    <slot />
  </label>
  <label
    v-else
    :for="props.for"
    :class="twMerge('label mb-0', props.class)"
  >
    <slot />
  </label>
</template>

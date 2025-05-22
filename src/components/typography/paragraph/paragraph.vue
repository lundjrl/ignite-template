<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

interface Props {
  as?: 'pg-lg' | 'pg-md' | 'pg-sm'
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <p
    v-if="props.as === 'pg-lg'"
    :class="twMerge('paragraph text-lg mb-2', props.class)"
  >
    <slot />
  </p>
  <p
    v-else-if="props.as === 'pg-md'"
    :class="twMerge('paragraph text-base mb-2', props.class)"
  >
    <slot />
  </p>
  <p
    v-else-if="props.as === 'pg-sm'"
    :class="twMerge('paragraph text-sm mb-2', props.class)"
  >
    <slot />
  </p>
  <p v-else :class="twMerge('paragraph mb-2', props.class)">
    <slot />
  </p>
</template>

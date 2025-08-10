<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

interface Props {
  as?: 'pg-lg' | 'pg-md' | 'pg-sm'
  class?: string
}

const props = defineProps<Props>()

const style = 'paragraph text-shadow-2xs mb-2'
</script>

<template>
  <p
    v-if="props.as === 'pg-lg'"
    :class="twMerge('text-lg', style, props.class)"
  >
    <slot />
  </p>
  <p
    v-else-if="props.as === 'pg-md'"
    :class="twMerge('text-base', style, props.class)"
  >
    <slot />
  </p>
  <p
    v-else-if="props.as === 'pg-sm'"
    :class="twMerge('text-sm', style, props.class)"
  >
    <slot />
  </p>
  <p v-else :class="twMerge(style, props.class)">
    <slot />
  </p>
</template>

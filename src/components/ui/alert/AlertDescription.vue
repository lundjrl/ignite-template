<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="alert-description"
    :class="cn('text-neutral-500 col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed dark:text-neutral-400', props.class)"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Label } from 'components/ui/label'
import { twMerge } from 'tailwind-merge'

interface Props {
  as?: 'l-lg' | 'l-md' | 'l-sm'
  class?: string
  for: string
}

const props = defineProps<Props>()
</script>

<template>
  <Label
    v-if="props.as === 'l-lg'"
    :for="props.for"
    :class="twMerge('text-lg font-sans mb-0', props.class)"
  >
    <slot />
  </Label>
  <Label
    v-else-if="props.as === 'l-md'"
    :for="props.for"
    :class="twMerge('text-base font-sans mb-0', props.class)"
  >
    <slot />
  </Label>
  <Label
    v-else-if="props.as === 'l-sm'"
    :for="props.for"
    :class="twMerge('text-sm font-sans mb-0', props.class)"
  >
    <slot />
  </Label>
  <Label
    v-else
    :for="props.for"
    :class="twMerge('label font-sans mb-0', props.class)"
  >
    <slot />
  </Label>
</template>

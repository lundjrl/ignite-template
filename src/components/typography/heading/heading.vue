<script setup lang="ts">
import { twMerge } from "tailwind-merge";

interface Props {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <h1
    v-if="props.as === 'h1'"
    :class="twMerge('heading text-4xl capitalize mb-2', props.class)"
  >
    <slot />
  </h1>
  <h2
    v-else-if="props.as === 'h2'"
    :class="twMerge('heading text-3xl capitalize mb-2', props.class)"
  >
    <slot />
  </h2>
  <h3
    v-else-if="props.as === 'h3'"
    :class="twMerge('heading text-2xl capitalize mb-2', props.class)"
  >
    <slot />
  </h3>
  <h4
    v-else-if="props.as === 'h4'"
    :class="twMerge('heading text-xl capitalize mb-2', props.class)"
  >
    <slot />
  </h4>
  <h5
    v-else-if="props.as === 'h5'"
    :class="twMerge('heading text-lg capitalize mb-2', props.class)"
  >
    <slot />
  </h5>
  <h6
    v-else-if="props.as === 'h6'"
    :class="twMerge('heading text-base capitalize mb-2', props.class)"
  >
    <slot />
  </h6>
</template>

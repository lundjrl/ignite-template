<script setup lang="ts">
import { Heading } from 'components/typography/heading'

import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from 'components/ui/tags-input'
import { ref } from 'vue'

const modelValue = ref(['Apple', 'Banana'])
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Tags Input (filter tags)
    </Heading>
    <div class="border p-4 gap-5 flex">
      <TagsInput v-model="modelValue">
        <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
          <TagsInputItemText />
          <TagsInputItemDelete />
        </TagsInputItem>

        <TagsInputInput placeholder="Fruits..." />
      </TagsInput>
    </div>
  </div>
</template>

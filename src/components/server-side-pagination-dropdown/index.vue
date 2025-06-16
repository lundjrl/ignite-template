<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from 'components/ui/select'
import { ref } from 'vue'

const selectRef = ref(null)
const items: Record<string, string>[] = [
  { id: '25-229292', label: '25-229292', value: '25-229292' },
  { id: '25-229293', label: '25-229293', value: '25-229293' },
  { id: '25-229294', label: '25-229294', value: '25-229294' },
  { id: '25-229295', label: '25-229295', value: '25-229295' },

]
</script>

<template>
  <Select v-model="selectRef" name="items-select">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a job" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Jobs</SelectLabel>
        <SelectItem v-for="(item) in items" :key="item.id" :value="item.value">
          {{ item.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

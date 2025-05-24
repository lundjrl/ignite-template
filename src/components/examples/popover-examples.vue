<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'components/ui/popover'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Popovers
    </Heading>
    <div class="border p-4 gap-5 flex">
      <Popover>
        <PopoverTrigger class="cursor-pointer rounded-md border-2 border-zinc-200 px-2 py-1">
          Open popover
        </PopoverTrigger>
        <PopoverContent>
          Some popover content
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>

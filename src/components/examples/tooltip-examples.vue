<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'components/ui/tooltip'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Tooltips
    </Heading>
    <div class="border p-4 gap-5 flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</template>

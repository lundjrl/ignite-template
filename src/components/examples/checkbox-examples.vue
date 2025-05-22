<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Label } from 'components/typography/label'
import { Checkbox } from 'components/ui/checkbox'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h1">
      Checkboxes
    </Heading>
    <div class="border p-4 gap-5 flex">
      <div class="flex gap-1 items-center">
        <Checkbox id="terms" class="data-[state=checked]:bg-primary" />
        <Label
          for="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
      </div>
      <div class="flex gap-1 items-center">
        <Checkbox id="terms" class="data-[state=checked]:bg-primary" />
        <Label
          for="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
      </div>
      <div class="flex gap-1 items-center">
        <Checkbox id="terms" class="data-[state=checked]:bg-primary" />
        <Label
          for="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Label } from 'components/typography/label'
import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
import { Search } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Inputs
    </Heading>
    <div class="border p-4 gap-5 flex">
      <Input type="text" placeholder="Regular" />
      <Input type="email" placeholder="Email" />

      <div class="grid w-full max-w-sm items-center min-w-72 gap-1.5">
        <Label for="picture">File</Label>
        <Input id="picture" type="file" />
      </div>
      <div class="flex items-center w-full">
        <Input disabled type="text" placeholder="Disabled" />
      </div>

      <div class="flex w-full max-w-sm items-center gap-1.5">
        <Input id="email" type="email" placeholder="Email" />
        <Button type="submit">
          Subscribe
        </Button>
      </div>
      <div class="flex relative w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search..." class="pl-10" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
    </div>
  </div>
</template>

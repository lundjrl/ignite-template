<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Label } from 'components/typography/label'
import { Switch } from 'components/ui/switch'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Switches
    </Heading>
    <div class="border p-4 gap-5 flex">
      <div class="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label for="airplane-mode">Airplane Mode</Label>
      </div>
      <div class="flex items-center space-x-2">
        <Switch
          id="disabled-switch"
          disabled
          aria-readonly
        />
        <Label for="disabled-switch">Disabled</Label>
      </div>
    </div>
  </div>
</template>

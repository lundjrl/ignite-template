<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Button } from 'components/ui/button'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h1">
      Buttons
    </Heading>
    <div class="border p-4 gap-5 flex">
      <Button>Click Me</Button>
      <Button variant="destructive">
        Click Me
      </Button>
      <Button variant="outline">
        Click Me
      </Button>
      <Button variant="secondary">
        Click Me
      </Button>
      <Button variant="ghost">
        Click Me
      </Button>
      <Button variant="link">
        Click Me
      </Button>
    </div>
  </div>
</template>

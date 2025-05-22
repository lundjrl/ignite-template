<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Badge } from 'components/ui/badge'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h1">
      Badges
    </Heading>
    <div class="border p-4 gap-5 flex">
      <Badge>Badge</Badge>
      <Badge variant="secondary">
        Secondary
      </Badge>
      <Badge variant="outline">
        Outline
      </Badge>
      <Badge variant="destructive">
        Destructive
      </Badge>
    </div>
  </div>
</template>

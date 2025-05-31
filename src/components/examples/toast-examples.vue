<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Button } from 'components/ui/button'
import { toast } from 'vue-sonner'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Toasts
    </Heading>
    <div class="p-4">
      <Button
        variant="outline" @click="() => {
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }"
      >
        Add to calendar
      </Button>
    </div>
    <div class="p-4">
      <Button
        variant="outline" @click="() => {
          toast.success('Congrats!', {
            description: 'You did the thing!',
            action: {
              label: 'Close',
              onClick: () => console.log('Undo'),
            },
          })
        }"
      >
        Success Toast
      </Button>
    </div>
    <div class="p-4">
      <Button
        variant="outline" @click="() => {
          toast.error('Oh No!', {
            description: 'Something went wrong, there should be an error message here!',
            action: {
              label: 'Close',
              onClick: () => console.log('Undo'),
            },
          })
        }"
      >
        Error Toast
      </Button>
    </div>
    <div class="p-4">
      https://vue-sonner.vercel.app/
    </div>
  </div>
</template>

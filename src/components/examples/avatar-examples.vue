<script setup lang="ts">
import { Heading } from 'components/typography/heading'
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar'
</script>

<template>
  <div class="flex flex-col">
    <Heading as="h2">
      Avatars
    </Heading>
    <div class="border p-4 gap-5 flex">
      <Avatar>
        <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar class="h-11 w-11">
        <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar class="h-14 w-14">
        <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  </div>
</template>

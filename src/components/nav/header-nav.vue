<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar'
import NavSection from './nav-section.vue'

const user = {
  avatarAlt: `John Smith's profile image`,
  avatarUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png',
  name: 'John Smith',
}
</script>

<template>
  <header class="bg-white shadow-md shadow-[#00000033] min-h-[5vh]">
    <div class="flex items-center justify-between bg-white p-2 h-full">
      <NavSection />
      <Avatar>
        <AvatarImage :src="user.avatarUrl" :alt="user.avatarAlt" />
        <AvatarFallback>{{ user.name }}</AvatarFallback>
      </Avatar>
    </div>
  </header>
</template>

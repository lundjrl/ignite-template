<script lang="ts" setup>
import MainSidebar from 'components/sidebars/main-sidebar.vue'
import SidebarProvider from 'components/ui/sidebar/SidebarProvider.vue'
</script>

<template>
  <SidebarProvider
    :default-open="true"
    style="--sidebar-width: 16rem; --sidebar-width-mobile: 16rem;"
  >
    <MainSidebar />
    <main class="h-screen w-screen flex flex-col gap-4 px-10 py-10">
      <slot />
    </main>
  </SidebarProvider>
</template>

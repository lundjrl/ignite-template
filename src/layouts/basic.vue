<script lang="ts" setup>
import BasicSidebar from 'components/sidebars/basic-sidebar.vue'
import SidebarProvider from 'components/ui/sidebar/SidebarProvider.vue'
import SidebarTrigger from 'components/ui/sidebar/SidebarTrigger.vue'
</script>

<template>
  <SidebarProvider
    :default-open="true"
    style="--sidebar-width: 20rem; --sidebar-width-mobile: 20rem;"
  >
    <BasicSidebar />
    <main class="h-screen w-screen flex flex-col gap-4 px-10 pb-10">
      <SidebarTrigger />
      <slot />
    </main>
  </SidebarProvider>
</template>

<script lang="ts" setup>
import HeaderNav from 'components/nav/header-nav.vue'
import BasicSidebar from 'components/sidebars/basic-sidebar.vue'
import SidebarProvider from 'components/ui/sidebar/SidebarProvider.vue'
</script>

<template>
  <SidebarProvider
    :default-open="true"
    style="--sidebar-width: 20rem; --sidebar-width-mobile: 20rem;"
  >
    <BasicSidebar />
    <div id="page-wrapper" class="flex flex-col w-full">
      <HeaderNav />
      <main class="h-full flex flex-col gap-4 p-8">
        <slot />
      </main>
    </div>
  </SidebarProvider>
</template>

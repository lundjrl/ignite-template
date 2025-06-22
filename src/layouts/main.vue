<script lang="ts" setup>
import HeaderNav from 'components/nav/header-nav.vue'
import MainSidebar from 'components/sidebars/main-sidebar.vue'
import SidebarProvider from 'components/ui/sidebar/SidebarProvider.vue'
</script>

<template>
  <SidebarProvider
    :default-open="true"
    style="--sidebar-width: 16rem; --sidebar-width-mobile: 16rem;"
  >
    <MainSidebar />
    <div id="page-wrapper" class="flex flex-col">
      <HeaderNav />
      <main class="h-screen w-screen flex flex-col gap-4 p-8">
        <slot />
      </main>
    </div>
  </SidebarProvider>
</template>

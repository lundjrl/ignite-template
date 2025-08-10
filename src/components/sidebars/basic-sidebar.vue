<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from 'components/ui/sidebar'
import { Calendar, Home, Inbox, Palette, Puzzle, Table2, User } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Theme',
    url: '/examples/theme',
    icon: Palette,
  },
  {
    title: 'Components',
    url: '/examples/components',
    icon: Puzzle,
  },
  {
    title: 'Basic Sidebar Example',
    url: '/examples/sidebar/basic',
    icon: Inbox,
  },
  {
    title: 'Combobox example',
    url: '/examples/ssp-dropdown',
    icon: Calendar,
  },
  {
    title: 'Table example',
    url: '/examples/table-to-card',
    icon: Table2,
  },
  {
    title: 'Users',
    url: '/',
    icon: User,
  },
]
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Pages</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton as-child>
                <RouterLink :to="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarTrigger class="cursor-pointer" />
    </SidebarFooter>
  </Sidebar>
</template>

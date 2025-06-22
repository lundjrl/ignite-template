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
import { Calendar, Home, Inbox, Search, User } from 'lucide-vue-next'

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Basic Sidebar Example',
    url: '/examples/sidebar/basic',
    icon: Inbox,
  },
  {
    title: 'SSP Dropdown',
    url: '/examples/ssp-dropdown',
    icon: Calendar,
  },
  {
    title: 'Components',
    url: '/examples/components',
    icon: Search,
  },
  {
    title: 'Users',
    url: '/examples/users',
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
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
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

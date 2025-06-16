import type { RouteRecordRaw } from 'vue-router'

import BasicSidebarExample from 'pages/examples/basic-sidebar.vue'
import Components from 'pages/examples/components.vue'
import ServersidePaginationDropdownExample from 'pages/examples/ssp-dropdown.vue'
import HomePage from 'pages/home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/examples/sidebar/basic', name: 'Basic Sidebar Example', component: BasicSidebarExample },
  { path: '/examples/ssp-dropdown', name: 'Server-side Pagination Dropdown', component: ServersidePaginationDropdownExample },
  { path: '/examples/components', name: 'Components', component: Components },
]

export default routes

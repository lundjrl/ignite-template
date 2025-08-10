import type { RouteRecordRaw } from 'vue-router'

// Lazy load our routes for separate bundle chunks https://router.vuejs.org/guide/advanced/lazy-loading.html
const BasicSidebarExamplePage = () => import('pages/examples/basic-sidebar.vue')
const ComponentsPage = () => import('pages/examples/components.vue')
const HomePage = () => import('pages/home.vue')
const ServersidePaginationDropdownExample = () => import('pages/examples/ssp-dropdown.vue')
const TableToCardExample = () => import('pages/examples/table-to-card.vue')
const ThemePage = () => import('pages/examples/theme.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/examples/sidebar/basic', name: 'Basic Sidebar Example', component: BasicSidebarExamplePage },
  { path: '/examples/ssp-dropdown', name: 'Server-side Pagination Dropdown', component: ServersidePaginationDropdownExample },
  { path: '/examples/table-to-card', name: 'Table', component: TableToCardExample },
  { path: '/examples/theme', name: 'Theme', component: ThemePage },
  { path: '/examples/components', name: 'Components', component: ComponentsPage },
]

export default routes

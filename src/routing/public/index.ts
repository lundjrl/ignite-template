import type { RouteRecordRaw } from 'vue-router'

import BasicSidebarExample from 'pages/basic-sidebar-example.vue'
import HomePage from 'pages/home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/basic', name: 'Basic', component: BasicSidebarExample },
]

export default routes

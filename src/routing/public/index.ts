import type { RouteRecordRaw } from 'vue-router'

import HomePage from '../../pages/home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomePage },
]

export default routes

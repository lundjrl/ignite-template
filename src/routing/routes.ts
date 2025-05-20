import type { RouteRecordRaw } from 'vue-router'
import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import publicRoutes from './public'

const routes: RouteRecordRaw[] = [
  ...publicRoutes,
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

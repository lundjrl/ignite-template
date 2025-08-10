import type { RouteRecordRaw } from 'vue-router'
import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import publicRoutes from './public'

const routes: RouteRecordRaw[] = [
  ...publicRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // When loading a new route, always scroll to the top of the page.
  scrollBehavior: () => { return { top: 0, behavior: 'smooth' } },
})

router.beforeEach(async (to, _, next) => {
  try {
    const canViewExampleRoutes = import.meta.env.VITE_SHOW_EXAMPLE_ROUTES

    if (to.meta.isExample && !canViewExampleRoutes) {
      next({ name: 'home' })
      return
    }
    next()
  }
  catch (error) {
    console.error('ROUTING ERROR::', error)
    next({ name: 'home' })
  }
})

export default router

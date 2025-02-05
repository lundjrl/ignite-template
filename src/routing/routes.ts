import {
    createRouter, createWebHistory
} from "vue-router"
import publicRoutes from './public'

import type { RouteRecordRaw } from "vue-router"


const routes: RouteRecordRaw[] = [
    ...publicRoutes
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

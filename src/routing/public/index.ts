import HomePage from '../../pages/home.vue'

import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Home', component: HomePage }
]

export default routes
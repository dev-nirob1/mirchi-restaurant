import { createRouter, createWebHistory } from 'vue-router'
import frontRoutes from '../zems/Front/front_routes.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...frontRoutes,
  ],
})

export default router

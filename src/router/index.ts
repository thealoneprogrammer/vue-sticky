import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Board from '../views/Board.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Board',
    component: Board
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Start from '@/views/Start.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  // 注意这里 params 形式的传参需要提前占位:/home/:name/:age/:info
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

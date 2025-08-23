import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestView from '@/components/test.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/test', name: 'Test', component: TestView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
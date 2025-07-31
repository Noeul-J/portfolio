import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import LoginView from '../views/LoginView.vue'
import InboxView from '../views/InboxView.vue'

const routes: RouteRecordRaw[] =[
    {path: '/', redirect: '/login'},
    {path: '/login', component: LoginView},   
    {path: '/inbox', component: InboxView},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
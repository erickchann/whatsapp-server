import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/add-device',
    name: 'AddDevice',
    component: () => import('@/views/AddDevice.vue')
  },
  {
    path: '/scan-device/:id',
    name: 'ScanDevice',
    component: () => import('@/views/ScanDevice.vue')
  },
  {
    path: '/send-chat',
    name: 'SendChat',
    component: () => import('@/views/SendChat.vue')
  },
  {
    path: '/send-brodcast',
    name: 'SendBrodcast',
    component: () => import('@/views/SendBrodcast.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

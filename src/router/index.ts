import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: (): string => '/advertisement'
  },
  {
    path: '/advertisement',
    name: 'advertisement',
    component: () => import('../views/advertisement/advertisement.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/mine.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/cart.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/order.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/use-title',
      name: 'use-title',
      component: () => import('../views/UseTitleView.vue'),
    },
    {
      path: '/use-clipboard',
      name: 'use-clipboard',
      component: () => import('../views/UseClipboardView.vue'),
    },
    {
      path: '/use-dark',
      name: 'use-dark',
      component: () => import('../views/UseDarkView.vue'),
    },
  ],
})

export default router

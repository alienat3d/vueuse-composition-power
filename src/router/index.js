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
    {
      path: '/on-key-stroke',
      name: 'on-key-stroke',
      component: () => import('../views/onKeyStrokeView.vue'),
    },
    {
      path: '/use-magic-keys',
      name: 'use-magic-keys',
      component: () => import('../views/useMagicKeysView.vue'),
    },
    {
      path: '/use-battery',
      name: 'use-battery',
      component: () => import('../views/useBatteryView.vue'),
    },
    {
      path: '/use-page-leave',
      name: 'use-page-leave',
      component: () => import('../views/usePageLeaveView.vue'),
    },
    {
      path: '/use-pointer',
      name: 'use-pointer',
      component: () => import('../views/usePointerView.vue'),
    },
    {
      path: '/on-long-press',
      name: 'on-long-press',
      component: () => import('../views/OnLongPressView.vue'),
    },
  ],
})

export default router

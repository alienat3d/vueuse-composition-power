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
      path: '/use-color-mode',
      name: 'use-color-mode',
      component: () => import('../views/UseColorModeView.vue'),
    },
    {
      path: '/on-key-stroke',
      name: 'on-key-stroke',
      component: () => import('../views/OnKeyStrokeView.vue'),
    },
    {
      path: '/use-magic-keys',
      name: 'use-magic-keys',
      component: () => import('../views/UseMagicKeysView.vue'),
    },
    {
      path: '/use-battery',
      name: 'use-battery',
      component: () => import('../views/UseBatteryView.vue'),
    },
    {
      path: '/use-online',
      name: 'use-online',
      component: () => import('../views/UseOnlineView.vue'),
    },
    {
      path: '/use-network',
      name: 'use-network',
      component: () => import('../views/UseNetworkView.vue'),
    },
    {
      path: '/use-geolocation',
      name: 'use-geolocation',
      component: () => import('../views/UseGeolocationView.vue'),
    },
    {
      path: '/use-page-leave',
      name: 'use-page-leave',
      component: () => import('../views/UsePageLeaveView.vue'),
    },
    {
      path: '/use-pointer',
      name: 'use-pointer',
      component: () => import('../views/UsePointerView.vue'),
    },
    {
      path: '/on-long-press',
      name: 'on-long-press',
      component: () => import('../views/OnLongPressView.vue'),
    },
    {
      path: '/use-scroll',
      name: 'use-scroll',
      component: () => import('../views/UseScrollView.vue'),
    },
    {
      path: '/use-infinite-scroll',
      name: 'use-infinite-scroll',
      component: () => import('../views/UseInfiniteScrollView.vue'),
    },
    {
      path: '/use-display-media',
      name: 'use-display-media',
      component: () => import('../views/UseDisplayMediaView.vue'),
    },
  ],
})

export default router

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
    {
      path: '/use-interval',
      name: 'use-interval',
      component: () => import('../views/UseIntervalView.vue'),
    },
    {
      path: '/use-interval-fn',
      name: 'use-interval-fn',
      component: () => import('../views/UseIntervalFnView.vue'),
    },
    {
      path: '/use-raf-fn',
      name: 'use-raf-fn',
      component: () => import('../views/UseRafFnView.vue'),
    },
    {
      path: '/use-timeout',
      name: 'use-timeout',
      component: () => import('../views/UseTimeoutView.vue'),
    },
    {
      path: '/use-timeout-fn',
      name: 'use-timeout-fn',
      component: () => import('../views/UseTimeoutFnView.vue'),
    },
    {
      path: '/use-timestamp',
      name: 'use-timestamp',
      component: () => import('../views/UseTimestampView.vue'),
    },
    {
      path: '/use-now',
      name: 'use-now',
      component: () => import('../views/UseNowView.vue'),
    },
    {
      path: '/use-transition',
      name: 'use-transition',
      component: () => import('../views/UseTransitionView.vue'),
    },
    {
      path: '/use-ref-history',
      name: 'use-ref-history',
      component: () => import('../views/UseRefHistoryView.vue'),
    },
    {
      path: '/use-debounced-ref-history',
      name: 'use-debounced-ref-history',
      component: () => import('../views/UseDebouncedRefHistoryView.vue'),
    },
    {
      path: '/use-local-storage',
      name: 'use-local-storage',
      component: () => import('../views/UseLocalStorageView.vue'),
    },
    {
      path: '/use-fetch',
      name: 'use-fetch',
      component: () => import('../views/UseFetchView.vue'),
    },
    {
      path: '/reactify',
      name: 'reactify',
      component: () => import('../views/ReactifyView.vue'),
    },
    {
      path: '/ref-auto-reset',
      name: 'ref-auto-reset',
      component: () => import('../views/RefAutoResetView.vue'),
    },
    {
      path: '/use-base-64',
      name: 'use-base-64',
      component: () => import('../views/UseBase64View.vue'),
    },
    {
      path: '/computed-async',
      name: 'computed-async',
      component: () => import('../views/ComputedAsyncView.vue'),
    },
    {
      path: '/logic-operators',
      name: 'logic-operators',
      component: () => import('../views/LogicOperatorsView.vue'),
    },
    {
      path: '/use-cycle-list',
      name: 'use-cycle-list',
      component: () => import('../views/UseCycleListView.vue'),
    },
    {
      path: '/use-cycle-list-alt',
      name: 'use-cycle-list-alt',
      component: () => import('../views/UseCycleListAltView.vue'),
    },
  ],
})

export default router

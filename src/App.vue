<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="fixed pt-7 top-0 left-1/2 -translate-x-1/2">
      <nav class="flex flex-wrap">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/use-title">useTitle</RouterLink>
        <RouterLink to="/use-clipboard">useClipboard</RouterLink>
        <RouterLink to="/use-dark">useDark & onToggle</RouterLink>
        <RouterLink to="/use-color-mode">useColorMode</RouterLink>
        <RouterLink to="/on-key-stroke">onKeyStroke</RouterLink>
        <RouterLink to="/use-magic-keys">useMagicKeys & whenever</RouterLink>
        <RouterLink to="/use-battery">useBattery</RouterLink>
        <RouterLink to="/use-online">useOnlineView</RouterLink>
        <RouterLink to="/use-network">useNetworkView</RouterLink>
        <RouterLink to="/use-geolocation">useGeolocationView</RouterLink>
        <RouterLink to="/use-page-leave">usePageLeave</RouterLink>
        <RouterLink to="/use-pointer">usePointer</RouterLink>
        <RouterLink to="/on-long-press">onLongPress</RouterLink>
        <RouterLink to="/use-scroll">useScroll</RouterLink>
        <RouterLink to="/use-infinite-scroll">useInfiniteScroll</RouterLink>
        <RouterLink to="/use-display-media">useDisplayMedia</RouterLink>
        <RouterLink to="/use-interval">useInterval</RouterLink>
        <RouterLink to="/use-interval-fn">useIntervalFn</RouterLink>
        <RouterLink to="/use-raf-fn">useRafFn</RouterLink>
        <RouterLink to="/use-timeout">useTimeout</RouterLink>
        <RouterLink to="/use-timeout-fn">useTimeoutFn</RouterLink>
        <RouterLink to="/use-timestamp">useTimestamp</RouterLink>
        <RouterLink to="/use-now">useNow</RouterLink>
        <RouterLink to="/use-transition">useTransition</RouterLink>
        <RouterLink to="/use-ref-history">useRefHistory</RouterLink>
        <RouterLink to="/use-debounced-ref-history">useDebouncedRefHistory</RouterLink>
        <RouterLink to="/use-local-storage">useLocalStorage</RouterLink>
        <RouterLink to="/use-fetch">useFetch</RouterLink>
        <RouterLink to="/reactify">reactify</RouterLink>
        <RouterLink to="/ref-auto-reset">refAutoReset</RouterLink>
        <RouterLink to="/use-base-64">useBase64</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style>
@import 'tailwindcss';

.dark body {
  /* background-color: #252525; */
  background-color: #060525;
  color: #ddd;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #efefef;
  color: #252525;
}

button {
  @apply py-3 px-5 border-2 rounded-2xl cursor-pointer;
}

header {
  background-color: #efefef;
}
.dark header {
  background-color: #060525;
}

nav {
  display: flex;
  gap: 5px 16px;
}

nav a {
  position: relative;
  color: #777;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px dotted transparent;
  transition: all 0.3s ease-in-out;
}
.dark nav a {
  color: #aaa;
}
nav a:hover {
  color: #000;
}
.dark nav a:hover {
  color: #eee;
}

nav a:not(nav a:first-child)::before {
  content: '|';
  position: absolute;
  left: -10px;
  bottom: 2px;
}
nav a::before {
  color: #000;
}
.dark nav a::before {
  color: #aaa;
}

.router-link-exact-active {
  cursor: default;
  border-color: #252525;
  color: #252525;
}
.dark .router-link-exact-active {
  border-color: #ccc;
  color: #ccc;
}
</style>

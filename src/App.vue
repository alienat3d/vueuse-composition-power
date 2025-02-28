<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="fixed top-7 left-1/2 -translate-x-1/2">
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

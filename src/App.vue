<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed top-7 left-1/2 -translate-x-1/2">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/use-title">useTitle</RouterLink>
      <RouterLink to="/use-clipboard">useClipboard</RouterLink>
      <RouterLink class="relative use-dark-link" to="/use-dark">useDark</RouterLink>
      <RouterLink to="/on-key-stroke">onKeyStroke</RouterLink>
      <RouterLink class="relative use-magic-keys-link" to="/use-magic-keys"
        >useMagicKeys</RouterLink
      >
      <RouterLink class="relative use-battery-link" to="/use-battery">useBattery</RouterLink>
    </nav>
  </header>

  <RouterView />
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
  gap: 16px;
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

.use-dark-link:hover.use-dark-link::after,
.use-magic-keys-link:hover.use-magic-keys-link::after,
.use-battery-link:hover.use-battery-link::after {
  position: absolute;
  top: 30px;
  left: 0;
}
.use-dark-link:hover.use-dark-link::after {
  content: 'and also: "useToggle"';
}

.use-magic-keys-link:hover.use-magic-keys-link::after {
  content: 'and also: "whenever"';
}

.use-battery-link:hover.use-battery-link::after {
  content: 'and also: "useOnline", "useNetwork", "useGeolocation"';
}
</style>

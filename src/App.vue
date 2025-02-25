<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed top-7 left-1/2 -translate-x-1/2">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/use-title">useTitle</RouterLink>
      <RouterLink to="/use-clipboard">useClipboard</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #060525;
}

nav {
  display: flex;
  gap: 16px;
}

nav a {
  position: relative;
  color: #aaa;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px dotted transparent;
  transition: all 0.3s ease-in-out;
}
nav a:hover {
  color: #eee;
}

nav a:not(nav a:first-child)::before {
  content: '|';
  position: absolute;
  left: -9px;
  bottom: 2px;
}
nav a::before {
  color: #aaa;
}

.router-link-exact-active {
  cursor: default;
  border-color: #ccc;
  color: #ccc;
}
</style>

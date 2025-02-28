<!-- * 3.4 Также у нас в распоряжении есть утилита "useColorMode", которая по сути альтернатива useDark и вместо того, чтобы возвращать булево значение, как useDark, вернёт строку "light" или "dark", чтобы определить выбранную пользователем режим. А также туда можно записать какие-то ещё цветовые схемы и тогда нужно их зарегистрировать. -->
<script setup>
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode({
  modes: {
    dim: 'dim',
    cafe: 'cafe',
  },
  // ? 3.5.0 Можно также заменить классы на атрибуты.
  attribute: 'theme',
})
</script>

<template>
  <p class="mb-5">
    {{ colorMode }}
  </p>
  <div class="flex gap-2">
    <button @click="colorMode = 'dark'" type="button">dark mode</button>
    <button @click="colorMode = 'light'" type="button">light mode</button>
    <button @click="colorMode = 'dim'" type="button">dim mode</button>
    <button @click="colorMode = 'cafe'" type="button">cafe mode</button>
  </div>
</template>

<style>
/* 3.5.1 Но тогда придётся прописать соответствующие CSS-классы. */
[theme='dark'] body {
  background-color: #060525;
  color: #ddd;
}

[theme='light'] body {
  background-color: #efefef;
  color: #252525;
}

[theme='dim'] body {
  background-color: gray;
  color: white;
}

[theme='cafe'] body {
  background-color: #c0acac;
  color: black;
}
</style>

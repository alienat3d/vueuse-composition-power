<!-- * 3.0 "useDark" уже рассматривался довольно подробно в курсе от VueSchool «TailwindCSS Fundamentals», но ничего не мешает его повторить, т.к. это полезная утилита сильно упрощающая работу переключения сайта в «тёмный режим». -->
<!-- 3.2 По умолчанию будет выбираться тот режим, который установлен в системе, но можно это поведение изменить. Добавим для этого кнопку и ещё одну утилиту useToggle, которое принимает булево значение и работает как переключатель этого булево значения. -->
<!-- ? 3.3 Что также очень удобно — useDark также записывает значения о выбранной теме в localStorage. А также добавляет в HTML к тегу <html> класс "dark" и теперь используя префикс dark: мы можем стилизовать элементы для светлого и тёмного режима. -->
<!-- ? 3.4 Также у нас в распоряжении есть утилита "useColorMode", которая по сути альтернатива useDark и вместо того, чтобы возвращать булево значение, как useDark, вернёт строку "light" или "dark", чтобы определить выбранную пользователем режим. А также туда можно записать какие-то ещё цветовые схемы и тогда нужно их зарегистрировать. -->
<script setup>
import { useDark, useToggle, useColorMode } from '@vueuse/core'

// 3.1 А в isDark у нас будет попадать true, если включен "тёмный режим" и false, если "светлый режим".
const isDark = useDark()

const toggleDark = useToggle(isDark)
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
    {{ isDark ? 'Dark mode is on.' : 'Dark mode is off.' }}
    <br />
    {{ colorMode }}
  </p>
  <button @click="toggleDark()" type="button" class="mb-5 block">Toggle Dark Mode</button>
  <div class="flex gap-2">
    <button @click="colorMode = 'dark'" type="button">dark mode</button>
    <button @click="colorMode = 'light'" type="button">light mode</button>
    <button @click="colorMode = 'dim'" type="button">dim mode</button>
    <button @click="colorMode = 'cafe'" type="button">cafe mode</button>
  </div>
</template>

<style>
/* 3.5.1 Но тогда придётся прописать соответствующие CSS-классы. */
[theme='dim'] body {
  background-color: gray;
  color: white;
}

[theme='cafe'] body {
  background-color: #c0acac;
  color: black;
}
</style>

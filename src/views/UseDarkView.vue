<!-- * 3.0 "useDark" уже рассматривался довольно подробно в курсе от VueSchool «TailwindCSS Fundamentals», но ничего не мешает его повторить, т.к. это полезная утилита сильно упрощающая работу переключения сайта в «тёмный режим». -->
<!-- 3.2 По умолчанию будет выбираться тот режим, который установлен в системе, но можно это поведение изменить. Добавим для этого кнопку и ещё одну утилиту "useToggle", которое принимает булево значение и работает как переключатель этого булево значения. -->
<!-- ? 3.3 Что также очень удобно — useDark также записывает значения о выбранной теме в localStorage. А также добавляет в HTML к тегу <html> класс "dark" и теперь используя префикс dark: мы можем стилизовать элементы для светлого и тёмного режима. -->

<script setup>
import { useDark, useToggle } from '@vueuse/core'

// 3.1 А в isDark у нас будет попадать true, если включен "тёмный режим" и false, если "светлый режим".
const isDark = useDark()

const toggleDark = useToggle(isDark)
</script>

<template>
  <p class="mb-5">
    {{ isDark ? 'Dark mode is on.' : 'Dark mode is off.' }}
  </p>
  <button @click="toggleDark()" type="button" class="mb-5 block">Toggle Dark Mode</button>
</template>

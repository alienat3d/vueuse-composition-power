<!-- * 19.1 "useWindowFocus": утилита возвращающая булево значение, показывающая сфокусировано ли окно браузера или нет. -->
<script setup>
import { useWindowFocus } from '@vueuse/core'

const focused = useWindowFocus()
</script>

<template>
  <div class="text-3xl">Window focused? --- {{ focused }}</div>
</template>

<!-- * 10.7 Но, если нам не нужен счётчик, а нужно всего лишь вызывать функцию по интервалу, то можно облегчить себе жить при помощи специальной утилиты "useIntervalFn", которая сделает всё тоже самое, что и на предыдущем примере с "useInterval", но без "watch" и без "counter". -->
<script setup>
import { useIntervalFn } from '@vueuse/core'

const { pause, resume, isActive } = useIntervalFn(() => console.log('Hello world!'))
</script>

<template>
  <h1 class="mb-5 text-4xl">Check the Console!</h1>
  <button @click="isActive ? pause() : resume()" class="min-w-28 ml-24 mx-auto">
    {{ isActive ? 'Pause' : 'Resume' }}
  </button>
</template>

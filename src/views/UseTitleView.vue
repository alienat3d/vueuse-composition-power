<!-- * 1.0 Рассмотрим "useTitle" утилиту VueUse для реактивного изменения тега <title> страницы. И теперь мы можем не только получать title страницы, но и реактивно изменять его. -->
<!-- ? 1.1 Эта утилита имеет множество полезных применений: например мы можем менять title страницы, в зависимости от того на какую страничку кликнул пользователь или для индикации кол-ва новых сообщений (или чего-то ещё) в веб-приложении, которое должно выдавать какие-то индикации с разным кол-вом. -->
<script setup>
import { useTitle } from '@vueuse/core'

const title = useTitle()

title.value = 'VueUse rocks!'

console.log('Reactive title: ', title.value)
</script>

<template>
  <input class="p-2 bg-amber-100" v-model="title" type="text" />
</template>

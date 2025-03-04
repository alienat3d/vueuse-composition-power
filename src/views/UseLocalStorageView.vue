<!-- * 16.0 "useLocalStorage": работаем с Local Storage. -->
<!-- * 16.3 "useSessionStorage": если нам нужно более временное решение только на время конкретной браузерной сессии (само-удаляется при закрытии вкладки). А также не делит между разными закладками одного сайта (искл. - дублирование вкладки), как это делается в Local Storage. -->
<script setup>
import { useLocalStorage, useSessionStorage } from '@vueuse/core'

// 16.1 Чем-то напоминает создание реактивного рефа, но только первым аргументом мы добавляем название ключа, по которому будут хранить данные в хранилище браузера, а вторым его значение.
const name = useLocalStorage('name', 'Al')
const surname = useSessionStorage('surname', '')
</script>

<!-- 16.2 А теперь проверим реактивность "useLocalStorage" в действии и для этого создадим элемент строку ввода и привяжем его к "name". -->
<template>
  <label class="mb-3 block" for=""
    >Input your surname:<input
      v-model="surname"
      type="text"
      class="ml-2 px-2 py-1 border-2 rounded-sm"
  /></label>
  <label for=""
    >Input your name:<input v-model="name" type="text" class="ml-2 px-2 py-1 border-2 rounded-sm"
  /></label>
</template>

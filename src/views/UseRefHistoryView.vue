<!-- * 15.0 "useRefHistory": с этой утилитой мы можем запоминать историю предыдущих значений реактивного рефа, чтобы, например чтобы дать возможность пользователю переключаться от предыдущего значения к следующему. -->
<script setup>
import { ref } from 'vue'
import { useRefHistory } from '@vueuse/core'

const name = ref('')

// 15.1 Например, у нас есть какой-то реф "name" и мы можем поместить его в useRefHistory. И также деструктурировать сущности для управления из неё.
const { history, redo, undo } = useRefHistory(name)
</script>

<!-- 15.2 А в шаблоне мы привяжем инпут к этому рефу, а также сделаем кнопки "Undo" & "Redo" для управления и ещё будем выводить содержимое "history" на страницу. -->
<template>
  <div class="relative">
    <div class="my-10 flex gap-3 items-center">
      <input v-model="name" type="text" class="border-2" />
      <button @click="undo">Undo</button>
      <button @click="redo">Redo</button>
    </div>
    <pre class="h-96">{{ history }}</pre>
  </div>
</template>

<!-- * 8.0 "onLongPress" позволяет запускать коллбэк-функцию только, если кнопка была нажата продолжительное время. По умолчанию это время стоит на 1 секунде, но можно это изменить. -->
<script setup>
import { ref } from 'vue'
import { onLongPress } from '@vueuse/core'

const longBtn = ref(null)

// 8.2 А далее поместим этот реф в функцию "onLongPress" вместе с коллбэк-функцией.
// 8.3 А если захотим настроить задержку самостоятельно, то можно это сделать третьим параметром — объектом с ключом "delay" и задав время в мс.
onLongPress(longBtn, () => alert('Are you still holding that button? 😋'), {
  delay: 2000,
})
</script>

<template>
  <!-- 8.1 Нам также нужно добавить реф-атрибут кнопке. -->
  <button ref="longBtn">Click & Hold</button>
</template>

<!-- * 12.5 "useTimeoutFn": также, как и у 'useInterval' у 'useTimeout' тоже есть специальная утилита-близнец. Перепишем немножко компонент алёрта для работы с ней. -->
<script setup>
import { useTimeoutFn } from '@vueuse/core'
import { ref } from 'vue'

// 12.6 Теперь мы уберём сущность "ready", т.к. сама функция "useTimeoutFn" возвращает это значение, и объект настроек также здесь не понадобится, он уже возвращается и так.
// 12.7.0 Используем коллбэк-функцию, чтобы настроить наш алёрт чуть больше. Добавим ещё один реф "showAlert" и присвоим по умолчанию "true".
const showAlert = ref(true)

// 12.7.1 А в коллбэк запишем значение showAlert - "false", т.о. через 10 секунд значение реф "showAlert" изменится на false.
const { start, stop } = useTimeoutFn(() => {
  showAlert.value = false
}, 3000)
</script>

<!-- 12.8 Ну и обновим условие для показа алёрта на showAlert. Всё работает как раньше, но теперь, скажем мы хотим, чтобы алёрт не исчезал по таймауту, если пользователь навёл на него мышкой. Для этого мы просто добавим эвент "mouseenter" и привяжем его к функции "stop", а также к "mouseout" функцию "start" для запуска таймаута вновь. -->
<template>
  <transition appear>
    <div
      v-if="showAlert"
      @mouseenter="stop"
      @mouseout="start"
      class="relative p-3 pb-6 w-3xl text-center text-3xl leading-14 rounded-xl bg-amber-200"
    >
      Don’t forget to get special 10% discount with the
      <span class="px-4 pb-1 bg-green-200 font-bold uppercase border-dotted border-2 rounded-md"
        >SPRING10</span
      >
      promo code!
      <button @click="stop" class="absolute top-1 -right-3 leading-0 text-center border-none">
        ×
      </button>
    </div>
  </transition>
  <button @click="showAlert = true" class="mt-5 mx-auto">Show an alert</button>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>

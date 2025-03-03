<!-- * 12.0 "useTimeout": иногда бывает полезно отложить выполнение какого-то когда на определённое время и здесь приходит на помощь "useTimeout" утилита. По сути это обёртка вокруг нативной setTimeout функции, которая возвращает булево значение, которое показывает закончился ли отсчёт таймаута или ещё нет. -->
<script setup>
import { useTimeout } from '@vueuse/core'

// 12.1 Передадим в неё 10000 мс, что означает, что мы откладываем выполнение на 10 секунд. И мы присвоим возврат этого булево значения в переменную "ready". Это поведение может быть использовано в разных ситуациях, например, чтобы показать пользователям какой-то поп-ап со скидочным промокодом.
// 12.3.0 Чтобы получить больше контроля, можно добавить вторым аргументом объект опций со значение "control" и теперь можно деструктурировать сущности "ready", "start" & "stop", что позволит перезапустить таймер таймаута или полностью завершить таймер. Это может быть полезно, например, с кнопкой закрытия у алёрта.
// 12.4 Также у 'useTimeout' есть сущность 'isPending', которая возвращает булево значение, противоположное 'ready' и оно вообще-то лучше подходит для условия показа нашего алёрта по смыслу.
const { ready, start, stop, isPending } = useTimeout(10000, { controls: true })
</script>

<template>
  <!-- 12.2 Реализуем показ промокода на короткое время здесь с помощью директивы "v-if". И мы можем также добавить компонент "transition", чтобы сообщение исчезало\появлялось плавно с анимацией. -->
  <!-- 12.3.1 Добавим кнопку закрытия окна алёрта. -->
  <transition appear>
    <div
      v-if="isPending"
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
  <button @click="start" class="mt-5 mx-auto">Show an alert</button>
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

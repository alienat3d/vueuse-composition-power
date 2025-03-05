<!-- * 17.0 "useCycleList": ещё одна интересная утилита, которая принимает массив и возвращает переменную state, которая содержит текущий элемент, а также "prev" и "next" функции, чтобы переключаться между элементами в массиве вперёд и назад. -->
<script setup>
import { useCycleList } from '@vueuse/core'

const { state, prev, next } = useCycleList([
  'https://tinyurl.com/2p8dav94',
  'https://tinyurl.com/2p9yrrhs',
  'https://tinyurl.com/ycxurpah',
])
</script>

<!-- 17.1 И вот как быстро и просто делается слайдер-карусель. В атрибут "src" динамически привязывается "state", а "prev" & "next" на кнопки управления слайдером. -->
<!-- 17.2 Мы также можем добавить небольшую анимацию для смены слайдов. -->
<template>
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2">
    <div class="mb-3 flex gap-1.5 justify-center">
      <button @click="prev()">Previous Slide</button>
      <button @click="next()">Next Slide</button>
    </div>
    <!-- 17.3 Нужно расположить картинки друг на друге, чтобы эффект "fade" работал корректно, а также установим фикс. высоту, чтобы они не дёргались при переключении из-за разницы в высоте. -->
    <!-- 17.4 Но пока что-то не заметно никакой анимации. Всё дело в том, что пока что Vue просто меняет пути к картинкам у одного и того же элемента, а для анимации нам нужно полностью убирать с экрана и ставить на его место другой элемент, поэтому нам нужно добавить ":key" со значением state. -->
    <transition
      ><img class="h-161 object-cover" :src="state" alt="Slide #" :key="state" />
    </transition>
  </div>
</template>

<style>
/* Чтобы не было скачков из-за скролла при переключении слайдов. */
/* body {
  overflow-y: hidden;
} */

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

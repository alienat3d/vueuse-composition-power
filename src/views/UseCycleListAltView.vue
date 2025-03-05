<!-- * 18.0 В [src\views\UseCycleListView.vue] мы уже сделали простейший слайдер с помощью "useCycleList" утилиты, а здесь мы её доработаем и изменим анимацию на более привычную "листание влево/вправо". -->
<script setup>
import { computed } from 'vue'
// import { useCycleList } from '@vueuse/core'
// 18.19 Теперь уже вместо оригинальной утилиты импортируем нашу кастомную:
import { useAppCycleList } from '@/useAppCycleList'
import { useIntervalFn } from '@vueuse/core'

// 18.2 Мы также дадим знать браузеру о других слайдах, добавив массив с ними в отдельную переменную.
const images = [
  'https://tinyurl.com/2p8dav94',
  'https://tinyurl.com/2p9yrrhs',
  'https://tinyurl.com/ycxurpah',
]

// 18.5 Продумывая API для расширенного "useCycleList" мы приходим к выводу, что там нужны сущности, определяющие направление листания слайдов: "isForward" & "isBackward".
const { state, prev, next, isForward, isBackward } = useAppCycleList(images)

// * 18.20 Можно пойти ещё дальше и сделать авто-прокрутку при помощи уже изученной утилиты "useIntervalFn".
useIntervalFn(() => next(), 3000)

// 18.6 Мы также создадим computed-поле "direction", где мы проверим, что если направление isForward, то мы пропишем одни стили стили, а если isBackward, то заменим на реверсивные стили соответственно.
const direction = computed(() => {
  if (isForward.value) {
    return {
      from: `translateX(100%)`,
      to: `translateX(-100%)`,
    }
  } else {
    return {
      from: `translateX(-100%)`,
      to: `translateX(100%)`,
    }
  }
})
</script>

<!-- 18.3 Затем мы распечатаем их все циклом в вёрстку и скроем все картинки, кроме активной. Т.о. браузер сразу загрузит и закэширует все картинки и когда дойдёт до них черёд показаться на странице они будут готовы без задержек для дозагрузки. -->
<!-- ? 18.4 Теперь нам ещё неплохо бы сделать разную анимацию для листания слайдов вперёд и назад. И мы, конечно, могли бы сделать это внутри этого компонента, но это отличная возможность попробовать расширить утилиту "useCycleList" и научиться это делать. ↑ -->
<template>
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 overflow-hidden">
    <!-- ? Возможно такая запись слегка выглядит костыльно и может вызвать некоторые проблемы с доступностью вёрстки, но всё же это работает. -->
    <img v-for="image in images" :key="image" style="display: none" :src="image" alt="" />
    <div class="mb-3 flex gap-1.5 justify-center">
      <button @click="prev()">Previous Slide</button>
      <button @click="next()">Next Slide</button>
    </div>
    <transition
      ><img class="h-161 object-cover" :src="state" alt="Slide #" :key="state" />
    </transition>
  </div>
</template>

<!-- 18.1 Мы немного изменим стили по сравнению с предыдущей версией, чтобы слайды уезжали в сторону. -->
<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

/* 18.7 А дальше мы внедрим возвращаемый computed-полем результат в CSS: */
.v-enter-from {
  transform: v-bind('direction.from');
}

.v-leave-to {
  transform: v-bind('direction.to');
}
</style>
<!-- ? 18.8 Но пока ещё это не сработает, т.к. нам нужно прописать добавление новых сущностей "isForward" & "isBackward". Для этого создадим ещё один файл в директории "src" — [src\useAppCycleList.js] (мы добавили в название файла "App", чтобы указать, что это кастомная доработка оригинальной утилиты) -->

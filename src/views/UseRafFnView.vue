<!-- * 11.7 Хотя использования интервалов вполне допустимо для простой анимации и для сайтов, где нет слишком много анимаций, но всё же requestAnimationFrame более рекомендованный подход для анимации спрайтов, как наш. Для этого есть в VueUse специальная утилита "useRafFn". -->
<script setup>
import { ref } from 'vue'
import { useRafFn } from '@vueuse/core'

const activePosition = ref(0)

// 11.9 Но это нам не подходит - слишком быстро и для того, чтобы замедлить человечка мы создадим ещё один реф framesComplete, чтобы вести счёт проигранных кадров.
const framesComplete = ref(0)

// 11.8 Всё останется таким же, как и в предыдущем примере с "useIntervalFn", но нужно убрать интервал, т.к. эта функция использует частоту обновления монитора, которая обычно 60мс.
// 11.12 Как и в случае с 'useIntervalFn' мы можем деструктурировать такие же сущности, чтобы управлять анимацией.
const { isActive, pause, resume } = useRafFn(() => {
  // 11.10 Затем мы будем прибавлять единицу в framesComplete каждый раз, когда кадр сменится.
  framesComplete.value++
  // 11.11 И мы будем прерывать скрипт всякий раз, когда модуль значения framesComplete не равен 7, т.о. снижая скорость анимации.
  if (framesComplete.value % 7) return
  if (activePosition.value > -525) {
    activePosition.value -= 75
  } else {
    activePosition.value = 0
  }
})
</script>

<template>
  <button @click="isActive ? pause() : resume()" class="mb-3">
    {{ isActive ? 'Pause' : 'Resume' }}
  </button>
  <div class="sprite" :style="`background-position: ${activePosition}px 50%;`"></div>
</template>

<style scoped>
.sprite {
  width: 75px;
  height: 150px;
  background: url('./src/assets/walking-guy.png') no-repeat;
}
</style>

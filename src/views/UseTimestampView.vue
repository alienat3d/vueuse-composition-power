<!-- * 13.0 "useTimestamp": получаем реактивно кол-во секунд, пройденных с 1 января 1970 года. И когда важна точность времяисчисления, то лучше использовать эту утилиту вместо useInterval, потому, что второй может давать погрешности, из-за того, что если единственный поток JavaScript’а занят, то интервал может застрять и хуже всего, что он не компенсирует потерю времени. Давайте продемонстрируем, что имеется в виду с помощью специального цикла, который на пару секунд вешает браузер "hangTheBrowser" (эмуляция загруженного процесса браузера). -->
<script setup>
import { computed } from 'vue'
import { useTimestamp, useInterval } from '@vueuse/core'

// 13.1 Создадим с помощью интервала счётчик, который тикает каждую секунду.
const counter = useInterval(1000)

const timestamp = useTimestamp()

// 13.2 Также создадим переменную, чтобы определить таймстэмп в момент загрузки страницы.
const start = Date.now()

// 13.3 Далее создаём computed-поле, которое рассчитывает количество пройденных секунд с момента загрузки страницы, основанное на значении "start" и реактивном "timestamp".
const secondsPassed = computed(() => {
  return Math.round((timestamp.value - start) / 1000)
})

const hangTheBrowser = () => {
  for (let i = 0; i < 1_000_000; i++) {
    console.log(i)
  }
}
</script>

<template>
  <div class="text-green-700 text-5xl">useTimestamps: {{ secondsPassed }}</div>
  <div class="text-red-700 text-5xl">useInterval: {{ counter }}</div>
  <button @click="hangTheBrowser">Hang the Browser</button>
</template>

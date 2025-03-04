<!-- * 16.4 "logicAnd", "logicNot" & "logicOr": Логические операторы как утилиты VueUse для упрощения работы логическими условиями. Они позволяют применять логику на реактивные рефы без того, чтобы прибавлять им ".value" -->
<!-- ? Обратить внимание, что они из пакета '@vueuse/math', а не '@vueuse/core'! -->
<script setup>
import { computed, ref } from 'vue'
import { logicAnd, logicNot, logicOr } from '@vueuse/math'

const hasBread = ref(true)
const filledWithMeat = ref(true)
const hasTwoSlicesOfBread = ref(true)
const isAHotdog = ref(false)
const withTomatoes = ref(false)
const withPickles = ref(true)

// 16.5 Если мы хотим написать, что isASandwich - true, если hasBread & filledWithMeat оба - true
const isASandwich = computed(() => {
  return logicAnd(hasBread, filledWithMeat)
})

// 16.5 Если мы хотим написать, что isASandwich - true, если hasBread, filledWithMeat и hasTwoSlicesOfBread - true, но isAHotdog - false. А также добавим логику or, проверки, что хотя бы один из должен быть true.
const isNotHotdog = computed(() => {
  return logicAnd(
    hasBread,
    filledWithMeat,
    hasTwoSlicesOfBread,
    logicNot(isAHotdog),
    logicOr(withTomatoes, withPickles),
  )
})
</script>

<template>
  <div class="text-3xl">Это сэндвич? --- {{ isASandwich }}</div>
  <div class="text-3xl">Это не хотдог? --- {{ isNotHotdog }}</div>
</template>

<!-- * 24.0 "useArrayDifference" - composables-функция для работы с массивами, сравнивающая два массива на соответствие друг другу. -->
<!-- ? В документации VueUse есть ещё дюжина других полезных функций для работы с массивами. -->
<script setup>
import { ref } from 'vue'
import { useArrayDifference } from '@vueuse/core'

// 24.1.0 Итак, у нас есть два реактивных массива...
const list1 = ref([])
const list2 = ref([])

// 24.1.1 ..., а также переменная, в которую мы поместим разницу сравнения этих массивов с помощью "useArrayDifference".
const difference = useArrayDifference(list1, list2)
</script>

<template>
  <!-- 24.2 Итак, здесь мы создали два одинаковых списка с чекбоксами внутри. -->
  <h1>List 1</h1>
  <div class="flex gap-3">
    <label v-for="i in 10" v-bind:key="i">
      <input type="checkbox" v-model="list1" :value="i" />
      {{ i }}
    </label>
  </div>

  <h1>List 2</h1>
  <div class="flex gap-3">
    <label v-for="i in 10" v-bind:key="i">
      <input type="checkbox" v-model="list2" :value="i" />
      {{ i }}
    </label>
  </div>

  <!-- 24.3 А здесь мы будем выводить списком через запятую разницу между списками. -->
  <h1>Difference</h1>
  <div class="min-h-6">{{ difference.join(', ') }}</div>
</template>

<!-- * 14.5 "reactify": конвертирует обычную функцию, которая принимает и возвращает нереактивные данные в функцию, которая принимает и возвращает реактивные данные. -->
<!-- 14.6 Рассмотрим на примере lodash функции, которая преобразует строку в camelCase формат. -->
<script setup>
import { ref } from 'vue'
import { reactify } from '@vueuse/core'
import camelCase from 'lodash/camelCase'

// 14.7 А дальше мы определим строку как реактивный реф.
const string = ref('hello_world')

// 14.8 А ещё нам бы хотелось получать camelCase версию этой строки, чтобы она преобразовалась всякий раз, как строка изменится. И мы можем создать computed-проп для этого вот так.
/* const camelCase = computed(() => {
  return camelCase(string.value)
}) */

// 14.9 Но, допустим, что мы хотим иметь camelCase версию строк достаточно регулярно в приложении и вместо того, чтобы делать это вручную с помощью computed — мы можем сделать реактивную версию lodash.camelCase функции.
const rCamelCase = reactify(camelCase)

const camelCaseString = rCamelCase(string)
</script>

<template>
  <input v-model="string" class="mb-2 px-2 text-lg border-2 border-amber-950" type="text" />
  <div class="text-3xl">{{ camelCaseString }}</div>
</template>

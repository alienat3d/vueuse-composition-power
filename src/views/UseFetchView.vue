<!-- * 17.0 "useFetch": удобная утилита для работы с запросами на сервер. -->
<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'

// 17.4.0 Итак, создадим реактивный реф для id ссылки, которая будет реактивной.
const id = ref(1)

// 17.4.1 А url мы преобразуем в computed-проп с динамическим id на конце.
const url = computed(() => {
  return `https://jsonplaceholder.typicode.com/todos/${id.value}`
})

// 17.1 Просто помещаем адрес в "useFetch" и деструктурируем сущности "isFetching", "data" и "error".
// 17.3 А ещё "useFetch" нам предоставляет опцию "refetch", которая даёт возможность работать с реактивным рефом или computed-пропом. Функция автоматически перезапустится, если url изменится.
const { isFetching, data, error } = useFetch(url, { refetch: true })
</script>

<!-- 17.2 А в шаблоне мы распечатаем полученные с API данные. И лучше всего позаботиться о выводе также ошибки, на случай, если она возникнет. -->
<!-- 17.4.2 А ещё мы добавим строку ввода, которая будет менять реф "id", запуская получение новых данных и ререндеринг контента. -->
<!-- ? Это может быть очень полезным, например, для создания пагинации страниц или фильтрации контента на странице. -->
<template>
  <input v-model="id" type="number" class="border-2 rounded" />
  <div v-if="error" class="text-red-600 text-2xl">Error: {{ error }}</div>
  <div v-else-if="isFetching" class="text-amber-500 text-2xl">Data is loading...</div>
  <pre class="text-xl" v-else>{{ data }}</pre>
</template>

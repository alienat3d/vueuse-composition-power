<!-- * 16.0 "computedAsync": Иногда нам могут быть нужны не просто computed-поля, а такие, что работают с асинхронными функциями, например fetch. -->
<script setup>
import { computed, ref } from 'vue'
import { computedAsync } from '@vueuse/core'

const id = ref(1)

const url = computed(() => `https://jsonplaceholder.typicode.com/todos/${id.value}`)

// 16.1 Данные в post должны автоматически обновляться, когда id обновляется. Но т.к. мы работает с асинхронностью, получая данные с сервера, то это выглядит как идеальный случай для 'computedAsync'. Первым аргументом идёт асинхронная функция, а вторым — значение по умолчанию. Второе значение будет оставаться значением computed-поля до тех пор, пока асинхронная функция не завершится.
// ? 16.2.0 Может показаться, что удобнее было бы использовать "useFetch" и в данном случае, может так оно и есть, т.к. он даёт больше возможностей управления, но если мы использовали бы, например, SDK для доступа к API, а не подключались к серверу напрямую, то "computedAsync" стал бы более полезным.
// 16.3 Плюс могут быть и другие случаи, когда computed-поле должно быть асинхронным, но это редкие случаи.
const post = computedAsync(async () => {
  // 16.2.1 await post.get(id.value)
  const res = await fetch(url.value)
  return res.json()
}, null)
</script>

<template>
  <input v-model="id" class="mb-3 px-1 w-14 border-2 text-2xl" type="number" />
  <pre class="text-xl">{{ post }}</pre>
</template>

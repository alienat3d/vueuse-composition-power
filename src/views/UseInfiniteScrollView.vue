<!-- * 8.3 "useInfiniteScroll": ещё один довольно часто используемая в веб-приложениях фича "бесконечный скролл". Это, когда во время того, как пользователь скроллит страницу вниз, новый контент добавляется на страницу. Например так работает feed на Facebook. -->
<script setup>
import { onMounted, ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'

const el = ref(null) /* хранит div из шаблона */
const data = ref([]) /* хранит данные с продуктами из API */
const total = ref(0) /* хранит кол-во всех продуктов, которые мы получили из API */

// 8.4 Первый параметр, который мы помещаем в эту функцию это элемент, который будут скроллить, т.е. собственно сам реф "el". Вторым будет функция, которая должна запускать, когда пользователь доскроллил до конца загруженных товаров. И третьим будет объект с опцией "distance" со значением 10 — это минимальная дистанция между самым низом элемента "el" и низом вьюпорта.
// 8.5 И вуоля, теперь достигая последнего продукта будут загружаться новые. Т.о. можно продолжать скроллить и скроллить.
useInfiniteScroll(el, loadData, { distance: 10 })

loadData() /* запускаем функцию загрузки данных с API */

async function loadData() {
  // проверка загружены ли данные и если это так, то функция завершается
  if (data.value.length !== 0 && data.value.length >= total.value) return

  // обращаемся к API за данными
  const res = await fetch(`https://dummyjson.com/products/?limit=10&skip=${data.value.length}`)
  const d = await res.json()
  total.value = d.total /* записываем значение кол-ва всех продуктов в total ref */
  data.value = data.value.concat(
    d.products,
  ) /* добавляем в data ref все продукты из ответа от API */
}

onMounted(() => (el.value = document))
</script>

<template>
  <div class="el" ref="el">
    <!-- циклом распечатываем из полученных данных карточки товаров -->
    <div v-for="item in data" class="card" :key="item.title">
      <img :src="item.thumbnail" alt="" />
      <h3 class="mb-3 font-bold text-center">{{ item.title }}</h3>
      <p class="text-center">{{ item.description }}</p>
    </div>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
}
.el {
  margin-top: 150px;
  /* height: 100%; */
  height: 800px;
  overflow-y: scroll;
}
.card {
  box-shadow: 0 0 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 30px 10px;
  padding: 20px;
  max-width: 300px;
}
img {
  border-radius: 10px;
  display: block;
  max-width: 100%;
  height: auto;
}
</style>

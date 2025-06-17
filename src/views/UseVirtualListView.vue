<!-- * 20.0 "useVirtualList" - помогает работать огромными массивами данных, которые могут вызывать лаги или даже зависание браузера во время загрузки. Он поможет загружать и отображать только те элементы, которые находятся в пределах видимости и подгружать новые в момент, когда пользователь будет скроллить вниз списка. -->
<script setup>
import { ref } from 'vue'
import { useVirtualList } from '@vueuse/core'
import ListItem from '@/components/ListItem.vue'

const longList = ref(Array.from(Array(1_000).keys()))

// 20.1 Далее мы поместим этот огромный массив в "useVirtualList", а вторым аргументом мы задаём опции, например укажем высоту пункта списка, а также "overscan", настройка, которая означает сколько нужно отрендерить пунктов за пределами видимого (это исправит небольшие неточности высоты пунктов, а также сделает слишком быстрый скролл плавнее).
// 20.2 И, наконец, нам нужно деструктурировать некоторые сущности.
const { list, containerProps, wrapperProps } = useVirtualList(longList, {
  itemHeight: 24,
  overscan: 10,
})
</script>

<template>
  <!-- <pre>{{ list }}</pre> -->
  <!-- 20.3 Чтобы list наполнился нам нужно привязать containerProps к контейнеру, который является родительским листу. -->
  <div v-bind="containerProps" class="h-full">
    <!-- 20.4 А также wrapperProps к самому списку. -->
    <ul v-bind="wrapperProps">
      <ListItem v-for="item in list" :id="item.data" :key="item.data" />
    </ul>
  </div>
</template>

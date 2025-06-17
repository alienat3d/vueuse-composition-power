<!-- * 19.2 "useIntersectionObserver": утилита проверяет находится ли элемент в области видимости (viewport). -->
<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const h1 = ref(null)

// 19.6 Нам также полезно будет создать реф, который будет обновлять значение "isIntersecting" всякий раз, когда коллбэк-функция запустится.
const h1IsVisible = ref(false)

// 19.5 Теперь, чтобы наблюдать за нашим элементом h1 поместим его первым аргументом в функцию "useIntersectionObserver", а вторым аргументом будет коллбэк-функция, которая запустится, когда h1 элемент будет в области видимости. Эта функция получит массив объектов "IntersectionObserverEntry". Подробнее об этом можно прочесть в доке: (https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver). Но пока нас здесь интересует свойство "isIntersecting" первой записи.
useIntersectionObserver(h1, ([{ isIntersecting }]) => {
  h1IsVisible.value = isIntersecting
})
</script>

<!-- 19.3 Для демонстрации создадим div высотой 208px и добавим в него h1-элемент, за которым и будем наблюдать и проверять, видим он в области видимости или нет. -->
<!-- 19.4 Также сделаем h1 рефом. -->
<!-- 19.7 А теперь мы можем сделать клёвую анимацию появления заголовка, когда пользователь до него доскроллит с помощью CSS-анимации в классе "fade-in" и мы будем добавлять его элементу h1 динамически, базируясь на булевом значении рефа "h1IsVisible". -->
<template>
  <div class="w-96 h-52 overflow-scroll border">
    <h1 class="my-76 text-4xl" :class="{ 'fade-in': h1IsVisible }" ref="h1">Hello world!</h1>
  </div>
  <p class="mt-5 text-3xl" :class="h1IsVisible ? 'text-green-700' : 'text-red-400'">
    {{ h1IsVisible ? 'Oh, look! Here it comes!' : 'Still nothing to see here...' }}
  </p>
</template>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn ease 2s;
}
</style>

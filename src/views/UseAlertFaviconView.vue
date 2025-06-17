<!-- * 22.0 "useAlertFavicon" (пишем самодельную composable-функцию) -->
<script setup lang="ts">
import useAlertFavicon from '@/composables/useAlertFavicon'
const vueFavicon = './favicon.ico'
const vueSchoolFavicon = './vue-school-favicon.png'

// 22.1 Базовое API для "useAlertFavicon": alert — запустит функцию, favicon — реактивная переменная для фавиконки, откуда будет считываться и записываться путь к фавиконке и cancel — остановит функцию.
const { alert, favicon, cancel } = useAlertFavicon(vueFavicon)
</script>

<!-- 22.2 Здесь у нас собственно кнопки управления composable-функцией "useAlertFavicon". -->
<!-- Go to [src\composables\useAlertFavicon.ts] -->

<template>
  <h2 class="mb-5">Click the «Alert» button and watch the Favicon over there! 👆</h2>
  <div class="flex gap-2 justify-center">
    <button @click="alert" class="hover:bg-gray-300 transition-colors">Alert</button>
    <button @click="favicon = vueSchoolFavicon" class="hover:bg-gray-300 transition-colors">
      Change
    </button>
    <button @click="cancel" class="hover:bg-gray-300 transition-colors">Cancel</button>
  </div>
</template>

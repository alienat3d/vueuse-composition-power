<!-- * An advanced version of "UseAlertFavicon" composable [src\views\UseAlertFaviconView.vue] -->
<script setup lang="ts">
import useAlertFavicon from '@/composables/useAlertFaviconAdvanced'
const vueFavicon = './favicon.ico'
const vueSchoolFavicon = './vue-school-favicon.png'

const { alert, favicon, cancel } = useAlertFavicon(vueFavicon)
</script>

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

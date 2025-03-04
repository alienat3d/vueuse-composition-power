<!-- * 15.3 "useBase64": автоматически конвертирует данные в данные закодированные в Base64. -->
<!-- ? Может, для строчных данных это не слишком полезно, но эта утилита также работает с буфером, файлами, canvas и картинками. Например, мы можем использовать её для реактивного показа превью картинок для загрузки файлов. -->
<script setup>
import { ref } from 'vue'
import { useBase64 } from '@vueuse/core'

// 15.4 Реализуем превью загрузок картинок.
/* const string = ref('')
const { base64 } = useBase64(string) */
const image = ref('')
const { base64 } = useBase64(image)
</script>

<template>
  <!-- 15.5 Добавим инпут для загрузки файлов и укажем ему, что нужно принимать png & jpeg-файлы. А также пропишем, что первый и единственный загруженный файл должен помещаться в реф через событие. -->
  <input
    @change="image = $event.target.files[0]"
    class="mb-3 px-2 border-2 rounded-md"
    type="file"
    accept="image/jpeg, image/png"
  />
  <!-- <p class="text-xl w-96 break-words">{{ base64 }}</p> -->
  <!-- 15.6 А теперь можно создать элемент картинки для превью и указать атрибуту src base64. -->
  <img class="w-76 mx-auto" v-if="image" :src="base64" alt="Preview" />
</template>

<!-- * 32.0 "useFileSystemAccess" используется для упрощения работы с файловой системой на компьютере пользователя. -->
<script setup>
import { useFileSystemAccess } from '@vueuse/core'

/* 32.1 В распоряжении имеются следующие сущности для работы:
  isSupported (проверка поддерживается ли, т.к. старые браузеры могут не поддерживать API),
  data (получение данных из файла, к которому обращаемся),
  file (получение объекта файла),
  fileName (имя файла),
  fileMIME (MIME файла),
  fileSize (размер файла),
  fileLastModified (когда файл посл. раз изменялся),
  create (создание новых файлов),
  open (открытие файла),
  save (сохранение файла),
  saveAs (сохранить как... файл),
  updateData (обновление данных файла),
*/
const {
  isSupported,
  data,
  file,
  fileName,
  fileMIME,
  fileSize,
  fileLastModified,
  create,
  open,
  save,
  saveAs,
  updateData,
} = useFileSystemAccess()
</script>

<!-- 32.2 Здесь у нас простенькая панель управления, которая, например может загружать текстовые файлы в <textarea>, чтобы добавлять, изменять или удалять что-то в нём и потом сохранить при помощи сущностей "open" & "save". -->
<template>
  <div class="flex gap-2 items-center">
    <textarea
      v-model="data"
      class="textarea bg-transparent border-accent"
      cols="30"
      rows="5"
    ></textarea>
    <button @click="open" class="btn">Open File</button>
    <button @click="save" class="btn">Save File</button>
  </div>
</template>

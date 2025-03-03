<!-- * 15.3 Но если мы посчитаем, что заносить каждый введённый символ в историю это слишком и нам нужно заносить лишь, когда пользователь остановится печатать на какое-то время, чтобы потом он мог кнопками убирать целые слова, то тут нам нужно использовать ещё одну утилиту "useDebouncedRefHistory" -->
<script setup>
import { ref } from 'vue'
import { useDebouncedRefHistory } from '@vueuse/core'

// 15.6 Нам понадобится один реф для нового ToDo.
const newTodo = ref('')

// 15.7 И ещё один с массивом всех ToDo.
const todos = ref([])

// ? 15.11 В данном случае обычным "Ctrl + Z" уже не отделаешься и тут сильно пригодится "useDebouncedRefHistory", поместим todos в её, чтобы запоминалась также история добавления задач и пользователь мог бы пользоваться кнопками управления "Undo" & "Redo". Но чтобы работать также с массивами и объектами нам нужно включить опцию "deep", чтобы записывались изменения даже вложенных частей.
// 15.12 Также можно ограничить историю при помощи опции "capacity", например установим 15, т.о. все записи старше 15-ой будут стёрты.
const { history, redo, undo } = useDebouncedRefHistory(todos, { deep: true, capacity: 15 })

// 15.4 Всё в принципе остаётся тем же, но теперь мы можем вторым аргументом добавить задержку в миллисекундах, прежде, чем данные будут попадать в историю, например 1 сек.
// ? Но вообще-то эта логика выглядит довольно избыточной, т.к. обычные шорткаты "Ctrl + Z" и "Shift + Ctrl + Z" и так справляются неплохо.
// * 15.5 И всё же рассмотрим случай, когда эта утилита действительно будет полезной на примере небольшого приложения ToDo-списка.
// const { history, redo, undo } = useDebouncedRefHistory(name, { debounce: 1000 })
</script>

<template>
  <!--   <div class="relative">
    <div class="mt-20">
      <input v-model="name" type="text" class="mb-5 border-2" />
      <button @click="undo">Undo</button>
      <button @click="redo">Redo</button>
    </div>
    <pre class="h-96">{{ history }}</pre>
  </div> -->
  <div>
    <div class="pb-10 flex gap-2">
      <!-- 15.8 Строку ввода привяжем к рефу "newTodo". -->
      <input
        v-model="newTodo"
        type="text"
        placeholder="New ToDo"
        class="px-3 border-2 bg-amber-50 font-medium"
      />
      <!-- 15.9 Кнопка "Create a ToDo" с помощью метода массивов "unshift" будет добавлять новые задачи в массив todos -->
      <button
        @click="(todos.unshift(newTodo), (newTodo = ''))"
        class="bg-blue-300 hover:bg-blue-400 transition-colors"
      >
        Create a ToDo
      </button>
      <button @click="undo" class="bg-gray-200 hover:bg-gray-300 transition-colors">Undo</button>
      <button @click="redo" class="bg-gray-200 hover:bg-gray-300 transition-colors">Redo</button>
    </div>
    <!-- 15.10 А с помощью цикла "v-for" распечатаем все задачи из массива todos на страницу списком. ↑ -->
    <ul class="ml-7 w-full list-disc">
      <li v-for="(todo, i) in todos" :key="`${i}-${item}`">{{ todo }}</li>
    </ul>
    <pre class="h-96">{{ history }}</pre>
  </div>
</template>

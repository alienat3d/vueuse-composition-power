<!-- * 2.0 Рассмотрим "useClipboard" утилиту VueUse для копирования каких-то данных в буфер обмена. Для этого помимо импорта самого "useClipboard" и рефа с данными, которые мы собираемся копировать, нам ещё нужно записать переменную рефа в "source" утилиты "useClipboard". -->
<!-- ? 2.1 Эта утилита имеет множество полезных применений: например мы можем менять title страницы, в зависимости от того на какую страничку кликнул пользователь или для индикации кол-ва новых сообщений (или чего-то ещё) в веб-приложении, которое должно выдавать какие-то индикации с разным кол-вом. -->
<script setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const textToCopy = ref('Hello')

// 2.2 Также она нам предоставляет целый ряд полезных опций, но используем пока функцию копирования, извлекая её деструктуризацией.
// 2.4 Но мы можем также добавить какое-то уведомление пользователю о том, что копирование в буфер обмена произошло успешно с помощью ещё одной опции "copied". И теперь мы можем поменять текст кнопки, после того, как данные скопируются.
// 2.5 Мы можем даже указать длительность, сколько будет copied пребывать в значении true дописав "copiedDuring" и кол-во миллисекунд.
// 2.6.0 Вообще, мы также можем выводить также текст, скопированный в буфер обмена ещё куда-то, если добавим опцию "text"...
// const { copy, copied } = useClipboard({ source: textToCopy, copiedDuring: 3000 })
// 2.7 И ещё мы можем проверять поддерживается ли функция браузером пользователя с помощью опции "isSupported"
const { copy, copied, text, isSupported } = useClipboard({ copiedDuring: 3000 })
</script>

<!-- 2.3 А дальше просто привяжем её к событию клика на кнопке. -->
<!--  2.6.1 ..., а в функцию copy добавим запишем реф, вместо того, чтобы записывать его в source. -->
<template>
  <div class="relative">
    <input v-model="textToCopy" class="rounded-l-lg p-2 bg-blue-50" type="text" />
    <button
      @click="copy(textToCopy)"
      class="rounded-r-lg py-2 min-w-20 border cursor-cell"
      :class="copied ? 'bg-green-200' : 'bg-blue-200 '"
    >
      {{ copied ? 'Copied' : 'Copy' }}
    </button>
    <p v-show="copied" class="absolute -bottom-10 text-green-600 dark:text-green-500 w-lg">
      {{ `This is what in your clipboard right now: ${text}` }}
    </p>
    <p v-show="isSupported" class="absolute -bottom-50 text-green-700 dark:text-green-200 w-lg">
      {{
        isSupported
          ? 'Cool! Your browser supports copying data to the clipboard.'
          : 'Oops! It seems that your browser doesn’t support copying data to the clipboard.'
      }}
    </p>
  </div>
</template>

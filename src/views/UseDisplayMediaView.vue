<!-- * 9.0 "useDisplayMedia": для показа записи экрана ("share screen"). -->
<!-- ? "useUserMedia": похожим образом, как и "useDisplayMedia" работает и эта утилита, но уже с веб-камерой. https://vueuse.org/core/useUserMedia/ -->
<!-- ? Также есть ещё интересная утилита для видео с удобным управлением просмотра: https://vueuse.org/core/useMediaControls/ -->
<script setup>
import { ref, watchEffect } from 'vue'
import { useDisplayMedia } from '@vueuse/core'

const video = ref()

// 9.2 Мы деструктурируем сущности "stream" и "enabled" из "useDisplayMedia". "stream" — это реактивная реф-переменная, в которой будет находиться стрим-запись экрана, а "enabled" содержит булево значение, которое показывает запись идёт или нет (или прочесть, чтобы узнать статус).
const { stream, enabled } = useDisplayMedia()

// 9.3 Далее мы используем базовую вьюшную "watchEffect" функцию, чтобы установить свойство объекта элемента видео на стрим. И вообще-то мы можем сделать это, только если элемент <video> уже отрендерился в DOM-дереве, поэтому добавим проверку, что video.value в значении true. Причина, почему мы использовали "watchEffect" здесь, потому, что нам нужно устанавливать объект источника автоматически, всякий раз, когда стрим enabled или disabled. "watchEffect" запустится всякий раз, когда stream.value изменится.
watchEffect(() => {
  if (video.value) video.value.srcObject = stream.value
})
</script>

<template>
  <!-- 9.1 Для демонстрации у нас кнопка, запускающая показ экрана и область <video>, где будет показана запись экрана, которая также является "template ref". -->
  <div>
    <!-- 9.4 Осталось повесить на кнопку запуск/остановку по клику. -->
    <button @click="enabled = !enabled">Start Screen Share</button>
    <video ref="video" muted autoplay controls width="800" />
  </div>
</template>

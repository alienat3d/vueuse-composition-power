<!-- * 7.2 Ок, рассмотрим ещё "usePointer" которая выводит много всякой динамической информации о курсоре мыши, например его координаты x & y, также "pressure" покажет, если какая-то кнопка была нажата (если мы зайдём с девайса, у которого тачскрин, то это значение будет разным, в зависимости от силы нажима на экран). "width" & "height": площадь нажимаемой области (для мышки это 1х1, а для пальца может быть разным). "pointerType" -->
<script setup>
import { ref, onMounted, watch, reactive } from 'vue'
import { usePointer } from '@vueuse/core'

// 7.4 "pointer" у нас будет самым настоящей реактивной переменной, так что нужно дописать "ref".
const pointer = reactive(usePointer())
const canvas = ref(null)

// 7.5 Теперь с помощью "watch" мы будем следить за "pointer" и если у него "pressure" равен 0, то делаем ранний возврат, т.о. пользователю придётся нажать и держать кнопку, чтобы рисовать. Затем на надо получить контекст canvas, чтобы иметь возможность рисовать на нём. Также укажем, что рисовать мы будем фиолетовым цветом. Также укажем, что мы хотим создавать небольшой квадрат 10px на 10px.
// 7.7 Можно внести несколько корректив, чтобы цвет появлялся действительно на краешке курсора мыши.
watch(pointer, () => {
  if (pointer.pressure === 0) return
  const ctx = canvas.value.getContext('2d')
  ctx.fillStyle = 'salmon'
  ctx.fillRect(pointer.x - 10, pointer.y - 10, 10, 10)
})

// 7.6 Ну и используем хук "onMounted", чтобы сделать область canvas такой большой, как страница.
onMounted(() => {
  canvas.value.height = document.body.clientHeight
  canvas.value.width = document.body.clientWidth
})
</script>

<template>
  <!--   <pre class="text-2xl font-medium">
    {{ pointer }}
  </pre> -->
  <!-- 7.3 Часто "usePointer" используется для canvas-элемента на странице. Нам также понадобится реф-атрибут "canvas". -->
  <canvas ref="canvas"></canvas>
</template>

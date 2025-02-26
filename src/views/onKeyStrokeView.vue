<!-- * 4.0 "onKeyStroke" для того, чтобы прослушивать нажатие определённых клавиш на клавиатуре. Для этого мы создадим красный шар, который будем двигать по экрану. Также нам понадобится реф с начальными координатами, привязанными с "v-bind" к позиционированию нашего красного шара. -->
<script setup>
import { ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'

const position = ref({ x: 0, y: 0 })

// 4.1 Мы обратимся к утилите "onKeyStroke" и первым параметром укажем кнопку на клавиатуре, которую будем слушать, а вторым коллбэк функцию, которая примет событие "e", чтобы запретить браузеру выполнять на этой странице другие действия по нажатию этой клавиши "preventDefault". Ну и в конце мы меняем координаты по оси y на 5 единиц.
// onKeyStroke('ArrowDown', (e) => {
//   e.preventDefault()
//   position.value.y += 5
// })
// 4.2 Тоже мы сделаем и с клавишей вниз, а также с клавишами влево и право, но уже для оси x.
/* onKeyStroke('ArrowUp', (e) => {
  e.preventDefault()
  position.value.y -= 5
})
onKeyStroke('ArrowRight', (e) => {
  e.preventDefault()
  position.value.x += 5
})
onKeyStroke('ArrowLeft', (e) => {
  e.preventDefault()
  position.value.x -= 5
}) */
// 4.3 Однако это занимает слишком много места, мы можем вообще-то всё это сократить, поместив массив всех клавиш, которые хотим "слушать" первым параметром. А затем при помощи "e.key" определять какая из клавиш нажата в данный момент времени. Ну и при помощи switch в зависимости от нажатой клавиши мы вносим какие-то изменения в позиционирование нашего шарика.
/* onKeyStroke(['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'], (e) => {
  e.preventDefault()
  switch (e.key) {
    case 'ArrowDown':
      position.value.y += 5
      break
    case 'ArrowUp':
      position.value.y -= 5
      break
    case 'ArrowRight':
      position.value.x += 5
      break
    case 'ArrowLeft':
      position.value.x -= 5
      break
  }
}) */
// 4.4.0 Мы можем сделать даже более изящно создав объект controls с функциями для каждого действия
const controls = {
  ArrowDown: () => (position.value.y += 5),
  ArrowUp: () => (position.value.y -= 5),
  ArrowRight: () => (position.value.x += 5),
  ArrowLeft: () => (position.value.x -= 5),
}
// 4.4.1 После чего мы уже добавим в атрибут не массив, а ключи из массива "controls" методом объектов "keys" и собственно так их запустим по названию, т.к. названия клавиши и функции совпадают.
onKeyStroke(Object.keys(controls), (e) => {
  e.preventDefault()
  controls[e.key]()
})
</script>

<template>
  <div class="ball"></div>
</template>

<style>
.ball {
  position: absolute;
  top: v-bind(position.y + 'px');
  left: v-bind(position.x + 'px');
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: red;
}
</style>

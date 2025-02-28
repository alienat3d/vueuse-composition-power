<!-- * 8.0 "useScroll": часто требуется на современных сайтах работать со скроллом и ловить моменты, когда пользователь скроллит или останавливается это делать. Очень удобная вещь, когда нужно, например, подсвечивать определённые якорные ссылки навигации, при достижении каких-то точек сайта или, чтобы кнопка "backToTop" появлялась. -->
<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'

const scrollBox = ref(null)
// 8.2.0 Поместим эту реактивную переменную в функцию useScroll...
const scroll = useScroll(scrollBox)
</script>

<template>
  <!-- 8.1 Чтобы отследить скролл этого div'а с текстом нужно сделать его рефом. -->
  <div class="relative p-2.5 scroll-box w-40 h-72 bg-gray-200 overflow-scroll" ref="scrollBox">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum minima inventore explicabo,
    facilis vero iusto, voluptas provident veniam saepe velit quibusdam nesciunt rem omnis
    consequuntur suscipit eveniet molestias nihil hic tempore eaque ipsa quidem voluptates obcaecati
    temporibus? Omnis ratione iusto ipsam neque vero alias, dolorem nihil porro iste eaque.
    Assumenda rem voluptatem quibusdam modi ea ullam voluptate accusantium incidunt dignissimos
    minima eum magni qui sapiente atque reiciendis perspiciatis, eaque officia minus repellat amet
    ut, cum at et? Facilis deserunt veritatis, alias velit amet ut qui saepe commodi? Obcaecati
    nesciunt laboriosam maxime quo quas provident harum voluptatibus, neque non iusto labore placeat
    consequatur commodi! Ad quasi expedita possimus quaerat, labore commodi eligendi aperiam
    delectus obcaecati ducimus repellat maxime debitis! Nobis eum nemo illo assumenda, animi cumque
    tempora inventore quidem dolores. Expedita quam magnam rem error beatae iusto blanditiis quos,
    explicabo suscipit mollitia, velit nihil necessitatibus dolores fuga numquam eum optio
    inventore.
  </div>
  <!-- 8.2.1 ... и выведем результат сюда, чтобы видеть данные, что мы получаем. Здесь в x & y координаты отскролленого расстояния в px от левой стороны (х) и от верха (y), также индикация активного скроллинга "isScrolling", "arrivedState" показывает каких сторон контейнера достиг пользователь на текущий момент, а "directions" указывает на то, в какую сторону идёт скролинг в данный момент. -->
  <pre>{{ scroll }}</pre>
</template>

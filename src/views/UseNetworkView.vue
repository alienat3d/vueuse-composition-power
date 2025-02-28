<!-- * 6.2 Для более подробной информации есть также "useNetwork", там много других свойств, которые могут быть полезны, например, когда посл. раз пользователь был онлайн или какой тип интернета использует или включен ли режим экономного расхода трафика. -->
<script setup>
import { useNetwork } from '@vueuse/core'

const network = useNetwork()
</script>

<template>
  <div>Network info: {{ network }}</div>
</template>

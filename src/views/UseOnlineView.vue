<!-- * 6.1 Есть ещё одна полезная утилита "useOnline", которое возвращает булево значение, которой покажет устройство имеет доступ в интернет или нет. -->
<script setup>
import { useOnline } from '@vueuse/core'

const online = useOnline()
</script>

<template>
  <div>Online: {{ online }}</div>
</template>

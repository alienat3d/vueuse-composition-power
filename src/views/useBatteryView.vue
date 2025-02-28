<!-- * 6.0 "useBattery": современные лаптопы и смартфоны обычно имеют разные сенсоры встроенные в них. Например "useBattery" даёт доступ к такой информации, как: заряжается ли устройство или нет, время зарядки до полной батареи и на каком уровне зарядки находится, а также поддерживается ли сенсор или нет на текущем устройстве. -->
<script setup>
import { useBattery } from '@vueuse/core'

const battery = useBattery()
</script>

<template>
  <div class="mb-2">Battery info: {{ battery }}</div>
</template>

<!-- * 6.0 "useBattery": современные лаптопы и смартфоны обычно имеют разные сенсоры встроенные в них. Например "useBattery" даёт доступ к такой информации, как: заряжается ли устройство или нет, время зарядки до полной батареи и на каком уровне зарядки находится, а также поддерживается ли сенсор или нет на текущем устройстве. -->
<!-- 6.1 Есть ещё одна полезная утилита "useOnline", которое возвращает булево значение, которой покажет устройство имеет доступ в интернет или нет. Для более подробной информации есть также "useNetwork", там много других свойств, которые могут быть полезны, например, когда посл. раз пользователь был онлайн или какой тип интернета использует или включен ли режим экономного расхода трафика. -->
<!-- 6.2 Ещё одна утилита, которая бывает иногда полезна "useGeolocation", например, если нужно предоставлять какую-то определённую информацию в зависимости от местонахождения пользователя или во время создания приложения с GPS-навигацией. -->
<script setup>
import { useBattery, useOnline, useNetwork, useGeolocation } from '@vueuse/core'

const battery = useBattery()
const online = useOnline()
const network = useNetwork()

const { coords, locatedAt, error } = useGeolocation()
</script>

<template>
  <div class="mb-2">Battery info: {{ battery }}</div>
  <div class="mb-2">Online: {{ online }}</div>
  <div class="mb-2">Network info: {{ network }}</div>

  <pre lang="json">
    {{
      JSON.stringify({
        coords: {
          accuracy: coords.accuracy /* точность в метрах */,
          latitude: coords.latitude,
          longitude: coords.longitude,
          altitude: coords.altitude,
          altitudeAccuracy: coords.altitudeAccuracy,
          heading: coords.heading /* направление по отношению к северу */,
          speed: coords.speed, // скорость передвижения м/с
        },
        locatedAt,
        error: error ? error.message : error,
      })
    }}
  </pre>
</template>

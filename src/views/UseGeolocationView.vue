<!-- * 6.3 Ещё одна утилита, которая бывает иногда полезна "useGeolocation", например, если нужно предоставлять какую-то определённую информацию в зависимости от местонахождения пользователя или во время создания приложения с GPS-навигацией. -->
<script setup>
import { useGeolocation } from '@vueuse/core'

const { coords, locatedAt, error } = useGeolocation()
</script>

<template>
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

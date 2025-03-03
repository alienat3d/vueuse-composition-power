<!-- * 13.4 "useNow": ещё один удобный способ для отображения времени, который вернёт нам актуальную дату и время. -->
<!-- 13.5 Также удобно комбинировать её с "useDateFormat" утилитой, чтобы получить доступ к форматированию даты, как нам потребуется. -->
<script setup>
import { useNow, useDateFormat } from '@vueuse/core'

// 13.6 И по умолчанию она покажет дату в подобном формате "hh:mm:ss", но мы можем это изменить вторым параметром, как нам потребуется.
const now = useDateFormat(useNow(), 'h:mm:ss:SSS')
</script>

<template>
  <div class="text-3xl">{{ now }}</div>
</template>

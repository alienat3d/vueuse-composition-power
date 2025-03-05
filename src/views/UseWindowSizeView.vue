<!-- * 19.0 "useWindowSize": утилита достаточно простая, когда вызывается, то можно деструктурировать из неё ширину и высоту окна. -->
<script setup>
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<template>
  <div class="text-3xl">{{ width }} x {{ height }}</div>
</template>

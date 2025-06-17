<!-- * 21.0 "useVModel" - для упрощения работы с пропами, теперь мы можем превращать их из "read-only" в перезаписываемую реактивную ref-переменную.  -->
<!-- 21.5 Также, ещё стоит упомянуть про "useVModels", если нужно использовать множество пропов для компонента, здесь мы его не рассматриваем, но можно почитать о нём здесь: [vueuse.org/core/usevmodels] -->
<script setup>
import { ref } from 'vue'
// Go to [src\components\CounterInput.vue]
import CounterInput from '@/components/CounterInput.vue'

const number = ref(0)
</script>

<template>
  <CounterInput v-model="number" />
  <br />
  {{ number }}
</template>

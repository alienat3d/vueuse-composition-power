<!-- * Convert salary ₽ per month into ₽ per hour. -->
<script setup>
import { computed, ref } from 'vue'

const salary = ref(null)

const monthlyRateToHour = computed(() => Math.ceil((salary.value * 12) / 219 / 8))
</script>

<template>
  <input v-model="salary" type="number" class="px-1 border" />
  <div class="text-3xl">{{ monthlyRateToHour }} ₽/ч</div>
</template>

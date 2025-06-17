<script setup>
const props = defineProps({
  id: Number,
})
</script>

<template>
  <li>Item {{ id }}</li>
</template>

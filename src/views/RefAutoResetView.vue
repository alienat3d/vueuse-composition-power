<!-- * 15.0 "refAutoReset": специальный реф с автоматическим сбросом к значению по умолчанию по истечении таймера. -->
<script setup>
import { refAutoReset } from '@vueuse/core'

// 15.1 "refAutoReset" принимает два аргумента: 1) значение по умолчанию, 2) таймаут в мс
const showAlert = refAutoReset(false, 5000)

// 15.2 Теперь, чтобы показать алёрт нужно присвоить showAlert значение "true"
showAlert.value = true
</script>

<template>
  <div class="relative">
    <transition appear>
      <div
        v-if="showAlert"
        @mouseenter="stop"
        @mouseout="start"
        class="relative p-3 pb-6 w-3xl text-center text-3xl leading-14 rounded-xl bg-amber-200"
      >
        Don’t forget to get special 10% discount with the
        <span class="px-4 pb-1 bg-green-200 font-bold uppercase border-dotted border-2 rounded-md"
          >SPRING10</span
        >
        promo code!
      </div>
    </transition>
  </div>
  <transition appear>
    <button
      v-if="!showAlert"
      @click="showAlert = true"
      class="absolute bottom-1/4 left-1/2 -translate-1/2"
    >
      Show an alert
    </button>
  </transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>

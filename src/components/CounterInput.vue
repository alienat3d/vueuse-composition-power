<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: Number,
})

const emit = defineEmits(['update:modelValue'])

// 21.3.0 Внутрь у нас идут 3 аргумента: props, название пропа, на который мы будем ссылаться и emit. И всё это мы присвоим переменной "data".
const data = useVModel(props, 'modelValue', emit)

// 21.3.1 Теперь мы можем взаимодействовать с данным, как если бы это была обычная реактивная ref-переменная. Но, в отличии от обычного присвоения значения, кастомное событие "modelValue" будет автоматически вызвано.
data.value = 0 // emits update:modelValue

// 21.3.2 Мы бы не смогли присвоить значение напрямую пропу, т.к. они "read only":
// props.modelValue = 2
</script>

<!-- 21.4.0 Теперь мы можем переделать шаблон, существенно сократив выполнение по клику, используя "data", вместо того, чтобы вручную прописывать все события. -->
<template>
  <div class="flex">
    <!-- <button @click="$emit('update:modelValue', modelValue - 1)" class="bg-red-100 -mr-1">-</button> -->
    <button @click="data--" class="bg-red-100 -mr-1">-</button>
    <!-- 21.1 Мы добавим к $event.target "valueAsNumber", чтобы значение передавалось числовым значением, т.к. по умолчанию типа данных из строки ввода у нас строчное значение. -->
    <!-- <input
      @input="$emit('update:modelValue', $event.target.valueAsNumber)"
      :value="modelValue"
      class="text-3xl w-18 text-center border-y-2 px-1.5 outline-0"
      type="number"
    /> -->
    <!-- 21.4.1 А input у нас теперь преобразуется в короткую запись директивы "v-model". -->
    <!-- Go to [src\views\UseVModelView.vue] -->
    <input
      v-model="data"
      class="text-3xl w-18 text-center border-y-2 px-1.5 outline-0"
      type="number"
    />
    <!-- <button @click="$emit('update:modelValue', modelValue + 1)" class="bg-green-100 -ml-1">+</button> -->
    <button @click="data++" class="bg-green-100 -ml-1">+</button>
  </div>
</template>

<style scoped>
/* 21.2 Добавим некоторые стили, чтобы избавиться от оформления стрелочками, которые идут по умолчанию в строку ввода типа "number". */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

button {
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  font-weight: 700;
  font-size: 28px;
}

input {
  position: relative;
  /* line-height: 1; */
}
input::before,
input::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100px;
  height: 4px;
  background-color: #000;
}
input::before {
  top: 0;
}
input::after {
  bottom: 0;
}
</style>

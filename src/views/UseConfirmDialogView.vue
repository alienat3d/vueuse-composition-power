<!-- * 23.0 "useConfirmDialog" - упрощение работы с диалоговыми окнами. -->
<script setup>
import { useConfirmDialog } from '@vueuse/core'

/* 23.1 Сущности, которые помогают подключать логику к диалоговым окнам:
  isRevealed (говорит, что диалоговое окно должно быть показано или нет),
  reveal (запускает показ диалог. окна),
  confirm (запустится, когда нажата кнопка "Confirm"),
  cancel (запустится, когда нажата кнопка "Cancel"),
  onReveal (запуск коллбэк-функции, в момент появления диалог. окна),
  onConfirm (запуск коллбэк-функции, в момент нажатия кнопки "Confirm"),
  onCancel (запуск коллбэк-функции, в момент нажатия кнопки "Cancel")
*/
const { isRevealed, reveal, confirm, cancel, onReveal, onConfirm, onCancel } = useConfirmDialog()

// 23.5 Теперь для тестирования используем запуски коллбэк-функций по клику на кнопки "Cancel" & "Confirm"
onCancel(() => {
  alert('canceled')
})

onConfirm(() => {
  alert('confirmed')
})

// 23.6 А также используем и "onReveal"
onReveal(() => {
  console.log('revealed')
})
</script>

<!-- Модальное окно стилизованное при помощи CSS-фреймворка Daisy UI. -->
<template>
  <div class="p-5">
    <!-- 23.2 Чтобы открывать диалог. окно по нажатию кнопки мы просто повесим сущность "reveal" на событие "click". -->
    <button @click="reveal" class="btn">Delete</button>
    <!-- 23.3 Далее, мы могли бы повесть isRevealed на v-if директиву, но пользуясь тем, что у нас уже есть спец. класс "modal-open", сделаем его динамическим по условию isRevealed. -->
    <div class="modal" :class="{ 'modal-open': isRevealed }">
      <div class="modal-box text-amber-50">
        <h3 class="font-bold text-lg">Confirm delete</h3>
        <p class="py-4">Are you sure you want to delete this item?</p>
        <!-- 23.4 Также нам нужно повесить сущности "cancel" & "confirm" на соответствующие кнопки. -->
        <div class="modal-action">
          <button @click="cancel" class="btn btn-neutral">Cancel</button>
          <button @click="confirm" class="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

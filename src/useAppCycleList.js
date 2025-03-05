// 18.9 А здесь мы экспортируем новую утилиту и добавим такие же аргументы из VueUse функции в нашу кастомную. Также мы импортируем оригинальную утилиту сюда из VueUse.
import { useCycleList } from "@vueuse/core";
import { computed, ref } from "vue";

export function useAppCycleList(list, options) {
  // 18.12 Нам также понадобится реф, который будет хранить значение направления листания слайдов "direction"
  const direction = ref(null)

  // 18.10 Теперь можно вызвать её с теми же аргументами здесь:
  const cycleList = useCycleList(list, options)

  // 18.16 Используем computed-поля, чтобы создавать isForward & isBackward переменные с булевым значением.
  const isForward = computed(() => direction.value === 'forward')
  const isBackward = computed(() => direction.value === 'backward')

  // 18.13 Нам также нужна функция "next", которая будет задавать значение "forward" и использовать оригинальную функцию "next"
  function next() {
    direction.value = 'forward'
    cycleList.next()
  }

  // 18.14 Тоже самое делаем и с функцией "prev"
  function prev() {
    direction.value = 'backward'
    cycleList.prev()
  }

  // 18.11 И наконец мы возвращаем объект и спред-оператором распакуем cycleList в него. И в этом моменте у нас уже готова кастомная утилита, которая работает в точности также, как и оригинальная "useCycleList", но нам-то как раз нужно в неё добавить новые опции, а именно "isForward" & "isBackward", возвращающие булево значение.
  // 18.15 И чтобы извлечь эти новые функции из кастомной утилиты нам нужно их также возвращать через ",". ↑
  // 18.17 И также эти computed-поля добавим в возврат, чтобы иметь к ним доступ.
  // 18.18 Самое время вернуться назад в [src\views\UseCycleListAltView.vue] и использовать там нашу новую изменённую утилиту [src\views\UseCycleListAltView.vue]
  return {
    ...cycleList,
    next, prev, isForward, isBackward
  }
}

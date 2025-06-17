import { useFavicon, defaultDocument, useIntervalFn } from '@vueuse/core'
import { watch, ref, isRef } from 'vue'
import type { ConfigurableDocument } from '@vueuse/core'

// ? Установим пакет "@vueuse/shared", чтобы использовать тип "MaybeRef".
import type { MaybeRef } from '@vueuse/shared'

// 22.4 Также для опций composable-функции добавим интерфейс, который будет дополнять ConfigurableDocument. Мы хотим добавить две функции: 1) скорость мерцания индикатора alert; 2) путь к эмодзи-картинке, которая будет использоваться для алёрта.
interface UseAlertFaviconOptions extends ConfigurableDocument {
  speed?: number
  emoji?: string
}

// 22.3 Используем TS, чтобы определить типы аргументов. "src" будет типа "MaybeRef", который будет либо строкой, либо null, либо undefined, а по умолчанию null.
// 22.5 Теперь можно использовать интерфейс в качестве типа для options.
export default function useAlertFavicon(
  src: MaybeRef<string | null | undefined> = null,
  options: UseAlertFaviconOptions = {},
) {
  // 22.6 Чтобы указать значения опций по умолчанию мы деструктурируем options и укажем значения. Для скорости — 1 сек. и это максимальное значение, поддерживаемое браузерами, если вкладка не активна.
  const { speed = 500, emoji = '🚨', document: defaultDocument } = options

  // 22.7 Далее мы применим useFavicon и поместим туда источник фавиконки, чтобы делегировать ей задачу реактивной смены фавиконки. И теперь для смены фавиконки нам всего лишь потребуется поменять значение (строки\пути).
  // favicon.value = "path-to-favicon"
  const favicon = useFavicon(src)

  // 22.8 Также создадим переменную нормализующую путь к фавиконке, чтобы делать из пути реактивный реф, если он был передан обычной строкой.
  const theSrc = isRef(src) ? src : ref(src)

  // 22.9.0 Далее мы вызовем "useIntervalFn", чтобы переключать картинку иконки между src и alert-иконкой.
  const { pause, resume, isActive } = useIntervalFn(() => {
    favicon.value =
      favicon.value === theSrc.value
        ? `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`
        : theSrc.value
  }, speed)
  pause() /* 22.9.1 И сразу же вызовем "pause", чтобы скрипт не запускался, пока не будет вызван по кнопке "Alert". */
  // ? Мы могли бы использовать обычный setInterval из JS, но useIntervalFn также автоматически очистит интервал, когда компонент его использующий будет размонтирован.

  // 22.11 "cancel" мог бы стать функцией "pause", однако нам нужно также вернуть путь иконки к theSrc, в случае, если последней из отображаемых была иконка алёрта.
  const cancel = () => {
    pause()
    favicon.value = theSrc.value
  }

  // 22.13 А ещё нам нужно наблюдать за theSrc и назначать его favicon.value всякий раз, когда будет изменяться. Это удостоверит, что назначение фавиконки снаружи будет работать как мы ожидаем, даже если alert не в процессе выполнения.
  watch(theSrc, () => {
    favicon.value = theSrc.value
  })

  return {
    // 22.10 Теперь, когда доступна сущность "resume" мы можем вернуть её как функцию "alert".
    alert: resume,
    cancel,
    // 22.12 А также надо favicon присвоить theSrc, т.о. если она будет назначена снаружи composable-функции, то переключатель иконок будет корректен.
    favicon: theSrc,
  }
}

import { defineStore } from 'pinia'
import { ref } from 'vue'
import i18n from '@/locales'
import { Locale } from 'vant'

type LocaleType = 'zh-CN' | 'en-US'

export const useLocaleStore = defineStore(
  'Locale',
  () => {
    const locale = ref<LocaleType>(i18n.global.locale.value as LocaleType)

    const setLocale = (value: LocaleType) => {
      locale.value = value
      i18n.global.locale.value = value // 切换vue-i18n的语言包
      Locale.use(value, i18n.global.messages.value[value]) // 切换vant的语言包
    }

    return {
      locale,
      setLocale,
    }
  },
  {
    persist: {
      key: 'Locale',
      storage: localStorage,
      pick: undefined, // undefined表示存储所有state，[]表示不存储任何state
    },
  },
)

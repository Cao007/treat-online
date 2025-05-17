import { createI18n } from 'vue-i18n'
import zhCN from './messages/zh-CN'
import enUS from './messages/en-US'
import { useLocaleStore } from '@/stores/modules/locale'
import { Locale as VantLocale } from 'vant'

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: localStorage.getItem('Locale') || 'zh-CN', // 默认语言
  fallbackLocale: 'en-US', // 备用语言
  messages,
})

/**
 * 设置语言环境，供 main.ts 调用
 */
export function setupI18n() {
  const localeStore = useLocaleStore()
  const lang = localeStore.locale

  // 设置 vue-i18n 的语言
  i18n.global.locale.value = lang

  // 设置 Vant 的语言
  VantLocale.use(lang, messages[lang])
}

export default i18n

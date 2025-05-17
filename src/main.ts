import { createApp } from 'vue'
import '@/styles/index.scss'

import App from './App.vue'
import pinia from './stores'
import router from './router'
import i18n, { setupI18n } from './locales'
import 'virtual:svg-icons-register' // 注册svg图标

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
setupI18n() // 统一同步语言逻辑

app.mount('#app')

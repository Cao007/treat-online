import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ConfigProviderTheme } from 'vant'

export const useThemeStore = defineStore(
  'Theme',
  () => {
    const theme = ref<ConfigProviderTheme>('light')
    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
    return {
      theme,
      toggleTheme,
    }
  },
  {
    persist: {
      key: 'Theme',
      storage: localStorage,
      pick: undefined, // undefined表示存储所有state，[]表示不存储任何state
    },
  },
)

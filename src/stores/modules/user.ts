import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/types/user'

export const useUserStore = defineStore(
  'User',
  () => {
    // 登录的用户信息
    const user = ref<User>({} as User)

    // 设置用户信息
    const setUser = (data: User) => {
      user.value = data
    }

    // 清除用户信息
    const clearUser = () => {
      user.value = {} as User
    }

    return {
      user,
      setUser,
      clearUser,
    }
  },
  {
    persist: {
      key: 'User',
      storage: localStorage,
      pick: ['user'], // undefined表示存储所有state，[]表示不存储任何state
    },
  },
)

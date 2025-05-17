import { useUserStore } from '@/stores/modules/user'
import router from '@/router'
import axios from 'axios'

// 1. 创建axios实例，配置基础路径
const baseURL = 'https://consult-api.itheima.net/'
const request = axios.create({
  baseURL,
  timeout: 10000,
})

// 2. 请求拦截器
request.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.user.token) {
      // 添加请求头，携带token
      config.headers.Authorization = `Bearer ${userStore.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err),
)

// 3. 响应拦截器
request.interceptors.response.use(
  (res) => {
    // 200响应成功，但是code!==10000，是业务逻辑失败
    if (res.data?.code !== 10000) {
      showFailToast(res.data.message)
      return Promise.reject(res.data)
    }
    // 200响应成功，但是code===10000，是业务逻辑成功，返回数据
    return res.data?.data
  },
  (err) => {
    if (err.response.status === 401) {
      // 清除用户信息
      const store = useUserStore()
      store.clearUser()
      // 跳转登录，带上接口失效所在页面的地址，登录完成后回跳使用
      router.push(`/login?returnUrl=${router.currentRoute.value.fullPath}`)
    }
    return Promise.reject(err)
  },
)

export { baseURL, request }

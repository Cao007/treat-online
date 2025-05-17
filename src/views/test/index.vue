<template>
  <div class="test-container">
    <h2>测试页面</h2>

    <div>
      <h3>pinia持久化</h3>
      <div>{{ user }}</div>
    </div>

    <div>
      <h3>vant组件</h3>
      <van-button type="primary" @click="getUserInfo">获取个人信息</van-button>
      <van-button type="primary" @click="handleLogin">密码登录</van-button>
    </div>

    <div>
      <h3>主题色</h3>
      <van-button type="primary" @click="toggleTheme">切换主题</van-button>
    </div>

    <div>
      <h3>国际化</h3>
      <p>{{ t('common.hello') }}</p>
      <van-button @click="toggleLang">{{ t('common.changeLang') }}</van-button>
      <van-field v-model="textVal" :label="t('user.nickname')" :placeholder="t('user.welcome')" />
      <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      />
    </div>

    <div>
      <h3>icon图标</h3>
      <SvgIcon icon-class="treat-delete" size="small" />
      <SvgIcon icon-class="treat-delete" size="medium" />
      <SvgIcon icon-class="treat-delete" />
      <SvgIcon icon-class="treat-delete" size="large" />
      <SvgIcon icon-class="treat-delete" size="50px" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/modules/user'
import { storeToRefs } from 'pinia'
import { request } from '@/utils/request'
import { useThemeStore } from '@/stores/modules/theme'
import { ref } from 'vue'
import { useLocaleStore } from '@/stores/modules/locale'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@/components/SvgIcon.vue'

// pinia持久化
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const { setUser } = userStore
setUser({
  token: '',
  id: '1',
  account: 'admin',
  mobile: '13800138000',
  avatar: 'avatar',
})

// vant组件测试、axios请求测试
const getUserInfo = async () => {
  const res = await request.get('/patient/myUser')
  console.log(res)
}
const handleLogin = async () => {
  const res = await request.post('/login/password', {
    mobile: '13211112222',
    password: 'abc12345',
  })
  console.log(res)
}

// 主题色切换
const { toggleTheme } = useThemeStore()

// 国际化
const textVal = ref('')
const currentPage = ref(1)
const { t } = useI18n()
const { setLocale } = useLocaleStore()
const { locale } = storeToRefs(useLocaleStore())
const toggleLang = () => {
  setLocale(locale.value === 'zh-CN' ? 'en-US' : 'zh-CN')
}
</script>

<style lang="scss" scoped></style>

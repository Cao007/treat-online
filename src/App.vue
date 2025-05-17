<template>
  <div class="main-container">
    <van-config-provider :theme="themeStore.theme">
      <RouterView></RouterView>
    </van-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/modules/theme'

// 主题切换
const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
.main-container {
}
</style>

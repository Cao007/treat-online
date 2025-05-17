<template>
  <div class="login-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('登录页面')
</script>

<style lang="scss" scoped>
.login-container {
}
</style>

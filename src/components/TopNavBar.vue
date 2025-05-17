<template>
  <div class="top-navbar-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('顶部导航栏')
</script>

<style lang="scss" scoped>
.top-navbar-container {
}
</style>

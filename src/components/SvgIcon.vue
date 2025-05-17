<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :class="sizeClass"
    :style="customSizeStyle"
    :fill="color"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

// 定义组件 props
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon', // SVG symbol 前缀，默认为 'icon'
  },
  iconClass: {
    type: String,
    required: true, // 图标类名，必传
  },
  color: {
    type: String,
    default: 'currentColor', // 颜色，默认继承当前文本颜色
  },
  size: {
    // size 支持 'small' | 'medium' | 'large' 三种预定义尺寸或自定义字符串（如 '20px', '1.5rem'）
    type: String as PropType<'small' | 'medium' | 'large' | string>,
    default: 'medium',
  },
})

// 计算 symbolId 用于 <use xlink:href> 指向对应的 svg symbol
const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`)

// 预定义的尺寸数组
const predefinedSizes = ['small', 'medium', 'large']

// 根据 size 判断是否属于预定义尺寸，若是则返回对应的 class 类名
const sizeClass = computed(() => {
  if (predefinedSizes.includes(props.size ?? '')) {
    return `svg-icon--${props.size}`
  }
  // 不是预定义尺寸返回空字符串，不使用 class 控制大小
  return ''
})

// 如果 size 不是预定义尺寸且存在，则使用内联 style 设置 font-size，方便灵活支持任意单位大小
const customSizeStyle = computed(() => {
  if (props.size && !predefinedSizes.includes(props.size)) {
    return {
      fontSize: props.size,
    }
  }
  // 预定义尺寸或无 size 不设置内联样式
  return {}
})
</script>

<style scoped>
/* 基础 svg-icon 样式 */
/* 统一宽高用 em 作为单位，方便通过 font-size 控制大小 */
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em; /* 调整基线对齐，避免视觉偏差 */
  fill: currentColor; /* 默认使用 currentColor，继承文本颜色 */
  overflow: hidden;
}

/* 预定义尺寸对应的 font-size，postcss-px-to-viewport 会转换 px 为 vw */
.svg-icon--small {
  font-size: 16px;
}

.svg-icon--medium {
  font-size: 24px;
}

.svg-icon--large {
  font-size: 32px;
}
</style>

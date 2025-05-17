<template>
  <div class="top-bar-container">
    <van-nav-bar
      :left-text="props.leftText"
      :left-arrow="props.leftArrow"
      :title="props.title"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <!-- 父组件传入的结构，再插入到slot中 -->
      <template #right>
        <slot name="right">按钮</slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts" setup>
// 接受父组件传入的属性
const props = defineProps({
  leftText: {
    type: String,
    default: '返回',
  },
  leftArrow: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '标题',
  },
})

// 子组件向父组件传递事件
const emits = defineEmits<{
  (e: 'click-left', event: MouseEvent): void
  (e: 'click-right', event: MouseEvent): void
}>()

const onClickLeft = (e: MouseEvent) => emits('click-left', e)
const onClickRight = (e: MouseEvent) => emits('click-right', e)
</script>

<style lang="scss" scoped>
.top-bar-container {
}
</style>

<template>
  <div class="login-container">
    <!-- 顶部导航栏 -->
    <TopNavBar
      left-text=""
      title="登录"
      @click-left="handleClickLeft"
      @click-right="handleClickRight"
    >
      <template #right>
        <slot name="right"><span>注册</span></slot>
      </template>
    </TopNavBar>

    <!-- 表单 -->
    <div class="login-form">
      <div class="top-form">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="username"
              name="username"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit"> 提交 </van-button>
          </div>
        </van-form>
      </div>
      <div class="bottom-third">
        <!-- 分割线 -->
        <div class="throwline-box">
          <div class="line"></div>
          <div class="middle-text">第三方登录</div>
          <div class="line"></div>
        </div>
        <!-- 微信 -->
        <SvgIcon iconClass="treat-wechat" size="60px" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TopNavBar from '@/components/TopNavBar.vue'
import router from '@/router'

// 顶部导航栏
const handleClickLeft = () => {
  // 判断是否有返回记录
  if (history.state.back) {
    router.back()
  } else {
    router.push('/')
  }
}

const handleClickRight = (e: MouseEvent) => {
  console.log('点击了搜索按钮', e)
}

// 表单
const username = ref('')
const password = ref('')
const onSubmit = (values) => {
  console.log('submit', values)
}
</script>

<style lang="scss" scoped>
.login-container {
  // 顶部导航栏
  :deep(.van-nav-bar) {
    // 左侧
    .van-nav-bar__left {
      .van-icon {
        color: #000;
      }
    }
    // 右侧
    .van-nav-bar__right {
      span {
        color: var(--van-primary-color);
      }
    }
  }

  // 表单
  .login-form {
    height: calc(100vh - var(--van-nav-bar-height));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 120px;
    margin: 0 30px;

    .bottom-third {
      display: flex;
      flex-direction: column;
      align-items: center;
      .throwline-box {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        .line {
          width: 110px;
          height: 1px;
          background-color: #000;
        }

        .middle-text {
          margin: 0 20px;
        }
      }
    }
  }
}
</style>

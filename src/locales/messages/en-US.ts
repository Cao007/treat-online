import vantEnUS from 'vant/es/locale/lang/en-US'
import common from './modules/common-en'
import user from './modules/user-en'

export default {
  // vant组件库的英文语言包
  ...vantEnUS,
  vanPagination: {
    ...vantEnUS.vanPagination,
    prev: 'Previous',
    next: 'Next',
  },
  // 模块
  common,
  user,
}

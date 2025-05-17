import vantZhCN from 'vant/es/locale/lang/zh-CN'
import common from './modules/common-zh'
import user from './modules/user-zh'

export default {
  // vant组件库的中文语言包
  ...vantZhCN,
  vanPagination: {
    ...vantZhCN.vanPagination,
    prev: '上一页',
    next: '下一页',
  },
  // 模块
  common,
  user,
}

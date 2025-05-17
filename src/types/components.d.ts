import SvgIcon from '@/components/SvgIcon.vue'
import TopNavBar from '@/components/TopNavBar.vue'

declare module '@vue/runtime-core' {
  // Global component declarations
  export interface GlobalComponents {
    SvgIcon: typeof SvgIcon
    TopNavBar: typeof TopNavBar
  }
}

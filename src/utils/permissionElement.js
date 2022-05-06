// import { useStore } from 'vuex'
import { useAppStore } from '@/store/app'
// const store = useStore()
const appStore = useAppStore()
console.log(store)
// 按钮权限对象
export function judgePermissionElementFn(name) {
  // const element = store?.getters?.element
  // // if (element.hasOwnProperty(name)) {
  // if (Object.hasOwnProperty.call(element, name)) {
  //   return true
  // } else {
  //   return false
  // }
  return true
}

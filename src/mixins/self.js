// import { useStore } from 'vuex'
import { useUserStore } from '@/store/user'
const mixin = {
  data() {
    return {}
  },
  created() {},
  methods: {
    judgePermissionElementFn(name) {
      // const store = useStore()
      const userStore = useUserStore()
      const element = userStore.element
      return element.filter(ele => {
        return ele.Code === name
      })
      // return true
      // if (element.hasOwnProperty(name)) {
      //   if (Object.hasOwnProperty.call(element, name)) {
      //     return true
      //   } else {
      //     return false
      //   }
      // }
    }
  }
}

export default mixin

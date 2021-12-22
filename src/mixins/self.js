import { useStore } from 'vuex'
const mixin = {
  data() {
    return {}
  },
  created() {
    
  },
  methods: {
    judgePermissionElementFn(name) {
      const store = useStore()
      const element = store.getters.element
      return true
      // if (element.hasOwnProperty(name)) {
      if (Object.hasOwnProperty.call(element, name)) {
        return true
      } else {
        return false
      }
    }
  }
}

export default mixin

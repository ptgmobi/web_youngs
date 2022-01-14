import { createStore } from 'vuex'
import getters from './getters'
import { ObjTy } from '@/types/common'
import createPersistedState from "vuex-persistedstate";
//auto import (perfect!!!)
const modulesFiles = import.meta.globEager('./modules/*.ts')
const modules: ObjTy = {}
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules[moduleName] = modulesFiles[path].default
}
//复杂的方式
// const modulesFiles = import.meta.globEager('./modules/*.js')
// console.log(Object.keys(modulesFiles));
// const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
//   // const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const moduleName = modulePath.replace(/(.*\/)*([^.]+).*/gi, '$2')
//   const value = modulesFiles[modulePath]
//   modules[moduleName] = value.default
//   return modules
// }, {})
// console.log(modules);
const dataState = createPersistedState({
  // 默认存储在localStorage 现改为sessionStorage
  storage: window.sessionStorage,
  // 本地存储数据的键名
  key: 'mine',
  // 指定需要存储的模块，如果是模块下具体的数据需要加上模块名称，如user.token
  // paths: ['user', 'cart']
})
export default createStore({
  plugins: [
    dataState
  ],
  modules,
  getters
})

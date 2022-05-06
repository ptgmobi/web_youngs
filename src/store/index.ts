import { defineStore } from 'pinia'
import getters from './getters'
import { ObjTy } from '@/types/common'
//auto import (perfect!!!)
const modulesFiles = import.meta.globEager('./modules/*.ts')
const modules: ObjTy = {}
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules[moduleName] = modulesFiles[path].default
}

export const useGettersStore = defineStore('app', {
  getters
})

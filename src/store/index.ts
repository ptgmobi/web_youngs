import { defineStore } from 'pinia'
import getters from './getters'

export const useStore = defineStore('main', {
  getters
})

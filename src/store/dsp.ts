import { defineStore } from 'pinia'

export const useDspStore = defineStore('dsp', {
  state: () => {
    return {
      topsearch: {},
      
    }
  },

  actions: {
    M_topsearch(topsearch: string) {
      this.$patch((state) => {
        console.log(topsearch)
        state.topsearch = topsearch
      })
    },
    setSearchData(data) {
      console.log(data)
      this.M_topsearch(data)
    }
  },
  getters: {
    getTopSearchData(state) {
      return state.topsearch
    }
  }
})

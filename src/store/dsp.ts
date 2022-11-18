import { defineStore } from 'pinia'

export const useDspStore = defineStore('dsp', {
  state: () => {
    let searchDataStr = localStorage.getItem('search')
    let searchData = {}
    if (searchDataStr) {
      searchData = JSON.parse(searchDataStr)
    }
    return {
      topsearch: searchData,
      
    }
  },

  actions: {
    M_topsearch(topsearch: string) {
      this.$patch((state) => {
        console.log(topsearch)
        state.topsearch = topsearch
        localStorage.setItem('search', JSON.stringify(topsearch))
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

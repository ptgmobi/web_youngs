<template>
  <div class="app-container">
    <searchC @emitParent="changeSearchData" />
    <cardC :json="searchData" />
    <chartC :json="searchData" />
    <tableC :json="searchData" />
  </div>
</template>

<script lang="ts" setup>
import searchC from './components/search'
import cardC from './components/card'
import chartC from './components/chart'
import dateC from './components/date'
import tableC from './components/table'
import { ref, reactive, computed } from 'vue'
let searchData = reactive({
  data: {
    channel_type: [],
    platform: [],
    channel: [],
    country: [],
    pkg: []
  }
})
let searchDate = reactive({
  data: {
    st: '',
    et: ''
  }
})
// let searchMode = computed(() => {
//   const result = {
//     ...searchData,
//     ...searchDate
//   }
//   return result
// })
const changeSearchData = (data) => {
  console.log(data)
  searchData.data = {
    ...data
  }
}
</script>

<style></style>

<template>
  <div class="app-container">
    <searchC @emitParent="changeSearchData" />
    <cardC :json="searchData" />
    <dateC @emitParent="changeSearchDate" />
    <chartC :json="searchMode" />
    <tableC :json="searchMode" />
  </div>
</template>

<script lang="ts" setup name="Overview">
import searchC from './components/search'
import cardC from './components/card'
import chartC from './components/chart'
import dateC from './components/date'
import tableC from './components/table'

let searchMode = reactive({
  data: {
    channel_type: [],
    platform: [],
    channel: [],
    country: [],
    pkg: [],
    st: '',
    et: ''
  }
})
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
  searchMode.data = {
    ...searchData.data,
    ...searchDate.data
  }
}
const changeSearchDate = (date) => {
  console.log(date)
  searchDate.data = {
    st: date[0],
    et: date[1]
  }
  searchMode.data = {
    ...searchData.data,
    ...searchDate.data
  }
}
</script>

<style></style>

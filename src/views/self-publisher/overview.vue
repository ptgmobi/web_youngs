<template>
  <div>
    <searchC @emitParent="changeSearchData" />
    <cardC :json="searchData.data" />
    <dateC @emitParent="changeSearchDate" />
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
import { reactive } from 'vue'
let baseSearchData: any = {
  date: []
}
let searchData = reactive({
  data: baseSearchData,
  date: []
})
const changeSearchData = (data) => {
  // console.log(data)
  searchData.data = {
    ...searchData.data,
    ...data
  }
}
const changeSearchDate = (date) => {
  // console.log(date)
  searchData.data.date = date
}
</script>

<style></style>

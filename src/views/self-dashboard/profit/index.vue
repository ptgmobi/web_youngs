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
import tableC from './components/table'
let searchData = reactive({
  data: {
    adtype: '',
    channel_type: '',
    user_name: '',
    slot: '',
    country: '',
    st: '',
    et: ''
  }
})
const changeSearchData = (data) => {
  console.log(data)
  searchData.data.adtype = data.adtype
  searchData.data.channel_type = data.channel_type
  searchData.data.user_name = data.user_name
  searchData.data.slot = data.slot
  searchData.data.country = data.country
  searchData.data.st = data.date[0]
  searchData.data.et = data.date[1]
}
</script>

<style></style>

<template>
  <div class="mt-20">
    <!-- table -->
    <el-table
      center
      :data="handleList"
      class="w100"
      border
    >
      <el-table-column
        prop="user_id"
        label="User ID"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="account_email"
        label="Account Email"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="user_name"
        label="User Name"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="profit"
        label="毛利"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="revenue"
        label="收入"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="cost"
        label="支出"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="profit_rate"
        label="毛利率"
        align="center"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { reactive, getCurrentInstance, computed, onMounted, watch, ref, toRaw } from 'vue'
import { getSectionTime, getSectionAnyTime, choiceDefaultProduct } from '@/utils/format'
import { getProfitTable } from '@/api/overview'
import { toFixedFn } from '@/utils/format'
import { handleAjaxDataDelNoKeyFn } from '@/utils/new-format'
const props = defineProps({
  json: {
    require: true,
    default: {},
    type: Object
  }
})
let state: any = reactive({
  data: props.json,
  list: [] 
})
watch(() => state.data, (newVal, oldVal) => {
  // console.log(newVal)
  console.warn('get table data')
  init()
}, {
  // ! 此处如果加上会多执行一次
  // immediate: true,
  deep: true
})
const init = async () => {
  let ajaxData = {
    ...state.data.data
  }
  ajaxData = handleAjaxDataDelNoKeyFn(ajaxData)
  state.list = []
  const { data:tableData } = await getProfitTable(ajaxData)
  state.list = tableData
}
let rateArr = ['profit_rate']
let handleList = computed(() => {
  let arr: Array<any> = []
  state.list.map(ele => {
    let obj = {}
    let object = {
      ...ele
    }
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key]
        if (key.includes('rate')) {
          obj[key] = `${toFixedFn(element * 100, 2)}%`
        } else {
          obj[key] = toFixedFn(element, 2)
        }
      }
    }
    arr.push(obj)
  })
  return arr
})
</script>

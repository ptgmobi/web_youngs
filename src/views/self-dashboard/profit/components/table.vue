<template>
  <div class="mt-20">
    <div class="flex jc-end mb-10">
      <WwExportExcel
        :button-name="state.exportExcel.buttonName"
        :list="handleList"
        :t-header="exportTHeader"
        :filter-val="exportTHeader"
        :filename="state.exportExcel.fileName"
      ></WwExportExcel>
    </div>
    <!-- table -->
    <el-table
      center
      :data="handleList"
      class="w100"
      border
    >
      <el-table-column
        v-for="item in headerTerm"
        :key="item.value"
        :prop="item.value"
        :label="item.label"
        :fixed="item?.fixed ?? false"
        align="center"
      />
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { reactive, getCurrentInstance, computed, onMounted, watch, ref, toRaw } from 'vue'
import { getSectionTime, getSectionAnyTime, choiceDefaultProduct } from '@/utils/format'
import { getProfitTable } from '@/api/overview'
import { toFixedFn } from '@/utils/format'
import { handleAjaxDataDelNoKeyFn } from '@/utils/new-format'
import WwExportExcel from '@/components/Self/Excel/Export/index.vue'
const props = defineProps({
  json: {
    require: true,
    default: {},
    type: Object
  }
})
let state: any = reactive({
  data: props.json,
  list: [],
  exportExcel: {
    buttonName: '导出',
    tHeader: ['日期'],
    filterVal: ['date'],
    fileName: 'profit'
  }
})
let headerTerm = reactive([
  {
    value: 'user_id',
    label: 'User ID'
  },
  {
    value: 'account_email',
    label: 'Account Email'
  },
  {
    value: 'user_name',
    label: 'User Name'
  },
  {
    value: 'profit',
    label: '毛利'
  },
  {
    value: 'revenue',
    label: '收入'
  },
  {
    value: 'cost',
    label: '支出'
  },
  {
    value: 'profit_rate',
    label: '毛利率'
  },
])
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
        if (rateArr.includes(key)) {
          obj[key] = `${toFixedFn(element * 100, 2)}%`
        } else {
          obj[key] = element
        }
      }
    }
    arr.push(obj)
  })
  return arr
})
const exportTHeader = computed(() => {
  let arr = handleList.value
  if (arr && Array.isArray(arr)) {
    let obj = arr[0] ?? {}
    return Object.keys(obj)
  }
})
// const exportFilterVal = computed(() => {
//   return Object.keys(handleList.value[0])
// })
</script>

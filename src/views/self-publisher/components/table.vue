<template>
  <div class="mt-20">
    <!-- table -->
    <el-table center :data="state.list" class="w100" max-height="89vh" border>
      <el-table-column fixed prop="date" label="日期" align="center"></el-table-column>
      <el-table-column fixed prop="type" label="广告主类型" align="center"></el-table-column>
      <el-table-column prop="channel" label="Channel" align="center"></el-table-column>
      <el-table-column prop="platform" label="平台" align="center"></el-table-column>
      <el-table-column prop="country" label="国家" align="center"></el-table-column>
      <el-table-column prop="pkg" label="Pkg" align="center"></el-table-column>
      <el-table-column prop="pid" label="转化数" align="center"></el-table-column>
      <el-table-column prop="pid" label="收入" align="center"></el-table-column>
      <el-table-column prop="pid" label="支出" align="center"></el-table-column>
      <el-table-column prop="pid" label="毛利" align="center"></el-table-column>
      <el-table-column prop="pid" label="毛利率" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { reactive, getCurrentInstance, computed, onMounted, watch, ref, toRaw } from 'vue'
import { getSectionTime, getSectionAnyTime, choiceDefaultProduct } from '@/utils/format'
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
  console.log('get table data')
  init()
}, {
  // ! 此处如果加上会多执行一次
  // immediate: true,
  deep: true
})
const init = () => {
  const ajaxData = {
    ...state.data.data
  }
  console.log(ajaxData)
}
</script>

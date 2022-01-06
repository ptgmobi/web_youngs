<template>
  <div>
    <el-table :data="state.tableData" style="width: 100%" border>
        <el-table-column fixed prop="date" label="Date" align="center" />
        <el-table-column fixed prop="record" label="Record" align="center" />
        <el-table-column fixed prop="email" label="User" align="center" />
      </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, toRefs, computed, reactive, watch, onMounted } from 'vue'
import { ApiGetOfferLog } from '@/api/fenix'
import { DataAnalysis } from '@element-plus/icons'
const props = defineProps({
  busData: {
    require: true,
    default: () => {
      return {}
    },
    type: Object
  }
})
interface tableData {

}
const defaultTableData: Array<tableData> = [
  {}
]
const state = reactive({
  tableData: defaultTableData
})
const init = async () => {
  const ajaxData = {
    offer_id: props.busData.offer.offer_id
  }
  state.tableData = []
  const { data } = await ApiGetOfferLog(ajaxData)
  state.tableData = data
}
watch(() => props.busData.offer.offer_id, (oldValue, newValue) => {
  init()
},
{
  immediate: true
});
onMounted(() => {
  // console.log(props.busData)
  // init()
})
</script>

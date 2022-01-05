<template>
  <div>
    <el-table :data="state.tableData" style="width: 100%" border>
        <el-table-column fixed prop="date" label="Date" align="center" />
        <el-table-column fixed prop="record" label="Record" align="center" />
        <el-table-column fixed prop="user" label="User" align="center" />
      </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, toRefs, computed, reactive, watch, onMounted } from 'vue'
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
onMounted(() => {
  console.log(props.busData)
})
</script>

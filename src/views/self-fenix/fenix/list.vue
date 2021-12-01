<template>
  <div>
    <div class="control-box flex jc-between">
      <el-button type="primary" @click="dialogTableVisible = true">Add New</el-button>
    </div>
    <Search
      v-model="dialogTableVisible"
      @emitParent="emitParent"
    />
    <div class="body-box mt-10">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="uid" label="UID" align="center" />
        <el-table-column prop="email" label="Email" align="center" />
        <el-table-column prop="username" label="User Name" align="center" />
        <el-table-column
          label="Operation"
          align="center"
        >
          <template #default="scope">
            <router-link :to="getEditUrl(scope)">
              <el-button class='cp mr-10' type="primary" icon="Edit" circle></el-button>
            </router-link>
            <!-- <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="2"
              class="mr-10"
            />
            <el-button type="danger" icon="Delete" circle></el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs, toRef, onMounted } from 'vue'
import Search from './search.vue'
import { ApiFenixFenixList } from '@/api/fenix'
interface tableDataType {
  id: number
  email: string
  user_name: string
  app_name: string
  slot_id: string
  slot_name: string
  pub_name: string
  postback_url: string
  comment: string
  api_url: string
  status: number
}
let dialogTableVisible = ref(false)
const tableDataDfault: Array<tableDataType> = []
const state = reactive({
  tableData: tableDataDfault
})
const { tableData } = toRefs(state)
const emitParent = (row: tableDataType) => {
  // state.tableData.push(row)
  dialogTableVisible.value = false
  init()
}
const getEditUrl = ({ row }: any) => {
  const id = row.uid
  return `/fenix/fenix/edit/${id}`
}
const init = async () => {
  const { data: listData } = await ApiFenixFenixList()
  state.tableData = listData
}
onMounted(() => {
  init()
})
</script>

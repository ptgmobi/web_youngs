<template>
  <div class="control-box flex jc-between">
    <el-button type="primary" @click="dialogTableVisible = true">Add New</el-button>
  </div>
  <Search
    v-model="dialogTableVisible"
    @emitParent="emitParent"
  />
  <div class="body-box mt-10">
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="id" label="ID" align="center" />
      <el-table-column prop="email" label="Email" align="center" />
      <el-table-column prop="user_name" label="User Name" align="center" />
      <el-table-column
        label="Operation"
        align="center"
      >
        <template #default="scope">
          <router-link :to="getEditUrl(scope)">
            <el-button class='cp mr-10' type="primary" icon="Edit" circle></el-button>
          </router-link>
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="2"
            class="mr-10"
          />
          <el-button type="danger" icon="Delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs, toRef } from 'vue'
import Search from './search.vue'
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
const tableDataDfault: Array<tableDataType> = [
  {
    id: 1
  }
]
const state = reactive({
  tableData: tableDataDfault
})
const { value: tableData } = toRef(state, 'tableData')
const emitParent = (row: tableDataType) => {
  tableData.push(row)
  dialogTableVisible.value = false
}
const getEditUrl = ({ row }: any) => {
  const id = row.id
  return `/fenix/fenix-edit/${id}`
}
</script>

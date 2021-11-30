<template>
  <h3>Manage Slot</h3>
  <div class="mt-10">
    <el-table :data="state.tableData" style="width: 100%" border>
      <el-table-column prop="app_id" label="App ID" align="center" />
      <el-table-column prop="app_name" label="App Name" align="center" />
      <el-table-column prop="uid" label="UID" align="center" />
      <el-table-column prop="slot_id" label="Slot ID" align="center" />
      <el-table-column prop="slot_name" label="Slot Name" align="center" />
      <el-table-column prop="pub_name" label="Pub Name" align="center">
        <template #default="scope">
          <el-input v-model="scope.row.pub_name" placeholder="Please input" />
        </template>
      </el-table-column>
      <el-table-column prop="postback_url" label="Postback URL" align="center">
        <template #default="scope">
          <el-input v-model="scope.row.postback_url" placeholder="Please input" />
        </template>
      </el-table-column>
      <el-table-column prop="comment" label="Comment" align="center">
        <template #default="scope">
          <el-input v-model="scope.row.comment" placeholder="Please input" />
        </template>
      </el-table-column>
      <el-table-column
        label="Operation"
        align="center"
        width="200px"
      >
        <template #default="scope">
          <div class="flex">
            <el-button class="cp" type="primary" @click="saveFn(scope)">Save</el-button>
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="2"
              class="ml-10 mr-10"
              @change="changeStatusFn(scope)"
            />
            <el-button type="danger" icon="Delete" circle @click="deleteFn(scope)"></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="user_name" label="Api URL" align="center">
        <template #default="scope">
          <el-button class="cp" type="primary" @click="copyFn(scope)">Copy</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRef, onMounted } from 'vue'
import * as clipboard from 'clipboard-polyfill/text'
import { ElMessage } from 'element-plus'
import { ApiFenixFenixDetails, ApiFenixFenixEdit, ApiFenixFenixDelete, ApiFenixFenixChangeStatus } from '@/api/fenix'
import {useRouter } from 'vue-router'
import { messageFun } from '@/utils/message'
const router = useRouter()
let name: any = ref('')
let id: any = ref('')
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
const tableDataDfault: Array<tableDataType> = []
const state = reactive({
  tableData: tableDataDfault
})
const copyFn = ({ row }: any) => {
  console.log(row)
  const { api_url: text } = row
  clipboard.writeText(text).then(() => {
      // success
      ElMessage({
        message: 'Copy Success !',
        type: 'success',
      })
    }, () => {
      // error
      ElMessage({
        message: 'Copy Error !',
        type: 'error',
      })
    }
  )
}
const changeStatusFn = async ({ row }: any) => {
  const ajaxData = {
    ...row
  }
  const res = await ApiFenixFenixChangeStatus(row.slot_id, ajaxData)
  messageFun(res)
}
const saveFn = async ({ row }: any) => {
  const ajaxData = {
    ...row
  }
  const res = await ApiFenixFenixEdit(ajaxData)
  messageFun(res)
}
const deleteFn = async ({ row }: any) => {
  const res = await ApiFenixFenixDelete(row.id)
  messageFun(res)
  init()
}
const init = async () => {
  const { data: dataList } = await ApiFenixFenixDetails(id.value)
  state.tableData = dataList
}
onMounted(() => {
  id.value = router.currentRoute.value.params.id
  name.value = router.currentRoute.value.name
  init()
})
</script>

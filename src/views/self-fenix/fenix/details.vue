<template>
  <h3>Manage Slot</h3>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="id" label="App Name" align="center" />
      <el-table-column prop="email" label="Slot ID" align="center" />
      <el-table-column prop="user_name" label="Slot Name" align="center" />
      <el-table-column prop="pub_ame" label="Pub Name" align="center">
        <template #default="scope">
          <el-input v-model="scope.row.pub_ame" placeholder="Please input" />
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
            <el-button class="cp mr-10" type="primary" icon="Edit" circle></el-button>
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="2"
              class="mr-10"
            />
            <el-button type="danger" icon="Delete" circle></el-button>
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
import {useRouter } from 'vue-router'
const router = useRouter()
let name: any = ref('')
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
const tableDataDfault: Array<tableDataType> = [
  {
    id: 22
  }
]
const state = reactive({
  tableData: tableDataDfault
})
const { value: tableData } = toRef(state, 'tableData')
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
onMounted(() => {
  name.value = router.currentRoute.value.name
  console.log(name.value)
})
</script>

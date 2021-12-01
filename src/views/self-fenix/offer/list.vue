<template>
  <div class="control-box">
      <router-link to="/fenix/offer/create">
        <el-button type="primary">Create</el-button>
      </router-link>
    </div>
  <div class="body-box mt-10">
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="id" label="ID" align="center" />
      <el-table-column prop="adv_offer" label="Adv Offer" align="center" />
      <el-table-column prop="channel" label="Channel" align="center" />
      <el-table-column prop="package_name" label="Package Name" align="center" />
      <el-table-column prop="offer_title" label="Offer Title" align="center" />
      <el-table-column prop="pid" label="Pid" align="center" />
      <el-table-column prop="platform" label="Platform" align="center" />
      <el-table-column prop="country" label="Country" align="center" />
      <el-table-column prop="revenue" label="Revenue" align="center" />
      <el-table-column prop="adv_status" label="Adv Status" align="center" />
      <el-table-column prop="click_w" label="Click*w" align="center" />
      <el-table-column prop="installs" label="Installs" align="center" />
      <el-table-column prop="cvr_w" label="Cvr*w" align="center" />
      <el-table-column
        label="Target Cvr*w"
        align="center"
        width="200px"
      >
        <template #default="scope">
          <el-input
            v-model="scope.row.target_cvr"
            placeholder="Please input"
            class="input-with-select"
          >
            <template #append>
              <el-button icon="Edit"></el-button>
            </template>
          </el-input>
        </template>
      </el-table-column>
      <el-table-column prop="traffic" label="Traffic" align="center" />
      <el-table-column prop="email" label="Email" align="center" />
      <el-table-column prop="user_name" label="User Name" align="center" />
      <el-table-column
        label="Operation"
        align="center"
        width="200px"
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
            @change="changeStatusFn(scope)"
          />
          <el-button type="danger" icon="Delete" circle></el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="Record"
        align="center"
      >
        <template #default="scope">
          <el-button icon="View" circle></el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="Comment"
        align="center"
        width="200px"
      >
        <template #default="scope">
          <el-input
            v-model="scope.row.comment"
            placeholder="Please input"
            class="input-with-select"
          >
            <template #append>
              <el-button icon="Edit"></el-button>
            </template>
          </el-input>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs, toRef } from 'vue'
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
  return `/fenix/offer/edit/${id}`
}
const changeStatusFn = ({ row }: any) => {
  console.log(row)
}
</script>

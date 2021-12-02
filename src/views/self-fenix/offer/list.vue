<template>
  <div>
    <div class='control-box w100 mb-10'>
      <div class="mb-10">
        <router-link to="/fenix/offer/create">
          <el-button type="primary">Create</el-button>
        </router-link>
      </div>
      <el-form :inline="true" v-model="searchData" class="flex jc-between w100 ai-end">
        <div class="flex jc-start flex-wrap w100">
          <el-form-item label="">
            <el-select v-model="searchData.attribute_provider" clearable class="search-con" placeholder="Attribute Provider" style="min-width: 140px;">
              <el-option
                v-for="item in state.options.attribute_provider"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="searchData.platform" clearable class="search-con" placeholder="Platform" style="min-width: 95px;">
              <el-option
                v-for="item in state.options.platform"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Package Name" v-model="searchData.package_name" class="search-con" style="min-width: 120px;" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Channel" v-model="searchData.channel" class="search-con" style="min-width: 80px;" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="ID" v-model="searchData.id" class="search-con" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Offer Title" v-model="searchData.offer_title" class="search-con" style="min-width: 90px;" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Country" v-model="searchData.country" class="search-con" style="min-width: 80px;" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Pid" v-model="searchData.pid" class="search-con" />
          </el-form-item>
        </div>
        <div class="flex">
          <el-form-item class="mr-0" style="margin-right: 0px;">
            <div class="flex">
              <el-button type="primary" @click="searchFn">查询</el-button>
              <!-- <el-button type="primary" @click="handleExportSearch">导出</el-button> -->
            </div>
          </el-form-item>
        </div>
      </el-form>
      <!-- <el-input placeholder="请输入内容" v-model="searchData.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> -->
    </div>
    <!-- table -->
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
const tableDataDefault: Array<tableDataType> = []
interface sarchDataType {
  
}
const sarchDataDefault: sarchDataType = {
  attribute_provider: [],
  platform: [],
  package_name: '',
  channel: '',
  id: '',
  offer_title: '',
  country: '',
  pid: ''
}
const state = reactive({
  searchData: sarchDataDefault,
  tableData: tableDataDefault,
  options: {}
})
const { value: tableData } = toRef(state, 'tableData')
const { searchData } = toRefs(state)
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
const searchFn = () => {

}
</script>

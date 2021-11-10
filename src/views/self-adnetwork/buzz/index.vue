<template>
  <div>
    <div class='controlBox w100 mb-10'>
      <div class="mb-10">
        <!-- <el-button type="primary" @click='createFun'>Offer Create</el-button> -->
        <router-link to="/adnetwork/buzz-create">
          <el-button type="primary">Offer Create</el-button>
        </router-link>
      </div>
      <el-form :inline="true" v-model="data.searchForm" class="flex jc-between w100 ai-end">
        <div class="flex jc-start flex-wrap w100">
          <el-form-item label="">
            <el-select v-model="data.searchForm.attribute_provider" clearable class="search-con" placeholder="Attribute Provider" style="min-width: 140px;">
              <el-option
                v-for="item in data.options.attribute_provider"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="data.searchForm.platform" clearable class="search-con" placeholder="Platform" style="min-width: 95px;">
              <el-option
                v-for="item in data.options.platform"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Package Name" v-model="data.searchForm.package_name" class="search-con" style="min-width: 120px;" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Channel" v-model="data.searchForm.channel" class="search-con" style="min-width: 80px;" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="ID" v-model="data.searchForm.id" class="search-con" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Offer Title" v-model="data.searchForm.offer_title" class="search-con" style="min-width: 90px;" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Country" v-model="data.searchForm.country" class="search-con" style="min-width: 80px;" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Pid" v-model="data.searchForm.pid" class="search-con" />
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
      <!-- <el-input placeholder="请输入内容" v-model="data.searchForm.data" class='search-input'>
        <el-button slot="append" icon="el-icon-search" @click='searchFun'></el-button>
      </el-input> -->
    </div>
    <!-- table -->
    <el-table
    center
    v-loading="data.loading"
    :data="data.list"
    style="width: 100%"
    border
    >
      <el-table-column
        prop="offer_id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="channel"
        label="Channel">
      </el-table-column>
      <el-table-column
        prop="pkg_name"
        label="Package Name">
      </el-table-column>
      <el-table-column
        prop="title"
        label="Offer Title"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="attribute_provider"
        label="Attribute Provider">
      </el-table-column>
      <el-table-column
        prop="pid"
        label="Pid">
      </el-table-column>
      <el-table-column
        prop="platform"
        label="Platform">
        <template #default="scope">
          {{ scope.row.platform === '1' ? 'Android' : 'iOS' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="country"
        label="Country">
      </el-table-column>
      <el-table-column
        prop="payout"
        label="Payout">
      </el-table-column>
      <el-table-column
        label="Click Limitation(w)"
        width="150"
      >
        <template #default="scope">
          <div class='flex jc-around'>
            <el-input v-model="scope.row.max_clk_num" placeholder=""></el-input>
            <el-button class='cp icon ml-10' type="primary" icon="el-icon-edit" circle @click='changeClk(scope.row)'></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="Device Cutoff"
        width="250"
      >
        <template #default="scope">
          <div class='flex jc-around'>
            <div>
              <div>
                <el-select class="cutoff" v-model="scope.row.cutoff_start" filterable placeholder="start">
                  <el-option
                    v-for="item in data.options.cutoff_start"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <span>-</span>
                <el-select class="cutoff" v-model="scope.row.cutoff_end" filterable placeholder="end">
                  <el-option
                    v-for="item in data.options.cutoff_end"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="flex mt-10">
                <span>{{ handleCutoff(scope.row) }}</span>
              </div>
            </div>
            <el-button class='cp icon ml-10' type="primary" icon="el-icon-edit" circle @click='changeCutoff(scope.row)'></el-button>
          </div>
          
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        label="Operation">
        <template #default="scope">
          <div class='flex jc-around'>
            <el-button class='cp icon mr-10' type="primary" icon="el-icon-edit" circle @click='editFun(scope.row)'></el-button>
            <el-switch
              v-model="scope.row.status"
              active-value="1"
              inactive-value="2"
              @change="changeStatus(scope.row)"
            />
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="w100 flex">
      <Pagination
        v-show="data.pagination.total"
        :total="data.pagination.total"
        :page-sizes="data.pagination.pageSizes"
        v-model:page="data.pagination.listQuery.page"
        v-model:limit="data.pagination.listQuery.limit"
        @pagination="init"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { getCurrentInstance, reactive, ref, shallowRef, onMounted, computed } from 'vue'
import { ApiGetBuzzList, ApichangeClk, ApichangeCutoff, ApiChangeStatus } from '@/api/buzz'
import { ElMessage } from 'element-plus'
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { number } from 'echarts'
let { proxy }: any = getCurrentInstance()
const searchData = shallowRef({
  attribute_provider: [],
  platform: [],
  package_name: '',
  channel: '',
  id: '',
  offer_title: '',
  country: '',
  pid: ''
})
const OptionsCutoffStart = () => {
  const arr = [...new Array(20)].map((ele, index) => {
    const val = (index * 5) / 100
    return {
      value: val.toFixed(2),
      label: `${(Number(val) * 100).toFixed(0)}%`
    }
  })
  return arr
}
const OptionsCutoffEnd = () => {
  const arr = [...new Array(20)].map((ele, index) => {
    const val = (index * 5 + 5) / 100
    return {
      value: val.toFixed(2),
      label: `${(Number(val) * 100).toFixed(0)}%`
    } 
  })
  return arr
}
let data = reactive({
  dialogVisible: false,
  cache: {
    item: {},
    device: {}
  },
  searchForm: searchData.value,
  useData: searchData.value,
  loading: true,
  options: {
    cutoff_start: OptionsCutoffStart(),
    cutoff_end: OptionsCutoffEnd(),
    attribute_provider: [
      {value: 'AppsFlyer', label: 'AppsFlyer'},
      {value: 'Branch', label: 'Branch'},
      {value: 'Adjust', label: 'Adjust'},
      {value: 'Singular', label: 'Singular'},
      {value: 'AppMetrica', label: 'AppMetrica'}
    ],
    platform: [
      {value: '1', label: 'Android'},
      {value: '2', label: 'iOS'}
    ],
  },
  list: [],
  pagination: {
    pageSizes: ['50', '100', '500', '1000'],
    total: 1,
    listQuery: {
      page: 1,
      limit: 50,
      importance: undefined,
      title: undefined,
      type: undefined,
      sort: '+id'
    }
  },
})

const searchFn = () => {
  data.useData = _.cloneDeep(data.searchForm)
  init()
}
const changeClk = async (row: any) => {
  let ajaxData = {
    id: row.id,
    max_clk_num: row.max_clk_num
  }
  let res = await ApichangeClk(ajaxData)
  console.log(res)
  messageFun(res)
}
const changeCutoff = async (row: any) => {
  console.log(row)
  // ! 此处验证，必须有值并且start < end
  const cutoff_start = row.cutoff_start
  const cutoff_end = row.cutoff_end
  const id = row.id
  if (cutoff_start < cutoff_end) {
    const ajaxData = {
      start: cutoff_start,
      end: cutoff_end,
      id
    }
    const res = await ApichangeCutoff(ajaxData)
    messageFun(res)
  } else {
    const msg = 'start必须小于end'
    ElMessage({
      message: msg,
      type: 'error',
      duration: 2 * 1000
    })
  }
}
const handleCutoff = (row: any) => {
  const num = row.cutoff_end - row.cutoff_start
  return num * row.device_num
}
const changeStatus = async (row: any) => {
  let ajaxData = {
    id: row.id,
    status: row.status
  }
  const res = await ApiChangeStatus(ajaxData)
  messageFun(res)
}
const editFun = (row: any) => {
  const id = row.id
  proxy.$router.push({ path: `/adnetwork/buzz-edit/${id}`, query: {
    type: 'edit'
  }})
}
const init = async () => {
  data.loading = true
  const ajaxData = {
    page: data.pagination.listQuery.page,
    page_size: data.pagination.listQuery.limit,
    attribute_provider: data.useData.attribute_provider,
    platform: data.useData.platform,
    pkg_name: data.useData.package_name,
    channel: data.useData.channel,
    offer_id: data.useData.id,
    title: data.useData.offer_title,
    country: data.useData.country,
    tracking_link: data.useData.pid

  }
  const res = await ApiGetBuzzList(ajaxData)
  const { data: result } = res
  data.list = result?.data
  data.pagination.total = Number(result.count)
  data.loading = false
}
onMounted(() => {
  searchFn()
})
</script>
<style lang="scss" scoped>
.cutoff{
  width: 80px;
}
</style>

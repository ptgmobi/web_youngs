<template>
  <div>
    <div class="controlBox w100 mb-10">
      <div class="mb-10">
        <!-- <el-button type="primary" @click='createFun'>Offer Create</el-button> -->
        <router-link to="/buzz/old-buzz/create">
          <el-button type="primary">Offer Create</el-button>
        </router-link>
      </div>
      <el-form :inline="true" v-model="data.searchForm" class="flex jc-between w100 ai-end">
        <div class="flex jc-start flex-wrap w100">
          <el-form-item label="">
            <el-select
              v-model="data.searchForm.attribute_provider"
              clearable
              class="search-con"
              placeholder="Attribute Provider"
              style="min-width: 140px"
            >
              <el-option
                v-for="item in data.options.attribute_provider"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select
              v-model="data.searchForm.platform"
              clearable
              class="search-con"
              placeholder="Platform"
              style="min-width: 95px"
            >
              <el-option
                v-for="item in data.options.platform"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-input
              placeholder="Package Name"
              v-model="data.searchForm.package_name"
              class="search-con"
              style="min-width: 120px"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input
              placeholder="Channel"
              v-model="data.searchForm.channel"
              class="search-con"
              style="min-width: 80px"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="ID" v-model="data.searchForm.id" class="search-con" />
          </el-form-item>
          <el-form-item label="">
            <el-input
              placeholder="Offer Title"
              v-model="data.searchForm.offer_title"
              class="search-con"
              style="min-width: 90px"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input
              placeholder="Country"
              v-model="data.searchForm.country"
              class="search-con"
              style="min-width: 80px"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Pid" v-model="data.searchForm.pid" class="search-con" />
          </el-form-item>
        </div>
        <div class="flex">
          <el-form-item class="mr-0" style="margin-right: 0px">
            <div class="flex">
              <el-button type="primary" @click="searchFn">查询</el-button>
              <!-- <el-button type="primary" @click="handleExportSearch">导出</el-button> -->
            </div>
          </el-form-item>
        </div>
      </el-form>
      <!-- <el-input placeholder="请输入内容" v-model="data.searchForm.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> -->
    </div>
    <!-- table -->
    <el-table center v-loading="data.loading" :data="data.list" class="w100" height="60vh" border>
      <el-table-column fixed prop="offer_id" label="Offer ID" align="center" width="70"></el-table-column>
      <el-table-column fixed prop="channel" label="Channel" align="center" width="70"></el-table-column>
      <el-table-column prop="pkg_name" label="Package Name" align="center"></el-table-column>
      <el-table-column prop="title" label="Offer Title" width="120" align="center"></el-table-column>
      <el-table-column prop="attribute_provider" label="Attribute Provider" align="center"></el-table-column>
      <el-table-column prop="pid" label="Pid" align="center" width="90"></el-table-column>
      <el-table-column prop="platform" label="Platform" align="center" width="70">
        <template #default="scope">
          {{ Number(scope.row.platform) === 1 ? 'Android' : 'iOS' }}
        </template>
      </el-table-column>
      <el-table-column prop="country" label="Country" align="center" width="70"></el-table-column>
      <el-table-column prop="payout" label="Payout" align="center" width="70"></el-table-column>
      <el-table-column label="Click Limitation(w)" width="150" align="center">
        <template #default="scope">
          <div class="flex jc-around">
            <el-input v-model="scope.row.max_clk_num" placeholder=""></el-input>
            <el-button class="cp ml-10 scale-button" type="primary" icon="Edit" circle @click="changeClk(scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Site Click Limitation" width="150" align="center">
        <template #default="scope">
          <div class='flex jc-around'>
            <el-input v-model="scope.row.site_clk_limit" placeholder=""></el-input>
            <el-button class="cp ml-10 scale-button" type="primary" icon="Edit" circle @click="changeSiteClkLimit(scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Select Device" width="120" align="center">
        <template #default="scope">
          <div class="flex jc-between">
            <span v-text='thousandSeparator(scope.row.device_count)'></span>
            <el-button class="cp ml-10 scale-button" type="primary" icon="Edit" circle @click="editDeviceFun(scope.$index, scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column width="100" label="Operation" align="center">
        <template #default="scope">
          <div class="flex jc-around">
            <router-link :to="getEditUrl(scope.row)">
              <el-button class="cp mr-10" type="primary" icon="Edit" circle></el-button>
            </router-link>
            <!-- <el-button class='cp mr-10' type="primary" icon="Edit" circle @click='editFun(scope.row)'></el-button> -->
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="2"
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
    <!-- device -->
    <el-dialog title="Device" v-model="data.dialogVisibleDevice">
      <Device v-model:all="bus.cacheDevice.all" v-model:select="bus.cacheDevice.select" v-if="data.dialogVisibleDevice" @kk="saveDevice"></Device>
      <span class="dialog-footer">
        <!-- <el-button @click="cancleDevice">取 消</el-button> -->
        <el-button type="primary" @click="setDevice">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { getCurrentInstance, reactive, ref, shallowRef, onMounted, computed } from 'vue'
import { ApiGetBuzzList, ApichangeClk, ApichangeSiteClkLimit, ApichangeCutoff, ApiChangeBuzzStatus, ApiGetOfferDevice, ApiChangeToOfferDevice } from '@/api/oldbuzz'
import { ElMessage } from 'element-plus'
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn } from '@/utils/new-format'
import { thousandSeparator } from '@/utils/format'
import Device from './device.vue'
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
      value: val,
      label: `${(Number(val) * 100).toFixed(0)}%`
    }
  })
  return arr
}
const OptionsCutoffEnd = () => {
  const arr = [...new Array(20)].map((ele, index) => {
    const val = (index * 5 + 5) / 100
    return {
      value: val,
      label: `${(Number(val) * 100).toFixed(0)}%`
    }
  })
  return arr
}
let bus: any = reactive({
  offer: {},
  index: null,
  cacheDevice: {}
})
let data = reactive({
  dialogVisible: false,
  dialogVisibleDevice: false,
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
      { value: 'AppsFlyer', label: 'AppsFlyer' },
      { value: 'Branch', label: 'Branch' },
      { value: 'Adjust', label: 'Adjust' },
      { value: 'Singular', label: 'Singular' },
      { value: 'AppMetrica', label: 'AppMetrica' }
    ],
    platform: [
      { value: '1', label: 'Android' },
      { value: '2', label: 'iOS' }
    ]
  },
  list: [],
  pagination: {
    pageSizes: ['20', '50', '100', '500', '1000'],
    total: 1,
    listQuery: {
      page: 1,
      limit: 20,
      importance: undefined,
      title: undefined,
      type: undefined,
      sort: '+id'
    }
  }
})

const searchFn = () => {
  data.useData = _.cloneDeep(data.searchForm)
  init()
}
const changeClk = async (row: any) => {
  let ajaxData = {
    id: row.id,
    max_clk_num: parseFloat(row.max_clk_num)
  }
  let res = await ApichangeClk(ajaxData)
  messageFun(res)
}
const changeSiteClkLimit = async (row: any) => {
  let ajaxData = {
    id: row.id,
    site_clk_limit: parseFloat(row.site_clk_limit)
  }
  let res = await ApichangeSiteClkLimit(ajaxData)
  messageFun(res)
}
const changeCutoff = async (row: any) => {
  console.log(row)
  // ! 此处验证，必须有值并且start < end
  const cutoff_start = row.cutoff_start
  const cutoff_end = row.cutoff_end
  const id = row.id
  if (cutoff_start < cutoff_end) {
    let ajaxData = {
      cutoff_start,
      cutoff_end,
      id
    }
    ajaxData = handleAjaxDataObjectFn(ajaxData)
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
  const count = num * row.device_num
  return count ? count.toFixed(0) : ''
}
const changeStatus = async (row: any) => {
  let ajaxData = {
    id: row.id,
    status: row.status
  }
  ajaxData = handleAjaxDataObjectFn(ajaxData)
  const res = await ApiChangeBuzzStatus(ajaxData)
  messageFun(res)
}
const editFun = (row: any) => {
  const id = row.id
  proxy.$router.push({
    path: `/old-buzz/edit/${id}`,
    query: {
      type: 'edit'
    }
  })
}
const getEditUrl = (row: any) => {
  const id = row.id
  return `/buzz/old-buzz/edit/${id}`
}
const init = async () => {
  data.loading = true
  let ajaxData: any = {
    page: data.pagination.listQuery.page,
    page_size: data.pagination.listQuery.limit
    // attribute_provider: data.useData.attribute_provider,
    // platform: data.useData.platform,
    // pkg_name: data.useData.package_name,
    // channel: data.useData.channel,
    // offer_id: data.useData.id,
    // title: data.useData.offer_title,
    // country: data.useData.country,
    // tracking_link: data.useData.pid
  }
  if (data.useData.attribute_provider) {
    ajaxData.attribute_provider = data.useData.attribute_provider
  }
  if (data.useData.platform) {
    ajaxData.platform = data.useData.platform
  }
  if (data.useData.package_name) {
    ajaxData.pkg_name = data.useData.package_name
  }
  if (data.useData.channel) {
    ajaxData.channel = data.useData.channel
  }
  if (data.useData.id) {
    ajaxData.offer_id = data.useData.id
  }
  if (data.useData.offer_title) {
    ajaxData.title = data.useData.offer_title
  }
  if (data.useData.country) {
    ajaxData.country = data.useData.country
  }
  if (data.useData.pid) {
    ajaxData.tracking_link = data.useData.pid
  }

  const res = await ApiGetBuzzList(ajaxData)
  const { data: result } = res
  const { page } = result
  data.list = result?.data
  data.pagination.total = Number(page.count)
  data.loading = false
}
const editDeviceFun = async (i, row) => {
  console.log('get device')
  data.dialogVisibleDevice = true
  bus.offer = row
  bus.index = i
  const ajaxData = {
    id: row.id,
    platform: row.platform,
    country: row.country 
  }
  const { data: deviceData } = await ApiGetOfferDevice(ajaxData)
  bus.cacheDevice.all = deviceData.all
  bus.cacheDevice.select = JSON.parse(row.device)
}
// 修改device数据
const saveDevice = (data) => {
  bus.cacheDevice.select = data
}
// 保存提交device数据
const setDevice = async () => {
  const ajaxData = {
    id: bus.offer.id,
    device: JSON.stringify(bus.cacheDevice.select)
  }
  const res = await ApiChangeToOfferDevice(ajaxData)
  messageFun(res)
  data.dialogVisibleDevice = false
}
onMounted(() => {
  searchFn()
})
</script>
<style lang="scss" scoped>
.cutoff {
  width: 80px;
}
</style>

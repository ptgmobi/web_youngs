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
      <el-table-column fixed prop="offer_id" label="Offer ID" align="center"></el-table-column>
      <el-table-column fixed prop="channel" label="Channel" align="center"></el-table-column>
      <el-table-column prop="pkg_name" label="Package Name" align="center"></el-table-column>
      <el-table-column prop="title" label="Offer Title" width="120" align="center"></el-table-column>
      <el-table-column prop="attribute_provider" label="Attribute Provider" align="center"></el-table-column>
      <el-table-column prop="pid" label="Pid" align="center"></el-table-column>
      <el-table-column prop="platform" label="Platform" align="center">
        <template #default="scope">
          {{ Number(scope.row.platform) === 1 ? 'Android' : 'iOS' }}
        </template>
      </el-table-column>
      <el-table-column prop="country" label="Country" align="center"></el-table-column>
      <el-table-column prop="payout" label="Payout" align="center"></el-table-column>
      <el-table-column label="Click Limitation(w)" width="150" align="center">
        <template #default="scope">
          <div class="flex jc-around">
            <el-input v-model="scope.row.max_clk_num" placeholder="" type="number"></el-input>
            <el-button class="cp ml-10" type="primary" icon="Edit" circle @click="changeClk(scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Site Click Limitation" width="150" align="center">
        <template #default="scope">
          <div class='flex jc-around'>
            <el-input v-model="scope.row.site_clk_limit" placeholder=""></el-input>
            <el-button class="cp ml-10" type="primary" icon="Edit" circle @click="changeSiteClkLimit(scope.row)"></el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Select Device" width="150" align="center">
        <template #default="scope">
          <div class="flex">
            <span v-text='scope.row.device_count'></span>
            <el-button class="cp ml-10" type="primary" icon="Edit" circle @click="editDeviceFun(scope.$index, scope.row)"></el-button>
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
      <Device :json="bus.cacheDevice" @kk="saveDevice"></Device>
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
import { ApiGetBuzzList, ApichangeClk, ApichangeSiteClkLimit, ApichangeCutoff, ApiChangeBuzzStatus } from '@/api/oldbuzz'
import { ElMessage } from 'element-plus'
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn } from '@/utils/new-format'
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
  }
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
const changeSiteClkLimit = async (row: any) => {
  let ajaxData = {
    id: row.id,
    site_clk_limit: row.site_clk_limit
  }
  let res = await ApichangeSiteClkLimit(ajaxData)
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
  data.list = result?.data
  data.pagination.total = Number(result.count)
  data.loading = false
}
const editDeviceFun = (i, row) => {
  console.log('get device')
  data.dialogVisibleDevice = true
  bus.offer = row
  bus.index = i
  const res = {"select":[{"id":"627909","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"by","slot_id":"37641287","device_count":"3092161"},{"id":"628270","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"bz","slot_id":"19760998","device_count":"894270"},{"id":"627595","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"cy","slot_id":"78317974","device_count":"5650213"},{"id":"627755","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"cz","slot_id":"35082647","device_count":"2579008"},{"id":"627664","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"dy","slot_id":"46634509","device_count":"17162151"},{"id":"628339","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"dz","slot_id":"33488006","device_count":"20869879"}],"all":[{"id":"627657","day":"2022-01-11","platform":"1","country":"RU","source":"adx","label":"aw","slot_id":"57351627","device_count":"3094129"},{"id":"628012","day":"2022-01-11","platform":"1","country":"RU","source":"direct","label":"ax","slot_id":"35653768","device_count":"2276277"},{"id":"627689","day":"2022-01-11","platform":"1","country":"RU","source":"direct","label":"ay","slot_id":"44225907","device_count":"1219696"},{"id":"627706","day":"2022-01-11","platform":"1","country":"RU","source":"direct","label":"az","slot_id":"33347536","device_count":"182883"},{"id":"627434","day":"2022-01-11","platform":"1","country":"RU","source":"direct","label":"bw","slot_id":"66660203","device_count":"3313520"},{"id":"628046","day":"2022-01-11","platform":"1","country":"RU","source":"direct","label":"cw","slot_id":"14372948","device_count":"2841368"},{"id":"627753","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"bx","slot_id":"59188090","device_count":"3168514"},{"id":"627909","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"by","slot_id":"37641287","device_count":"3092161"},{"id":"628270","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"bz","slot_id":"19760998","device_count":"894270"},{"id":"627732","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"cx","slot_id":"99431779","device_count":"4906792"},{"id":"627595","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"cy","slot_id":"78317974","device_count":"5650213"},{"id":"627755","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"cz","slot_id":"35082647","device_count":"2579008"},{"id":"628057","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"dw","slot_id":"66196474","device_count":"4170112"},{"id":"627426","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"dx","slot_id":"43347563","device_count":"7879852"},{"id":"627664","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"dy","slot_id":"46634509","device_count":"17162151"},{"id":"628339","day":"2022-01-11","platform":"1","country":"RU","source":"wm","label":"dz","slot_id":"33488006","device_count":"20869879"}]}
  bus.cacheDevice = res
  console.log(bus)
}
// 修改device数据
const saveDevice = (data) => {
  bus.cacheDevice.select = data
}
// 保存提交device数据
const setDevice = () => {
  const ajaxData = {
    id: bus.offer.id,
    device: bus.cacheDevice.select
  }
  console.log(ajaxData)
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

<template>
  <div>
    <div class="controlBox w100 mb-10 flex jc-between ai-start">
      <div class="mb-10">
        <el-button type="primary" @click='createFn'>Create AD Network</el-button>
      </div>
      <el-form
        v-model="data.searchForm"
        :inline="true"
        class="flex jc-between ai-end"
      >
        <div class="flex jc-start flex-wrap w100">
          <el-form-item label="" class="mr-0">
            <el-input
              v-model="data.searchForm.input"
              placeholder="Ad network name/Channel"
              class="input-with-select"
              style="width: 200px;"
            >
              <template #append>
                <el-button icon="Search" @click="searchFn" />
              </template>
            </el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <!-- table -->
    <el-table
      v-loading="data.loading"
      center
      :data="data.list"
      class="w100"
      border
    >
      <el-table-column
        fixed
        prop="name"
        label="Ad network name"
        align="center"
        width="120"
        sortable
      ></el-table-column>
      <el-table-column
        fixed
        prop="short_name"
        label="Channel"
        align="center"
        width="60"
        sortable
      ></el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        align="center"
        width="110"
        sortable
      >
        <template #default="scope">
          <div class="flex jc-around">
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="2"
              @change="changeStatus(scope.row, 'status')"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="pmt"
        label="Android-PMT"
        align="center"
        sortable
      >
        <template #default="scope">
          <div class="flex jc-around">
            <el-switch
              v-model="scope.row.pmt"
              :active-value="1"
              :inactive-value="2"
              @change="changeStatus(scope.row, 'pmt')"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="android_semi_pmt"
        label="Android Semi PMT"
        align="center"
        width="80"
        sortable
      >
        <template #default="scope">
          <div class="flex jc-around">
            <el-switch
              v-model="scope.row.android_semi_pmt"
              :active-value="1"
              :inactive-value="2"
              @change="changeStatus(scope.row, 'android_semi_pmt')"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="traffic_rate"
        label="Percentage"
        align="center"
        width="160"
        sortable
      >
        <template #default="scope">
          <span v-for="d in handleRateData(scope.row.traffic_rate)">
            <span>{{d[0]}}</span>
            <span>:&nbsp</span>
            <span>{{d[1]}}</span>
            &nbsp
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="pre_click_rate"
        label="Pre click"
        align="center"
        width="160"
        sortable
      >
        <template #default="scope">
          <span v-for="d in handleRateData(scope.row.pre_click_rate)">
            <span>{{d[0]}}</span>
            <span>:&nbsp</span>
            <span>{{d[1]}}</span>
            &nbsp
          </span>
        </template>
      </el-table-column>
      <el-table-column
        label="Operation"
        align="center"
      >
        <template #default="scope">
          <div class="flex jc-around">
            <!-- <router-link :to="getEditUrl(scope.row)">
              <el-button
                class="cp mr-10"
                type="primary"
                icon="Edit"
                circle
              ></el-button>
            </router-link> -->
            <el-button class='cp mr-10' type="primary" icon="Edit" circle @click='editFun(scope.row)'></el-button>
            
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="w100 flex">
      <Pagination
        v-show="data.pagination.total"
        v-model:page="data.pagination.listQuery.page"
        v-model:limit="data.pagination.listQuery.limit"
        :total="data.pagination.total"
        :page-sizes="data.pagination.pageSizes"
        @pagination="init"
      />
    </div>
    
  </div>
</template>
<script lang="ts" setup name="adNetwork">
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { getCurrentInstance, reactive, ref, shallowRef, onMounted, computed } from 'vue'
import { ApiGetAdnetworkList, ApiChangeAdnetworkStatus, ApiChangePmtStatus, ApiChangeAndroidPmtStatus} from '@/api/adnetwork'
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn, openNewUrl } from '@/utils/new-format'
import { thousandSeparator } from '@/utils/format'
let { proxy }: any = getCurrentInstance()
const searchData = shallowRef({
  input: ''
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
  cacheDevice: {},
  cacheDeviceCount: 0
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

const changeStatus = async (row: any, name) => {
  let res: any
  // ApiChangeAdnetworkStatus, ApiChangePmtStatus, ApiChangeAndroidPmtStatus
  if (name === 'status') {
    res = await ApiChangeAdnetworkStatus({
      id: row.id,
      [name]: row[name]
    })
  }
  if (name === 'pmt') {
    res = await ApiChangePmtStatus({
      id: row.id,
      [name]: row[name]
    })
  }
  if (name === 'android_semi_pmt') {
    res = await ApiChangeAndroidPmtStatus({
      id: row.id,
      [name]: row[name]
    })
  }
  messageFun(res)
}
const editFun = (row: any) => {
  let url = getEditUrl(row)
  openNewUrl(url)
  // proxy.$router.push({
  //   path: getEditUrl(row),
  //   query: {
  //     type: 'edit'
  //   }
  // })
}
const createFn = () => {
  let url = '/adnetwork/adnetworklist/create'
  openNewUrl(url)
}
const getEditUrl = (row: any) => {
  const id = row.id
  return `/adnetwork/adnetworklist/edit/${id}`
}
const init = async () => {
  data.loading = true
  let ajaxData: any = {
    page: data.pagination.listQuery.page,
    page_size: data.pagination.listQuery.limit
  }
  ajaxData = {
    ...ajaxData,
    ...data.useData
  }
  const res = await ApiGetAdnetworkList(ajaxData)
  const { data: result } = res
  data.list = result?.data
  data.pagination.total = Number(result.count)
  data.loading = false
}

const handleRateData = (str) => {
  let json = JSON.parse(str)
  return Object.entries(json)
}

onMounted(() => {
  console.log('onMounted')
  searchFn()
})
onActivated(() => {
  console.log('onActivated')
})
</script>
<style lang="scss" scoped>

</style>

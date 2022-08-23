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
              v-model="searchData.input"
              placeholder="Ad network name/Channel"
              class="input-with-select"
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
      height="70vh"
      border
    >
      <el-table-column
        fixed
        prop="offer_id"
        label="Ad network name"
        align="center"
        width="120"
      ></el-table-column>
      <el-table-column
        fixed
        prop="channel"
        label="Channel"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        prop="pkg_name"
        label="Status"
        align="center"
        width="110"
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
        prop="title"
        label="Android-PMT"
        align="center"
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
        prop="attribute_provider"
        label="Android Semi PMT"
        align="center"
        width="80"
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
        prop="pid"
        label="Percentage"
        align="center"
        width="90"
      ></el-table-column>
      <el-table-column
        prop="pid"
        label="Pre click"
        align="center"
        width="90"
      ></el-table-column>
      
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
import { ApiGetBuzzList, ApichangeClk, ApichangeSiteClkLimit, ApichangeCutoff, ApiChangeBuzzStatus, ApiGetOfferDevice, ApiChangeToOfferDevice } from '@/api/buzzsync'
import { ElMessage } from 'element-plus'
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
  let ajaxData = {
    id: row.id,
    name: row[name]
  }
  ajaxData = handleAjaxDataObjectFn(ajaxData)
  const res = await ApiChangeBuzzStatus(ajaxData)
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
  const res = await ApiGetBuzzList(ajaxData)
  const { data: result } = res
  const { page } = result
  data.list = result?.data
  data.pagination.total = Number(page.count)
  data.loading = false
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

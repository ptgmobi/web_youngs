<template>
  <div>
    <div class="controlBox w100 mb-10">
      <search
        @up="changeTopSearch"
        :arr="['adv','date']"
      />
      <el-form
        v-model="state.searchForm"
        :inline="true"
        class="flex jc-between w100 ai-end"
      >
        <div class="flex jc-start flex-wrap w100">
          <el-form-item label="">
            <el-select
              v-model="state.searchForm.status"
              filterable
              clearable
              placeholder="全部状态"
            >
              <el-option
                v-for="item in state.options.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select
              v-model="state.searchForm.adv_series_id"
              filterable
              clearable
              placeholder="广告系列"
            >
              <el-option
                v-for="item in state.options.adv_series"
                :key="item.id"
                :label="item.adv_series_name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="state.searchForm.value"
              placeholder="请输入"
              class="input-with-select"
            >
              <template #prepend>
                <el-select v-model="state.searchForm.value_type" placeholder="" class="search-input-select" 
              style="width: 120px;">
                  <el-option
                    v-for="item in state.options.value_type"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="">
            <el-checkbox
              v-model="state.searchForm.is_del"
              true-label=""
              false-label="1"
              label="包含已归档"
            />
          </el-form-item>
        </div>
        <div class="flex">
          <el-form-item
            class="mr-0"
            style="margin-right: 0px"
          >
            <div class="flex">
              <el-button
                type="primary"
                @click="searchFn"
              >
                查询
              </el-button>
              <!-- <el-button type="primary" @click="handleExportSearch">导出</el-button> -->
            </div>
          </el-form-item>
        </div>
      </el-form>
      <div class="mb-10 w100">
        <el-button type="primary" @click="createFn">新建广告组</el-button>
        <el-select
          class="ml-10"
          v-model="batch.data.mode"
          filterable
          placeholder="批量操作"
          @change="batchFn"
        >
          <el-option
            v-for="item in batch.options.mode"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <!-- table -->
    <el-table
      v-loading="state.loading"
      center
      :data="state.list"
      class="w100"
      border
    >
      <el-table-column sortable
        prop="id"
        label="广告组ID"
        align="center"
      ></el-table-column>
      <el-table-column sortable
        width="120"
        prop="adv_group_name"
        label="广告组名称"
        align="center"
      ></el-table-column>
      <el-table-column sortable
        prop="status"
        label="开关"
        align="center"
      >
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="2"
            @click="changeStatus(scope)"
          />
          <!-- <span>{{getOptionsValue(scope.row.status, state.options.status)}}</span> -->
        </template>
      </el-table-column>
      <el-table-column sortable
        prop="status"
        label="状态"
        align="center"
      >
        <template #default="scope">
          <span>{{getOptionsValue(scope.row.status, state.options.status)}}</span>
        </template>
      </el-table-column>
      <el-table-column sortable
        prop="ad"
        label="广告"
        align="center"
      >
        <template #default="scope">
          <!-- <span>{{scope.row.ad}}</span> -->
          <span class="color_primary cp" @click="goAdList(scope)">{{scope.row.ad ? scope.row.ad.length : 0}}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="200"
        label="操作"
        align="center"
      >
        <template #default="scope">
          <div class="flex jc-around">
            <el-button
              class="cp"
              type="primary"
              @click="editFn(scope)"
            >编辑</el-button>
            <el-button
              class="cp"
              type="primary"
            >复制</el-button>
            <!-- <el-button
              v-if="scope.row.is_del === 2"
              class="cp"
              type="default"
              @click="editFn(scope)"
            >查看</el-button> -->
            <el-button
              class="cp"
              type="danger"
              @click="deleteFn(scope)"
              :disabled="scope.row.is_del === 2"
            >归档</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column sortable
        width="120"
        prop="country"
        label="国家"
        align="center"
      >
        <template #default="scope">
          <span>{{scope.row.country}}</span>
        </template>
      </el-table-column>
      <el-table-column sortable
        width="120"
        prop="promotion_cycle"
        label="推广周期"
        align="center"
      >
        <template #default="scope">
          <!-- <span>{{getOptionsValue(scope.row.promotion_cycle, state.options.promotion_cycle)}}</span> -->
          <span>{{scope.row.promotion_cycle_st}}</span>
          -
          <span>{{scope.row.promotion_cycle_et}}</span>
        </template>
      </el-table-column>
      
      <el-table-column sortable
        width="120"
        prop="user"
        label="创建人"
        align="center"
      ></el-table-column>
      <el-table-column sortable
        width="160"
        prop="create_date"
        label="创建时间"
        align="center"
      ></el-table-column>
      <el-table-column sortable
        width="160"
        prop="update_date"
        label="更新时间"
        align="center"
      ></el-table-column>
      <el-table-column sortable
        width="160"
        prop="imp_number"
        label="展示数"
        align="center"
      ></el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="w100 flex">
      <Pagination
        v-show="state.pagination.total"
        v-model:page="state.pagination.listQuery.page"
        v-model:limit="state.pagination.listQuery.limit"
        :total="state.pagination.total"
        :page-sizes="state.pagination.pageSizes"
        @pagination="init"
      />
    </div>
    <!-- 复制 -->
    <el-dialog
      v-model="dialogVisibleReportApi"
      title="Report Api"
      width="90%"
    >
      <p>{{bus.report_api}}</p>
      <el-button
        class="cp mr-10"
        type="default"
        @click="copyFn(bus.report_api)"
      >复制</el-button>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup name="adserieslist">
import optionsSetting from '@/self-options-setting'
import Pagination from '@/components/Pagination/index.vue' // secondary package based on el-pagination
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn, handleAjaxEmptyKeyFn, handleAjaxDataDelNoKeyFn, getOptionsValue } from '@/utils/new-format'
import useUtils from '@/hooks/self/useUtils'
import { clipboardFn } from '@/utils/clipboard'
import { ApiGetAdGroupList, ApiChangeAdGroupStatus, ApiDeleteAdGroup, ApiGetAdxList, ApiGetAdSeriesList } from '@/api/dsp-adcontrol'
import { ApiGetAdvertiserList } from '@/api/dsp-advertiser'
import search from '@/components/Self/Search'
const handleSelectionArr = ref([{id: ''}])
const {
  status, 
  adv_type, 
  ind_cla,
  third_party,
  return_mode, 
} = optionsSetting

const { goNewUrl, getRouterData, getCommonCountryList, openAlert } = useUtils()
const searchData: any = reactive({
  adv_series_id: '',
  status: '',
  adv_series_type: '',
  marbet_target: '',
  is_del: '1',
  value_type: 'adv_group_name',
  value: ''
})

const dialogVisibleReportApi = ref(false)

const bus = reactive({
  report_api: ''
})

let state = reactive({
  dialogVisible: false,
  cache: {
    item: {}
  },
  searchForm: searchData,
  useData: searchData,
  loading: true,
  options: {
    status,
    // 广告类型
    adv_series_type: [
      {value: 1, label: '动态商品促销'},
      {value: 2, label: '固定链接推广'},
    ],
    // 营销目标
    marbet_target: [
      {value: 1, label: '再营销'},
      {value: 2, label: '拉新'},
    ],
    value_type: [
      {value: 'adv_group_name', label: '广告组名称'},
      {value: 'id', label: '广告组ID'},
      {value: 'descs', label: '描述'},
    ],
    // 推广周期
    promotion_cycle: [
      {value: 1, label: '从现在开始长期有效'},
      {value: 2, label: '限定周期'}
    ],
    country: [],
    advertiser: [],
    adv_series: [],
    adx: [],
  },
  list: [{ id: 1 }],
  pagination: {
    pageSizes: [20, 50, 100, 500, 1000],
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

let batch = reactive({
  data: {
    mode: '',
  },
  options: {
    mode: [
      {
        value: 1,
        label: '开启'
      },
      {
        value: 2,
        label: '暂停'
      },
      {
        value: 0,
        label: '归档'
      },
    ]
  }
})

const topSearchData = reactive({
  adv_id: '',
  st: '',
  et: ''
})

const copyFn = (text) => {
  clipboardFn(text)
}

const searchFn = () => {
  state.useData = _.cloneDeep(state.searchForm)
  init()
}

const changeTopSearch = (data) => {
  console.log(data)
  topSearchData.adv_id = data.adv
  if (data.date) {
    topSearchData.st = data.date[0]
    topSearchData.et = data.date[1]
  }
}

const changeStatus = async ({row}) => {
  let ajaxData = {
    id: row.id,
    status: row.status
  }
  let res = await ApiChangeAdGroupStatus(ajaxData)
  messageFun(res)
}

interface RestaurantItem {
  value: string
  link: string
}

const restaurants = ref<RestaurantItem[]>([])

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
}

const getQueryNameList = async (queryString: string) => {
  if (queryString) {
    let ajaxData = {
      name: queryString
    }
    // const res = await ApigetQueryNameList('test', ajaxData)
    return []
  } else {
    return []
  }
}

const querySearch = async (queryString: string, cb: any) => {
  // 实时获取备选框
  restaurants.value = await getQueryNameList(queryString)
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}

const createFilter = (queryString: string) => {
  return async (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const goAdList = ({row}: any) => {
  goNewUrl({
    url: `/adcontrol/ad/list`,
    query: {
      adseries: row.id,
      type: 'list'
    }
  })
}

const createFn = () => {
  // detailsType.value = 'create'
  // dialogVisibleEdit.value = true
  goNewUrl({
    url: '/adcontrol/adgroup/create',
    query: {
      type: 'create'
    }
  })
}

const copyTokenFn = (text) => {
  clipboardFn(text)
}

const editFn = ({row}: any) => {
  // detailsType.value = 'edit'
  // dialogVisibleEdit.value = true
  // state.cache = row
  const { id } = row
  goNewUrl({
    url: `/adcontrol/adgroup/edit/${id}`,
    query: {
      type: 'edit'
    }
  })
}

const deleteFun = (scope: any) => {
  return async () => {
    const {row, $index: index} = scope
    const res = await ApiDeleteAdGroup({
      id: row.id
    })
    if (messageFun(res)) {
      state.list.splice(index, 1)
    }
  }
}

const deleteFn = async(scope: any) => {
  openAlert({
    text: `确认归档${scope.row.name}？`,
    title: '归档操作',
    buttonText: '确认'
  }, deleteFun(scope))
}

const batchFn = async () => {
  let ids = handleSelectionArr.value.map(ele => {
    return ele.id
  })
  console.log(ids)
  // 当前操作方式
  let batchMode = batch.data.mode
  // 批量开启
  if (batchMode.toString() === '1') {
    
  }
  // 批量暂停
  if (batchMode.toString() === '2') {
    
  }
  // 批量归档
  if (batchMode.toString() === '0') {
    console.log('批量归档')
    // const res = await deleteFunction(ids)
    // if (messageFun(res)) {
    //   init()
    // }
  }
}

const init = async () => {
  state.loading = true
  let { query, params } = getRouterData()
  let { adseries } = query
  if (adseries) {
    searchData.adv_series_id = Number(adseries)
  }
  let ajaxData: any = {
    page: state.pagination.listQuery.page,
    limit: state.pagination.listQuery.limit,
    ...searchData,
    ...topSearchData
  }
  ajaxData[ajaxData.value_type] = ajaxData.value
  delete ajaxData.value_type
  delete ajaxData.value
  // ajaxData = handleAjaxEmptyKeyFn(ajaxData, ['status', 'adv_type'])
  ajaxData = handleAjaxDataDelNoKeyFn(ajaxData)
  const res = await ApiGetAdGroupList(ajaxData)
  if (res) {
    const { data: result } = res
    state.list = result?.data
    state.pagination.total = Number(result.count)
  }
  state.loading = false
}

const getConfig = () => {
  let ajaxData = {
    limit: 10000,
    page: 1
  }
  return Promise.all([getCommonCountryList(), ApiGetAdvertiserList(ajaxData), ApiGetAdSeriesList(ajaxData), ApiGetAdxList()]).then(data => {
    let countryData = data[0]
    let advertiserData = data[1]
    let advSeriesData = data[2]
    let adxData = data[3]
    state.options.country = countryData
    state.options.advertiser = advertiserData.data.data
    state.options.adv_series = advSeriesData.data.data
    state.options.adx = adxData.data.data
  })
}

onMounted(() => {
  getConfig()
  searchFn()
})

</script>
<style lang="scss" scoped>
.search-input-select{
  width: 80px;
}
.logo-img{
  width: 50px;
  height: 50px;
}
</style>

<template>
  <div>
    <div class="controlBox w100 mb-10">
      <div class="mb-10 w100">
        <!-- <el-button type="primary" @click='createFun'>Offer Create</el-button> -->
        <!-- <router-link to="/buzz/create"> -->
          <el-button type="primary" @click="createFn">
            新建广告主
          </el-button>
        <!-- </router-link> -->
      </div>
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
              v-model="state.searchForm.adv_type"
              filterable
              clearable
              placeholder="广告主类型"
            >
              <el-option
                v-for="item in state.options.adv_type"
                :key="item.value"
                :label="item.label"
                :value="item.value"
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
      <!-- <el-input placeholder="请输入内容" v-model="state.searchForm.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> -->
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
        prop="adv_id"
        label="广告主ID"
        align="center"
      ></el-table-column>
      <el-table-column sortable
        prop="logo"
        label="广告主Logo"
        align="center"
      >
        <template #default="scope">
          <img class="logo-img" :src="scope.row.logo" alt="">
        </template>
      </el-table-column>
      <el-table-column sortable
        width="120"
        prop="name"
        label="广告主名称"
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
        width="120"
        prop="adv_type"
        label="广告主类型"
        align="center"
      >
        <template #default="scope">
          <span>{{getOptionsValue(scope.row.adv_type, state.options.adv_type)}}</span>
        </template>
      </el-table-column>
      <el-table-column sortable
        width="120"
        prop="adv_address"
        label="广告主地址"
        align="center"
      ></el-table-column>
      <el-table-column sortable
        width="120"
        prop="spend_limit"
        label="日花费上限($)"
        align="center"
      ></el-table-column>
      <el-table-column sortable
        width="120"
        prop="flow_rate"
        label="强制流量占比(%)"
        align="center"
      ></el-table-column>
      <el-table-column sortable
        width="120"
        prop="ind_cla"
        label="广告主分类"
        align="center"
      >
        <template #default="scope">
          <span>{{getOptionsValue(scope.row.ind_cla, state.options.ind_cla)}}</span>
        </template>
      </el-table-column>
      <el-table-column sortable
        width="120"
        prop="create_email"
        label="创建人"
        align="center"
      ></el-table-column>
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
              v-if="scope.row.is_del === 2"
              class="cp"
              type="default"
              @click="editFn(scope)"
            >查看</el-button>
            <!-- <el-button
              class="cp"
              type="danger"
              @click="deleteFn(scope)"
              :disabled="scope.row.is_del === 2"
            >归档</el-button> -->
          </div>
        </template>
      </el-table-column>
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
    <!-- report api -->
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
<script lang="ts" setup name="demandlist">
import optionsSetting from '@/self-options-setting'
import Pagination from '@/components/Pagination/index.vue' // secondary package based on el-pagination
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn, handleAjaxEmptyKeyFn, handleAjaxDataDelNoKeyFn, getOptionsValue } from '@/utils/new-format'
import useUtils from '@/hooks/self/useUtils'
import { clipboardFn } from '@/utils/clipboard'
import { ApiGetAdvertiserList, ApiChangeAdvertiserStatus, ApiDeleteAdvertiser } from '@/api/dsp-advertiser'

const {
  status, 
  adv_type, 
  ind_cla,
  third_party,
  return_mode, 
} = optionsSetting

const { goNewUrl, openAlert } = useUtils()
const searchData = shallowRef({
  status: '',
  adv_type: '',
  value_type: 'name',
  value: '',
  is_del: '1'
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
  searchForm: searchData.value,
  useData: searchData.value,
  loading: true,
  options: {
    status,
    adv_type,
    ind_cla,
    third_party,
    return_mode,
    value_type: [
      {value: 'id', label: '广告主ID'},
      {value: 'name', label: '广告主名称'},
      {value: 'descs', label: '描述'},

    ]
  },
  list: [],
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

const copyFn = (text) => {
  clipboardFn(text)
}

const searchFn = () => {
  state.useData = _.cloneDeep(state.searchForm)
  init()
}

const changeStatus = async ({row}) => {
  let ajaxData = {
    id: row.id,
    status: row.status
  }
  let res = await ApiChangeAdvertiserStatus(ajaxData)
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

const createFn = () => {
  // detailsType.value = 'create'
  // dialogVisibleEdit.value = true
  goNewUrl({
    url: '/advertiser/create',
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
    url: `/advertiser/edit/${id}`,
    query: {
      type: 'edit'
    }
  })
}

const deleteFun = (scope: any) => {
  return async () => {
    const {row, $index: index} = scope
    const res = await ApiDeleteAdvertiser({
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

const openEndPointFn = (row: any) => {
  const { id } = row
  goNewUrl({
    url: `/advertiser/endpoint/${id}/list`
  })
}

const init = async () => {
  state.loading = true
  let ajaxData: any = {
    page: state.pagination.listQuery.page,
    limit: state.pagination.listQuery.limit,
    ...searchData.value
  }
  ajaxData[ajaxData.value_type] = ajaxData.value
  delete ajaxData.value_type
  delete ajaxData.value
  // ajaxData = handleAjaxEmptyKeyFn(ajaxData, ['status', 'adv_type'])
  ajaxData = handleAjaxDataDelNoKeyFn(ajaxData)
  const res = await ApiGetAdvertiserList(ajaxData)
  const { data: result } = res
  state.list = result?.data
  state.pagination.total = Number(result.count)
  state.loading = false
}

onMounted(() => {
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

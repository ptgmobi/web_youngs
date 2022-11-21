<template>
  <div>
    <div class="controlBox w100 mb-10">
      <search
        @up="changeTopSearch"
      />
      <el-form
        v-model="state.searchForm"
        :inline="true"
        class="flex jc-between w100 ai-end"
      >
        <div class="flex jc-start flex-wrap w100">
          <!-- 输入 -->
          <el-form-item label="">
            <el-input
              v-model="state.searchForm.value"
              placeholder="请输入媒体bundle"
              class="input-with-select"
            >
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
      <div class="mb-10 w100">
        <el-button type="primary" @click="createFn">添加媒体</el-button>
      </div>
    </div>
    <!-- table -->
    <el-table
      ref="multipleTableRef"
      v-loading="state.loading"
      center
      :data="state.list"
      class="w100"
      border
      @selection-change="handleSelectionChange"
    >
      <!-- 序列 -->
      <el-table-column sortable
        prop="id"
        label="序列"
        align="center"
      ></el-table-column>
      <!-- 媒体bundle -->
      <el-table-column sortable
        prop="bundle"
        label="媒体bundle"
        align="center"
      ></el-table-column>
      <!-- 操作 -->
      <el-table-column
        label="操作"
        align="center"
      >
        <template #default="scope">
          <div class="flex jc-around">
            <el-button
              class="cp"
              type="danger"
              @click="deleteFn(scope)"
              :disabled="scope.row.is_del === 2"
            >删除</el-button>
          </div>
        </template>
      </el-table-column>
      <!-- 创建人 -->
      <el-table-column sortable
        prop="create_email"
        label="创建人"
        align="center"
      ></el-table-column>
      <!-- 创建时间 -->
      <el-table-column sortable
        prop="create_time"
        label="创建时间"
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
      v-model="dialogVisible"
      title="添加公共媒体黑名单"
      width="90%"
    >
      <el-form
        v-model="state.searchForm"
        :inline="true"
        class="flex w100"
      >
        <el-input
          v-model="state.ruleForm.bundle"
          class="form-one"
          placeholder="请输入bundle，多个媒体bundle请换行，一行一个bundle，最多支持1000行。"
          :rows="8"
          type="textarea"
        >
        </el-input>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="saveFn()">
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup name="adserieslist">
import optionsSetting from '@/self-options-setting'
import mysetting from '../setting'
import Pagination from '@/components/Pagination/index.vue' // secondary package based on el-pagination
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn, handleAjaxEmptyKeyFn, handleAjaxDataDelNoKeyFn, getOptionsValue } from '@/utils/new-format'
import useUtils from '@/hooks/self/useUtils'
import { clipboardFn } from '@/utils/clipboard'
import { ApiGetMediaPublicList, ApiDeleteMediaPublic, ApiMediaPublicCreate } from '@/api/dsp-media'
import { ElTable } from 'element-plus'
import search from '@/components/Self/Search'

const multipleTableRef = ref<InstanceType<typeof ElTable>>()

const handleSelectionArr = ref([{id: ''}])

let detailsType = ref('')
let dialogVisible = ref(false)

const {
  status,
} = optionsSetting

const {
  adv_type,
  audience_manage_type,
  build_status,
  audit_status
} = mysetting

const { goNewUrl, openAlert } = useUtils()

const searchData = shallowRef({
  status: '',
  type: '',
  build_status: '',
  is_del: '1',
  value_type: 'bundle',
  value: ''
})

const topSearchData = reactive({
  adv_id: '',
  st: '',
  et: ''
})


const bus = reactive({
  report_api: ''
})

let state = reactive({
  dialogVisible: false,
  ruleForm: {
    bundle: ''
  },
  cache: {
    item: {}
  },
  searchForm: searchData.value,
  useData: searchData.value,
  loading: true,
  options: {
    adv_type,
    audience_manage_type,
    build_status,
    country: [],
    value_type: [
      {value: 'id', label: '媒体列表名称'},
      {value: 'name', label: '媒体列表id'},
      {value: 'descs', label: '创建人'},
    ]
  },
  list: [
    { id: 1 }
  ],
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

// 批量操作
const handleSelectionChange = ((val: any) => {
  handleSelectionArr.value = val
})

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
    const res = await deleteFunction(ids)
    if (messageFun(res)) {
      init()
    }
  }
}

const saveFn = async () => {
  // 保存
  const ajaxData = {
    ...state.ruleForm
  }
  const res = await ApiMediaPublicCreate(ajaxData)
  if (messageFun(res)) {
    searchFn()
  }
  dialogVisible.value = false
}


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
  detailsType.value = 'create'
  dialogVisible.value = true
  state.ruleForm.bundle = ''
  // goNewUrl({
  //   url: '/media/public/create',
  //   query: {
  //     type: 'create'
  //   }
  // })
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
    url: `/media/public/edit/${id}`,
    query: {
      type: 'edit',
      campaign_type: row.type
    }
  })
}

const deleteFunction = async (ids) => {
  const res = await ApiDeleteMediaPublic({
    ids,
    is_del: 2
  })
  return res
}

const deleteFun = (scope: any) => {
  return async () => {
    const {row, $index: index} = scope
    const res = await deleteFunction([row.id])
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

const changeTopSearch = (data) => {
  console.log(data)
  topSearchData.adv_id = data.adv
  if (data.date) {
    topSearchData.st = data.date[0]
    topSearchData.et = data.date[1]
  }
}

const init = async () => {
  state.loading = true
  let ajaxData: any = {
    page: state.pagination.listQuery.page,
    limit: state.pagination.listQuery.limit,
    ...searchData.value,
    ...topSearchData
  }
  ajaxData[ajaxData.value_type] = ajaxData.value
  delete ajaxData.value_type
  delete ajaxData.value
  // ajaxData = handleAjaxEmptyKeyFn(ajaxData, ['status', 'adv_type'])
  ajaxData = handleAjaxDataDelNoKeyFn(ajaxData)
  const res = await ApiGetMediaPublicList(ajaxData)
  if (res) {
    const { data: result } = res
    state.list = result?.data
    state.pagination.total = Number(result.count)
  }
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

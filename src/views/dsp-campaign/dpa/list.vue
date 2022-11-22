<template>
  <div>
    <div class="controlBox w100 mb-10">
      <el-form
        v-model="state.searchForm"
        :inline="true"
        class="flex jc-between w100 ai-end"
      >
        <div class="flex jc-start flex-wrap w100">
          
          <!-- 选择适用商品 -->
          <el-form-item label="">
            <el-select
              v-model="state.searchForm.dsp_category_id"
              filterable
              clearable
              placeholder="选择适用商品"
            >
              <el-option
                v-for="item in state.options.category"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 选择创意目标 -->
          <el-form-item label="">
            <el-select
              v-model="state.searchForm.creative_goals"
              filterable
              clearable
              placeholder="选择创意目标"
            >
              <el-option
                v-for="item in state.options.creative_goals"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 所有审核状态 -->
          <el-form-item label="">
            <el-select
              v-model="state.searchForm.audit_status"
              filterable
              clearable
              placeholder="选择创意目标"
            >
              <el-option
                v-for="item in state.options.audit_status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- 输入 -->
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
      <!-- <el-input placeholder="请输入内容" v-model="state.searchForm.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> -->
      <div class="mb-10 w100">
        <el-button type="primary" @click="createFn">新建DPA模板</el-button>
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
      <!-- 模板ID -->
      <el-table-column sortable
        prop="id"
        label="模板ID"
        align="center"
      ></el-table-column>
      <!-- 模板名称 -->
      <el-table-column sortable
        width="120"
        prop="name"
        label="模板名称"
        align="center"
      ></el-table-column>
      <!-- 缩略图 -->
      <el-table-column
        width="120"
        prop="url"
        label="缩略图"
        align="center"
      >
        <template #default="scope">
          <div class="pr">
            <img
              class="logo-img cp"
              :z-index="9999"
              style="width: 100px; height: auto"
              :src="getDpaTplDataFn(scope)"
              :preview-src-list="[getDpaTplDataFn(scope)]"
              :initial-index="4"
              fit="cover"
              @click="toBus(scope.row.url)"
            />
          </div>
        </template>
      </el-table-column>
      <!-- 操作 -->
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
      <!-- 开关 -->
      <!-- <el-table-column sortable
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
        </template>
      </el-table-column> -->
      <!-- 审核状态 -->
      <el-table-column sortable
        prop="audit_status"
        label="审核状态"
        align="center"
      >
        <template #default="scope">
          <span>{{getOptionsValue(scope.row.audit_status, state.options.audit_status)}}</span>
        </template>
      </el-table-column>
      <!-- Feeds个数 -->
      <el-table-column sortable
        width="120"
        prop="feeds_num"
        label="Feeds个数"
        align="center"
      >
      </el-table-column>
      <!-- 适配尺寸 -->
      <el-table-column sortable
        width="120"
        prop="size"
        label="适配尺寸"
        align="center"
      >
        <template #default="scope">
          <span>{{getOptionsValue(scope.row.size, state.options.size)}}</span>
        </template>
      </el-table-column>
      <!-- 适用商品 -->
      <el-table-column sortable
        width="120"
        prop="dsp_category_id"
        label="适用商品"
        align="center"
      >
        <template #default="scope">
          <span>{{getOptionsValue(scope.row.dsp_category_id, state.options.category)}}</span>
        </template>
      </el-table-column>
      <!-- 创意目标 -->
      <el-table-column sortable
        width="120"
        prop="creative_goals"
        label="创意目标"
        align="center"
      >
        <template #default="scope">
          <span>{{getOptionsValue(scope.row.creative_goals, state.options.creative_goals)}}</span>
        </template>
      </el-table-column>
      
      <!-- 创建人 -->
      <el-table-column sortable
        width="120"
        prop="create_email"
        label="创建人"
        align="center"
      ></el-table-column>

      <!-- 创建时间 -->
      <el-table-column sortable
        width="160"
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
    <!-- 预览 -->
    <el-dialog
      v-model="dialogVisible"
      title="图片预览"
      width="50%"
    >
      <div class="img-box">
        <img :src="bus.preview_img" alt="">
      </div>
    </el-dialog>
    
  </div>
</template>
<script lang="ts" setup name="adserieslist">
import optionsSetting from '@/self-options-setting'
import selfSetting from './setting'
import Pagination from '@/components/Pagination/index.vue' // secondary package based on el-pagination
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn, handleAjaxEmptyKeyFn, handleAjaxDataDelNoKeyFn, getOptionsValue } from '@/utils/new-format'
import useUtils from '@/hooks/self/useUtils'
import { clipboardFn } from '@/utils/clipboard'
import {ApiGetCommonCategoryList, ApiGetCommonTemplateSizeList} from '@/api/dsp-common'
import { ApiGetCampaignDpaList, ApiChangeCampaignDpaStatus, ApiDeleteCampaignDpa, ApiGetDpaTplList } from '@/api/dsp-campaign'
import { ElTable } from 'element-plus'

const multipleTableRef = ref<InstanceType<typeof ElTable>>()

const handleSelectionArr = ref([{id: ''}])

const {
  status,
} = optionsSetting

const {
  audit_status,
  feeds_num,
  creative_goals,
} = selfSetting

const { goNewUrl, openAlert } = useUtils()

const searchData = shallowRef({
  status: '',
  // 适用商品
  dsp_category_id: '',
  // 创意目标：1：节日，2：常规，3：促销
  creative_goals: '',
  // 审核状态
  audit_status: '',
  is_del: '1',
  value_type: 'name',
  value: ''
})

const topSearchData = ref({})

const dialogVisible = ref(false)

const bus = reactive({
  preview_img: ''
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
    audit_status,
    size: [],
    feeds_num,
    category: [],
    creative_goals,
    dpa_tpl: [],
    value_type: [
      {value: 'name', label: '模板名称'},
      {value: 'id', label: '模板ID'},
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
  let res = await ApiChangeCampaignDpaStatus(ajaxData)
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
    url: '/campaign/dpa/create',
    query: {
      type: 'create'
    }
  })
}

const copyTokenFn = (text) => {
  clipboardFn(text)
}

const toBus = (url) => {
  bus.preview_img = url
  dialogVisible.value = true
}

const editFn = ({row}: any) => {
  // detailsType.value = 'edit'
  // dialogVisibleEdit.value = true
  // state.cache = row
  const { id } = row
  goNewUrl({
    url: `/campaign/dpa/edit/${id}`,
    query: {
      type: 'edit',
      campaign_type: row.type
    }
  })
}

const deleteFunction = async (ids) => {
  const res = await ApiDeleteCampaignDpa({
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
  topSearchData.value = {
    adv_id: data.adv,
    st: data.date[0],
    et: data.date[1]
  }
}

const getConfig = async () => {
  const ajaxData = {
    limit: 10000,
    page: 1
  }
  Promise.all([
    ApiGetDpaTplList(),
    ApiGetCommonCategoryList(),
    ApiGetCommonTemplateSizeList()
  ]).then(data => {
    // dpatpllist
    let dpa_tpl = data[0].data.data
    state.options.dpa_tpl = dpa_tpl.map(ele => {
      ele.value = ele.id
      ele.label = `${ele.format}_${ele.tpl_type}`
      ele.url = `https://staticdn.cloudmobi.net/dpa/demo/${ele.format}_${ele.tpl_type}_bg.png`
      return ele
    })
    // Category
    let category = data[1].data
    state.options.category = category.map(ele => {
      ele.value = ele.id
      ele.label = `${ele.cn}-${ele.en}`
      return ele
    })
    // size
    let size = data[2].data
    state.options.size = size.map(ele => {
      ele.value = ele.size
      ele.label = ele.size
      return ele
    })
  })
}

const getDpaTplDataFn =(scope) => {
  let obj: any = state.options.dpa_tpl.find((ele: any) => {
    console.log(ele)
    return ele.id == scope.row.follow_template_id
  })
  if (obj) {
    scope.row.url = obj.url
    return obj.url
  } else {
    return ''
  }
}

const init = async () => {
  await getConfig()
  state.loading = true
  let ajaxData: any = {
    page: state.pagination.listQuery.page,
    limit: state.pagination.listQuery.limit,
    ...searchData.value,
    ...topSearchData.value
  }
  ajaxData[ajaxData.value_type] = ajaxData.value
  delete ajaxData.value_type
  delete ajaxData.value
  // ajaxData = handleAjaxEmptyKeyFn(ajaxData, ['status', 'adv_type'])
  ajaxData = handleAjaxDataDelNoKeyFn(ajaxData)
  const res = await ApiGetCampaignDpaList(ajaxData)
  if (res) {
    const { data: result } = res
    state.list = result?.data
    state.pagination.total = Number(result.count)
  }
  state.loading = false
}

onBeforeMount(() => {
  
})

onMounted(() => {
  searchFn()
})

</script>
<style lang="scss" scoped>
.search-input-select{
  width: 80px;
}
</style>

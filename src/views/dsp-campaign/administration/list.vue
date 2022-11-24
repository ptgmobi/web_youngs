<template>
  <div>
    <div class="controlBox w100 mb-10">
      <el-form
        v-model="state.searchForm"
        :inline="true"
        class="flex jc-between w100 ai-end"
      >
        <div class="flex jc-start flex-wrap w100">
          <!-- <el-form-item label="">
            <el-select
              v-model="state.searchForm.status"
              filterable
              clearable
              placeholder="所有状态"
            >
              <el-option
                v-for="item in state.options.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item> -->
          <!-- 所有样式 -->
          <el-form-item label="">
            <el-select
              v-model="state.searchForm.type"
              filterable
              clearable
              placeholder="所有样式"
            >
              <el-option
                v-for="item in state.options.type"
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
              placeholder="所有审核状态"
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
      <div class="mb-10 w100" v-if="handlePageType === 'list'">
        <el-button type="primary" @click="createFn">新建创意</el-button>
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
      :highlight-current-row="choiceType === 1 ? true : false"
      @selection-change="handleSelectionChange"
      @current-change="handleCurrentChange"

    >
      <el-table-column v-if="choiceType === 2" align="center" type="selection" width="55" />
      <!-- ID -->
      <el-table-column sortable
        prop="id"
        label="ID"
        align="center"
      ></el-table-column>
      <!-- 名称 -->
      <el-table-column sortable
        width="120"
        prop="name"
        label="名称"
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
          <div>
            <el-image
              :z-index="9999"
              style="width: 100px; height: auto"
              :src="handleSrc(scope)"
              :preview-src-list="handlePreviewSrcList(scope)"
              :initial-index="4"
              fit="cover"
              :preview-teleported="true"
              @click="toBus(scope.row.url)"
            />
            <!-- <el-image
              v-if="scope.row.type !== 2"
              :z-index="9999"
              style="width: 100px; height: auto"
              :src="scope.row.url"
              :preview-src-list="[scope.row.url]"
              :initial-index="4"
              fit="cover"
              :preview-teleported="true"
              @click="toBus(scope.row.url)"
            />
            <el-image
              v-if="scope.row.type === 2"
              :z-index="9999"
              style="width: 100px; height: auto"
              :src="scope.row.cover_url"
              :preview-src-list="[scope.row.cover_url]"
              :initial-index="4"
              fit="cover"
              :preview-teleported="true"
              @click="toBus(scope.row.cover_url)"
            /> -->
          </div>
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column
        v-if="handlePageType === 'list'"
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
      <!-- 样式 -->
      <el-table-column sortable
        prop="type"
        label="样式"
        align="center"
      >
        <template #default="scope">
          <span>{{getOptionsValue(scope.row.type, state.options.type)}}</span>
        </template>
      </el-table-column>
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
      <!-- 尺寸 -->
      <el-table-column sortable
        width="120"
        prop="size"
        label="尺寸"
        align="center"
      >
      </el-table-column>
      <!-- 格式 -->
      <el-table-column sortable
        width="120"
        prop="format"
        label="格式"
        align="center"
      >
      </el-table-column>
      <!-- 大小 -->
      <el-table-column sortable
        width="120"
        prop="memory_size"
        label="大小"
        align="center"
      >
      </el-table-column>
      <!-- 时长 -->
      <el-table-column sortable
        width="120"
        prop="duration"
        label="时长"
        align="center"
      >
      </el-table-column>
      <!-- 关联广告 -->
      <el-table-column sortable
        v-if="handlePageType === 'list'"
        width="120"
        prop="ads"
        label="关联广告"
        align="center"
      >
        <template #default="scope">
          <span></span>
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
        prop="create_date"
        label="创建时间"
        align="center"
      ></el-table-column>
      <!-- 更新时间 -->
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
import mysetting from '../setting'
import Pagination from '@/components/Pagination/index.vue' // secondary package based on el-pagination
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn, handleAjaxEmptyKeyFn, handleAjaxDataDelNoKeyFn, getOptionsValue } from '@/utils/new-format'
import useUtils from '@/hooks/self/useUtils'
import { clipboardFn } from '@/utils/clipboard'
import { ApiGetCampaignList, ApiChangeCampaignStatus, ApiDeleteCampaign } from '@/api/dsp-campaign'
import { ElTable } from 'element-plus'

const props = defineProps({
  pagaType: {
    require: false,
    default() {
      return 'list'
    },
    type: String
  },
  choiceList: {
    require: false,
    default() {
      return []
    },
    type: Array
  },
  choiceType: {
    require: false,
    default() {
      return 2
    },
    type: Number
  }
})

console.log(props.choiceList, props.choiceType)

const multipleTableRef = ref<InstanceType<typeof ElTable>>()

const multipleSelection = ref([])

const emit = defineEmits(['updateList', 'updateOne'])

const {
  status, 
  adv_type, 
  ind_cla,
  third_party,
  return_mode, 
} = optionsSetting

const {
  type,
  audit_status
} = mysetting

const { goNewUrl, openAlert } = useUtils()

const searchData = shallowRef({
  status: '',
  type: '',
  audit_status: '',
  is_del: '',
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
    type,
    audit_status,
    value_type: [
      {value: 'name', label: '名称'},
      {value: 'id', label: 'ID'},
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

// 是创建页面还是修改页面，创建的话是多选，修改的话是单选
const choiceType = computed(() => {
  return props.choiceType
})

const batchFn = async () => {
  let ids = multipleSelection.value.map(ele => {
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

const handlePageType = computed(() => {
  return props.pagaType
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
  let res = await ApiChangeCampaignStatus(ajaxData)
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
    url: '/campaign/administration/create',
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
    url: `/campaign/administration/edit/${id}`,
    query: {
      type: 'edit',
      campaign_type: row.type
    }
  })
}

const deleteFunction = async (ids) => {
  const res = await ApiDeleteCampaign({
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

const handleSrc = ({row}) => {
  if (row.type === 2) {
    return row.cover_url
  } else {
    return row.url
  }
}

const handlePreviewSrcList = ({row}) => {
  if (row.type === 1) {
    return [row.url]
  }
  if (row.type === 2) {
    return [row.cover_url, row.logo_url]
  }
  if (row.type === 3) {
    return [row.url, row.logo_url]
  }
}

// 批量选择
const handleSelectionChange = (val: any) => {
  console.log(val)
  multipleSelection.value = val
  emit('updateList', val)
}

// 单选选择
const handleCurrentChange = (val: any) => {
  console.log(val)
  emit('updateOne', val)
}

const setCurrent = (row?: any) => {
  multipleTableRef.value!.setCurrentRow(row)
}

const toggleSelection = (rows?: any) => {
  console.log(rows)
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}

const toBus = (url) => {
  bus.preview_img = url
  // dialogVisible.value = true
}

const init = async () => {
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
  const res = await ApiGetCampaignList(ajaxData)
  if (res) {
    const { data: result } = res
    state.list = result?.data
    // let choice = props.choiceList
    // let choiceArr: any = []
    // state.list.map((ele: any) => {
    //   if (choice.includes(ele.id)) {
    //     choiceArr.push(ele)
    //   }
    // })
    // setTimeout(() => {
    //   toggleSelection(choiceArr)
    // }, 500);
    
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

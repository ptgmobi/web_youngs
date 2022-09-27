<template>
  <div>
    <div class="controlBox w100 mb-10">
      <div class="mb-10">
        <el-button type="primary" @click="createFn">
            新建广告主
          </el-button>
      </div>
      <el-form
        v-model="data.searchForm"
        :inline="true"
        class="flex jc-between w100 ai-end"
      >
        <div class="flex jc-start flex-wrap w100">
          <el-form-item label="">
            <el-input
              v-model="data.searchForm.name"
              placeholder="请输入广告主名称"
              class="search-con"
              style="min-width: 120px"
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
      <!-- <el-input placeholder="请输入内容" v-model="data.searchForm.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> -->
    </div>
    <!-- table -->
    <el-table
      v-loading="data.loading"
      center
      :data="data.list"
      class="w100"
      min-height="70vh"
      border
    >
      <el-table-column
        fixed
        prop="id"
        label="广告主ID"
        align="center"
      ></el-table-column>
      <el-table-column
        fixed
        prop="name"
        label="广告主名称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="描述"
        label="desc"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="rate"
        label="强制流量占比%"
        width="120"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="create_user"
        label="创建人"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="update_user"
        label="更新人"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="create_date"
        label="创建时间"
        sortable
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="create_date"
        label="更新时间"
        sortable
        align="center"
      >
      </el-table-column>
      <el-table-column
        width="100"
        label="操作"
        align="center"
      >
        <template #default="scope">
          <div class="flex jc-around">
            <el-button
              class="cp mr-10"
              type="primary"
              icon="Edit"
              circle
              @click="editFn(scope.row)"
            ></el-button>
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
        v-model:page="data.pagination.listQuery.page"
        v-model:limit="data.pagination.listQuery.limit"
        :total="data.pagination.total"
        :page-sizes="data.pagination.pageSizes"
        @pagination="init"
      />
    </div>
  </div>
</template>
<script lang="ts" setup name="dsp-advsetting-list">
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { ApiGetBuzzList,  ApiChangeBuzzStatus } from '@/api/tool'
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn } from '@/utils/new-format'
import useUtils from '@/hooks/self/useUtils'
const { goNewUrl, openAlert } = useUtils()
let { proxy }: any = getCurrentInstance()
const searchData = shallowRef({
  name: ''
})

let data = reactive({
  dialogVisible: false,
  cache: {
    item: {},
    device: {}
  },
  searchForm: searchData.value,
  useData: searchData.value,
  loading: true,
  options: {},
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
    path: `/tool/advsetting/edit/${id}`,
    query: {
      type: 'edit'
    }
  })
}
const getEditUrl = (row: any) => {
  const id = row.id
  return `/tool/advsetting/edit/${id}`
}

const createFn = () => {
  // detailsType.value = 'create'
  // dialogVisibleEdit.value = true
  goNewUrl({
    url: '/tool/advsetting/create',
    query: {
      type: 'create'
    }
  })
}

const editFn = ({row}: any) => {
  // detailsType.value = 'edit'
  // dialogVisibleEdit.value = true
  // state.cache = row
  const { id } = row
  goNewUrl({
    url: `/tool/advsetting/edit/${id}`,
    query: {
      type: 'edit'
    }
  })
}
const init = async () => {
  data.loading = true
  let ajaxData: any = {
    page: data.pagination.listQuery.page,
    limit: data.pagination.listQuery.limit
  }
  if (data.useData.name) {
    ajaxData.name = data.useData.name
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

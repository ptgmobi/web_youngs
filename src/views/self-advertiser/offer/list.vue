<template>
  <div>
    <div class="controlBox w100 mb-10">
      <div class="mb-10">
        <!-- <router-link to="/buzz/buzz-async-create">
          <el-button type="primary">
            Offer Create
          </el-button>
        </router-link> -->
        <el-button type="primary" @click='createFn'>Offer Create</el-button>
      </div>
      <el-form
        v-model="searchForm"
        :inline="true"
        class="flex jc-between w100 ai-end"
      >
        <div class="flex jc-start flex-wrap w100">
          <el-form-item label="">
            <el-select
              v-model="searchForm.attribute_provider"
              clearable
              class="search-con"
              placeholder="Attribute Provider"
              style="min-width: 140px"
            >
              <el-option
                v-for="item in options.attribute_provider"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select
              v-model="searchForm.platform"
              clearable
              class="search-con"
              placeholder="Platform"
              style="min-width: 95px"
            >
              <el-option
                v-for="item in options.platform"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="searchForm.package_name"
              placeholder="Package Name"
              class="search-con"
              style="min-width: 120px"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="searchForm.channel"
              placeholder="Channel"
              class="search-con"
              style="min-width: 80px"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="searchForm.id"
              placeholder="ID"
              class="search-con"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="searchForm.offer_title"
              placeholder="Offer Title"
              class="search-con"
              style="min-width: 90px"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="searchForm.country"
              placeholder="Country"
              class="search-con"
              style="min-width: 80px"
            />
          </el-form-item>
          <el-form-item label="">
            <el-input
              v-model="searchForm.pid"
              placeholder="Pid"
              class="search-con"
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
      <!-- <el-input placeholder="请输入内容" v-model="searchForm.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> -->
    </div>
    <!-- table -->
    <el-table
      v-loading="data.loading"
      center
      :data="tableData.list"
      class="w100"
      height="70vh"
      border
    >
      <el-table-column
        fixed
        prop="id"
        label="ID"
        align="center"
      ></el-table-column>
      <el-table-column
        fixed
        prop="logo"
        label="Logo"
        align="center"
      >
        <template #default="scope">
          <div class="flex jc-around">
            <a :href="scope.row.icon" class="offer-icon-box">
              <img :src="scope.row.icon" alt="" class="offer-icon">
            </a>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        fixed
        prop="title"
        label="Offer Title"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="platform"
        label="Platform"
        align="center"
      >
        <template #default="scope">
          {{ Number(scope.row.platform) === 1 ? 'Android' : 'iOS' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="country_data"
        label="Country"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="payout"
        label="Payout"
        align="center"
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
            <el-button class='cp mr-10' type="primary" icon="Edit" circle @click='editFn(scope.row)'></el-button>
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
        v-show="pagination.total"
        v-model:page="pagination.listQuery.page"
        v-model:limit="pagination.listQuery.limit"
        :total="pagination.total"
        :page-sizes="pagination.pageSizes"
        @pagination="init"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { ApiGetAdvertiserOfferList } from '@/api/advertiser'
import { ElMessage } from 'element-plus'
import { messageFun } from '@/utils/message'
import _ from 'lodash'
import { handleAjaxDataObjectFn, openNewUrl } from '@/utils/new-format'
import { thousandSeparator } from '@/utils/format'
let { proxy }: any = getCurrentInstance()
const data = reactive({
  loading: true
})
// search
const searchForm = reactive({
  attribute_provider: [],
  platform: [],
  package_name: '',
  channel: '',
  id: '',
  offer_title: '',
  country: '',
  pid: ''
})
// options
const options = reactive({

})
// useData
let useData = reactive({

})
// busData

// tableData
let tableData = reactive({
  list: []
})

// 分页
const pagination = reactive({
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
})

// methods
const searchFn = () => {
  useData = _.cloneDeep(searchForm)
  init()
}

const createFn = () => {
  let url = '/advertiser/offer/create'
  // openNewUrl(url)
  proxy.$router.push({
    path: url,
    query: {
      type: 'create'
    }
  })
}

const editFn = (row) => {
  let { id } = row
  let url = `/advertiser/offer/edit/${id}`
  proxy.$router.push({
    path: url,
    query: {
      type: 'edit'
    }
  })
}

const changeStatus = (row) => {

}

const getList = async () => {
  let ajaxData: any = {
    page: pagination.listQuery.page,
    page_size: pagination.listQuery.limit
  }
  const res = await ApiGetAdvertiserOfferList(ajaxData)
  tableData.list = res.info.data
  data.loading = false
  console.log(res)
}

const init = () => {
  getList()
}

onMounted(() => {
  init()
})

</script>
<style lang="scss" scoped>
.offer-icon-box{
  display: block;
  width: 50px;
  height: 50px;
  .offer-icon{
    width: 100%;
    height: 100%;
  }
}
</style>

<template>
  <div>
    <!-- table -->
    <el-table
      v-loading="data.loading"
      center
      :data="data.list"
      class="w100"
      border
    >
      <el-table-column sortable align="center" label="Offer ID" prop="offer_id" width="120">
          <template #default="scope">
            <span>{{ scope.row.offer_id }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="PKG" prop="pkg_name" min-width="150">
          <template #default="scope">
            <span>{{ scope.row.pkg_name }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="Platform" prop="platform" width="100">
          <template #default="scope">
            <span>{{ scope.row.targeting.os }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="Country" prop="targeting" width="100">
          <template #default="scope">
            <span>{{ scope.row.targeting.geo.join(',') }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="Payout" prop="payout" min-width="50">
          <template #default="scope">
            <span>{{ scope.row.payout }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="Daily Cap" prop="daily_cap" min-width="50">
          <template #default="scope">
            <span>{{ scope.row.daily_cap }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="Kpi" prop="kpi" min-width="100">
          <template #default="scope">
            <span>{{ scope.row.kpi }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="Last Modified" prop="last_time" min-width="95">
          <template #default="scope">
            <span>{{ scope.row.last_time }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable align="center" label="Details" min-width="140">
          <template #default="scope">
            <div class="flex jc-around">
              <div>
                <span>{{ scope.row.details }}</span>
              </div>
              <el-button
                class="cp ml-10 scale-button"
                type="primary"
                icon="View"
                circle
                @click="showLog(scope)"
              ></el-button>
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
    <!-- busData -->
    <el-dialog title="日志" v-model="dialogLog">
      <el-table
      :data="busData.data"
      style="width: 100%"
      border
      >
        <!-- <el-table-column
          align="center"
          prop="id"
          label="ID">
        </el-table-column> -->
        <el-table-column
          align="center"
          prop="offer_id"
          label="Offer ID">
        </el-table-column>
        <el-table-column
          align="center"
          prop="record"
          label="Record">
        </el-table-column>
        <el-table-column
          align="center"
          prop="create_time"
          label="Create Time">
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { ApiGetUpdateOfferList, ApiGetUpdateOffferLog } from '@/api/advertiser'

let data = reactive({
  loading: false,
  list: []
})

let dialogLog = ref(false)

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

let busData = reactive({
  data: []
})

const init = async () => {
  const ajaxData = {
    page: pagination.listQuery.page,
    limit: pagination.listQuery.limit
  }
  const res = await ApiGetUpdateOfferList(ajaxData)
  const result = res.data.data
  result.map(ele => {
    ele.targeting = JSON.parse(ele.targeting)
    return ele
  })
  data.list = result
  pagination.total = Number(res.data.paging.count)
}
const showLog = async (scope) => {
  const ajaxData = {
    offer_id: scope.row.offer_id
  }
  const res = await ApiGetUpdateOffferLog(ajaxData)
  const result = res.data.data
  busData.data = result
  dialogLog.value = true
}

onMounted(() => {
  init()
})
</script>

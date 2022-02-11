<template>
  <div>
    <div class="search-box">
      <div class="mb-10">
        <el-checkbox-group
          v-model="data.search.checkList"
          @change="changeCheckList"
        >
          <el-checkbox
            v-for="item in data.clumon.choice"
            :key="item.value"
            :label="item.value"
            :disabled="item.require"
          >
            {{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="flex jc-between ai-start">
        <div class="flex jc-start ai-start flex-wrap">
          <el-date-picker
            v-model="data.search.date"
            class="mr-10 mb-10"
            type="daterange"
            unlink-panels
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :shortcuts="data.shortcuts"
          ></el-date-picker>
          <el-input
            v-model="data.search.filter.country"
            placeholder="Country"
            class="mr-10 mb-10 search-con"
          />
          <el-select
            v-model="data.search.filter.platform"
            clearable
            filterable
            placeholder="Platform"
            class="mr-10 search-con"
          >
            <el-option
              v-for="item in data.options.platform"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input
            v-model="data.search.filter.pkg"
            placeholder="Pkg"
            class="mr-10 mb-10 search-con"
          />
          <el-input
            v-model="data.search.filter.offer"
            placeholder="Offer"
            class="mr-10 mb-10 search-con"
          />
        </div>
        <el-button
          type="primary"
          @click="searchFun"
        >
          Run
        </el-button>
      </div>
    </div>
    <!-- all -->
    <!-- <el-table :data="tableData.all" border style="width: 100%" class="mb-10">
      <el-table-column prop="impression" label="Impression" />
      <el-table-column prop="click" label="Click" />
      <el-table-column prop="revenue" label="Revenue($)" />
      <el-table-column prop="conversion" label="Conversion" />
    </el-table> -->
    <div class="mb-10">
      <WwExportExcel
        :button-name="data.exportExcel.buttonName"
        :list="data.tableData.arr"
        :t-header="exportTHeader"
        :filter-val="exportFilterVal"
        :filename="data.exportExcel.fileName"
      ></WwExportExcel>
    </div>
    <!-- arr -->
    <el-table
      :data="data.tableData.arr"
      :border="true"
      style="width: 100%"
    >
      <el-table-column
        v-for="item in data.handleClumon"
        :key="item.value"
        align="center"
        sortable
        :prop="item.value"
        :label="item.label"
        :width="item.width"
      >
        <template #default="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row[item.value] }}</span>
        </template>
      </el-table-column>
    </el-table>
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
<script setup lang="ts">
import { reactive, getCurrentInstance, computed, onMounted, watch, ref } from 'vue'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import WwExportExcel from '@/components/Self/Excel/Export/index.vue'
import { getOverviewList } from '@/api/overview'
import { getSectionTime, getSectionAnyTime, choiceDefaultProduct } from '@/utils/format'
let data: any = reactive({
  shortcuts: [
    {
      text: '今天',
      value: getSectionTime(0, 'day')
    },
    {
      text: '昨天',
      value: () => {
        return getSectionAnyTime(1, 1, 'day')
      }
    },
    {
      text: '最近7天',
      value: () => {
        return getSectionTime(6, 'day')
      }
    }
  ],
  clumon: {
    base: [
      {
        label: 'Impression',
        value: 'impression'
      },
      {
        label: 'Click',
        value: 'click'
      },
      {
        label: 'CVR',
        value: 'cvr'
      },
      {
        label: 'Conversion',
        value: 'conversion'
      },
      {
        label: 'Revenue($)',
        value: 'revenue'
      }
    ],
    choice: [
      {
        label: 'Date',
        value: 'date',
        require: true,
        width: '100'
      },
      {
        label: 'Hour',
        value: 'hour',
        require: false
      },
      {
        label: 'Country',
        value: 'country',
        require: false
      },
      {
        label: 'Platform',
        value: 'platform',
        require: false
      },
      {
        label: 'PKG',
        value: 'pkg',
        require: false
      },
      {
        label: 'Offer',
        value: 'offer',
        require: false
      }
    ]
  },
  search: {
    date: getSectionTime(6, 'day'),
    checkList: ['date'],
    filter: {
      country: '',
      platform: '',
      pkg: '',
      offer: ''
    }
  },
  options: {
    platform: [
      {
        value: 'Android',
        label: 'Android'
      },
      {
        value: 'iOS',
        label: 'iOS'
      }
    ]
  },
  tableData: {
    all: [],
    arr: []
  },
  exportExcel: {
    buttonName: '导出',
    tHeader: ['日期'],
    filterVal: ['date'],
    fileName: 'test'
  },
  pagination: {
    pageSizes: ['10', '20', '40', '100'],
    total: 1,
    listQuery: {
      page: 1,
      limit: 20,
      importance: undefined,
      title: undefined,
      type: undefined,
      sort: '+id'
    }
  },
  handleClumon: [],
  busHandleClumon: []
})
onMounted(() => {
  console.log('mounted')
})
const exportTHeader = computed(() => {
  return data.handleClumon.map((ele: { label: any }) => {
    return ele.label
  })
})
const exportFilterVal = computed(() => {
  return data.handleClumon.map((ele: { value: any }) => {
    return ele.value
  })
})
const init = async () => {
  const arr = data.search.checkList
  const sortArr = getSortCheckList(arr).map((ele: { value: any }) => {
    return ele.value
  })
  const dimension = sortArr.join(',')
  let ajaxData = {
    page: data.pagination.listQuery.page,
    page_size: data.pagination.listQuery.limit,
    st: data.search.date[0],
    et: data.search.date[1],
    ...data.search.filter
  }
  if (dimension) {
    ajaxData.dimension = dimension
  }
  const res = await getOverviewList(ajaxData)
  const { data: resultData } = res
  data.tableData.arr = resultData.data
  data.pagination.total = parseInt(resultData.count)
  // this.pagination.listQuery.page = parseInt(data.page)
  // this.pagination.listQuery.limit = parseInt(data.page_size)
}
const getSortCheckList = (arr: string | any[]) => {
  const chioceArr: { value: string }[] = []
  data.clumon.choice.map((ele: { value: string }) => {
    if (arr.includes(ele.value)) {
      chioceArr.push(ele)
    }
  })
  return chioceArr
}
const changeCheckList = (arr: any) => {
  const chioceArr = getSortCheckList(arr)
  data.busHandleClumon = [...chioceArr, ...data.clumon.base]
}
const searchFun = () => {
  data.handleClumon = data.busHandleClumon
  init()
}
changeCheckList(data.search.checkList)
searchFun()
</script>
<style lang="scss" scoped>
.dashboard {
  &-container {
    //margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

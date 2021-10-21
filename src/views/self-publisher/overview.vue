<template>
  <div>
    <div class="search-box">
      <div class="mb-10">
        <el-checkbox-group v-model="search.checkList" @change="changeCheckList">
          <el-checkbox
            v-for="item in clumon.choice"
            :key="item.value"
            :label="item.value"
            :disabled="item.require"
          >{{item.label}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="flex jc-between ai-start">
        <div class="flex jc-start ai-start flex-wrap">
          <el-date-picker
            class="mr-10 mb-10"
            v-model="search.date"
            type="daterange"
            unlink-panels
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :shortcuts="shortcuts"
          ></el-date-picker>
          <el-input v-model="search.filter.country" placeholder="Country" class="mr-10 mb-10 search-con" />
          <el-select v-model="search.filter.platform" filterable placeholder="Platform" class="mr-10 search-con">
            <el-option
              v-for="item in options.platform"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input v-model="search.filter.pkg" placeholder="Pkg" class="mr-10 mb-10 search-con" />
          <el-input v-model="search.filter.offer" placeholder="Offer" class="mr-10 mb-10 search-con" />
        </div>
        <el-button type="primary" @click="searchFun">Run</el-button>
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
      <ww-export-excel
        :button-name="exportExcel.buttonName"
        :list="tableData.arr"
        :t-header="exportExcel.tHeader"
        :filter-val="exportExcel.filterVal"
        :filename="exportExcel.fileName"
      ></ww-export-excel>
    </div>
    <!-- arr -->
    <el-table :data="tableData.arr" border style="width: 100%">
      <el-table-column sortable v-for="item in handleClumon" :key="item.value" :prop="item.value" :label="item.label" >
        <template #default="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row[item.value] }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="w100 flex">
        <pagination
          v-show="pagination.total"
          :total="pagination.total"
          :page-sizes="pagination.pageSizes"
          v-model:page="pagination.listQuery.page"
          v-model:limit="pagination.listQuery.limit"
          @pagination="init"
        />
      </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import WwExportExcel from '@/components/Self/Excel/Export/index.vue'
import { getOverviewList } from '@/api/overview'
import {
  getSectionTime,
  getSectionAnyTime,
  choiceDefaultProduct
} from '@/utils/format'
export default {
  components: {
    Pagination,
    WwExportExcel
  },
  data() {
    return {
      shortcuts: [
        {
          text: '今天',
          value: getSectionTime(0, 'day'),
        },
        {
          text: '昨天',
          value: () => {
            return getSectionAnyTime(1, 1, 'day')
          },
        },
        {
          text: '最近7天',
          value: () => {
            return getSectionTime(6, 'day')
          },
        }
      ],
      clumon: {
        base:[
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
            require: true
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
        date: getSectionTime(0, 'day'),
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
            value: '1',
            label: 'Android'
          },
          {
            value: '2',
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
    }
  },
  created() {
    this.init()
    this.changeCheckList(this.search.checkList)
    this.handleClumon = this.busHandleClumon
  },
  computed: {
    // handleClumon() {
    //   const arr = this.search.checkList
    //   const chioceArr = ['date']
    //   this.clumon.choice.map(ele => {
    //     if (arr.includes(ele.value)) {
    //       chioceArr.push(ele)
    //     }
    //   })
    //   return [...chioceArr, ...this.clumon.base]
    // },
    exportTHeader() {
      return this.handleClumon.map(ele => {
        return ele.label
      })
    },
    exportFilterVal() {
      return this.handleClumon.map(ele => {
        return ele.value
      })
    }
  },
  methods: {
    async init() {
      const checkList = this.search.checkList
      const dimension = checkList.join(',')
      let ajaxData = {
        page: this.pagination.listQuery.page,
        page_size: this.pagination.listQuery.limit,
        st: this.search.date[0],
        et: this.search.date[1],
        ...this.search.filter
      }
      if (dimension) {
        ajaxData.dimension = dimension
      }
      const res = await getOverviewList(ajaxData)
      const { data } = res
      this.tableData.arr = data.data
      this.pagination.total = parseInt(data.count)
      // this.pagination.listQuery.page = parseInt(data.page)
      // this.pagination.listQuery.limit = parseInt(data.page_size)
    },
    changeCheckList(arr) {
      const chioceArr = []
      this.clumon.choice.map(ele => {
        if (arr.includes(ele.value)) {
          chioceArr.push(ele)
        }
      })
      this.busHandleClumon = [...chioceArr, ...this.clumon.base]
    },
    searchFun() {
      this.handleClumon = this.busHandleClumon
      this.init()
    }
  }
}
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
